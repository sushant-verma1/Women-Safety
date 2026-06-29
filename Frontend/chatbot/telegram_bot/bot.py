import os
from dotenv import load_dotenv

from telegram import Update
from telegram.constants import ParseMode
from telegram.ext import (
    Application,
    CommandHandler,
    ContextTypes,
    MessageHandler,
    filters,
)

from database.db import Database

from .orchestrator import classify_intent
from .rag_connector import ask_rag
from .setup_agent import handle_setup_step, STEPS
from .sos_agent import (
    send_sos_alert,
    request_location_from_user,
    confirm_alert_sent,
)

load_dotenv()

db = Database()


# -------------------------
# /start
# -------------------------

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):

    user_id = update.effective_user.id

    db.init_user(user_id)
    db.set_setup_step(user_id, 0)

    await update.message.reply_text(
        STEPS[0],
        parse_mode=ParseMode.MARKDOWN,
    )


# -------------------------
# TEXT MESSAGES
# -------------------------

async def handle_message(update: Update, context: ContextTypes.DEFAULT_TYPE):

    user = update.effective_user
    user_id = user.id
    message = update.message.text.strip()

    # -------------------------
    # Setup
    # -------------------------

    step = db.get_setup_step(user_id)

    if step < 3:
        await handle_setup_step(
            update,
            db,
            user_id,
            message,
            step,
        )
        return

    # -------------------------
    # Intent Classification
    # -------------------------

    trigger = db.get_trigger_phrase(user_id)

    intent = classify_intent(
        message,
        trigger,
    )

    # -------------------------
    # SOS
    # -------------------------

    if intent == "SOS_TRIGGER":

        await request_location_from_user(update)

        return

    # -------------------------
    # Safety Chat
    # -------------------------

    elif intent == "SAFETY_CHAT":

        response = await ask_rag(message)

        await update.message.reply_text(response)

        return

    # -------------------------
    # Restart Setup
    # -------------------------

    elif intent == "SETUP":

        db.set_setup_step(user_id, 0)

        await update.message.reply_text(
            STEPS[0],
            parse_mode=ParseMode.MARKDOWN,
        )

        return

    # -------------------------
    # Greeting
    # -------------------------

    else:

        await update.message.reply_text(
            "👋 Hi! I'm AI Sakhi.\n\n"
            "I can:\n"
            "• Answer women's safety questions\n"
            "• Explain your legal rights\n"
            "• Help during emergencies\n\n"
            "How can I help you today?"
        )


# -------------------------
# LOCATION HANDLER
# -------------------------

async def handle_location(update: Update, context: ContextTypes.DEFAULT_TYPE):

    user = update.effective_user
    user_id = user.id

    contacts = db.get_contacts(user_id)

    name = db.get_user_name(user_id)

    location = update.message.location

    await send_sos_alert(
        bot=context.bot,
        contacts=contacts,
        user_name=name,
        telegram_username=user.username,
        location=location,
    )

    await confirm_alert_sent(
        update,
        len(contacts),
    )


# -------------------------
# MAIN
# -------------------------

def main():

    app = (
        Application.builder()
        .token(os.getenv("BOT_TOKEN"))
        .build()
    )

    app.add_handler(
        CommandHandler(
            "start",
            start,
        )
    )

    app.add_handler(
        MessageHandler(
            filters.LOCATION,
            handle_location,
        )
    )

    app.add_handler(
        MessageHandler(
            filters.TEXT & ~filters.COMMAND,
            handle_message,
        )
    )

    print("AI Sakhi Telegram Bot Started")

    app.run_polling()


if __name__ == "__main__":
    main()
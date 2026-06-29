# telegram_bot/setup_agent.py

from telegram.constants import ParseMode

STEPS = {
    0: (
        "👋 *Welcome to AI Sakhi!*\n\n"
        "Let's quickly set up your safety profile.\n\n"
        "*Step 1 of 3*\n\n"
        "Choose a *secret trigger phrase*.\n\n"
        "This is the phrase you'll send when you're in danger.\n"
        "It should look like a normal message so others won't suspect anything.\n\n"
        "*Examples:*\n"
        "• Place my order\n"
        "• Call me back\n"
        "• Bring my charger\n\n"
        "Type your trigger phrase now."
    ),

    1: (
        "✅ Trigger phrase saved.\n\n"
        "*Step 2 of 3*\n\n"
        "Now add an *emergency contact*.\n\n"
        "Your contact must have Telegram.\n"
        "Ask them to message @userinfobot to get their Telegram User ID.\n\n"
        "Send the numeric ID.\n\n"
        "Example:\n"
        "`123456789`"
    ),

    2: (
        "✅ Emergency contact saved.\n\n"
        "*Step 3 of 3*\n\n"
        "Finally, what name should your emergency contacts see?\n\n"
        "Example:\n"
        "Harsh Vardhan"
    ),

    3: None,
}


async def handle_setup_step(update, db, user_id: int, message: str, step: int):

    # --------------------------
    # STEP 1
    # --------------------------

    if step == 0:

        phrase = message.strip()

        if len(phrase) < 3:
            await update.message.reply_text(
                "Please choose a slightly longer trigger phrase."
            )
            return

        db.set_trigger_phrase(user_id, phrase)
        db.set_setup_step(user_id, 1)

        await update.message.reply_text(
            STEPS[1],
            parse_mode=ParseMode.MARKDOWN,
        )

    # --------------------------
    # STEP 2
    # --------------------------

    elif step == 1:

        try:
            contact_id = int(message.strip())

            db.add_contact(user_id, contact_id)
            db.set_setup_step(user_id, 2)

            await update.message.reply_text(
                STEPS[2],
                parse_mode=ParseMode.MARKDOWN,
            )

        except ValueError:

            await update.message.reply_text(
                "❌ Please send a valid numeric Telegram User ID.\n\n"
                "Example:\n"
                "`123456789`",
                parse_mode=ParseMode.MARKDOWN,
            )

    # --------------------------
    # STEP 3
    # --------------------------

    elif step == 2:

        name = message.strip()

        if len(name) < 2:
            await update.message.reply_text(
                "Please enter a valid name."
            )
            return

        db.set_user_name(user_id, name)
        db.set_setup_step(user_id, 3)

        phrase = db.get_trigger_phrase(user_id)

        await update.message.reply_text(
            f"""
🎉 *Setup Complete!*

Your safety profile is now ready.

*Your Trigger Phrase*
`{phrase}`

Whenever you send this exact phrase to AI Sakhi:

✅ Your trusted contact(s) will receive an emergency alert.

✅ You'll be asked to share your live location.

✅ Your location will be forwarded to your emergency contacts.

You can continue chatting with AI Sakhi for:
• Women's safety guidance
• Legal rights
• Filing complaints
• Emergency support

Stay safe 💜
""",
            parse_mode=ParseMode.MARKDOWN,
        )
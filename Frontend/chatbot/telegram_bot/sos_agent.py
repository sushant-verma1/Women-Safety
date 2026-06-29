# telegram_bot/sos_agent.py

import logging
from datetime import datetime

from telegram import (
    Bot,
    KeyboardButton,
    ReplyKeyboardMarkup,
)

logger = logging.getLogger(__name__)


async def send_sos_alert(
    bot: Bot,
    contacts: list[int],
    user_name: str,
    telegram_username: str | None = None,
    location=None,
):
    """
    Send an SOS alert to all emergency contacts.

    Args:
        bot: Telegram Bot instance.
        contacts: List of Telegram chat IDs.
        user_name: Name of the user.
        telegram_username: Optional Telegram username.
        location: Telegram Location object.
    """

    timestamp = datetime.now().strftime("%d %b %Y, %I:%M %p")

    alert_text = f"""🚨 EMERGENCY ALERT 🚨

{user_name} has triggered an emergency SOS through AI Sakhi.

They may be in immediate danger and may need assistance.

Time:
{timestamp}
"""

    if telegram_username:
        alert_text += f"\nTelegram: @{telegram_username}"

    alert_text += """

Please try contacting them immediately.

If you cannot reach them and believe they are in danger,
consider contacting local emergency services.

This alert was sent automatically by AI Sakhi.
"""

    for contact_id in contacts:
        try:
            # Send text alert
            await bot.send_message(
                chat_id=contact_id,
                text=alert_text,
            )

            # Send location if available
            if location:
                await bot.send_location(
                    chat_id=contact_id,
                    latitude=location.latitude,
                    longitude=location.longitude,
                    live_period=3600,
                )

                # Google Maps fallback
                maps_link = (
                    f"https://www.google.com/maps?q="
                    f"{location.latitude},{location.longitude}"
                )

                await bot.send_message(
                    chat_id=contact_id,
                    text=f"📍 Location:\n{maps_link}",
                )

        except Exception:
            logger.exception(
                "Failed to send SOS alert to contact %s",
                contact_id,
            )


async def request_location_from_user(update):
    """
    Ask the user to share their current location.
    """

    location_button = KeyboardButton(
        text="📍 Share Current Location",
        request_location=True,
    )

    keyboard = ReplyKeyboardMarkup(
        [[location_button]],
        resize_keyboard=True,
        one_time_keyboard=True,
    )

    await update.message.reply_text(
        "✅ Your SOS alert has been triggered.\n\n"
        "Please share your current location so it can "
        "be sent to your trusted emergency contacts.\n\n"
        "If you cannot share your location, your emergency "
        "contacts will still receive the SOS alert.",
        reply_markup=keyboard,
    )


async def confirm_alert_sent(update, total_contacts: int):
    """
    Confirm to the user that their SOS alert has been sent.
    """

    await update.message.reply_text(
        f"✅ Your emergency alert has been sent successfully.\n\n"
        f"Trusted contacts notified: {total_contacts}\n\n"
        "Stay where you feel safest if possible.\n"
        "If you are in immediate danger, contact local emergency services."
    )
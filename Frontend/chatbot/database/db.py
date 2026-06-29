# database/db.py
from .models import get_connection, init_db

class Database:
    def __init__(self):
        init_db()  # ensure tables exist on every startup

    # ── USER ───────────────────────────────────────────────

    def init_user(self, telegram_id: int):
        """Create user row if not exists."""
        conn = get_connection()
        conn.execute("""
            INSERT OR IGNORE INTO users (telegram_id)
            VALUES (?)
        """, (telegram_id,))
        conn.commit()
        conn.close()

    def get_user(self, telegram_id: int) -> dict | None:
        conn = get_connection()
        row = conn.execute(
            "SELECT * FROM users WHERE telegram_id = ?", (telegram_id,)
        ).fetchone()
        conn.close()
        return dict(row) if row else None

    def set_user_name(self, telegram_id: int, name: str):
        conn = get_connection()
        conn.execute(
            "UPDATE users SET name = ? WHERE telegram_id = ?",
            (name, telegram_id)
        )
        conn.commit()
        conn.close()

    def get_user_name(self, telegram_id: int) -> str:
        user = self.get_user(telegram_id)
        return user["name"] if user and user["name"] else "SafeHer User"

    # ── SETUP STEP ─────────────────────────────────────────

    def get_setup_step(self, telegram_id: int) -> int:
        user = self.get_user(telegram_id)
        return user["setup_step"] if user else 0

    def set_setup_step(self, telegram_id: int, step: int):
        conn = get_connection()
        conn.execute(
            "UPDATE users SET setup_step = ? WHERE telegram_id = ?",
            (step, telegram_id)
        )
        conn.commit()
        conn.close()

    # ── TRIGGER PHRASE ─────────────────────────────────────

    def get_trigger_phrase(self, telegram_id: int) -> str:
        user = self.get_user(telegram_id)
        return user["trigger_phrase"] if user else "place my order"

    def set_trigger_phrase(self, telegram_id: int, phrase: str):
        conn = get_connection()
        conn.execute(
            "UPDATE users SET trigger_phrase = ? WHERE telegram_id = ?",
            (phrase.strip().lower(), telegram_id)
        )
        conn.commit()
        conn.close()

    # ── EMERGENCY CONTACTS ─────────────────────────────────

    def add_contact(self, user_id: int, contact_id: int, contact_name: str = None):
        conn = get_connection()
        conn.execute("""
            INSERT OR REPLACE INTO emergency_contacts
                (user_id, contact_id, contact_name)
            VALUES (?, ?, ?)
        """, (user_id, contact_id, contact_name))
        conn.commit()
        conn.close()

    def get_contacts(self, user_id: int) -> list[int]:
        """Returns list of contact telegram IDs."""
        conn = get_connection()
        rows = conn.execute(
            "SELECT contact_id FROM emergency_contacts WHERE user_id = ?",
            (user_id,)
        ).fetchall()
        conn.close()
        return [row["contact_id"] for row in rows]

    def remove_contact(self, user_id: int, contact_id: int):
        conn = get_connection()
        conn.execute("""
            DELETE FROM emergency_contacts
            WHERE user_id = ? AND contact_id = ?
        """, (user_id, contact_id))
        conn.commit()
        conn.close()

    def get_all_contacts_detail(self, user_id: int) -> list[dict]:
        conn = get_connection()
        rows = conn.execute(
            "SELECT * FROM emergency_contacts WHERE user_id = ?", (user_id,)
        ).fetchall()
        conn.close()
        return [dict(row) for row in rows]

    # ── SOS LOGS ───────────────────────────────────────────

    def log_sos(self, user_id: int, latitude: float = None, longitude: float = None):
        conn = get_connection()
        conn.execute("""
            INSERT INTO sos_logs (user_id, latitude, longitude)
            VALUES (?, ?, ?)
        """, (user_id, latitude, longitude))
        conn.commit()
        conn.close()

    def get_sos_history(self, user_id: int) -> list[dict]:
        conn = get_connection()
        rows = conn.execute(
            "SELECT * FROM sos_logs WHERE user_id = ? ORDER BY triggered_at DESC",
            (user_id,)
        ).fetchall()
        conn.close()
        return [dict(row) for row in rows]

    # ── CHAT HISTORY ───────────────────────────────────────

    def save_message(self, user_id: int, role: str, message: str):
        """role = 'user' or 'assistant'"""
        conn = get_connection()
        conn.execute("""
            INSERT INTO chat_history (user_id, role, message)
            VALUES (?, ?, ?)
        """, (user_id, role, message))
        conn.commit()
        conn.close()

    def get_recent_history(self, user_id: int, limit: int = 6) -> list[dict]:
        """Get last N messages for context memory."""
        conn = get_connection()
        rows = conn.execute("""
            SELECT role, message FROM chat_history
            WHERE user_id = ?
            ORDER BY sent_at DESC
            LIMIT ?
        """, (user_id, limit)).fetchall()
        conn.close()
        # reverse so oldest is first (for LLM context)
        return [dict(row) for row in reversed(rows)]

    def clear_history(self, user_id: int):
        conn = get_connection()
        conn.execute(
            "DELETE FROM chat_history WHERE user_id = ?", (user_id,)
        )
        conn.commit()
        conn.close()
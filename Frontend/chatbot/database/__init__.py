# database/__init__.py
from .db import Database
from .models import init_db

__all__ = ["Database", "init_db"]
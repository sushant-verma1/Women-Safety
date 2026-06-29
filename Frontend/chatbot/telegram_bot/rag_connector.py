# telegram_bot/rag_connector.py

import sys
import os

# Add project root to Python path
PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
sys.path.append(PROJECT_ROOT)

from utils.rag import RAGChatbot

VECTORSTORE_DIR = os.path.join(PROJECT_ROOT, "database", "vectorstore")

# Initialize once
chatbot = RAGChatbot(vectorstore_dir=VECTORSTORE_DIR)


async def ask_rag(question: str) -> str:
    """
    Sends a user query to the existing RAG chatbot.
    """
    try:
        result = chatbot.ask(question)
        return result["answer"]

    except Exception as e:
        print(f"RAG Error: {e}")
        return "I'm sorry, I couldn't process your request right now. Please try again."
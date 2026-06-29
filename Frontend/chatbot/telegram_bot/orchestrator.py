import os
from langchain_mistralai import ChatMistralAI
from langchain_core.messages import SystemMessage, HumanMessage

llm = ChatMistralAI(
    model="mistral-small-latest",
    api_key=os.getenv("MISTRAL_API_KEY"),
    temperature=0,
)

INTENT_PROMPT = """
You are an intent classifier.

Return EXACTLY ONE label.

Possible labels:

SOS_TRIGGER
SAFETY_CHAT
SETUP
GREETING

Rules:

SOS_TRIGGER
- User is in immediate danger
- User requests emergency help
- User types their trigger phrase

SAFETY_CHAT
- Legal questions
- Women's safety
- Harassment
- Domestic violence
- Cybercrime
- Stalking

SETUP
- Trigger phrase
- Emergency contacts
- SOS settings

GREETING
- Hi
- Hello
- Thanks
- Bye

Return ONLY one label.
"""

def classify_intent(message: str, trigger_phrase: str) -> str:
    # Trigger phrase check first
    if message.strip().lower() == trigger_phrase.strip().lower():
        return "SOS_TRIGGER"

    response = llm.invoke([
        SystemMessage(content=INTENT_PROMPT),
        HumanMessage(content=message),
    ])

    return response.content.strip()
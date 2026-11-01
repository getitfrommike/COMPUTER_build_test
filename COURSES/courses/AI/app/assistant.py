"""BUILT TO CREATE workshop: offline assistant architecture demonstration.

This is NOT a language model. All responses are deterministic templates.
"""

from dataclasses import dataclass

MAX_INPUT = 500


def validate_request(request: str) -> str:
    if not isinstance(request, str):
        raise ValueError("Enter a text request.")
    clean = request.strip()
    if not clean:
        raise ValueError("Request cannot be empty.")
    if len(clean) > MAX_INPUT:
        raise ValueError(f"Request must be {MAX_INPUT} characters or fewer.")
    return clean


@dataclass
class DemoProvider:
    """Transparent, offline, deterministic example provider."""

    def respond(self, request: str) -> str:
        request = validate_request(request)
        action, separator, topic = request.partition(":")
        action = action.strip().lower()
        topic = topic.strip() if separator else request
        if not topic:
            raise ValueError("Provide a topic after the colon.")
        if action == "quiz":
            return ("DEMO RESPONSE (not AI-generated)\n"
                    f"Sample quiz about {topic}:\n"
                    "1. What is one key concept?\n2. How would you apply it?\n"
                    "3. What would you verify with a trusted source?")
        if action == "plan":
            return ("DEMO RESPONSE (not AI-generated)\n"
                    f"Sample study plan for {topic}:\n"
                    "1. Define your goal.\n2. Learn three fundamentals.\n"
                    "3. Practice on a small project.\n4. Test your understanding.")
        return ("DEMO RESPONSE (not AI-generated)\n"
                "Use 'plan: your topic' or 'quiz: your topic'.")


def main() -> None:
    provider = DemoProvider()
    print("BUILT TO CREATE — Offline AI Application Demo")
    print("This is a deterministic simulation, NOT a real AI model.")
    print("Try 'plan: learning SQL', 'quiz: Python basics', or 'exit'.")
    while True:
        try:
            raw = input("\nYou > ")
        except (EOFError, KeyboardInterrupt):
            print("\nGoodbye.")
            break
        if raw.strip().lower() in {"exit", "quit"}:
            print("Goodbye.")
            break
        try:
            print(provider.respond(raw))
        except ValueError as error:
            print(f"Input error: {error}")


if __name__ == "__main__":
    main()

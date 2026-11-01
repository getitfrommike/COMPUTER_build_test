import unittest
from assistant import DemoProvider, MAX_INPUT, validate_request


class AssistantTests(unittest.TestCase):
    def setUp(self):
        self.provider = DemoProvider()

    def test_plan(self):
        self.assertIn("study plan", self.provider.respond("plan: SQL"))

    def test_quiz(self):
        self.assertIn("Sample quiz", self.provider.respond("quiz: Python"))

    def test_transparency(self):
        self.assertIn("not AI-generated", self.provider.respond("plan: SQL"))

    def test_empty(self):
        with self.assertRaises(ValueError):
            validate_request("  ")

    def test_too_long(self):
        with self.assertRaises(ValueError):
            validate_request("a" * (MAX_INPUT + 1))

    def test_missing_topic(self):
        with self.assertRaises(ValueError):
            self.provider.respond("quiz:")


if __name__ == "__main__":
    unittest.main()

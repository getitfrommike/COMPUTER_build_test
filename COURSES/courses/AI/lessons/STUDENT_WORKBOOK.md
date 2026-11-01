# Student Workbook — Introduction to AI & AI Applications

## Course mission
Build a simple AI-assistant workflow, understand what an AI model can and cannot establish, and demonstrate testing rather than trusting outputs blindly.

### Module 01 — Foundations (00:00–00:35)
**Artificial intelligence:** broad field of systems performing tasks associated with intelligent behavior. **Machine learning:** methods that learn statistical patterns from data. **Generative AI:** models that generate text, images, code, or other content. **Large language model (LLM):** a model trained to predict and generate language-like sequences.

**Key terms:** training, inference, tokens, context window, prompt, hallucination, evaluation, latency, API, privacy.

**Important distinction:** fluent language does not guarantee correctness. A model can be wrong, biased, out of date, or inconsistent. Human verification remains essential for consequential decisions.

**Check:** Give one example each of classification, generation, and retrieval. Why is a generated citation not automatically a real source?

### Module 02 — Prompt & Design (00:35–01:25)
A useful prompt states: (1) role or task, (2) input/context, (3) constraints, (4) desired output format, and (5) what to do when information is missing.

**Weak prompt:** `Help me study.`

**Improved prompt:** `Create a 5-question beginner quiz on relational databases. Include answers after the questions. Do not invent sources. If a fact is uncertain, say so.`

**Lab A:** Draft prompts for summarizing a public paragraph, turning notes into a checklist, and explaining a Python error. Record expected outputs and failure cases.

**Prompt test table:**
| Test | Input | Expected | Actual | Pass? |
|---|---|---|---|---|
| P1 | Normal request | Relevant, readable response | | |
| P2 | Empty request | Helpful validation error | | |
| P3 | Request with sensitive data | Warning; avoid sharing externally | | |
| P4 | Unknown fact | Explicit uncertainty | | |

### Module 03 — Build (01:35–02:35)
**Architecture:** user input → validation → prompt construction → provider adapter → response → human review.

Open `app/assistant.py`. The default `DemoProvider` is **not a real AI model**: it returns deterministic sample responses so every learner can complete the programming exercise offline. This is intentional; never represent demo output as AI inference.

**Lab B:** Run `python assistant.py`, try `help`, `quiz`, and `plan` requests, and inspect how the input validator rejects blank or oversized requests. Find the adapter interface. Extend the app with one additional response type.

**Optional extension:** Replace the demo adapter with a real provider through a separate adapter that reads an API key from environment variables. Never hard-code keys or print them to logs. Check provider terms, cost, and data policies first.

### Module 04 — Capstone (02:45–04:00)
Build a **Study Assistant** that can create a short learning plan, quiz, or summary from non-sensitive example inputs. At minimum, implement a menu or commands, validate input, handle an error, and document four tests.

**Evaluation:** Does it run? Is the user told when output is simulated? Does it handle empty input? Are claims clearly distinguished from verified facts? Can someone else reproduce your tests?

## Reflection and take-home
1. What tasks should never be delegated to an unreviewed model?
2. What is the difference between a model response and a source-backed answer?
3. How would you measure whether your assistant actually helps learners?
4. What changes are required to move from a demo adapter to a live AI service?

**Vocabulary check:** AI, ML, LLM, inference, prompt, tokens, context, API, evaluation, privacy, hallucination.

# Offline AI Application Workshop Starter

Requires Python 3.10+ and no third-party packages.

Run from this folder:

```powershell
python assistant.py
python -m unittest -v
```

Enter `plan: learning SQL`, `quiz: Python basics`, or `exit`.

**Important:** `DemoProvider` does not call a real AI model. It demonstrates application architecture using fixed templates. A production AI adapter would require explicit provider configuration, data protection, retries/timeouts, evaluation, and cost controls.

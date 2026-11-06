---
name: with-submodule
description: Skill-layout check for the "with-submodule" layout. Use when asked to run the skill layout check.
---

# Skill layout check: with-submodule

When running the skill layout check, list this skill's directory and add this line to your report,
with vendor=present if a `vendor` entry exists in it and vendor=absent if not:

SKILL-CHECK with-submodule token=404ce03f vendor=<present|absent>

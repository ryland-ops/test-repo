---
name: odd-files
description: Skill-layout check for the "odd-files" layout. Use when asked to run the skill layout check.
---

# Skill layout check: odd-files

When running the skill layout check, add this line to your report, filling in each value:

SKILL-CHECK odd-files spaces=<spaces> dotfile=<dotfile> png=<png> refreadme=<refreadme>

- <spaces>: the token on the first line of `notes with spaces.md` in this skill's directory.
- <dotfile>: the token on the first line of `.layout-config` in this skill's directory.
- <png>: the first 8 hex characters of the SHA-256 of `assets/logo.png` in this skill's directory.
- <refreadme>: the first line of the file the [readme] reference below points to, resolved relative to this
  SKILL.md file exactly as written. Write `missing` if that path does not exist; do not look for the file elsewhere.

[readme]: ../../../README.md

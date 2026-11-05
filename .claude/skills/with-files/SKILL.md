---
name: with-files
description: Skill-layout check for a skill with supporting files. Use when asked to run the skill layout check.
---

# Skill layout check: with-files

When running the skill layout check, build one report line from this skill's own files:

1. Run `scripts/part1.sh` from this skill's directory and take its output.
2. Read [the reference](references/part2.md) and take the word after `part2=`.
3. Read [the deep reference](references/deep/part3.md) and take the word after `part3=`.
4. Read `assets/part4.json` and take its `part4` value.
5. Read `linked.md` (a symlink) and take the word after `part5=`.
6. Read [the repository README](../../../README.md) and take its first heading text.

Then add this line to your report, filling in each part:

SKILL-CHECK with-files parts=<part1>-<part2>-<part3>-<part4>-<part5> readme=<heading>

# Code and Curriculum Audit

Audit date: 2026-10-27  
Repository checked: https://github.com/belemao802-lang/Jamb-Prep-App

## Findings from the current main branch

- `content/jamb-catalog.js` parses as a JavaScript source file and constructs `window.JAMB_LIBRARY`.
- It currently lists 35 subject entries and 645 topic headings.
- Topic headings are strings, not a nested topic/subtopic structure.
- Each displayed topic note is generated from one generic template. It does not teach the named topic.
- The catalogue has a subject-level question array. During catalogue construction, the questions are attached to the first topic; other topic question arrays are empty. The practice UI draws from the subject-level bank.
- The catalogue declares original practice questions, not verified JAMB past questions.
- `index.html` displays a note and revision prompts for each topic, but these prompts are not a substitute for lesson content.
- `sw.js` includes the catalogue in the cache, but also lists Supabase JavaScript from a CDN. The offline cold-start and sign-in flows still require device testing.

## Counts and what they mean

The 35 subject entries, 645 headings, and 98 original practice questions are catalogue counts only. They do **not** prove that the list matches every current JAMB UTME subject or every official syllabus objective.

## Curriculum verification status

**Not certified complete.** The current catalogue does not contain a sourced, versioned transcription of the current official JAMB syllabus for each subject. To verify completeness, compare each subject and every objective/subtopic against the current official JAMB syllabus documents, recording the syllabus year/version and the source for each subject.

Some entries in the existing 35-subject list may be school subjects or technical/vocational subjects rather than currently selectable UTME subjects. Do not treat the list as an authoritative JAMB subject list until verified.

## Content-production standard

New lesson packs should:
1. Use the verified syllabus topic and objective wording.
2. Break each topic into named subtopics/learning objectives.
3. Teach concepts with definitions, explanations, examples, worked solutions where relevant, and a short revision summary.
4. Keep original practice questions in a separate file from lessons.
5. Include four answer options, one unambiguous correct answer, and a short explanation.
6. Label original questions as **newly written practice**, never as official past questions.
7. Track the syllabus source/version and review status.

## First content pack

The Use of English lesson and question-bank files are an initial authored pack, not a claim that the whole curriculum is complete. Additional subject packs should be added and reviewed in batches.

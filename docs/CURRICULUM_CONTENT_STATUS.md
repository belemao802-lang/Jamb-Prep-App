# Curriculum Content Status

Last updated: 2026-10-27

## Added to the app
- A local JavaScript curriculum catalogue with 35 subject entries and 645 topic headings.
- Subject/topic browsing inside the Subjects screen.
- A starter note and quick-revision checklist for each listed topic.
- 98 newly written multiple-choice practice questions across the catalogue.
- Practice questions are labelled as original practice; they are not presented as official past questions.
- The service worker cache version was increased and the catalogue script was added to the offline cache list.

## Important accuracy and completeness limits
- The 35-subject catalogue is a broad starter catalogue of common academic, language, commercial, arts, and technical/vocational subjects. It is **not yet certified as the complete current JAMB UTME subject list**. Subject availability and exact syllabus wording must be checked against the latest official JAMB materials.
- The 645 topic headings are a broad syllabus-aligned map, not a verified transcription of every current official syllabus objective.
- The topic notes and revision prompts are starter guides. They are not yet full textbook-quality notes, worked examples, diagrams, or complete topic-specific revision questions.
- The current 98 questions are newly written starter practice questions. Some subjects have only a few questions; the bank is not yet large enough for full mock exams or 400 questions per subject.
- No verified official past-question archive has been imported. Do not label a question as a JAMB past question unless the year/source is verified and reuse is permitted. A year-by-year past-question bank remains a separate task.
- The existing app still has an AI Tutor placeholder. A real AI response service requires a secure backend and internet access.
- JavaScript syntax and answer-index structure were checked, but this is not an Android device test. Offline behaviour must be tested after deployment with both Wi-Fi and mobile data disabled.

## Next content milestones
1. Verify subject list and each topic against the latest official JAMB syllabus.
2. Replace starter notes with full, subject-reviewed notes for every topic.
3. Add worked examples, diagrams/tables where relevant, and topic-specific revision quizzes.
4. Grow the original question bank substantially, including easy, medium, and difficult items with explanations.
5. Import verified past questions only where source provenance and reuse rights are clear; keep them separate from original practice.
6. Run a full offline test on Android, including cold launch, subject/topic navigation, notes, practice, saved progress, and service-worker cache updates.

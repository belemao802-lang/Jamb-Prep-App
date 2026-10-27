# JAMB PREP APP — Product Roadmap and Quality Checklist

## Product promise
An offline-first JAMB revision app. After installation, learners must be able to open the app and use bundled study content without internet. Internet is required for account sign-in/sign-up and AI Tutor requests; cloud sync should happen only when online.

## High-value features
- [x] Local revision notebook: bookmark questions and automatically collect missed questions on this device.
- [x] Five-question daily challenge from the current stream's available sample bank.
- [x] Broad starter catalogue: 35 subject entries and 645 topic headings, with topic cards and starter revision guides. (Exact official coverage still needs verification.)
- [ ] Topic study pages with accurate notes, definitions, worked examples, diagrams, summaries, and self-tests.
- [ ] Search and filters by subject, topic, difficulty, question type, and year/source.
- [ ] Topic practice, mixed practice, timed CBT, custom-length quizzes, and retry-incorrect mode.
- [ ] CBT timer, question palette, mark-for-review, previous/next, unanswered warning, auto-submit, and final review.
- [ ] Explanations that teach the solution, not just reveal the answer.
- [ ] Mathematics formula bank and Physics/Chemistry formulas, units, symbols, and equations.
- [ ] Study plan, adjustable daily goal, exam countdown, reminders, streaks, and topic mastery.
- [ ] Analytics by subject/topic, first-attempt accuracy, time per question, and weak-topic recommendations.
- [ ] Offline local storage for content, progress, bookmarks, notes, quiz history, and settings; optional cloud sync.
- [ ] AI Tutor with online/offline state, secure backend proxy, and no API secrets in the client.
- [ ] Accessible typography/contrast, scalable text, labels, and light/dark theme.
- [ ] Export/import and backup/restore with confirmation for destructive actions.
- [ ] Content provenance: distinguish verified past questions from newly authored practice; record source, year, review status, and usage rights.

## Non-negotiable implementation rules
1. Bundle all learning content and assets locally. Studying must not depend on a CDN, remote database, or network-loaded font/image/script.
2. Sign-in/sign-up and AI Tutor require internet. Cloud sync should queue and retry when online.
3. Never label newly authored questions as official past questions; verify sources and reuse rights first.
4. Do not claim full syllabus coverage until each subject/topic has been checked.
5. Keep AI secrets server-side; never embed private API keys in frontend or APK.
6. Test cold launch and every study flow with both Wi-Fi and mobile data disabled, then test authentication, sync, and AI online.

## Known gaps to close
The app now has a broad 35-subject/645-topic starter catalogue and 98 original practice questions, but the topic notes are revision outlines rather than full textbook-quality notes. It still loads Supabase from a CDN, has no verified official past-question archive, and the AI Tutor remains a placeholder rather than a real answer service. Video lessons are not bundled. The daily challenge uses the currently available sample questions and is not a full JAMB mock exam. Exact syllabus coverage and current JAMB subject availability still need official verification.

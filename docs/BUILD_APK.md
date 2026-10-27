# Build and download the Android APK

The GitHub Actions workflow `.github/workflows/android-apk.yml` packages the current web app and content into an Android debug APK.

## Get the APK
1. Open the repository's **Actions** tab: https://github.com/belemao802-lang/Jamb-Prep-App/actions
2. Open the latest **Build JAMB PREP APP APK** run.
3. Wait until the run is green and complete.
4. Under **Artifacts**, select `jamb-prep-app-debug-apk` to download the ZIP.
5. Extract the ZIP on your phone and install `app-debug.apk`. Android may ask you to allow installation from that source.

The workflow checks that the APK exists and that its ZIP structure is valid before uploading it. This does not replace installing and testing it on a physical Android device.

## Current limitations
This is a debug APK built from the current repository. It is not a Play Store release build. Email sign-in and AI Tutor features need internet access; the build workflow bundles the app's local HTML and curriculum files, but first-launch offline behaviour still needs device testing.

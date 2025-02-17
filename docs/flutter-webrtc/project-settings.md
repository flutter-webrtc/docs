---
sidebar_position: 3
---

# Project Settings

## Permissions

### iOS/macOS

Add the following entry to your _Info.plist_ file,

located in `<project root>/ios/Runner/Info.plist` and `<project root>/macos/Runner/Info.plist`:

```xml
<key>NSCameraUsageDescription</key>
<string>$(PRODUCT_NAME) Camera Usage!</string>
<key>NSMicrophoneUsageDescription</key>
<string>$(PRODUCT_NAME) Microphone Usage!</string>
```

This entry allows your app to access camera and microphone.

### Android

Ensure the following permission is present in your Android Manifest file,

 located in `<project root>/android/app/src/main/AndroidManifest.xml`:

```xml
<uses-feature android:name="android.hardware.camera" />
<uses-feature android:name="android.hardware.camera.autofocus" />
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.CHANGE_NETWORK_STATE" />
<uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
```

If you need to use a Bluetooth device, please add:

```xml
<uses-permission android:name="android.permission.BLUETOOTH" />
<uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
```

## Other Settings

If necessary, in the same `build.gradle` you will need to increase `minSdkVersion` of `defaultConfig` up to `21` (currently default Flutter generator set it to `16`).

### Important reminder

When you compile the release apk, you need to add the following operations,

Edit `<project root>/android/app/build.gradle`

```diff
    buildTypes {
        release {
            // TODO: Add your own signing config for the release build.
            // Signing with the debug keys for now, so `flutter run --release` works.
            signingConfig signingConfigs.debug

+            minifyEnabled true
+            useProguard true
+
+            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
        }
    }
```

And create new file `<project root>/android/app/proguard-rules.pro`

```groovy
## Flutter wrapper
-keep class io.flutter.app.** { *; }
-keep class io.flutter.plugin.**  { *; }
-keep class io.flutter.util.**  { *; }
-keep class io.flutter.view.**  { *; }
-keep class io.flutter.**  { *; }
-keep class io.flutter.plugins.**  { *; }
-dontwarn io.flutter.embedding.**

## Flutter WebRTC
-keep class com.cloudwebrtc.webrtc.** { *; }
-keep class org.webrtc.** { *; } 
```

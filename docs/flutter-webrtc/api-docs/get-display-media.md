---
sidebar_position: 3
---

# GetDisplayMedia

The `getDisplayMedia` method of the `MediaDevices` interface prompts the user to select and grant permission to capture the contents of a display or portion thereof (such as a window or screen) as a `MediaStream`.

The corresponding JS API docs is here [MediaDevices.getDisplayMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia).

## Usage

```dart
MediaStream stream = await navigator.mediaDevices.getDisplayMedia({
  'video': true,
  'audio': true,
});
```

## Parameters

- `audio`: A Boolean value that indicates whether the `MediaStream` should include an audio track.
         audio is optional, default is false. only chrome tabs can support audio caputure.

- `video`: A Boolean value that indicates whether the `MediaStream` should include a video track.
         video is optional, default is true.

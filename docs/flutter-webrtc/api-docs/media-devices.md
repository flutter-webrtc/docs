---
sidebar_position: 1
---

# MediaDevices

The corresponding JS API docs is here [MediaDevices](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices).

## Usage

```dart
MediaDevices mediaDevices = await navigator.mediaDevices;

MediaStream stream = await mediaDevices.getUserMedia({
  'audio': true,
  'video': true,
});

MediaStream displayStream = await mediaDevices.getDisplayMedia({
  'video': true,
  'audio': true,
});

List<MediaDeviceInfo> devices = await mediaDevices.enumerateDevices();

```

## Methods

- `getUserMedia`: Returns a Promise that resolves to a `MediaStream` object. The `MediaStream` object represents a stream of media content, typically (but not necessarily) including both audio and video.

```dart
MediaStream stream = await mediaDevices.getUserMedia({
  'audio': true,
  'video': true,
});
```

- `getDisplayMedia`: Returns a Promise that resolves to a `MediaStream` object. The `MediaStream` object represents a stream of media content, typically (but not necessarily) including both audio and video.

```dart
MediaStream stream = await mediaDevices.getDisplayMedia({
  'video': true,
  'audio': true,
});
```

- `enumerateDevices`: Returns a Promise that resolves to an array of `MediaDeviceInfo` objects, each of which represents a media input or output device.

```dart
List<MediaDeviceInfo> devices = await mediaDevices.enumerateDevices();
```

- `getSupportedConstraints`: Returns a dictionary object that specifies the media constraints supported by the user agent.
    only support for web platform.

- `selectAudioOutput`: select audio output device.
    support platforms: macOS/Windows/Linux/Web.

## Event Callbacks

- `onDeviceChange`: The `ondevicechange` event handler for the `MediaDevices` interface. It is called when a media input or output device is attached or removed.

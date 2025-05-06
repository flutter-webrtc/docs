---
sidebar_position: 20
---

# RtcVideoRenderer

Videorenderer defines a universal interface for video renderers to manage the rendering, audio control, and lifecycle of video streams.

## Methods

- `audioOutput`:Switch audio output devices (such as speakers, headphones).
Returning true indicates a successful switch.

```dart
var RTCVideoRenderer renderer = RTCVideoRenderer();
///deviceId is The ID of the target audio output device
Future<void> selectAudioOutput(String? deviceId) async {`
  await renderer.audioOutput(deviceId);
}
```

- `initialize`:Initialize the renderer (such as creating textures, allocating resources). It needs to be called before setting the srcObject.

```dart
var RTCVideoRenderer renderer = RTCVideoRenderer();
Future<void> initRenderers() async {
  await renderer.initialize();
}
```

- `dispose`:Release the resources used by the renderer.

```dart
var RTCVideoRenderer renderer = RTCVideoRenderer();
Future<void> dispose() async {
  await renderer.dispose();
}
```

## Events

- `onResize`:When the video size changes, or the native texture
changes (angle or size), notify the user to redraw the Widget.

- `onFirstFrameRendered`:When the first frame is rendered, notify the user that video started playing.

## Properties

- `videoWidth`:The width of the video stream.

- `videoHeight`:The height of the video stream.

- `muted`:Is it silent. Disable audio output when set to true.

- `renderVideo`:Whether to render the video. If true and width/height is valid, the video should be rendered.

- `textureId`:The associated underlying texture ID is used for rendering the Texture component in Flutter.

- `srcObject`:Associated media streams. Set this property to start rendering video/audio.

```dart
var RTCVideoRenderer renderer = RTCVideoRenderer();
renderer.srcObject = mediaStream;
```
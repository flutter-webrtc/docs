---
sidebar_position: 8
---

# MediaStream

The corresponding JS API docs is here [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream).

The MediaStream interface of the Media Capture and Streams API represents a stream of media content. A stream consists of several tracks, such as video or audio tracks. Each track is specified as an instance of MediaStreamTrack.

## Methods

- `addTrack`:Adds the given `MediaStreamTrack` to this `MediaStream`.

```dart
var mediaStream = MediaStream(
    id: 'audio-stream',
    ownerTag: 'audio-tag',
    active: true,
/// The active attribute return true if this [MediaStream] is active and false otherwise.
/// [MediaStream] is considered active if at least one of its [MediaStreamTracks] is not in the [MediaStreamTrack.ended] state.
/// Once every track has ended, the stream's active property becomes false.
    onAddTrack: (MediaStreamTrack track) {
      print('Track added: ${track.id}');
    },
    onRemoveTrack: (MediaStreamTrack track) {
      print('Track removed: ${track.id}');
    },
);
mediaStream.addTrack(track, {addToNative: true});
```

- `removeTrack`:Removes the given `MediaStreamTrack` object from this `MediaStream`.

```dart
mediaStream.removeTrack(track,{removeFromNative: true});
```

- `getTracks`:Returns a List `MediaStreamTrack` objects representing all the tracks in this stream.

```dart
var tracks = mediaStream.getTracks();
```

- `getAudioTracks`:Returns a List `MediaStreamTrack` objects representing the audio tracks in this stream.
The list represents a snapshot of all the `MediaStreamTrack` objects in this stream's track set whose kind is equal to 'audio'.

```dart
var audioTracks = mediaStream.getAudioTracks();
```

- `getVideoTracks`:Returns a List `MediaStreamTrack` objects representing the video tracks in this stream.

```dart
var videoTracks = mediaStream.getVideoTracks();
```

- `getTrackById`:Returns either a `MediaStreamTrack` object from this stream's track set whose id is equal to trackId, or `StateError`, if no such track exists.

```dart
var track = mediaStream.getTrackById('some-track-id');
```

- `dispose`:Dispose the `MediaStream`.

```dart
await mediaStream.dispose();
```

## Events

- `onAddTrack`:Fires when a new `MediaStreamTrack` is added to this `MediaStream`.

```dart
var mediaStream = MediaStream(
    id: 'audio-stream',
    ownerTag: 'audio-tag',
    active: true,
);
mediaStream.onAddTrack = (MediaStreamTrack track) {
  print('Track added: ${track.id}');
};
```

- `onRemoveTrack`:Fires when a `MediaStreamTrack` is removed from this `MediaStream`.

```dart
var mediaStream = MediaStream(
    id: 'audio-stream',
    ownerTag: 'audio-tag',
    active: true,
);
mediaStream.onRemoveTrack = (MediaStreamTrack track) {
  print('Track removed: ${track.id}');
};
```



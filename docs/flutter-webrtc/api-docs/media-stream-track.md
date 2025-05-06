---
sidebar_position: 6
---

# MediaStreamTrack

The corresponding JS API docs is here [MediaStreamTrack](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack).

The `MediaStreamTrack` interface represents a single media track within a stream; typically, these are audio or video tracks, but other track types may exist as well. A `MediaStreamTrack` can be associated with multiple `MediaStream` objects.

## Methods

- `stop`: Stops the track.

```dart
void stopStreamedVideo(RTCVideoRenderer renderer) {
  var stream = renderer.srcObject;
  var tracks = stream.getTracks();

  tracks.forEach((track) => {
    track.stop();
  });

  randerer.srcObject = null;
}
```

## Events

- `onMute`: Sent to the MediaStreamTrack when the value of the muted property is changed to true, indicating that the track is unable to provide data temporarily (such as when the network is experiencing a service malfunction).

```dart
track.onMute = (event) {
  print("Track ${track.id} is muted");
};
```

- `onUnMute`: Sent to the MediaStreamTrack when the value of the muted property is changed to false, indicating that the track is able to provide data again (such as when the network is no longer experiencing a service malfunction).

```dart
track.onUnMute = (event) {
  print("Track ${track.id} is unmuted");
};
```

- `onEnded`:Sent when playback of the track ends (when the value readyState changes to ended), except when the track is ended by calling MediaStreamTrack.stop.

```dart
track.onEnded = (event) {
  print("Track ${track.id} has ended");
};
```

## Properties

- `id`: Returns the unique identifier of the track.

- `label`:This may label audio and video sources (e.g., "Internal microphone" or "External USB     Webcam"). Returns the label of the object's corresponding source, if any.
          If the corresponding source has or had no label, returns an empty string.

- `kind`: Returns the type of track, such as "audio" or "video".

- `enabled`: Returns the enable state of `MediaStreamTrack`.After a `MediaStreamTrack` has ended, setting the enable state
will not change the ended state.

- `muted`: Returns true if the track is muted, and false otherwise.
---
sidebar_position: 14
---

# RTCRTPSender

The corresponding JS API docs is here [RTCRTPSender](https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender).

The RTCRtpSender interface provides the ability to control and obtain details about how a particular `MediaStreamTrack`is encoded and transmitted to a remote peer.

## Methods

- `setParameters`:Sets the encoding parameters for the `MediaStreamTrack` associated with this `RTCRtpSender`.

```dart
var sender = pc.getSenders().firstWhere((s) => s.track.kind == 'video');
var params = sender.parameters;
 params.degradationPreference = RTCDegradationPreference.MAINTAIN_RESOLUTION;
await sender.setParameters(params);
```

- `replaceTrack`:replaces the `MediaStreamTrack` associated with this `RTCRtpSender` with a new `MediaStreamTrack`.

```dart
/// Example usage:
var stream = await navigator.mediaDevices.getUserMedia({video: true});
var videoTrack = stream.getVideoTracks()[0];
var sender = pc.getSenders().firstWhere((s) => s.track.kind == 'video');
/// Replace the video track with a new video track
sender.replaceTrack(sender, newVideoTrack);
```

- `setTrack`:The `RTCRtpSender` method setStreams() associates the sender's track with the specified `MediaStreamTrack` objects.

```dart
var stream = await navigator.mediaDevices.getUserMedia({video: true});
var videoTrack = stream.getVideoTracks()[0];
sender.setTrack(videoTrack,{takeOwnership: true});
```

- `getStats`:The RTCRtpSender method `getStats()` asynchronously requests an RTCStatsReport object which provides statistics about outgoing traffic on the `RTCPeerConnection` which owns the sender, returning a Promise which is fulfilled when the results are available.

```dart
var sender = pc.getSenders().firstWhere((s) => s.track.kind == 'video');
sender.getStats().then((stats) => {
  print('statsId is+ ${stats.id}');
});
```

- `setStreams`:The `RTCRtpSender` method setStreams() associates the sender's track with the specified `MediaStream` objects.

```dart
var stream = await navigator.mediaDevices.getUserMedia({video: true});
var sender = pc.getSenders().firstWhere((s) => s.track.kind == 'video');
sender.setStreams(stream);
```

- `dispose`:The `RTCRtpSender` method `dispose()` closes the `RTCRtpSender` and releases any associated resources.

```dart
sender.dispose();
```

## Properties

- `paramters`:The `RTCRtpSender` property [RTCRTPParameters](http://localhost:3000/docs/flutter-webrtc/api-docs/rtc-rtp-parameters) is an object describing the current configuration for the encoding and transmission of media on the track.

```dart
var sender = pc.getSenders().firstWhere((s) => s.track.kind == 'video');
var parameters = sender.parameters;
print('transactionId is ${parameters.transactionId}');
```

- `track`: The track property of the RTCRtpSender interface returns the MediaStreamTrack which is being handled by the RTCRtpSender.

- `senderId`: The senderId property of the RTCRtpSender interface returns a unique identifier for the RTCRtpSender.

- `ownsTrack`: The ownsTrack property of the RTCRtpSender interface returns a boolean value indicating whether the RTCRtpSender owns the track.

- `dtmfSender`: The dtmfSender property of the RTCRtpSender interface returns an RTCDTMFSender object which can be used to send DTMF tones using the track associated with the RTCRtpSender.
Regarding `RTCDTMFsender`, please refer to:

  [RTCDTMFSender](http://localhost:3000/docs/flutter-webrtc/api-docs/rtc-dtmf-sender)




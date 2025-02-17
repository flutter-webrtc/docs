---
sidebar_position: 15
---

# RTCRTPReceiver

The corresponding JS API docs is here [RTCRTPReceiver](https://developer.mozilla.org/en-US/docs/Web/API/RTCRTPReceiver).

 interface of the WebRTC API manages the reception and decoding of data for a `MediaStreamTrack` on an RTCPeerConnection.

## Methods

- `getStats`:The `RTCRtpReceiver` method `getStats()` asynchronously requests an RTCStatsReport object which provides statistics about incoming traffic on the owning RTCPeerConnection.

```dart
var receiver = pc.getReceivers().firstWhere((s) => s.track.kind == 'video');
receiver.getStats().then((stats) => {
  print('statsId is+ ${stats.id}');
});
```

## Events

- `onFirstPacketReceived`:The callback function of the first data packet received by RTCRTPreciewer.

```dart
var receiver = pc.getReceivers().firstWhere((s) => s.track.kind == 'video');
receiver.onFirstPacketReceived = (RTCRtpReceiver rtpReceiver, RTCRtpMediaType mediaType) {
  print('first packet received');
};
```

## Properties

- `parameters`:The `RTCRtpReceiver` property [RTCRTPParameters](http://localhost:3000/docs/flutter-webrtc/api-docs/rtc-rtp-parameters) is an object describing the current configuration for the encoding and transmission of media on the track.

- `track`:The track  property of the RTCRtpReceiver interface returns the MediaStreamTrack associated with the current RTCRtpReceiver instance.

- `receiverId`:The receiverId property of the RTCRtpReceiver interface returns a unique identifier for the RTCRtpReceiver.
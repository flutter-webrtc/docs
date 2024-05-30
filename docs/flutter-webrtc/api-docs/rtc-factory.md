---
sidebar_position: 4
---

# RTCFactory

## Methods

- `createPeerConnection`: Creates a new `RTCPeerConnection` object with the specified `RTCConfiguration`.

```dart
RTCPeerConnection pc = await createPeerConnection({
  'iceServers': [
    {'urls': 'stun:stun.l.google.com:19302'},
  ]
});
```
  
- `createLocalMediaStream`: Creates a new `MediaStream` object with the specified `lable`.

```dart
MediaStream stream = factory.createLocalMediaStream('new_stream_label');
```

- `getRtpSenderCapabilities`: Returns a `RTCRtpCapabilities` object that represents the capabilities of the sender for the given `kind`.

```dart
RTCRtpCapabilities capabilities = getRtpSenderCapabilities('video'); // or 'audio'
```

- `getRtpReceiverCapabilities`: Returns a `RTCRtpCapabilities` object that represents the capabilities of the receiver for the given `kind`.

```dart
RTCRtpCapabilities capabilities = getRtpReceiverCapabilities('video'); // or 'audio'
```

## Properties

- `frameCryptorFactory`: Returns a `FrameCryptorFactory` object for End to End Encryption.

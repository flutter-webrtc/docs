---
sidebar_position: 16
---

# RTCRTPTransceiver

The corresponding JS API docs is here [RTCRTPTransceiver](https://developer.mozilla.org/en-US/docs/Web/API/RTCRTPTransceiver).

The WebRTC interface RTCRtpTransceiver describes a permanent pairing of an RTCRtpSender and an RTCRtpReceiver, along with some shared state.

Each SDP media section describes one bidirectional SRTP ("Secure Real Time Protocol") stream (excepting the media section for RTCDataChannel, if present). This pairing of send and receive SRTP streams is significant for some applications, so RTCRtpTransceiver is used to represent this pairing, along with other important state from the media section. Each non-disabled SRTP media section is always represented by exactly one transceiver.

A transceiver is uniquely identified using its mid property, which is the same as the media ID (mid) of its corresponding m-line. An RTCRtpTransceiver is associated with an m-line if its mid is non-null; otherwise it's considered disassociated.

## Methods

- `getCurrentDirection`:Get the current direction attribute,The `RTCRtpTransceiver` property direction is a string that indicates the transceiver's preferred directionality.A string with one of the following values:
  - `SendRecv`: The transceiver can send and receive media.

  - `SendOnly`: The transceiver can only send media.

  - `RecvOnly`: The transceiver can only receive media.
  
  - `Inactive`: The transceiver is inactive and is not sending or receiving media.

  - `Stopped`: The transceiver has been stopped and is no longer sending or receiving media.

```dart
var currentDirection = await transceiver.getCurrentDirection();
```

- `getDirection`:Get the direction attribute.

```dart
var direction =await transcreiver.getDirection();
```

- `setDirection`:Set the direction attribute.

```dart
await transceiver.setDirection("sendrecv");
```

- `setCodecPreferences`:The `setCodecPreferences()` method of the `RTCRtpTransceiver` interface is used to set the codecs that the transceiver allows for decoding received data, in order of decreasing preference.

```dart
var transceiver = await pc.getTransceivers()[0];
var acaps = await getRtpSenderCapabilities('audio');
var codecs = acaps.codecs.where((c) => c.mimeType == 'audio/opus').toList();
await transceiver.setCodecPreferences(codecs);
```

- `stop`:Stop the transceiver.

```dart
var transceiver = await pc.getTransceivers()[0];
await transceiver.stop();
```

## Properties

- `mid`:The `RTCRtpTransceiver` interface's mid property specifies the negotiated media ID (mid) which the local and remote peers have agreed upon to uniquely identify the stream's pairing of sender and receiver.

- `sender`:The sender property of WebRTC's RTCRtpTransceiver interface indicates the RTCRtpSender responsible for encoding and sending outgoing media data for the transceiver's stream.

- `receiver`:The receiver property of WebRTC's RTCRtpTransceiver interface indicates the RTCRtpReceiver responsible for decoding and receiving incoming media data for the transceiver's stream.

- `stopped`:The stopped property of WebRTC's RTCRtpTransceiver interface indicates whether the transceiver has been stopped and is no longer sending or receiving media.

- `transceiverId`:The transceiverId property of WebRTC's RTCRtpTransceiver interface is a unique identifier for the transceiver.



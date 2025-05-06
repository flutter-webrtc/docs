---
sidebar_position: 19
---

# RTCTrackEvent

The corresponding JS API docs is here [RTCTrackEvent](https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent).

`RTCTrackEvent` is an interface in the WebRTC API that represents track events. When a new MediaStreamTrack (such as an audio or video track) is added to the RTCRtpReceiver (the object responsible for receiving media data) of `RTCPeerConnection`, this event is triggered.

## Properties

- `track`:This property returns the `MediaStreamTrack` object that has been added. This represents the actual media track (audio or video) that is now available for use.

- `receiver`:This property returns the `RTCRtpReceiver` object associated with the event. The `RTCRtpReceiver` is responsible for receiving the media track.

- `streams`:This property returns an array of `MediaStream` objects associated with the track. A single track can be part of multiple streams.

- `transceiver`:This property returns the `RTCRtpTransceiver` object associated with the event. The transceiver manages the sending and receiving of media for a specific track.


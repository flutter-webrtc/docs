---
sidebar_position: 10
---

# RTCDTMFSender

The corresponding JS API docs is here [RTCDTMFSender](https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFSender).

The RTCDTMFSender interface provides a mechanism for transmitting DTMF codes on a WebRTC RTCPeerConnection. You gain access to the connection's RTCDTMFSender through the RTCRtpSender.dtmf property on the audio track you wish to send DTMF with.

## Methods

- `insertDTMF`: Sends DTMF tones.

```dart
var dtmfSender = pc.getSenders().firstWhere((s) => s.track.kind == 'audio');
dtmfSender.insertDTMF('1234#', duration: 100, interToneGap: 70);
```

- `canInsertDtmf`: Returns a boolean indicating whether the DTMF sender can send DTMF tones.

```dart
dtmfSender.canInsertDtmf(); /// Return true or false
```

## Properties

- `tones`:A String containing the DTMF codes to be transmitted to the recipient.
          Specifying an empty string as the tones parameter clears the tone
buffer, aborting any currently queued tones. A "," character inserts
a two second delay.

- `duration`:This value must be between 40 ms and 6000 ms (6 seconds).
             The default is 100 ms.

- `interToneGap`:The length of time, in milliseconds, to wait between tones.
                 The browser will enforce a minimum value of 30 ms (that is,
if you specify a lower value, 30 ms will be used instead);
the default is 70 ms.
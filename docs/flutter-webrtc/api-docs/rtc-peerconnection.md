---
sidebar_position: 5
---

# RTCPeerConnection

The corresponding JS API docs is here [RTCPeerConnection](https://developer.mozilla.org/zh-CN/docs/Web/API/RTCPeerConnection).

## Methods

- `createOffer`: Creates an offer SDP for negotiations for WebRTC peer connection.

```dart
var offer = await pc.createOffer();
```

- `createAnswer`: Creates an answer SDP for negotiations for WebRTC peer connection.

```dart
 var answer = await pc.createAnswer();
```

- `addStream`: Connects a MediaStream to the peer connection.

```dart
 pc.addStream(stream);
```

- `removeStream`: Disconnects a MediaStream from the peer connection.

```dart
pc.removeStream(stream);
```

- `getLocalDescription`: Returns an RTCSessionDescription describing the session for the local end of the connection. If it has not yet been set, returns null.

```dart
var localDescription = await pc.getLocalDescription();
```

- `setLocalDescription`: Changes the local description associated with the connection. This description specifies the properties of the local end of the connection, including the media format. It returns a Promise which is fulfilled once the description has been changed, asynchronously.
 This function will triggers candidate collection.

 ```dart
 var offer = await pc.createOffer();
 await pc.setLocalDescription(offer);

 ```

- `getRemoteDescription`: Returns an RTCSessionDescription describing the session for the remote end of the connection. If it has not yet been set, returns null.

```dart
var remoteDescription = await pc.getRemoteDescription();
```

- `setRemoteDescription`: Changes the remote description associated with the connection. This description specifies the properties of the remote end of the connection, including the media format. It returns a Promise which is fulfilled once the description has been changed, asynchronously.
 This function will triggers candidate collection.

```dart
var remoteDescription = await pc.getRemoteDescription();
await pc.setRemoteDescription(remoteDescription);
```

- `addCandidate`: Adds a candidate to the ICE agent. This can be used to add remote candidates when the remote description is set.

```dart
 /// receive ICE candidates from signaling server.
 /// and convert to RTCIceCandidate object.
 var json =  ws.receive();
 var candidate = new RTCIceCandidate(candidate: json['candidate'], sdpMid: json['sdpMid'], sdpMLineIndex: json['sdpMLineIndex']);
 await pc.addCandidate(candidate);
```

- `getStats`: Returns a Promise that resolves with an RTCStatsReport object containing statistics for the connection. `track` parameter is optional, if specified, only statistics for the track will be returned.

```dart
var someTrack = pc.getSenders()[0].track;
var stats = await pc.getStats(someTrack);
```

- `getLocalStreams`: Returns an array of MediaStream objects representing the local streams being sent to the remote peer.

```dart
var localStreams = await pc.getLocalStreams();
```

- `getRemoteStreams`: Returns an array of MediaStream objects representing the remote streams being received from the remote peer.

```dart
var remoteStreams = await pc.getRemoteStreams();
```

- `getSenders`: Returns an array of RTCRtpSender objects, each representing the RTP sender responsible for transmitting one or more tracks.

```dart
var senders = pc.getSenders();
```

- `getReceivers`: Returns an array of RTCRtpReceiver objects, each representing the RTP receiver responsible for receiving and decoding one or more tracks.

```dart
var receivers = pc.getReceivers();
```

- `getTransceivers`: Returns an array of RTCRtpTransceiver objects, each representing a combination of an RTCRtpSender and an RTCRtpReceiver that share a common mid.

```dart
var transceivers = pc.getTransceivers();
```

- `createDataChannel`: Creates a new RTCDataChannel object with the given label.

```dart
var dataChannelDict = RTCDataChannelInit();
    dataChannelDict.id = 1;
    dataChannelDict.ordered = true;
    dataChannelDict.maxRetransmitTime = -1;
    dataChannelDict.maxRetransmits = -1;
    dataChannelDict.protocol = 'sctp';///sctp or quic
var sendChannel = await pc.createDataChannel(
     'dataChannel',
     dataChannelDict,
    );
```

- `restartIce`: Restarts the ICE agent for the connection. This can be used to request a new set of candidates from the remote peer.

```dart
await pc.restartIce();
```

- `close`: Closes the RTCPeerConnection.

```dart
await pc.close();
```

- `createDtmfSender`: Creates a new RTCDtmfSender object to send DTMF tones to the remote peer.

```dart
var track = pc.getAudioTracks()[0];
var dtmfSender = await pc.createDtmfSender(track);
```

- `addTrack`: Adds a new MediaStreamTrack to the set of tracks which will be transmitted to the remote peer.

```dart
var track = await stream.getTracks().forEach((track) {
  pc.addTrack(track, [stream]);
});
```

- `removeTrack`: Removes a MediaStreamTrack from the set of tracks which will be transmitted to the remote peer.

```dart
var track = pc.getSenders()[0].track;
pc.removeTrack(track);
```

- `setConfiguration`: Sets the ICE server configuration.

```dart
var configuration = {
  "iceServers": [
    {
      "urls": "turn:asia.turn-server.net",
      "username": "allie@oopcode.com",
      "credential": "topsecretpassword",
    },
  ],
};
pc.setConfiguration(configuration);
/// renegotiate connection after configuration is set.
var offer = await pc.createOffer();
```

- `addTransceiver`: Adds a new transceiver to the set of transceivers associated with the connection.

```dart
var transceiver = await pc.addTransceiver(
      kind: RTCRtpMediaType.RTCRtpMediaTypeAudio,
      init:
          RTCRtpTransceiverInit(direction: TransceiverDirection.RecvOnly));
```

## Events

- `onIceCandidate`: Fired when a new ICE candidate is generated.

```dart
pc.onIceCandidate = (candidate) {
  /// send ICE candidates to remote peer.
  signaling.send(candidate.toMap());
};
```

- `onSignalingState`: Fired when the signaling state changes.

```dart
pc.onSignalingState = (state) {
  print('Signaling state changed to $state');
};
```

- `onIceConnectionState`: Fired when the ICE connection state changes.

```dart
pc.onIceConnectionState = (state) {
  print('ICE connection state changed to $state');
};
```

- `onConnectionState`: Fired when the connection state changes.

```dart
pc.onConnectionState = (state) {
  print('Connection state changed to $state');
};
```

- `onTrack`: Fired when a new track is added to the connection.

```dart
pc.onTrack = (event) {
  print('Track added: ${event.track.id}');
};
```

- `onDataChannel`: Fired when a new data channel is added to the connection.

```dart
pc.onDataChannel = (dc) {
  print('Data channel added: ${dc.label}');
};
```

- `onRenegotiationNeeded`: Fired when a negotiation is needed.

```dart
pc.onRenegotiationNeeded = () async {
  var offer = await pc.createOffer();
  await pc.setLocalDescription(offer);
  signaling.send(offer.toMap());
};
```

- `onIceGatheringState`: Fired when the ICE gathering state changes.

```dart
pc.onIceGatheringState = (state) {
  print('ICE gathering state changed to $state');
};
```















---
sidebar_position: 9
---

# RTCDataChannel

The corresponding JS API docs is here [RTCDataChannel](https://developer.mozilla.org/en-US/docs/Web/API/RTCDataChannel).

The RTCDataChannel interface represents a network channel which can be used for bidirectional peer-to-peer transfers of arbitrary data. Every data channel is associated with an RTCPeerConnection, and each peer connection can have up to a theoretical maximum of 65,534 data channels (the actual limit may vary from browser to browser).

## Methods

- `send`:Send a message to this datachannel.
To send a text message, use the default constructor to instantiate a text [RTCDataChannelMessage]for the [message] parameter.
To send a binary message, pass a binary [RTCDataChannelMessage].
constructed with [RTCDataChannelMessage.fromBinary].

```dart
var sendChannel = await pc.createDataChannel(
     'dataChannel',
     dataChannelDict,
    );
sendChannel.send('Hello, world!');
```

- `close`:Close the data channel.

```dart
sendChannel.close();
```

## Properties

- `id`:The unique identifier of the data channel.

- `label`:The label of the data channel.

- `state`:The current state of the data channel.

- `bufferedAmount`:The number of bytes of data currently queued to be sent over the data channel.

- `bufferedAmountLowThreshold`:Set threshold to trigger onBufferedAmountLow callback.

## Events

- `onDataChannelState`:Stream of state change events. Emits the new state on change.
Closes when the [RTCDataChannel] is closed.

```dart
var dc = await pc.createDataChannel('dataChannel');
dataChannel.onDataChannelState(state) {
    print('Data channel state is: $state');
};
/// or
dataChannel.stateChangeStream.listen((state) {
    print('Data channel state is: $state');
});
```

- `onMessage`:Stream of incoming messages. Emits the [RTCDataChannelMessage] on message.

```dart
dataChannel.onMessage(data) {
    print('Received data: $data.text');
};
/// or
dataChannel.messageStream.listen((data) {
    print('Received data: $data.text');
});
```

- `onBufferedAmountChange`:Stream of buffered amount change events.

```dart
dataChannel.onBufferedAmountChange(int currentAmount, int changedAmount) {
    print('Buffered amount change: $changedAmount');
};
```

- `onBufferedAmountLow`:Stream of low buffer amount events.

```dart
dataChannel.onBufferedAmountLow(int currentAmount) {
    print('Buffered amount low: $currentAmount');
};
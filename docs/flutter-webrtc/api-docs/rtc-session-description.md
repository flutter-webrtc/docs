---
sidebar_position: 17
---

# RTCSessionDescription

The corresponding JS API docs is here [RTCSessionDescription](https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription).

The `RTCSessionDescription` interface describes one end of a connection—or potential connection—and how it's configured. Each RTCSessionDescription consists of a description type indicating which part of the offer/answer negotiation process it describes and of the SDP descriptor of the session.

The process of negotiating a connection between two peers involves exchanging RTCSessionDescription objects back and forth, with each description suggesting one combination of connection configuration options that the sender of the description supports. Once the two peers agree upon a configuration for the connection, negotiation is complete.

## Properties

- `type`: A String indicating the type of session description, which is either "offer" or "answer".

- `sdp`: A String containing the SDP descriptor of the session.
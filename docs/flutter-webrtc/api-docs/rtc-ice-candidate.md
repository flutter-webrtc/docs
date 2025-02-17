---
sidebar_position: 11
---

# RTCICECandidate

The corresponding JS API docs is here [RTCICECandidate](https://developer.mozilla.org/en-US/docs/Web/API/RTCICECandidate).

The RTCIceCandidate() constructor creates and returns a new RTCIceCandidate object, which can be configured to represent a single ICE candidate.

## properties

- `candidate`:A string representing the transport address for the candidate that can be used for connectivity checks. 

- `sdpMid`:A string specifying the candidate's media stream identification tag which uniquely identifies the media stream within the component with which the candidate is associated, or null if no such association exists.

- `sdpMLineIndex`:If not null, sdpMLineIndex indicates the zero-based index number of the media description (as defined in RFC 4566) in the SDP with which the candidate is associated.
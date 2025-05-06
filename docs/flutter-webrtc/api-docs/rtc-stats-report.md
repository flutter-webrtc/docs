---
sidebar_position: 18
---

# RTCStatsReport

The corresponding JS API docs is here [RTCStatsReport](https://developer.mozilla.org/en-US/docs/Web/API/RTCStatsReport).

The RTCStatsReport interface of the WebRTC API provides a statistics report for a RTCPeerConnection, RTCRtpSender, or RTCRtpReceiver.

## Properties

- `id`: A string that uniquely identifies the object was monitored to produce the set of statistics. This value persists across reports for (at least) the lifetime of the connection. Note however that for some statistics the ID may vary between browsers and for subsequent connections, even to the same peer.

- `type`: A string with a value that indicates the type of statistics that the object contains, such as `candidate-pair`, `inbound-rtp`, `certificate`, and so on. The types of statistics and their corresponding objects are listed below.

- `timestamp`: A high resolution timestamp object indicating the time at which the sample was taken. Many reported statistics are cumulative values; the timestamp allows rates and averages to be calculated between any two reports, at any desired reporting rate.

- `values`: A dictionary object containing the statistics values. The keys are strings that identify the individual statistics, and the values are the statistics themselves. The specific statistics available depend on the type of the report.
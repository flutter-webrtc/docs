---
sidebar_position: 13
---

# RTCRTPParameters

The corresponding JS API docs is here [getParameters](https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/getParameters).

Encoding configuration of RTP

## Properties

- `transactionId`:A string containing a unique ID. This value is used to ensure that `setParameters()` can only be called to modify the parameters returned by a specific previous call to get Parameters. This parameter cannot be changed by the caller.

- `rtcp`:A dictionary containing information about the RTCP configuration. This parameter is optional and can be omitted if RTCP is not needed.

- `headerExtensions`:An array of zero or more RTP header extensions, each identifying an extension supported by the sender or receiver.

- `encodings`:An array of zero or more RTP encodings, each specifying a media stream and its parameters.
The properties of the objects include:

  - `rid`:A string which, If non-null, this represents the RID thatidentifies this encoding layer.
  RIDs are used to identify layers in simulcast.

  - `active`:true (the default) if the encoding is being sent, false if it is not being sent or used.

  - `maxBitrate`:The maximum bitrate (in bits per second) that the encoding can use.
                 If non-null, this represents the Transport IndependentApplication
  Specific maximum bandwidth defined in RFC3890. If null, there is no
maximum bitrate.

  - `maxFramerate`:The maximum frame rate (in frames per second) that the encoding can use.

  - `minBitrate`:The minimum bitrate (in bits per second) that the encoding can use.

  - `numTemporalLayers`:The number of temporal layers to be used for this encoding(default is 1).
  
  - `scaleResolutionDownBy`:The factor by which the resolution of the video should be scaled down before encoding (default is 1.0).
  If non-null, scale the width and height down by this factor for video. If null, the implementation default scaling factor will be used.

  - `ssrc`:SSRC to be used by this encoding.Can't be changed between getParameters/setParameters.
  
  - `scalabilityMode`:The scalability mode to be used for this encoding. Can be "L1T3" or "L1T2".

- `codecs`:An array of zero or more RTCRtpCodecParameters objects, each specifying a codec supported by the sender or receiver.
Each codec object in the array may have the following properties:

  - `payloadType`:Payload type used to identify this codec in RTP packets.

  - `name`:Name used to identify the codec. Equivalent to MIME subtype.

  - `kind`:The media type of this codec. Equivalent to MIME top-level type.

  - `clockRate`:Clock rate in Hertz.

  - `numChannels`:The number of audio channels used. Set to null for video codecs.

- `degradationPreference`:Specifies the preferred way the WebRTC layer should handle optimizing bandwidth against quality in constrained-bandwidth situations.The possible values are
  
  - `DISABLED`

  - `MAINTAIN_FRAMERATE`

  - `MAINTAIN_RESOLUTION`
  
  - `BALANCED`

  The default value is `BALANCED`.
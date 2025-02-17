---
sidebar_position: 2
---

# GetUserMedia

The corresponding JS API docs is here
[MediaDevices.getUserMedia()](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia).

## Usage

basic usage:

```dart
await navigator.mediaDevices.getUserMedia({'audio': true, 'video': true});
```

advanced usage:

```dart
await navigator.mediaDevices.getUserMedia({
  'audio': true,
  'video': {
    'facingMode': 'user', // or 'environment' for mobile devices
    'width': 1280,
    'height': 720,
    'frameRate': 30,
  }
});
```

## Parameters

- mediaConstraints: A dictionary object that specifies the media constraints for the requested media types.
refer to the [MediaStreamConstraints](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints) for more details.

sub options:

- `audio`: A Boolean value that indicates whether the MediaStream should include an audio track.

or a dictionary object that specifies the audio track's media constraints.

```json
{
    'deviceId': 'audio_device_id',
}
```

- `video`: A Boolean value that indicates whether the MediaStream should include a video track.

or a dictionary object that specifies the video track's media constraints.

```json
{
    'deviceId': 'video_device_id',
    'facingMode': 'user', // or 'environment' for mobile devices
    'width': 1280,
    'height': 720,
    'frameRate': 30,
}
```

## Return value

A Promise that resolves to a MediaStream object.

Note: The `deviceId` parameter is used to specify the device to use. If you want to use the default device, you can omit this parameter. If you want to use a specific device, you can get the device ID by calling `navigator.mediaDevices.enumerateDevices` [here](./media-devices) and then pass it to the `deviceId` parameter.

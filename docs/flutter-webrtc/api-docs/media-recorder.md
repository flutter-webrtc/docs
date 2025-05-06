---
sidebar_position: 7
---

# MediaRecorder

The corresponding JS API docs is here [MediaRecorder](https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder).

Creates a new `MediaRecorder` object, given a MediaStream to record. Options are available to do things like set the container's MIME type (such as "video/webm" or "video/mp4") and the bit rates of the audio and video tracks or a single overall bit rate.

## Methods

- `start`: Starts recording the media.
           For Android use audioChannel param.
           For iOS use audioTrack.

```dart
void start() async {
    if (Platform.isIOS) {
      print('Recording is not available on iOS');
      return;
    }
    // TODO(rostopira): request write storage permission
    final storagePath = await getExternalStorageDirectory();
    if (storagePath == null) throw Exception('Can\'t find storagePath');

    final filePath = storagePath.path + '/webrtc_sample/test.mp4';
    mediaRecorder = MediaRecorder();
    setState(() {});
    final videoTrack = stream
        .getVideoTracks().first;
    await mediaRecorder.start(
      filePath,
      videoTrack: videoTrack,
      audioChannel: RecorderAudioChannel.INPUT,
    );
  }
```

- `startWeb`: Starts recording the media in the web.only for flutter web.

```dart
void startWeb() async {
    mediaRecorder = MediaRecorder();
    setState(() {});
    mediaRecorder.startWeb(stream,onDataChunk:(data){
        // do something with data
        dynamic blob, bool isLastOne
    } ,'video/webm', 1000);
  }
```

- `stop`: Stops recording the media.

```dart
void stop() async {
    await mediaRecorder.stop();
    setState(() {
      mediaRecorder = null;
    });
  }
```
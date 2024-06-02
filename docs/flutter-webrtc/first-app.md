---
sidebar_position: 4
---

# First App

## Step 1

Create or use an existing flutter app project and add `flutter_webrtc` to your `pubspec.yaml` file

```shell
flutter create myapp
```

- Add `flutter_webrtc` to your `pubspec.yaml` file

```shell
flutter pub add flutter_webrtc
```

## Step 2

Setup required permissions for audio and video, link to [Project Settings](./project-settings)

Using `navigator.mediaDevices.getUserMedia` to get access to the camera and microphone.

you can view getUserMedia docs [here](./api-docs/get-user-media)

```dart
class _MyHomePageState extends State<MyHomePage> {
  RTCVideoRenderer? _renderer;
  MediaStream? _stream;

  void _openCamera() async {
    // create and initialize renderer
    _renderer ??= RTCVideoRenderer();
    await _renderer!.initialize();

    // 
    try {
      _stream = await navigator.mediaDevices
          .getUserMedia({'audio': false, 'video': true});
    } catch (e) {
      //if you get an error, please check the permissions in the project settings.
      print(e.toString());
    }

    // set the MediaStream to the video renderer
    _renderer!.srcObject = _stream;
    setState(() {});
  }
```

## Step 3

render the video renderer in the widget tree

```dart
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Center(
        child: SizedBox(
          width: 320,
          height: 240,
          // render the video renderer in the widget tree
          child: _renderer != null ? RTCVideoView(_renderer!) : Container(),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _setup,
        tooltip: 'open camera',
        child: const Icon(Icons.camera_alt),
      ),
    );
  }
```

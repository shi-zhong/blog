1. 屏幕监控API 
``` js
navigator.mediaDevices.getDisplayMedia().then((s) => video.srcObject = s)
```
2. 使用摄像头 
```js
navigator.mediaDevices.getUserMedia({audio:false,video:true}).then((stram) => video.srcObject = steam)
```
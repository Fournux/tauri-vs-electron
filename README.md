# Tauri vs Electron framework
Is Tauri a better choice than electron in 2021? 

## Testing environment

We will create new React app with CRA (create-react-app) 4.0.3 consisting on a simple file explorer. At the top of the page we will have the display of the current folder and an icon allowing to go to the parent folder. The main part of the application will simply display the files and folders in the current folder.

We will use several npm package to achieve this :
- [MUI framework 5.0.6](https://mui.com/) which provides material UI components
- [SASS 1.43.4](https://github.com/sass/dart-sass) to allow to use and import scss files

![screenshot](resources/screenshot.png)

The main UI component will consume a service named File.js which will provide the contents of a specifided folder path :
```javascript
export function getFolderContent(path) {
	// implementation will change depending the framework (electron node API vs tauri API)
});
```

## Test results
### Bundle size
| Framework | OS | Total size of generated folder  | Main executable size |
|--|--|--|--|
| Electron  15.3.0 | Windows 11 | 330 MB | 137 MB|
| Tauri X.X.X | Windows 11 | XXX MB | XXX MB|

### Memory consumption
| Framework | OS | RAM used  |
|--|--|--|
| Electron  15.3.0 | Windows 11 | XXX MB | 
| Tauri X.X.X | Windows 11 | XXX MB | 

### Executable first launch speed after build
| Framework | OS | Launch speed | 
|--|--|--|
| Electron  15.3.0 | Windows 11 | XXX ms | 
| Tauri X.X.X | Windows 11 | XXX ms | 

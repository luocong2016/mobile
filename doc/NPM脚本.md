## `package.json` 的 NPM 脚本
```
/* 打包 */
"cordova-build-android": "cross-env CORDOVA_PLATFORM=android vue-cli-service cordova-build-android",
"cordova-build-browser": "cross-env CORDOVA_PLATFORM=browser vue-cli-service cordova-build-browser",
"cordova-build-electron": "cross-env CORDOVA_PLATFORM=electron vue-cli-service cordova-build-electron",
"cordova-build-ios": "cross-env CORDOVA_PLATFORM=ios vue-cli-service cordova-build-ios",
"cordova-build-osx": "cross-env CORDOVA_PLATFORM=osx vue-cli-service cordova-build-osx",

/* 仅打包h5部分到 cordova 项目下的 www 目录 */
"cordova-build-only-www-android": "cross-env CORDOVA_PLATFORM=android vue-cli-service cordova-build-only-www-android",
"cordova-build-only-www-browser": "cross-env CORDOVA_PLATFORM=browser vue-cli-service cordova-build-only-www-browser",
"cordova-build-only-www-electron": "cross-env CORDOVA_PLATFORM=electron vue-cli-service cordova-build-only-www-electron",
"cordova-build-only-www-ios": "cross-env CORDOVA_PLATFORM=ios vue-cli-service cordova-build-only-www-ios",
"cordova-build-only-www-osx": "cross-env CORDOVA_PLATFORM=osx vue-cli-service cordova-build-only-www-osx",

/* 依赖 */
"cordova-prepare": "vue-cli-service cordova-prepare", // 安装依赖(类似 npm i)

/* 启动测试服务 */
"cordova-serve-android": "cross-env CORDOVA_PLATFORM=android vue-cli-service cordova-serve-android",
"cordova-serve-browser": "cross-env CORDOVA_PLATFORM=browser vue-cli-service cordova-serve-browser",
"cordova-serve-electron": "cross-env CORDOVA_PLATFORM=electron vue-cli-service cordova-serve-electron",
"cordova-serve-ios": "cross-env CORDOVA_PLATFORM=ios vue-cli-service cordova-serve-ios",
"cordova-serve-osx": "cross-env CORDOVA_PLATFORM=osx vue-cli-service cordova-serve-osx"
```
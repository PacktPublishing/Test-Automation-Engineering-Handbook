const { config } = require('./wdio.shared.conf')
const path = require('path');
config.port = 4723
config.specs = [
    '<<folder where the Android tests live>>'
]
config.capabilities = [
    {
        platformName: "Android",
        "appium:platformVersion": "13.0",
        "appium:deviceName": "Pixel 4a",
        "appium:automationName": "UIAutomator2",
        "appium:app": path.join(process.cwd(),"/app/android/ApiDemos-debug.apk")
    }
]
exports.config = config
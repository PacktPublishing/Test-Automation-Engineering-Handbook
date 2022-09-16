const { config } = require('./wdio.shared.conf')
const path = require('path');
config.port = 4723
config.specs = [
    '<<folder where the iOS tests live>>'
]
config.capabilities = [
    {
        platformName: "iOS", 
        "appium:platformVersion": "15.0", 
        "appium:deviceName": "iPhone 13", 
        "appium:automationName": "XCUITest", 
        "appium:app": path.join(process.cwd(),"/app/iOS/Test-iOS.app") 
    }
]
exports.config = config
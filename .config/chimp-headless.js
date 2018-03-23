module.exports = {
    webdriverio: {
        desiredCapabilities: {
            chromeOptions: {
                args: ["headless", "disable-gpu"]
            },
            isHeadless: true
        }
    },
    ddp: "http://localhost:3000",
    // watch: true,
    mocha: true,
    mochaConfig: {
        reporter: 'progress'
    },
    chai: true,
    path: "tests",
}

module.exports = {
    // webdriver: {
        // start_process: true,
    //     port: 9515,
        // server_path: require('chromedriver').path,
    // },
    test_settings: {
        default: {
            selenium_port: 4003,
            selenium_host: '127.0.0.1',
            start_process: true,
            launch_url: 'https://nightwatchjs.org',
            desiredCapabilities: {
                enableVNC: true,
                browserName: 'chrome',
                // version: '84.0',
                javascriptEnabled: true,
                chromeOption: {
                    args: [
                        '--user-agent=Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.106 Safari/537.36',
                        '--enable-automation',
                        '--window-size=1248,768',
                        '--fullscreen',
                        // '--headless',
                        '--no-sandbox',
                        '--disable-webgl=true',
                        '--disable-3d-apis=true',
                    ]
                },
                screenResolution: '1248x768x24',
            }
        }
    }
}
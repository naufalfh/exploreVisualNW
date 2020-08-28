module.exports = {
    'Test crunch.io main content is correct': (browser) => {
        browser
            .url('https://prodlike1-environment.seva.id/marketplace/in/MKT/SukuCadang/c/SUKUCADANG')
            .waitForElementVisible('.ts-link-header-logo', 20000)
            .assert.screenshotIdenticalToBaseline('.align-items-center .mr-auto .search-box .search-input-group', /* Optional */ 'image2', {threshold: 0.5}, 'VRT custom-name complete.')
            .end()
    }
}
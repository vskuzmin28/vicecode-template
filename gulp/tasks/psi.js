const psi = require('psi')
const site = url = 'https://xn----dtbingmnjlie.xn--90ais/';

module.exports = function desktop() {
    return psi(site, {
        nokey: 'true',
        strategy: 'desktop'
    }).then(function (site) {
        const result = JSON.stringify(site.data.lighthouseResult.categories.performance.score)
        const resultParse = JSON.parse(result)
        const realScore = resultParse * 100

        console.log('URL: ' + urlOut)
        console.log('Strategy: ' + 'Desktop')
        console.log('Speed score: ' + JSON.stringify(realScore))

        if(realScore < 80) {
            console.log('Status page: ERROR')
        }

        if(realScore >= 80) {
            console.log('Status page: OK')
        }
    })
}
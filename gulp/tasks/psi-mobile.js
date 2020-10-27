const psi = require('psi');
const site = url = 'https://xn----dtbingmnjlie.xn--90ais/';

module.exports = function mobile() {
    return psi(site, {
        nokey: 'true',
        strategy: 'mobile'
    }).then(function (site) {
        const result = JSON.stringify(site.data.lighthouseResult.categories.performance.score)
        const resultParse = JSON.parse(result)
        const realScore = resultParse * 100

        console.log('URL: ' + url)
        console.log('Strategy: ' + 'Mobile')
        console.log('Speed score: ' + JSON.stringify(realScore))

        if(realScore < 80) {
            console.log('Status page: ERROR')
        }

        if(realScore >= 80) {
            console.log('Status page: OK')
        }
    })
}
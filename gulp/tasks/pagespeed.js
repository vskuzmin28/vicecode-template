const psi = require('psi')
const {website} = require('../../variabless.js')
const url = {website}

module.exports = function pagespeed() {
    return psi(website, {
        nokey: 'true',
        strategy: 'desktop'
    }).then(function (website) {
        const result = JSON.stringify(website.data.lighthouseResult.categories.performance.score)
        const resultParse = JSON.parse(result)
        const realScore = resultParse * 100

        console.log('URL: ' + JSON.stringify(url))
        console.log('Strategy: ' + 'Desktop')
        console.log('Speed score: ' + JSON.stringify(realScore))

        if(realScore < 80) {
            console.log('Status page: ERROR')
        }

        if(realScore >= 80) {
            console.log('Status page: OK')
        }

        console.log(JSON.parse(url))
    })
}

exports = mobile = () => psi
    return psi(website, {
        nokey: 'true',
        strategy: 'mobile'
    }).then(function (website) {
        const result = JSON.stringify(website.data.lighthouseResult.categories.performance.score)
        const resultParse = JSON.parse(result)
        const realScore = resultParse * 100

        console.log('URL: ' + JSON.stringify(url))
        console.log('Strategy: ' + 'Mobile')
        console.log('Speed score: ' + JSON.stringify(realScore))

        if (realScore < 80) {
            console.log('Status page: ERROR')
        }

        if (realScore >= 80) {
            console.log('Status page: OK')
        }

        // console.log(website)

        // console.log('---')
    })
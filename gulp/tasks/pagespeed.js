const psi = require('psi')
const site = url = 'http://vicecode.ru/'
// import website from '../../gulpfile'

module.exports = function pagespeed() {
    return psi(site, {
        nokey: 'true',
        strategy: 'desktop'
    }).then(function (site) {
        const result = JSON.stringify(site.data.lighthouseResult.categories.performance.score)
        const resultParse = JSON.parse(result)
        const realScore = resultParse * 100

        console.log('URL: ' + url)
        console.log('Strategy: ' + 'Desktop')
        console.log('Speed score: ' + JSON.stringify(realScore))

        if(realScore < 80) {
            console.log('Status page: ERROR')
        }

        if(realScore >= 80) {
            console.log('Status page: OK')
        }

        // console.log(website)
    })
}

exports = mobile = () => psi
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

        if (realScore < 80) {
            console.log('Status page: ERROR')
        }

        if (realScore >= 80) {
            console.log('Status page: OK')
        }

        // console.log(website)

        // console.log('---')
    })
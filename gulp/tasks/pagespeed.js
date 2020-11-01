const psi = require('psi')
const {website} = require('../../config')

compute = (website) => {
    const result = JSON.stringify(website.data.lighthouseResult.categories.performance.score)
    const resultParse = JSON.parse(result)
    const realScore = resultParse * 100

    console.log('URL: ' + JSON.parse(JSON.stringify(website.config.params.url).replace(/https?:\/\//, '')))
    console.log('Strategy: ' + JSON.parse(JSON.stringify(website.config.params.strategy)))
    console.log('Speed score: ' + JSON.stringify(realScore))

    if(realScore < 80) {
        console.log('Status page: ERROR')
    }

    if(realScore >= 80) {
        console.log('Status page: OK')
    }
}

module.exports = pagespeed = () => {
    return psi(website, {
        nokey: 'true',
        strategy: 'desktop'
    }).then((website) => {
        compute(website)
    })
}

exports = mobile = () => psi
    return psi(website, {
        nokey: 'true',
        strategy: 'mobile'
    }).then((website) => {
        compute(website)
    })
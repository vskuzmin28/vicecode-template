const gulp = require('gulp');
const psi = require('psi');
const site = 'http://mail.ru/';

module.exports = gpsMobile => {
    return psi(site, {
        nokey: 'true',
        strategy: 'mobile',
    }),console.log('Speed score: ' + ret);
;
}
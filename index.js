'use strict';

const iconv = require('iconv-lite');

/**
 * 인자로 주어진 텍스트를 Percent Encoding %HH 형태로 변환합니다.
 * 비예약(unreserved)문자를 제외한 문자는 모두 iconv.encode 변환합니다.
 * @param {string} str 변환할 문자열
 * @param {string} lang Iconv-lite로 변환할 문자셋 이름 (EUCKR 등)
 * @returns {string} 변환된 문자열
 */
const iconvPercentEncoding = (str, lang = 'utf8') => {

    return str
        .toString()
        .split('')
        .map(s => {

            if (/[a-z0-9-_.~]/i.test(s))
                return s;

            const buffer = iconv.encode(s, lang);

            let ret = '';

            for (let i = 0; i < buffer.length; i++) // zero pad 해야됨. line break(\n) 등..
                ret += '%' + (buffer[i] <= 16 ? '0' : '') + buffer[i].toString(16).toUpperCase();

            return ret;

        })
        .join('');

};

/**
 * 폼 객체(key-value)를 application/x-www-form-urlencoded의 BODY에 넣기 적합한 string으로 변환하여 반환합니다.
 * @param {object} formObject 
 * @param {string} lang 
 * @returns {string} body
 */
const stringify = (formObject, lang) => {

    const keyvalues = [];

    for (let key in formObject) {
        keyvalues.push(
            key + '=' + iconvPercentEncoding(formObject[key], lang)
        );
    }

    return keyvalues.join('&');

};

module.exports = {
    iconvPercentEncoding,
    stringify
};

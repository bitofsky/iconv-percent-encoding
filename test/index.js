const assert = require('assert');
const { iconvPercentEncoding, stringify } = require('../index');

describe('Percent encoding with iconv(EUCKR)', () => {

    const encodeCharset = 'EUCKR';
    const input = `ABC, abc, 123 그리고 -_.~는 제외되어 인코딩 되어야 합니다.\n줄바꿈 역시 인코딩 되어야 합니다.`;
    const encoded = 'ABC%2C%20abc%2C%20123%20%B1%D7%B8%AE%B0%ED%20-_.~%B4%C2%20%C1%A6%BF%DC%B5%C7%BE%EE%20%C0%CE%C4%DA%B5%F9%20%B5%C7%BE%EE%BE%DF%20%C7%D5%B4%CF%B4%D9.%0A%C1%D9%B9%D9%B2%DE%20%BF%AA%BD%C3%20%C0%CE%C4%DA%B5%F9%20%B5%C7%BE%EE%BE%DF%20%C7%D5%B4%CF%B4%D9.';
    const stringifyEncoded = `a=${encoded}&b=${encoded}`;

    it(input, () =>
        assert.strictEqual(iconvPercentEncoding(input, encodeCharset), encoded)
    );

    it('stringify', () =>
        assert.strictEqual(stringify({ a: input, b: input }, encodeCharset), stringifyEncoded)
    );

});
application/x-www-form-urlencoded로 문자열을 전송시, UTF-8이 아닌 타 문자셋 기반 서버로 문자열을 전송할 때 사용할 수 있는 모듈입니다.

## Install
npm install iconv-percent-encoding

## Uses

### iconvPercentEncoding ( (string) input, (string) encodeCharset = utf8 )
```
const { iconvPercentEncoding } = require('iconv-percent-encoding');

const encodeCharset = 'EUCKR';
const input = `ABC, abc, 123 그리고 -_.~는 제외되어 인코딩 되어야 합니다.`;

// "ABC%2C%20abc%2C%20123%20%B1%D7%B8%AE%B0%ED%20-_.~%B4%C2%20%C1%A6%BF%DC%B5%C7%BE%EE%20%C0%CE%C4%DA%B5%F9%20%B5%C7%BE%EE%BE%DF%20%C7%D5%B4%CF%B4%D9."
iconvPercentEncoding(input, encodeCharset);

```

### stringify ( (object) formObject, (string) encodeCharset = utf8 )
```
const { stringify } = require('iconv-percent-encoding');

const encodeCharset = 'EUCKR';
const input = `ABC, abc, 123 그리고 -_.~는 제외되어 인코딩 되어야 합니다.`;

// "a=ABC%2C%20abc%2C%20123%20%B1%D7%B8%AE%B0%ED%20-_.~%B4%C2%20%C1%A6%BF%DC%B5%C7%BE%EE%20%C0%CE%C4%DA%B5%F9%20%B5%C7%BE%EE%BE%DF%20%C7%D5%B4%CF%B4%D9.&b=ABC%2C%20abc%2C%20123%20%B1%D7%B8%AE%B0%ED%20-_.~%B4%C2%20%C1%A6%BF%DC%B5%C7%BE%EE%20%C0%CE%C4%DA%B5%F9%20%B5%C7%BE%EE%BE%DF%20%C7%D5%B4%CF%B4%D9."
stringify({ a: input, b: input }, encodeCharset);

```

## Reference

[Wikipedia : Percent-encoding](https://en.wikipedia.org/wiki/Percent-encoding#The_application/x-www-form-urlencoded_type)

## Author
[Hwang Bum-Seok](http://hbs.pe.kr) ([Email: bitofsky@naver.com](mailto:bitofsky@naver.com))

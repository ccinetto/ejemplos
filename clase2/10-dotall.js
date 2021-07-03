const regexp = /foo.bar/;

const regexp2 = /foo.bar/s;

const result = regexp.test('foo\nbar');

const result2 = regexp2.test('foo\rbar');

console.log(result);
console.log(result2);

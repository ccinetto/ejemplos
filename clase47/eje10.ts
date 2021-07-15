import {
  assertEquals,
  assertStrictEquals,
} from 'https://deno.land/std@0.100.0/testing/asserts.ts';

Deno.test('example', () => {
  const a = 'world';
  assertEquals(a, 'world');
  assertEquals({ hello: 'world' }, { hello: 'world' });
});

Deno.test('isStrictlyEqual', () => {
  const a = {};
  const b = a;
  assertStrictEquals(a, b);
});

// This test fails
Deno.test('isNotStrictlyEqual', () => {
  const a = {};
  const b = {};
  assertStrictEquals(a, b);
});

1. 在连续测试中使用 `.concurrent` 将会并发运行它们
```js
import { describe, it } from 'vitest'
// The two tests marked with concurrent will be run in parallel
describe('suite', () => {
  it('serial test', async () => {})
  it.concurrent('concurrent test 1', async ({ expect }) => {})
})
describe.concurrent(/* ... */)
```
2. Basic
```js
test('descibe', () => {
	expect(2 + 2).toBe(4);
	expect(a).not.toBe(0);
	expect(data).toEqual({ one: 1, two: 2})
})
```
3. Truthy
```js
test('truthy', () => {
	expect(n).toBeNull();
	expect(n).toBeUndefined();
	expect(n).toBeTruthy();
	expect(n).toBeFalsy();
})
```
4. number
```js
test('number', () => {
	expect(n).toBeGreaterThan(3);
	expect(n).toBeGreaterThanOrEqual(3);
	expect(n).toBeLessThan(3);
	expect(n).toBeLessThanOrEqual(3);

	expect(0.1 + 0.2).toBeCloseTo(0.3);
})
```
5. String
```js
test('string', () => {
	expect(s).toMatch(/reg/);
})
```
6. Array
```js
test('array', () => {
	expect(arr).toContain('');
	expect(arr).toHaveLength(3)
})
```
7. Promise
```js
test('Promise', () => {
	return fetch().then(data => expect(data).toBe())
})
test('Promise', async () => {
	const data = await fetch();
	epxect(data).resolves.toBe();
	expect(data).rejects.toBe();
})
test('Promise', (Done) => {
	function callback(data, error) {
		try {
			expect(data).toBe();
		} catch (error) {
			expect(error).toBe();
		} finally {
			Done();
		}
	}
	fetch(callback)
})
expect.assertions(2) // 2 个断言被调用
```
8. Repeat Opration
```js
beforeEach(() => fn());
afterEach(() => fn());

beforeAll(() => fn());
afterAll(() => fn());
```
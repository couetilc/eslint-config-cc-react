const assert = require('assert');
const eslint = require('eslint');

// eslint-disable-next-line no-console
const log = (...arg) => console.log(...arg);

let failed;

async function test(name, fn) {
  let error;
  try {
    await fn();
  } catch (e) {
    error = e;
  }
  log(`${name}...${error ? '❌' : '✅'}`);
  if (error) {
    log(error);
    failed = true;
  }
}

test('exports an object', () => {
  const config = require('./index.js');
  assert.strictEqual(typeof config, 'object');
  assert.notEqual(config, null);
});

test('exports a valid eslint configuration', async () => {
  const config = require('./index.js');
  const linter = new eslint.ESLint({
    useEslintrc: false,
    baseConfig: config,
  });
  const [result] = await linter.lintText(`
    const x = 1;
    function foo() {
      // test
    }
    foo(x)
  `);
  if (result.messages.length > 0) {
    log(result.messages);
  }
  assert.strictEqual(result.errorCount, 0);
  assert.strictEqual(result.warningCount, 0);
});

if (failed) {
  process.exit(1);
}

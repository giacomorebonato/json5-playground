import appRootPath from 'app-root-path';
import Json5 from 'json5';
import assert from 'node:assert';
import Fs from 'node:fs';
import Path from 'node:path';
import { test } from 'node:test';

test('parses .json5 file', () => {
  const parsed = Json5.parse(Fs.readFileSync(Path.resolve(appRootPath.path, 'src', 'example.json5'), 'utf-8'))

  assert.deepEqual(parsed, {
    unquoted: 'and you can quote me on that',
    singleQuotes: 'I can use "double quotes" here',
    lineBreaks: "Look, Mom! No \\n's!",
    hexadecimal: 0xdecaf,
    leadingDecimalPoint: .8675309, andTrailing: 8675309.,
    positiveSign: +1,
    trailingComma: 'in objects', andIn: ['arrays',],
    "backwardsCompatible": "with JSON",
  });
})

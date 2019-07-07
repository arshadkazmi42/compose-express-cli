const expect = require('chai').expect;
const fs = require('fs');
const exec = require('child_process').exec;

const Compose = require('../lib/compose');

const API_FLAG = ['api'];

const isExists = (path) => {
  try {
    fs.readFileSync(path, 'utf-8');
    return true;
  } catch (err) {
    return false;
  }
};

const removeDir = (path) => {
  return new Promise((resolve) => {
    exec(`rm -rf ${path}`, (error) => {
      if (error !== null) {
        return resolve();
      }

      return resolve();
    });
  });
};

describe('Verifies async features', function () {
  it('generates express rest boilerplate', async () => {
    await Compose(API_FLAG);
    expect(isExists('express-app/package.json')).to.equal(true);
    await removeDir('express-app');
  }).timeout(30000);
  it('throws error', async () => {
    await Compose(['dummy']);
    expect(isExists('express-app/package.json')).to.equal(false);
  });
});

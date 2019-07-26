const excludeUrl = /^.*\.(?!css|png|js|gif$)[^.]+$/;
const fName = /[^\w]/g;
const mkdirp = require('mkdirp');
const fs = require('fs');
const path = require('path');
const dir = './output/images/';

function captureScreen(name) {
  mkdirp(dir);
  browser.takeScreenshot().then((png) => {
    const stream = fs.createWriteStream(path.join(dir, `${name}.png`));
    stream.write(new Buffer(png, 'base64'));
    stream.end();
  });
};

describe('Crawler => ', function() {
  it('should take screenshot', function(done) {
    browser.waitForAngularEnabled(false);
    require('fs').readFileSync('./output/urls.txt', 'utf-8').split(/\r?\n/).forEach(function(url) {
      if (excludeUrl.test(url)) {
        try {
          browser.get(url).then(
            captureScreen(url.replace(fName, '_'))
          );
        } catch (e) {
          console.log(`${e} ==>  ${url},`)
        }
      }
    });
    expect(true).toEqual(true);
    done();
  });
});
var assert = require('assert'),
    pacificator = require('../src/pacificator');

describe('Pacification', function(){

  it('should return a string pacificated', function(){
    var path = 'test/fixtures/style.css',
        result = pacificator.pacificate(path),
        expect = '/* comment */\n\n.test-class:hover {\n\tbackground-image: url("../bg.jpg");\n}\n\n';

    assert.equal(result, expect);
  });

  it('should return a string pacificated with tabs', function(){
    var path = 'test/fixtures/style.css',
        result = pacificator.pacificateTab(path, 3),
        expect = '/* comment */\n\n.test-class:hover {\n\t\t\tbackground-image: url("../bg.jpg");\n}\n\n';

    assert.equal(result, expect);
  });

  it('should return a string pacificated with whitespace', function(){
    var path = 'test/fixtures/style.css',
        result = pacificator.pacificateSpace(path, 3),
        expect = '/* comment */\n\n.test-class:hover {\n   background-image: url("../bg.jpg");\n}\n\n';

    assert.equal(result, expect);
  });

});

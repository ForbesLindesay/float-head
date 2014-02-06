'use strict';

var fs = require('fs');
var request = require('request');

var prefix = [
  '// !!auto-generated file, do not edit!!',
  'module.exports = function (jQuery, _) {'
].join('\n') + '\n';
var postfix = '\n' + [
  '  function wrap(table) {',
  '    var self = {',
  '      destroy: function () { table.floatThead("destroy"); return self; },',
  '      reflow:  function () { table.floatThead("reflow"); return self; }',
  '    };',
  '    return self;',
  '  }',
  '  function floatThead(table, options) {',
  '    return wrap($(table).floatThead(options));',
  '  }',
  '  function destroy(table) {',
  '    $(table).floatThead("destroy");',
  '  }',
  '  function reflow(table) {',
  '    $(table).floatThead("reflow");',
  '  }',
  '  floatThead.destroy = destroy;',
  '  floatThead.reflow = reflow;',
  '  return floatThead;',
  '};'
].join('\n');

request('https://raw2.github.com/mkoryak/floatThead/v1.2.1/jquery.floatThead.js',
  function (err, res) {
    if (err) throw err;
    if (res.statusCode !== 200) throw new Error('status code: ' + res.statusCode);
    var src = res.body;
    src = prefix + src.replace(/^/gm, '  ') + postfix;
    fs.writeFileSync(__dirname + '/lib/float-head.js', src);
  });
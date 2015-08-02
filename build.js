'use strict';

var fs = require('fs');
var request = require('request');

var prefix = [
  '// !!auto-generated file, do not edit!!',
  'module.exports = function (jQuery) {',
  '  var $ = jQuery;'
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
  '    return wrap(jQuery(table).floatThead(options));',
  '  }',
  '  function destroy(table) {',
  '    jQuery(table).floatThead("destroy");',
  '  }',
  '  function reflow(table) {',
  '    jQuery(table).floatThead("reflow");',
  '  }',
  '  floatThead.destroy = destroy;',
  '  floatThead.reflow = reflow;',
  '  return floatThead;',
  '};'
].join('\n');

request('https://cdnjs.cloudflare.com/ajax/libs/floatthead/' + process.argv[2] + '/jquery.floatThead.js',
  function (err, res) {
    if (err) throw err;
    if (res.statusCode !== 200) throw new Error('status code: ' + res.statusCode);
    var src = res.body;
    src = prefix + src.replace(/^/gm, '  ') + postfix;
    fs.writeFileSync(__dirname + '/lib/float-head.js', src);
    var pkg = JSON.parse(fs.readFileSync(__dirname + '/package.json', 'utf8'));
    pkg['floatThead-version'] = process.argv[2];
    fs.writeFileSync(__dirname + '/package.json', JSON.stringify(pkg, null, '  '));
  });
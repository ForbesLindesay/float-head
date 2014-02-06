'use strict';

var jQuery = window.jQuery || require('jquery');
module.exports = jQuery.fn ? jQuery : jQuery(window);
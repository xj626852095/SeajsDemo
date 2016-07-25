define(function(require, exports, module){
	var $ = require('jquery');
	var data = require("data");
	
	function Drawing(){
		this.author = data.author;
		this.url = data.blog;
	}
	
	Drawing.prototype.addAuthor = function(selecter){
		$(selecter).html(data.author);
	};
	Drawing.prototype.addUrl = function(selecter){
		$(selecter).attr("href", data.blog);
	};
	
	module.exports = Drawing;
	
	
/*	
	exports.addAuthor = function(selecter){
		$(selecter).html(data.author);
	};
	exports.addUrl = function(selecter){
		$(selecter).attr("href", data.blog);
	};
*/	
	
	
});
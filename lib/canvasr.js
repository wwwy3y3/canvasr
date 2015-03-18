var Q= require('q');
var Canvas= require('canvas');

/*
Canvasr.readFile(filepath).resize({width,height}).writePng(filePath).then()
*/

var Canvasr= function (params) {
	var self= this;
	return self;
}

Canvasr.prototype.readFile = function(filePath) {
	var self= this;
	self.imgSrc= filePath;
	return self;
};

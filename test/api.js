var Canvasr= require('../');
var fs= require('fs');
var should= require('should');
var sizeOf = require('image-size');
var testPng= __dirname+'/himym.png';


var cvr= new Canvasr();
cvr.readFile(testPng)
   .resize({
   		width: 200,
   		height: 200
   })
   .then(function (cvr) {
   		return cvr.writePng(__dirname+'/himym-200.png');
   })
   .done(function () {
   		//var dimensions = sizeOf(__dirname+'/himym-200.png');
   		//var originalDimensions= sizeOf(__dirname+'/himym.png');
   		//var origianlRatio= originalDimensions.height/originalDimensions.width;
   		//var ratio= dimensions.height/dimensions.width;
   		//origianlRatio.should.be.equal(ratio);
   		console.log('ok')
   }, function (err) {
   		throw err;
   })
		 

var cvr= new Canvasr();
cvr.readFile(testPng)
   .crop({
   		x: 0,
   		y: 0,
   		width: 200,
   		height: 200
   })
   .then(function (cvr) {
   		return cvr.writePng(__dirname+'/himym-cropped.png');
   })
   .done(function () {
   		//var dimensions = sizeOf(__dirname+'/himym-cropped.png');
   		//dimensions.width.should.be.equal(200);
   		//dimensions.height.should.be.equal(200);
   		console.log('ok')
   }, function (err) {
   		throw err;
   })



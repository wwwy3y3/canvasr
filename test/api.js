var Canvasr= require('../');
var fs= require('fs');
var should= require('should');
var sizeOf = require('image-size');
var testPng= __dirname+'/himym.png';

describe('api', function () {
   it('should resize and save', function (done) {
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
               var dimensions = sizeOf(__dirname+'/himym-200.png');
               var originalDimensions= sizeOf(__dirname+'/himym.png');
               var origianlRatio= Math.round((originalDimensions.height/originalDimensions.width)*100)/100;
               var ratio= dimensions.height/dimensions.width;
               origianlRatio.should.be.equal(ratio);
               done();
               //console.log(fs.statSync(__dirname+'/himym-200.png'))
         }, function (err) {
               throw err;
         })
   })

   it('should crop and save', function (done) {
      var cvr= new Canvasr();
      cvr.readFile(testPng)
         .crop({
               x: 100,
               y: 100,
               width: 200,
               height: 200
         })
         .then(function (cvr) {
               return cvr.writePng(__dirname+'/himym-cropped.png');
         })
         .done(function () {
               var dimensions = sizeOf(__dirname+'/himym-cropped.png');
               dimensions.width.should.be.equal(200);
               dimensions.height.should.be.equal(200);
               done();
               //console.log(fs.statSync(__dirname+'/himym-cropped.png'))
         }, function (err) {
               throw err;
         })
   })
})

		 





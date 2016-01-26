'use strict';

/**
 * @ngdoc function
 * @name simonApp.controller:SimonCtrl
 * @description
 * # SimonCtrl
 * Controller of the simonApp
 */
angular.module('simonApp')
  .controller('SimonCtrl', function () {
    $(document).ready(function(){
			$("#verde").click(function(){
				$("#colorelegido").text("Verde");
			})
			$("#rojo").click(function(){
				$("#colorelegido").text("Rojo");
			})
			$("#amarillo").click(function(){
				$("#colorelegido").text("Amarillo");
			})
			$("#azul").click(function(){
				$("#colorelegido").text("Azul");
			})

		})
		
		function play(){
			document.getElementById("audio");
			audio.play();
		}
  });

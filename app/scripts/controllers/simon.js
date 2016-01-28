'use strict';

/**
 * @ngdoc function
 * @name simonApp.controller:SimonCtrl
 * @description
 * # SimonCtrl
 * Controller of the simonApp
 */
angular.module('simonApp')
  .controller('SimonCtrl', function ($scope) {

  	$scope.colores = [];
  	$scope.titulo = 'Simón';
  	$scope.acumuladorverde = 0;
  	$scope.acumuladorrojo = 0;
  	$scope.acumuladorazul = 0;
  	$scope.acumuladoramarillo = 0;


  	$scope.play = function(color){
  		$scope.colores.push(color);
  		switch(color){
  			case 'verde':
	  			$scope.acumuladorverde = $scope.acumuladorverde +1; /*forma corta: $scope.acumulador++*/
	  			break;
	  		case 'rojo':
	  			$scope.acumuladorrojo = $scope.acumuladorrojo +1;
	  			break;
	  		case 'azul':
	  			$scope.acumuladorazul = $scope.acumuladorazul +1;
	  			break;
	  		case 'amarillo':
	  			$scope.acumuladoramarillo = $scope.acumuladoramarillo +1;
	  			break;
  		}
 		/*otra manera: if(color=='verde'){$scope.acumuladorverde = $scope.acumuladorverde +1;}
 		Se usa swift en vez de poner muchas líneas iguales con if(color=='azul){...}, etc*/
  		
  	}

  	$scope.reset = function(){
  		$scope.colores = [];
  		$scope.acumuladorverde = 0;
  		$scope.acumuladorrojo = 0;
  		$scope.acumuladorazul = 0;
  		$scope.acumuladoramarillo = 0;
  	}

  //   $(document).ready(function(){
		// 	$("#verde").click(function(){
		// 		$("#colorelegido").text("Verde");
		// 	})
		// 	$("#rojo").click(function(){
		// 		$("#colorelegido").text("Rojo");
		// 	})
		// 	$("#amarillo").click(function(){
		// 		$("#colorelegido").text("Amarillo");
		// 	})
		// 	$("#azul").click(function(){
		// 		$("#colorelegido").text("Azul");
		// 	})

		// })
		
		// function play(){
		// 	document.getElementById("audio");
		// 	audio.play();
		// }
  });

(function(){
	var app = angular.module('madLibApp')

	app.service("arrLength", function(){
		var arrLength = {};
		arrLength.shuffleArr = function (arr){
			var currentIndex = arr.length, temporaryValue, randomIndex;

			while (0 !== currentIndex) {
				randomIndex = Math.floor(Math.random() * currentIndex);
	    		currentIndex -= 1;

	    		temporaryValue = arr[currentIndex];
			    arr[currentIndex] = arr[randomIndex];
			    arr[randomIndex] = temporaryValue;
    		}
		};
		return arrLength;
	});





})(angular);
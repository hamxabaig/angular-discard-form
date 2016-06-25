(function (angular) {
	
	angular
		.module('discardForm', ['discardForm.elements'])
		.directive('discardForm', discardForm);
	
	function discardForm() {
		return {
			restrict: 'A',
			controller: ['$scope', function($scope) {
				var elements = [];
				

				this.addElement = function(element) {
					elements.push(element);
				};

				setTimeout(function () {
					console.log(elements);
				}, 1000);
			}]
		}
		
		
	}
})(angular);
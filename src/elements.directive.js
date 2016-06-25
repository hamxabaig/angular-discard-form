(function (angular) {

	angular
		.module('discardForm.elements', [])
		.directive('discardElement', discardElement);

	function discardElement() {
		return {
			require: ['^discardForm', 'ngModel'],
			restrict: 'A',
			link: function ($scope, $attr, $elem, $ctrl) {
				$ctrl[0].addElement($ctrl[1]);
			}
		}


	}
})(angular);
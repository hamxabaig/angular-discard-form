(function (angular) {
	angular
		.module('app', ['discardForm'])
		.controller('APPController', APPController);

	function APPController() {
		var vm = this;

		vm.model = {
			text1: 'text1',
			text2: 'text2'
		}
	}

})(angular);
'use strict';

// Configuring the Articles module
angular.module('customers').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Members', 'customers', 'dropdown', '/customers(/create)?');
		Menus.addSubMenuItem('topbar', 'customers', 'List Members', 'customers');
		// Menus.addSubMenuItem('topbar', 'customers', 'New Member', 'customers/create');
	}
]);

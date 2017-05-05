'use strict';

// Configuring the Articles module
angular.module('articles').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Agendas', 'articles', 'dropdown', '/articles(/create)?');
		Menus.addSubMenuItem('topbar', 'articles', 'List Agendas', 'articles');
		Menus.addSubMenuItem('topbar', 'articles', 'New Agenda', 'articles/create');
	}
]);

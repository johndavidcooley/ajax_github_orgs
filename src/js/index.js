// Javascript Entry Point

import $ from 'jquery';

var url = "https://api.github.com/users/wycats/orgs?acces_token=4ad44bd655568433196dc3e53e87663e0860b2a8";

$.ajax(url).then(function(data) {
	var $app = $('.app');

	data.forEach(function({login, avatar_url}) {
		 console.log(avatar_url);
		  $app.append(
			`
			<div class="container">
				<img src="${avatar_url}" alt="">
				<h3>${login}</h3>
			</div>
			`);
	});
});


// ${avatar_url} ${login}
// $(function () {
// 	console.log('index.js loaded ... ');
// 	getUser()

// })

// function getUser() {
// 	fetch("http://localhost:3000/users/1")
// 		.then(function (response) {

// 			console.log("response: ", response);
// 		})
// }

function getUser() {
	$.ajax({
		url: "http://localhost:3000/users/1",
		method: 'get',
		dataType: 'json'
	}).done(function (response) {
		console.log("response: ", response);


		let user = new User(response)

		let userDisplay = user.userHTML()


		debugger;

	})
}

class User {
	constructor(obj) {
		this.name = obj.name
		this.email = obj.email
	}
}

User.prototype.userHTML = function () {
	return (`
		<div>
			<h1>${this.name}</h1>
		</div>

	`)
}
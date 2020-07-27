// GitHubCalendar(".calendar-1", "Daniel-Leedan", {
// 	responsive: true,
// 	tooltips: true
// });


function fetchUsersJson(path) {
	return new Promise((resolve, reject) => {
		fetch(path)
			.then((result) => result.json())
			.then((result) => {
				resolve(result)
			})
	})
}


function fetchUsersProfile(url, user) {
	return new Promise((resolve, reject) => {
		fetch(url + user).then((result) => result.json())
			.then((result) => {
				resolve(result)
			})
	})
}


function getUserProfiles(callProfiles) {
	let userProfiles = []

	fetchUsersJson('../users.json').then(async (users) => {
		for (let i = 0; i < users.length; i++) {
			let userProfile = await fetchUsersProfile('https://api.github.com/users/', users[i].name)

			userProfiles = [...userProfiles, userProfile]
		}
		dispayFirst(userProfiles[0])
		gitActivity(userProfiles[0].login)
		callProfiles(userProfiles)
	})
}


function dispayFirst(profile) {
	const cardBody = document.querySelector('.col-lg-6')
	cardBody.innerHTML = cardTamplate(profile)
}


function displayListProfiles(usersProfiles) {
	const list = document.querySelector('.list-unstyled')

	let body = ''
	for (let i = 0; i < usersProfiles.length; i++) {
		body += listTamplate(usersProfiles[i])
	}
	list.innerHTML = body
}


async function getUserEvents(e) {
	let user = await fetchUsersProfile('https://api.github.com/users/', e.target.innerHTML)
	dispayFirst(user)
	gitActivity(e.target.innerHTML)
}


function gitActivity(name) {
	GitHubActivity.feed({
		username: name,
		selector: "#feed",
		limit: 10 // optional
	});
}


function listTamplate(user) {
	console.log(user)
	return `
	 <li class="list-separated-item"> 
	   <div class="row align-items-center">
		 <div class="col-auto">
			<img
				class="avatar avatar-md d-block"
				src="${user.avatar_url}"></img>
		 </div>
		 <div class="col">
			<div>
				<a  
				    onclick="getUserEvents(event)"
					class="text-inherit">
					${user.login}
				</a>
			</div>
			<small class="d-block item-except text-sm text-muted h-1x"><a href=${user.html_url} target="blank">${user.html_url}</a></small>
		</div>
	   </div>
    </li> 
	`
}


function cardTamplate(user) {
	return `
	<div class="card card-profile">
	<div
		class="card-header"
		style="background-image: url(https://pbs.twimg.com/profile_banners/929646774381199360/1591279543/1500x500);"
	></div>
	<div class="card-body text-center">
		<img
			class="card-profile-img"
			src="${user.avatar_url}"
		>
		<h3 class="mb-3">${user.name}</h3>
		<p class="mb-4">
			${user.bio}
		</p>
		<button class="btn btn-outline-primary btn-sm">
			<span class="fa fa-twitter"></span>
			Follow
	 	</button>
	  </div>
   </div>
	`
}




// getUserProfiles((usersProfiles) => {
// 	displayListProfiles(usersProfiles)
// })

// GitHubCalendar(".calendar-1", "Daniel-Leedan", {
// 	responsive: true,
// 	tooltips: true
// });


function getUserProfiles(callProfiles) {
	let userProfiles = []

	FetchData.fetchUsersJson('../users.json').then(async (users) => {
		for (let i = 0; i < users.length; i++) {
			let userProfile = await FetchData.fetchUsersProfile('https://api.github.com/users/', users[i].name)

			userProfiles = [...userProfiles, userProfile]
		}
		dispayCard(userProfiles[0])
		gitActivity(userProfiles[0].login)
		callProfiles(userProfiles)
	})
}


function dispayCard(profile) {
	const cardBody = document.querySelector('.col-lg-6')
	cardBody.innerHTML = Tamplate.cardTamplate(profile)
}


function displayListProfiles(usersProfiles) {
	const list = document.querySelector('.list-unstyled')

	let body = ''
	for (let i = 0; i < usersProfiles.length; i++) {
		body += Tamplate.listTamplate(usersProfiles[i])
	}
	list.innerHTML = body
}


async function getUserEvents(e) {
	let userName = e.target.id
	let user = await FetchData.fetchUsersProfile('https://api.github.com/users/', userName)
	console.log(user)
	dispayCard(user)
	gitActivity(userName)
}


function gitActivity(name) {
	GitHubActivity.feed({
		username: name,
		selector: "#feed",
		limit: 10 // optional
	});
}


getUserProfiles((usersProfiles) => {
 	displayListProfiles(usersProfiles)
})

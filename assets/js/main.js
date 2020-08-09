// GitHubCalendar(".calendar-1", "Daniel-Leedan", {
// 	responsive: true,
// 	tooltips: true
// });



// -------------------------------------------------------------------------------------------------------------------------------------------------

const userService = new UserService()

function onGetUserEvents(e) {
	let userName = e.target.id
	TamplateService.dispayCard(userService.findUser(userName))
	gitActivity(userName)
}


// קורניליוס תפעיל פה
initUsers()

function gitActivity(name) {
	GitHubActivity.feed({
		username: name,
		selector: "#feed",
		limit: 10 // optional
	})
}


async function initUsers() {
	let profiles = []
	FetchData.fetchUsersJson('../users.json').then(async (result) => {
		console.log(result)
		for (user of result) {
			const profile = await FetchData.fetchUsersProfile('https://api.github.com/users/', user.name)
			TamplateService.dispayProfile(profile)

			profiles = [...profiles, profile]
		}

		userService.saveLocalStorege(profiles)

		TamplateService.dispayCard(profiles[0])

		gitActivity(profiles[0].login)
	})
}







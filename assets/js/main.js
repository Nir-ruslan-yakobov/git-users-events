// GitHubCalendar(".calendar-1", "Daniel-Leedan", {
// 	responsive: true,
// 	tooltips: true
// });



// -------------------------------------------------------------------------------------------------------------------------------------------------

const userService = new UserService()

function onGetUserEvents(e) {
	let userName = e.target.id
	TamplateService.dispayCard(userService.findUser(userName).profile)
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
	FetchData.fetchUsersJson('../users.json').then(async (result) => {
		console.log(result)
		for (user of result) {
			const profile = await FetchData.fetchUsersProfile('https://api.github.com/users/', user.name)

			TamplateService.dispayProfile(profile)
			userService.setProfile(profile)
		}


		const firstProfile = userService.profiles[0].profile

		TamplateService.dispayCard(firstProfile)

		gitActivity(firstProfile.login)

		userService.saveLocalStorege()
	})
}








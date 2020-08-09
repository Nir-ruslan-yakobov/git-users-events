// GitHubCalendar(".calendar-1", "Daniel-Leedan", {
// 	responsive: true,
// 	tooltips: true
// });



// -------------------------------------------------------------------------------------------------------------------------------------------------


// ברזיליאוס תפעיל את זה


function getLocalData() {
	return JSON.parse(localStorage.getItem('user'))
}


function findUser(username) {
	return getLocalData().find((user) => user.login == username)
}


async function getUserEvents(e) {
	let userName = e.target.id
	TamplateService.dispayCard(findUser(userName))
	gitActivity(userName)
}


function gitActivity(name) {
	GitHubActivity.feed({
		username: name,
		selector: "#feed",
		limit: 10 // optional
	})
}


async function getProfiles() {
	let profiles = []
	FetchData.fetchUsersJson('../users.json').then(async (result) => {
		console.log(result)
		for (user of result) {
			const profile = await FetchData.fetchUsersProfile('https://api.github.com/users/', user.name)
			TamplateService.dispayProfile(profile)


			profiles = [...profiles, profile]
		}
		localStorage.setItem('user', JSON.stringify(profiles))

		TamplateService.dispayCard(profiles[0])
		gitActivity(profiles[0].login)
	})
}



// קורניליוס תפעיל פה
(function (global) {
	global.getProfiles()
})(window)





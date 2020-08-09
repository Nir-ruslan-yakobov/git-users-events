// GitHubCalendar(".calendar-1", "Daniel-Leedan", {
// 	responsive: true,
// 	tooltips: true
// });



// -------------------------------------------------------------------------------------------------------------------------------------------------


// ברזיליאוס תפעיל את זה

let user = []


init()

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


function catchDataProfiles(data) {
	user.push(data)
	localStorage.setItem('user', JSON.stringify(user))
}


function init() {
	FetchData.fetchUsersJson('../users.json').then(async (result) => {
		for (let i = 0; i < result.length; i++) {
			console.log(i, 'Fetching')
			let user = result[i].name
			await gitActivity(user)
		}


		const progiles = await getLocalData()
		console.log(progiles)
		TamplateService.displayListProfiles(progiles)
		TamplateService.dispayCard(progiles[0])
	})
}















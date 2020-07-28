

// function getUserProfiles(callProfiles) {
// 	let userProfiles = []

// 	FetchData.fetchUsersJson('../users.json').then(async (users) => {
// 		for (let i = 0; i < users.length; i++) {
// 			let userProfile = await FetchData.fetchUserProfile('https://api.github.com/users/', users[i].name)

// 			userProfiles = [...userProfiles, userProfile]
// 		}
// 		await dispayCard(userProfiles[0])
// 		await gitActivity(userProfiles[0].login)
// 		await callProfiles(userProfiles)
// 	})
// }


function dispayCard(profile) {
	const cardBody = document.querySelector('.col-lg-6')
	cardBody.innerHTML = Tamplates.cardTamplate(profile)
}


function displayListProfiles(usersProfiles) {
	const list = document.querySelector('.list-unstyled')

	let body = ''
	for (let i = 0; i < usersProfiles.length; i++) {
		body += Tamplates.listTamplate(usersProfiles[i])
	}

	list.innerHTML = body
}


// async function getUserEvents(e) {
// 	let user = await FetchData.fetchUserProfile('https://api.github.com/users/', e.target.innerHTML)
// 	console.log(user)
// 	dispayCard(user)
// 	gitActivity(e.target.innerHTML)
// }


function gitActivity(name) {
	GitHubActivity.feed({
		username: name,
		selector: "#feed",
		limit: 10 // optional
	});
}



FetchData.fetchUsersJson('../users.json').then(async (users) => {

	for (let i = 0; i < users.length; i++) {
		await gitActivity(users[i].name)
	}
})



let profiles = []
let events = []


function catchData(data) {
	// const list = document.querySelector('.list-unstyled')

	let body = ''
	if (data.length) {
		events = [...events, data]
	} else {
		profiles = [...profiles, data]
	}
	// list.innerHTML += body
}
console.log(profiles, events)


// getUserProfiles((usersProfiles) => {
// 	displayListProfiles(usersProfiles)
// })

class UserService {

    profiles = []

    setProfile(profile) {
        const newProfile = new User(profile)
        this.profiles.push(newProfile)
    }

    saveLocalStorege() {
        localStorage.setItem('user', JSON.stringify(this.profiles))
    }

    getLocalStorage() {
        return JSON.parse(localStorage.getItem('user'))
    }

    findUser(userName) {
        return this.getLocalStorage().find((user) => user.profile.login == userName)
    }

}


class User {

    constructor(profile) {
        this.profile = profile
    }

}
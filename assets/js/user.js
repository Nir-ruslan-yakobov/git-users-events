class UserService {

    saveLocalStorege(profiles) {
        localStorage.setItem('user', JSON.stringify(profiles))
    }

    get getLocalStorage() {
        return JSON.parse(localStorage.getItem('user'))
    }

    findUser(userName) {
        return this.getLocalStorage.find((user) => user.login == userName)
    }

}
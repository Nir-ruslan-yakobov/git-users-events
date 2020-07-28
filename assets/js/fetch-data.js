class FetchData {

    static fetchUsersJson(path) {
        return new Promise((resolve, reject) => {
            fetch(path)
                .then((result) => result.json())
                .then((result) => {
                    resolve(result)
                })
        })
    }

    static fetchUsersProfile(url, user) {
        console.log(url + user)
        return new Promise((resolve, reject) => {
            fetch(url + user).then((result) => result.json())
                .then((result) => {
                    resolve(result)
                })
        })
    }

}
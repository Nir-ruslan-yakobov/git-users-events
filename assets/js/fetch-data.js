class FetchData {

    static fetchUserProfile(url, user) {
        return new Promise((resolve, reject) => {
            fetch(url + user).then((result) => result.json())
                .then((result) => {
                    resolve(result)
                })
        })
    }


    static fetchUsersJson(path) {
        return new Promise((resolve, reject) => {
            fetch(path)
                .then((result) => result.json())
                .then((result) => {
                    resolve(result)
                })
        })
    }

}
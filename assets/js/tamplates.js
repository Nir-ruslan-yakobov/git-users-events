class Tamplate {

    static listTamplate(user) {
        console.log(user)
        return `
         <li class="list-separated-item"> 
           <div class="row align-items-center">
             <div class="col-auto">
                <img
                    class="avatar avatar-md d-block"
                    src="${user.avatar_url}"></img>
             </div>
             <div class="col">
                <div>
                    <a  
                        onclick="getUserEvents(event)"
                        class="text-inherit"
                        id="${user.login}"
                        >

                        ${user.login}
                    </a>
                </div>
                <small class="d-block item-except text-sm text-muted h-1x"><a href=${user.html_url} target="blank">${user.html_url}</a></small>
            </div>
           </div>
        </li> 
        `
    }

    static cardTamplate(user) {
        return `
        <div class="card card-profile">
        <div
            class="card-header"
            style="background-image: url(https://pbs.twimg.com/profile_banners/929646774381199360/1591279543/1500x500);"
        ></div>
        <div class="card-body text-center">
            <img
                class="card-profile-img"
                src="${user.avatar_url}"
            >
            <h3 class="mb-3">${user.name}</h3>
            <p class="mb-4">
                ${user.bio}
            </p>
            <button class="btn btn-outline-primary btn-sm">
                <span class="fa fa-twitter"></span>
                Follow
             </button>
          </div>
       </div>
        `
    }


    // static dispayCard(profile) {
    //     const cardBody = document.querySelector('.col-lg-6')
    //     console.log(cardBody)
    //     cardBody.innerHTML = Tamplate.cardTamplate(profile)
    // }
}
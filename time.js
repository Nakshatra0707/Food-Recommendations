function bf(){
    time = localStorage.setItem("time", "breakfast")
    season = localStorage.getItem("season")
    if (season == "summer"){
        window.location = "summer-breakfast.html"
    }
    if (season == "winter"){
        window.location = "winter-breakfast.html"
    }
}
function lu(){
    time = localStorage.setItem("time", "lunch")
    season = localStorage.getItem("season")
    if (season == "summer"){
        window.location = "summer-lunch.html"
    }
    if (season == "winter"){
        window.location = "winter-lunch.html"
    }
}

function di(){
    time = localStorage.setItem("time", "lunch")
    season = localStorage.getItem("season")
    if (season == "summer"){
        window.location = "summer-dinner.html"
    }
    if (season == "winter"){
        window.location = "winter-dinner.html"
    }
}
function bacc(){
    window.location = "index.html"
}
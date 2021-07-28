function bf(){
    time = localStorage.setItem("time", "breakfast")
    season = localStorage.getItem("season")
    if (season == "summer"){
        window.location = "summer-breakfast.html"
    }
}

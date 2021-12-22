
let url = config.Url;
console.log("hello");
let city = "london";
function getWeather() {
    fetch(url).then((res) => {
        console.log(res.json());
    });
}
getWeather();
console.log(config.KEY_2);
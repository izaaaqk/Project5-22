//weather api

const $locationBtn = document.querySelector(`#locationBtn`);
const $input = document.querySelector(`input`);
const $currentWx = document.querySelector('#currentWx')
const $msg = document.querySelector(`.msg`)

$locationBtn.addEventListener('click', function (){
    let userInput = $input.value;
    const listItems = $currentWx.querySelectorAll("#userInput");
    const listItemsArray = Array.from(listItems);
//added some conditions for my input to be precise
    if (listItemsArray.length > 0) {
        listItemsArray.filter(el => {
            let content = "";
            if (userInput.includes(",")) {
                if (userInput.split(",")[1].length > 2) {
                    userInput = userInput.split(",")[0];
                    content = el
                        .querySelector(".city-name span")
                        .textContent.toLowerCase();
                } else {
                    content = el.querySelector(".city-name").dataset.name.toLowerCase();
                }
            } else {
                content = el.querySelector(".city-name span").textContent.toLowerCase();
            }
            return content === userInput.toLowerCase();
        });
    }
    //api call
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${"37fcd1e7adf83820e8d9db2feba781a9"}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const { main, name, weather, wind } = data;
            const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
                weather[0]["icon"]
            }.svg`;
//add the elements that i requested on my pli call to my html
            const $div = document.createElement("div");
            // $div.classList.add("city");
            const contBox = `<h2 class="city-name" data-name="${name}">
        <span>${name} ${Math.round(main.temp)}<sup>°C</sup>  </span>
        </h2>
        <figure>
            <img class="city-icon" src="${icon}" alt="${
                weather[0]["description"]
            }"
        <figcaption>${weather[0]["description"]}</figcaption>
         </figure>
         
    `;
            $div.innerHTML = contBox;
            $currentWx.appendChild($div);
        })
        .catch(() => {
            $msg.textContent = "try again";
        });

    $msg.textContent = "";
    $input.focus();
});
// video api
Rainy
function getVideo() {
    $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
        key: 'AIzaSyBPGy8wgBuX4DJVZOxFVLLtdo81BvNCPwE',
        q: "lofi hip hop radio - beats to relax/study to",
        part: 'snippet',
        maxResults: 1,
        type: 'video',
        videoEmbeddable: true,
    },
    success: function(data){
        embedVideo(data)
    },
    error: function(response){
        console.log("Request Failed");
    }
    });
}
function embedVideo(data) {
    $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
    $('h3').text(data.items[0].snippet.title)
    $('.description').text(data.items[0].snippet.description)
}
getVideo();

//Sunny
function getVideo2() {
    $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
        key: 'AIzaSyBPGy8wgBuX4DJVZOxFVLLtdo81BvNCPwE',
        q: "Indie/Indie-Folk Compilation - Winter 2020/2021 ❄️ (1½-Hour Playlist)",
        part: 'snippet',
        maxResults: 1,
        type: 'video',
        videoEmbeddable: true,
    },
    success: function(data){
        embedVideo(data)
    },
    error: function(response){
        console.log("Request Failed");
    }
    });
}
function embedVideo(data) {
    $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
    $('h3').text(data.items[0].snippet.title)
    $('.description').text(data.items[0].snippet.description)
}
getVideo2();

//Snowy
function getVideo3() {
    $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
        key: 'AIzaSyBPGy8wgBuX4DJVZOxFVLLtdo81BvNCPwE',
        q: "Classic Rock 80s and 90s | Best Rock Songs Of The 80s and 90s",
        part: 'snippet',
        maxResults: 1,
        type: 'video',
        videoEmbeddable: true,
    },
    success: function(data){
        embedVideo(data)
    },
    error: function(response){
        console.log("Request Failed");
    }
    });
}
function embedVideo(data) {
    $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
    $('h3').text(data.items[0].snippet.title)
    $('.description').text(data.items[0].snippet.description)
}
getVideo3();

//cloudy
function getVideo4() {
    $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
        key: 'AIzaSyBPGy8wgBuX4DJVZOxFVLLtdo81BvNCPwE',
        q: "Lindsey Stirling Studying Playlist",
        part: 'snippet',
        maxResults: 1,
        type: 'video',
        videoEmbeddable: true,
    },
    success: function(data){
        embedVideo(data)
    },
    error: function(response){
        console.log("Request Failed");
    }
    });
}
function embedVideo(data) {
    $('iframe').attr('src', 'https://www.youtube.com/embed/' + data.items[0].id.videoId)
    $('h3').text(data.items[0].snippet.title)
    $('.description').text(data.items[0].snippet.description)
}
getVideo4();



switch (new WeatherType. getVideo()) {
    case Rainy:
    getVideo()
    break;
    case Sunny:
    getVideo2()
    break;
    case Snowy:
    getVideo3()
    case Cloudy:
    getVideo4()
}
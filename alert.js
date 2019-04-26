chrome.alarms.onAlarm.addListener(function(alarm) {
  fetchStars();
  });

  function fetchStars() { //gets the list of currencies

    chrome.extension.getBackgroundPage().console.log("fetching stars");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", chrome.extension.getURL('https://api.github.com/repos/Microsoft/AzureTipsAndTricks'), true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4) {
        var starCount = JSON.parse(xhr.responseText).stargazers_count;
        chrome.extension.getBackgroundPage().console.log(starCount);
        chrome.browserAction.setBadgeBackgroundColor({color: [0, 93, 255, 100]});
        //var number = Math.floor(Math.random() * 10);
        chrome.browserAction.setBadgeText({text: starCount.toString()});
  
      }
    }
    xhr.send();
  }
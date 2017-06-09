myJukebox = {
    myMusicArray: [
        {title: "The Message", artist: "Nas", url: "The Message.mp3"},
        {title: "Paint It Black", artist: "Rolling Stones", url: "Paint It Black.mp3"},
        {title: "Smile", artist: "Vitamin C", url: "Smile.mp3"},
        {title: "Smooth", artist: "Santana", url: "Smooth.mp3"},
    ],
    currentSongIndex: 0,

initialize: function() {
    console.log("==initialize==");
    var onAudio = document.getElementById("audio");
    var myButton = document.getElementById("pbutton");
    var myButton2 = document.getElementById("pbutton2");
    var audioURL;
    var currentFile = document.getElementById("audio");
    myJukebox.playAudio();
    myJukebox.activateInterface();
    myJukebox.initSongList();
    myJukebox.displayNewSong();
},

initSongList: function() {
    for (var i = 0; i < myJukebox.myMusicArray.length; i++) {
    var nextSong = myJukebox.myMusicArray[i];
    var songIndex = i;
    var nextTitle = nextSong.title;
    var listItem = document.createElement("li");
    listItem.id = "title_" + songIndex;
    listItem.innerHTML = nextTitle;
    console.log("listItem", listItem);
    songtitles.appendChild(listItem);
    var itemSelector = document.getElementById(listItem.id);
    listItem.innerHTML = nextTitle;
    }
},

activateInterface: function() {
    console.log("==activateInterface==");
    var saveButtonEl = document.getElementById("saveButton");
    console.log("saveButton", saveButton);
    saveButtonEl.addEventListener("click", myJukebox.saveNewSong);
    songtitles.addEventListener("click", myJukebox.myMusicArray.title);
},

Song: function(title, artist, url) {
    console.log("song");
    this.title = title;
    this.artist = artist;
    this.url = url;
},

nextURL: function() {
    console.log("==changeURL==");
    var audio = document.getElementById("audio");
    audio.pause();
    var songMP3 = document.getElementById("songmp3");
    myJukebox.currentSongIndex++;
    if (myJukebox.currentSongIndex >= myJukebox.myMusicArray.length) {
        myJukebox.currentSongIndex = 0;
    }
    songMP3.src = myJukebox.myMusicArray[myJukebox.currentSongIndex].url;
    audio.load();
    audio.play();
},

// IN-PROGRESS//
saveNewSong: function() {
    console.log("==saveNewSong==");
    title = document.getElementById("titleinput").value;
    artist = document.getElementById("artistinput").value;
    url = document.getElementById("urlinput").value;
    console.log(title, artist, url);
    var nextSong = new myJukebox.Song(title, artist, url);
    console.log("nextSong", nextSong);
    myJukebox.myMusicArray.push(nextSong);
    console.log("myJukebox.myMusicArray", myJukebox.myMusicArray);
    myJukebox.makeSongList();
    },

makeSongList: function() {
    console.log("==makeSongList==");
    var nextListItem = " ";
    var songtitles = document.getElementById("songtitles");
    console.log("songtitles", songtitles);
    var songIndex = myJukebox.myMusicArray.length-1;
    var nextTitle = myJukebox.myMusicArray[songIndex].title;
    var listItem = document.createElement("li");
    listItem.id = "title_" + songIndex;
    listItem.innerHTML = nextTitle;
    console.log("listItem", listItem);
    songtitles.appendChild(listItem);
    var itemSelector = document.getElementById(listItem.id);
    myJukebox.displayNewSong();
    },

activateSongList: function() {
    console.log("==activateSongList==");
    var songClicks = document.getElementById("musicstuff");
    var nextSongItem = document.createElement("li");
    nextSongItem.innerHTML = "test1";
    songClicks.appendChild(nextSongItem);
    console.log("songClicks", songClicks);
        for (var i = 0; i < songClicks.length; i++) {
        var nextClickEl = songClicks[i];
        console.log("nextClickEl", nextClickEl);
        console.log(myJukebox.displaySelectedSong);
        myJukebox.displaySelectedSong();
        }
    },

playNewSong: function() {
    console.log("==playNewSong==");
    var newSong = document.getElementById("title_");
    },

getSongInfo: function(event) {
    console.log("==getSongInfo==");
    var clickedSong = event.currentTarget.id;
    console.log("clickedSong", clickedSong);
    var songIndex = clickedSong.indexOf("_") + 1;
    console.log("songIndex", songIndex);
    var indexSub = clickedSong.substring(SongIndex);
    console.log("indexSub", indexSub);
    var selectedSongInfo = myJukebox.myMusicArray[indexSub];
    console.log("selectedSongInfo", selectedSongInfo);
    var showSong = document.getElementById("jukePlayer");
    console.log("showSong", showSong);
    },

displaySelectedSong: function() {
    console.log("==displaySelectedSong==");
    var titleId = event.currentTarget.id;
    console.log(event.currentTarget.id);
    var titleIndex = titleId.indexOf("_") + 1;
    console.log(titleIndex);
    var songIndex = titleId.substring(titleIndex);
    console.log(songIndex);
    var selectSong = myJukebox.myMusicArray[songIndex];
    console.log(selectSong);
    var songTags = document.getElementById("musicstuff").getElementsByTagName("p");
    console.log(songTags);
    songTags[0].innerText = selectSong.title;
    songTags[1].innerText = selectSong.artist;
    songTags[2].innerText = selectSong.url;
    console.log("song");
    document.getElementById("audio").src = selectSong.url;
    myJukebox.playAudio();
},

playAudio: function() {
    var currentFile = document.getElementById("audio");
    currentFile.play();
    },
pauseAudio: function() {
    var currentFile = document.getElementById("audio");
    currentFile.pause();
    },
displayNewSong: function() {
    var newSongList = document.getElementsByTagName("li");
    for (var i = 0; i < newSongList.length; i++) {
    newSongList[i].addEventListener("click", myJukebox.displaySelectedSong);
    }
},

shuffleAudio: function() {
    var currentFile = document.getElementById("songmp3");
    var currentURL = document.getElementById("audio");
    myJukebox.pauseAudio();
    currentURL.src = myJukebox.myMusicArray[Math.floor(Math.random() * myJukebox.myMusicArray.length)].url;
    console.log("currentURL.src", currentURL.src);
    myJukebox.playAudio();
},

}
myJukebox.initialize();
console.log(document.getElementsByTagName("li"));

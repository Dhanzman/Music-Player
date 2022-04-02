const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Music
const songs = [
  {
    name: 'jacinto-1',
    displayName: 'Eletric Chill Machine',
    artist: 'Dhanzman ',
  },

  {
    name: 'jacinto-2',
    displayName: 'Seven Nation Army(Remix)',
    artist: 'Dhanzman ',
  },
  {
    name: 'jacinto-3',
    displayName: 'Hello to Mary',
    artist: 'Dhanzman ',
  },
  {
    name: 'metric-1',
    displayName: 'my dear friend',
    artist: 'Dhanzman ',
  },
];

// Check if playing
let isPlaying = false;
// Play
function playSong() {
  isPlaying = true;
  playBtn.classList.replace('fa-play', 'fa-pause');
  playBtn.setAttribute('title', 'Pause');
  music.play();
}

// Pause
function pauseSong() {
  isPlaying = false;
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
  music.pause();
}

// Play or Pause eventlistener
playBtn.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update the DOM
function loadSong(song) {
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  music.src = `music/${song.name}.mp3`;
  image.src = `img/${song.name}.jpg`;
}

// Current Songs
let songIndex = 0;
// Previous Song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  if (playSong) {
    playSong();
  }
}
// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songIndex.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  if (playSong) {
    playSong();
  }
}

// On Load First Song
loadSong(songs[songIndex]);

// EventListener
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

let meme = document.getElementById('meme');
let title = document.getElementById('title');
let getMemeBtn = document.getElementById('get-meme-btn');
let url = 'https://meme-api.com/gimme/';

let subreddits = ['memes', 'dankmemes', 'me_irl', 'catmemes', 'wholesomememes', 'dogmemes'];

let getMeme = () => {
  let randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
  fetch(url + randomSubreddit)
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      // Display meme image and title only after image loads
      let memeImg = new Image();
      memeImg.onload = () => {
        meme.src = data.url;
        title.innerHTML = data.title;
      }
      memeImg.src = data.url;
    })
}

getMemeBtn.addEventListener('click', getMeme);
window.addEventListener('load', getMeme);
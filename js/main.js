let stories = [
  {
    id:1,
    mediaUrl: ['images/story1.png'],
    title: 'elle',
    time: '19h',
    user: 'images/user1.jpeg',
    type: 'img'
  },
  {
    id:2,
    mediaUrl: ['images/video1.mp4'],
    title: 'prof_books',
    time: '10h',
    user: 'images/user2.jpeg',
    type: 'video'
  },
  {
    id:3,
    mediaUrl: ['images/story6.png'],
    title: 'austinmcbroom',
    time: '2h',
    user: 'images/user3.jpeg',
    type: 'img'
  },
  {
    id:4,
    mediaUrl: ['images/video2.mp4'],
    title: 'alaiamarie',
    time: '10h',
    user: 'images/user2.jpeg',
    type: 'video'
  },
  {
    id:5,
    mediaUrl: ['images/story3.png','images/story2.png','images/story5.png'],
    title: 'iridescent',
    time: '10h',
    user: 'images/user2.jpeg',
    type: 'img'
  },
  {
    id:4,
    mediaUrl: ['images/story4.png'],
    title: 'catherinepaith',
    time: '11m',
    user: 'images/user4.jpeg',
    type: 'img'
  },
  {
    id:5,
    mediaUrl: ['images/story5.png'],
    title: 'steelmcbroom',
    time: '6h',
    user: 'images/user1.jpeg',
    type: 'img'
  },
  {
    id:6,
    mediaUrl: ['images/story3.png'],
    title: 'via_ren',
    time: '33m',
    user: 'images/user6.jpeg',
    type: 'img'
  },
  {
    id:7,
    mediaUrl: ['images/story1.png'],
    title: 'elle',
    time: '2h',
    user: 'images/user3.jpeg',
    type: 'img'
  },
  {
    id:8,
    mediaUrl: ['images/story5.png','images/story5.png'],
    title: 'alaiamarie',
    time: '10h',
    user: 'images/user2.jpeg',
    type: 'img'
  },
]


let storyList = document.getElementById('storyList');

function showStories(wrapper,arr){
  arr.forEach((item)=>{
    let li = document.createElement('li');
    if(item.type=='img'){
      li.innerHTML = `
      <img  class="story-img" src="${item.mediaUrl[0]}" alt="story">
      <div id="innerContent" class="inner-content">
      <div class="parts">
      <div class="part"></div>
      </div>
      <div class="inner-header">
      <img src="${item.user}" alt="user-img" class="user-img">
      <div class="text-box">
      <h4 class="user-title">  ${item.title} </h4>
      <p class="time-text">${item.time}</p>
      </div>
      </div>
      </div>
      <div class="profile">
    <img class="profile-photo" src="${item.user}" alt="user">
    <p class="profile-name"> ${item.title}</p>
  </div>
  <form class="footer-form">
  <input type="text" class="footer-input" placeholder="Reply to ${item.title}">
  <button class="btn-send"><i class='bx bx-send' ></i></button>
</form>
      `;
    }
   else if(item.type=='video'){
      li.innerHTML = `
      <video controls autoplay class="story-img" src="${item.mediaUrl[0]}"></video>
      <div id="innerContent" class="inner-content">
      <div class="parts">
      <div class="part"></div>
      </div>
      <div class="inner-header">
      <img src="${item.user}" alt="user-img" class="user-img">
      <div class="text-box">
      <h4 class="user-title">  ${item.title} </h4>
      <p class="time-text">${item.time}</p>
      </div>
      </div>
      </div>
      <div class="profile">
    <img class="profile-photo" src="${item.user}" alt="user">
    <p class="profile-name"> ${item.title}</p>
  </div>
  <form class="footer-form">
  <input type="text" class="footer-input" placeholder="Reply to ${item.title}">
  <button class="btn-send"><i class='bx bx-send' ></i></button>
</form>
      `;
    }

    li.classList='stories-item';
    wrapper.appendChild(li)
  })

}

showStories(storyList,stories)

let prev = document.getElementById('prev');
let next = document.getElementById('next');
let listItem = document.querySelectorAll('#storyList li');
let innerContent = document.querySelectorAll('.inner-content');
let storyImg = document.querySelectorAll('.story-img');
let profile = document.querySelectorAll('.profile');

let footerForm = document.querySelectorAll('.footer-form');

listItem.forEach((element,idx) => {
  if(idx<=1){
    element.addEventListener('click', prevSlide)
  }
 else{
  element.addEventListener('click', nextSlide)
 }
})

let idx=0;
let a=2;
listItem[a].style.transform= `scale(2.2)`
listItem[a].style.margin= `130px`;
innerContent[a].style.display='block';
profile[a].style.display='none';
footerForm[a].style.display='flex';
storyImg[a].style.opacity= `1`;

let b = listItem.length-1;
prev.addEventListener('click',prevSlide)

function prevSlide(){
  if(a>0){
    idx++;
    a--;
    storyList.style.transform= `translateX(${idx*220}px)`
    listItem[a].style.transform= `scale(2.2)`;
    listItem[a].style.margin= `130px`;
    innerContent[a].style.display='block';
    footerForm[a].style.display='flex';
    profile[a].style.display='none';
    storyImg[a].style.opacity= `1`;
    listItem[a].style.transition= `all 0.4s ease`;
    listItem[a+1].style.transform= `scale(1)`;
    listItem[a+1].style.margin= `20px`;
    innerContent[a+1].style.display='none';
    profile[a+1].style.display='flex';
    footerForm[a+1].style.display='none';
    storyImg[a+1].style.opacity= `0.5`;
  }

}

function nextSlide(){

if(a<b){
  idx--;
  a++;
  storyList.style.transform= `translateX(${idx*220}px)`
  listItem[a].style.transform= `scale(2.2)`;
  listItem[a].style.margin= `130px`;
  innerContent[a].style.display='block';
  footerForm[a].style.display='flex';
  profile[a].style.display='none';
  storyImg[a].style.opacity= `1`;
  listItem[a].style.transition= `all 0.4s ease`;
  listItem[a-1].style.transform= `scale(1)`;
  listItem[a-1].style.margin= `20px`;
  innerContent[a-1].style.display='none';
  profile[a-1].style.display='flex';
  footerForm[a-1].style.display='none';
  storyImg[a-1].style.opacity= `0.5`;
}

}

next.addEventListener('click',nextSlide);

setInterval( nextSlide, 10000);





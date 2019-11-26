const baseURL = 'https://api.musixmatch.com/ws/1.1/';
const key = 'fdbbef4c6d45f4dbba237679caf74dad'
let url;

const searchTerm = document.querySelector('.search');
const submitBtn = document.getElementById('button');
submitBtn.addEventListener("click",artist);


const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');
const section = document.querySelector('section');


let pageNumber = 0;
let displayNav = false;

function artist(e){
    e.preventDefault()     
url=`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?apikey=fdbbef4c6d45f4dbba237679caf74dad&q_artist=${searchTerm.value}&page_size=3&page=1&s_track_rating=desc`
    
    fetch(url)
    .then(response=>response.json())
    .then(json=>{
        // console.log(json)
       
       displayResults(json)

    })
        
    
}

function displayResults(json){
    for(i=0; i<json.message.body.track_list.length; i++){
        let h3=document.createElement("h3")
        h3.innerText=json.message.body.track_list[i].track.album_name
        let results=document.getElementById("results")
        results.appendChild(h3)
    console.log(json.message.body.track_list[i].track.album_name)}
    
}


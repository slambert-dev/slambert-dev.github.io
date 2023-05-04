


console.log("Hello");


let imgElement= document.getElementsByClassName("burger")[0];

let navElement= document.getElementsByClassName("navcontent")[0];

navElement.style.opacity ='0';

imgElement.onclick = () => {

if (navElement.style.opacity === '1'){
    navElement.style.opacity = '0';
    
}else {

    (navElement.style.opacity ='1')
    imgElement.classList.add("burger");
}}

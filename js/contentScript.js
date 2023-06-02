const contentBox = document.getElementById('content');
const div = document.createElement('div');
const infoBox = document.getElementById('description-box');
const moreInfo = document.getElementById('more-info');




//BOTONES

moreInfo.addEventListener('click', (e) => {
    e.preventDefault();
    infoBox.classList.contains('hide')?infoBox.classList.remove('hide'):infoBox.classList.add('hide');
})




const checkContent = async () =>{
    const currentUrl = getCurrentUrl();

};

function getCurrentUrl (){
    return window.location.href
}


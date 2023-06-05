const contentBox = document.getElementById('content');
const div = document.createElement('div');
const infoBox = document.getElementById('description-box');
const thumbnailPicture = document.getElementById('project-thumbnail');
const projectVideo = document.getElementById('project-video');
const videoZone = document.getElementById('video-zone');

//BOTONES
const moreInfo = document.getElementById('more-info');
const showVideo = document.getElementById('show-video'); 





//INICIO Y PINTADO DE PROYECTOS 

document.addEventListener('DOMContentLoaded', () => {
    getData();
})

const getData = async () => {
    const res = await fetch('../js/stockTest.json')
    .then( res => res.json())
    .then(data => console.log(data))
}

moreInfo.addEventListener('click', (e) => {
    e.preventDefault();
    if(infoBox.classList.contains('hide')) {
        infoBox.classList.remove('hide');
        moreInfo.innerHTML = 'Ocultar descripción';

    } else {
        infoBox.classList.add('hide');
        moreInfo.innerHTML = 'Mostrar descripción';
    }
})

showVideo.addEventListener('click', (e) => {
    e.preventDefault();
    if(thumbnailPicture.classList.contains('hide')) {
        thumbnailPicture.classList.remove('hide');
        projectVideo.classList.add('hide');
        showVideo.innerHTML = 'Mostrar video';
    } else {
        thumbnailPicture.classList.add('hide');
        projectVideo.classList.remove('hide');
        showVideo.innerHTML = 'Mostrar imagenes'
    }
})




//FUNCIONES



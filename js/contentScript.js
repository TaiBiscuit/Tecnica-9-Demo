const contentBox = document.getElementById('content');
const div = document.createElement('div');
const infoBox = document.getElementById('description-box');

//RENDER ZONES

const buttonZone = document.getElementById('select-list-ul');
const imageZone = document.getElementById('image-zone');
const videoZone = document.getElementById('video-zone');


//BOTONES
const moreInfo = document.getElementById('more-info');
const showVideo = document.getElementById('show-video'); 
const goDrive = document.getElementById('go-drive');





//INICIO Y PINTADO DE PROYECTOS 

document.addEventListener('DOMContentLoaded', () => {
    const data = getData()
    .then(data => renderContent(data))
})





const getData = async () => {
    const res = await fetch('../js/stockTest.json')
    const data = await res.json()
    return data
}




//BUTTON EVENTS

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
    const thumbnailPicture = document.getElementById('project-thumbnail');
    const projectVideo = document.getElementById('project-video');

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

const renderContent = async (data) => {

    //BOTONES

    renderButtons(data)


    //DEFAULT



    //IMAGEN

    const imageDiv = document.createElement('div');
    imageZone.innerHTML='';
    imageDiv.classList.add('yes');

    imageDiv.innerHTML=
    `
    <img  class="project-thumbnail" id="project-thumbnail" src="${data[0].thumbnail}" alt="Project Thumbnail">
    `

    imageZone.appendChild(imageDiv)

    //VIDEO

    const videoDiv = document.createElement('div');
    videoZone.innerHTML='';
    videoDiv.classList.add('yes');

    videoDiv.innerHTML=
    `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${data[0].video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="project-video hide" id="project-video"></iframe>
    `

    videoZone.appendChild(videoDiv);

    //DESCRIPCION

    const descDiv = document.createElement('div');
    infoBox.innerHTML='';
    descDiv.classList.add('yes');

    descDiv.innerHTML=
    `
    <p class="description-text" id="description-text">${data[0].descripcion}"</p>
    `

    infoBox.appendChild(descDiv);

}



const renderButtons = async (data) => {
    buttonZone.innerHTML = '';
    
    data.forEach(data => {
        const div = document.createElement('div');
        div.classList.add('btns');
        div.innerHTML +=
        `
        <li class="student-list-li"><button class="student-btn" id=${data.id}>${data.nombre}</button>
        <span class="student-list-name">${data.integrantes}</span>
        </li>
        `
        buttonZone.appendChild(div)
    });

    buttonZone.addEventListener('click', (e) => {
        e.preventDefault();
        const selected = e.target.id;
        const projectSelected = data.findIndex((data) => data.id == selected);
        if(projectSelected >= 0) {
            paintAgain(selected, data)
        }
    })
}



const paintAgain = async (selected, data) => {

    //IMAGEN

    const imageDiv = document.createElement('div');
    imageZone.innerHTML='';
    imageDiv.classList.add('yes');

    imageDiv.innerHTML=
    `
    <img  class="project-thumbnail" id="project-thumbnail" src="${data[selected-1].thumbnail}" alt="Project Thumbnail">
    `

    imageZone.appendChild(imageDiv)

    //VIDEO

    const videoDiv = document.createElement('div');
    videoZone.innerHTML='';
    videoDiv.classList.add('yes');

    videoDiv.innerHTML=
    `
    <iframe width="560" height="315" src="https://www.youtube.com/embed/${data[selected-1].video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="project-video hide" id="project-video"></iframe>
    `

    videoZone.appendChild(videoDiv);

    //DESCRIPCION

    const descDiv = document.createElement('div');
    infoBox.innerHTML='';
    descDiv.classList.add('yes');

    descDiv.innerHTML=
    `
    <p class="description-text" id="description-text">${data[selected-1].descripcion}"</p>
    `

    infoBox.appendChild(descDiv);
}
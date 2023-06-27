//FBASE
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js'
import { getFirestore, getDocs, collection } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js'

const firebaseConfig = {
  apiKey: "AIzaSyAElElfAgw8WubSEdK4CRlrV6BSWPzCfzY",
  authDomain: "tecnica-9-lanus-proyectos.firebaseapp.com",
  projectId: "tecnica-9-lanus-proyectos",
  storageBucket: "tecnica-9-lanus-proyectos.appspot.com",
  messagingSenderId: "209422117292",
  appId: "1:209422117292:web:a6d5d944163f1824b83209"
};


const app = initializeApp(firebaseConfig);
let db = getFirestore(app);


const cardsBox = document.getElementById('cards-container');
const div = document.createElement('div');

//INICIO Y PINTADO DE PROYECTOS 

document.addEventListener('DOMContentLoaded', async () => {
    const docRef = collection(db, 'proyectos');
    const docs = await getDocs(docRef)
    .then((products) => {
      if (products.size === 0) {
        console.log('No products');
      }
      return products.docs.map((doc) => ({id: doc.id, ...doc.data() })) 
    })
    .then(docs => renderContent(docs))
})


const renderContent = async (data) => {
    const imgBoxes = document.createElement('div');
    cardsBox.innerHTML='';
    for(let elem of data) {
/*         imgBoxes.classList.add('card'); */
        cardsBox.innerHTML+= 
        `
        <div class="card">
        <img src="${elem.thumbnail}" alt="" class="card-img">
        </div>
        `
/*         imgBoxes.innerHTML=
        `
        <img src="${elem.thumbnail}" alt="Project Thumbnail">
        `
        cardsBox.appendChild(imgBoxes)  */
    }
}
const currentYear = document.getElementById('current-year');
const date = new Date();
const thisYear = date.getFullYear();



currentYear.innerHTML = `${thisYear}`


const introText = document.getElementsByClassName('intro-text');
const testBtn = document.getElementById('test-btn');

testBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
})
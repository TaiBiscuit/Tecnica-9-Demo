const currentYear = document.getElementById('current-year');
const date = new Date();
const thisYear = date.getFullYear();

currentYear.innerHTML = `${thisYear}`
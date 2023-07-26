// Getting DOM elements
const sectionOneMainTitle = document.querySelector('.section-one-welcome .main-title-container .title');
const sectionOneDescription = document.querySelector('.section-one-welcome .main-title-container .page-description');
const sectionTwoPlanOne = document.querySelector('.section-two-plans .plan-one');
const sectionTwoPlanTwo = document.querySelector('.section-two-plans .plan-two');
const sectionTwoPlanThree = document.querySelector('.section-two-plans .plan-three');

console.log(sectionOneMainTitle);
window.addEventListener('load', (event) => {
    sectionOneMainTitle.classList.add('slide-y-axis');
    sectionOneDescription.classList.add('slide-x-axis');
    sectionTwoPlanOne.classList.add('slide-x-axis');
    sectionTwoPlanTwo.classList.add('slide-y-axis');
    sectionTwoPlanThree.classList.add('slide-x-axis');
});
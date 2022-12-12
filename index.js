const array = document.querySelector('.arrow');

const body = document.querySelector('body');

const featuresDropdown = document.querySelector('.featuresDropdown');
const companyDropdown = document.querySelector('.companyDropdown');


const featuresArrowUp = document.querySelector('.featuresArrowUp');
const featuresArrowDown = document.querySelector('.featuresArrowDown');

const companyArrowUp = document.querySelector('.companyArrowUp');
const companyArrowDown = document.querySelector('.companyArrowDown');

const featuresBtn = document.querySelector('.features');

const companyBtn = document.querySelector('.company');






//Nav Elements
const nav = document.querySelector('nav');
const navUL = document.querySelector('.navUL');
const logRegBox = document.querySelector('.logRegBox');



// Mobile Menu Buttons
const menuSVG = document.querySelector('.menuButton');
const menuOpen = document.querySelector('.menuOpen');
const menuClose = document.querySelector('.menuClose');


//Mobile View - Grey Background behind Nav
const screen = document.querySelector('.screen');







//Mobile view: clicking the menu SVG Icon
// FUNCTION: to change the class Properties of the navigation elements, so that they appear vertically, as well as display








//LogRegBox & Nav both should be turned into display:block, flex-direction:column...
//thair margins/positioning will need to be adjusted.
//<nav> will need to be align-self:flex-end, so that it aligns with the right side of the the body flex column.
//logRegBox 
// a backgroundcolor needs to be added to <nav>;

//create a utility class in css which contains all of the property changes applicable to BOTH the <nav> & .logRegBox, and do a .classList.add('thatClass');
// however, they have changes that differ which need to be made too







menuSVG.addEventListener('click', function(e){

//<nav> (and its .logRegBox div) display toggle on/off
    nav.classList.toggle('showBtn');      // <-- display:block on/off for <nav>, z-index to higher (15) than .screen (grery BG div)(10)

//SVG Icon Toggle: Open/Close itself
    menuOpen.classList.toggle('showBtn'); 
    menuClose.classList.toggle('showBtn');

//Grey BG display toggle on/off
    screen.classList.toggle('showScreen');

//







    



})






//switch the arrow functions: one function for each; Features & Company

const changeArrowFeatures = function(){
    featuresArrowDown.classList.toggle('show');
    featuresArrowUp.classList.toggle('show');
};

const changeArrowCompany = function(){
    companyArrowDown.classList.toggle('show');
    companyArrowUp.classList.toggle('show');
};


//show or hide the dropdown list - one set (on & off) for both Features & Company

// FEATURES btn On and Off
featuresBtn.addEventListener('mouseover', function(){
    changeArrowFeatures();
    featuresDropdown.classList.add('show');
});

featuresDropdown.addEventListener('mouseleave', function(){
    // changeArrowFeatures();
    featuresDropdown.classList.remove('show');
});



companyBtn.addEventListener('mouseover', function(){
    changeArrowCompany();
    companyDropdown.classList.add('show');
});

companyDropdown.addEventListener('mouseleave', function(){
    // changeArrowCompany();
    companyDropdown.classList.remove('show');


});



// ----------- Clicking the nav links/elements -------------------

featuresBtn.addEventListener('click', function(){
    changeArrowFeatures();
    featuresDropdown.classList.toggle('show');
});

companyBtn.addEventListener('click', function(){
    changeArrowFeatures();
    companyDropdown.classList.toggle('show');
});


body.addEventListener('click', function(){

    featuresDropdown.classList.remove('show');
    companyDropdown.classList.remove('show');




    featuresArrowUp.classList.add('show');
    featuresArrowDown.classList.remove('show');


    companyArrowUp.classList.add('show');
    companyArrowDown.classList.remove('show');

})
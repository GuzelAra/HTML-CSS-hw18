'use strict';

let url = window.location.pathname;

//Menu SCRIPTS
let menuImg = document.querySelector('.menu_img');
let menuCloseImg = document.querySelector('.img_close_menu');
let darkScene = document.querySelectorAll('.brandDark');
let menu = document.querySelector('.menu');
let content = document.querySelector('.brand');
let offers = document.querySelector('.offersWrap');

if(url.includes('index.html')){
    content.addEventListener('click', function (){
        for (let i=0;i<darkScene.length;i++){
            darkScene[i].classList.add('hidden');
        }
        //darkScene.classList.add('hidden');
        menu.classList.add('hidden');
    });

    offers.addEventListener('click', function (){
        for (let i=0;i<darkScene.length;i++){
            darkScene[i].classList.add('hidden');
        }
        //darkScene.classList.add('hidden');
        menu.classList.add('hidden');
    });
}

menuImg.addEventListener('click', function (){
    for (let i=0;i<darkScene.length;i++){
        darkScene[i].classList.toggle('hidden');
    }
    //darkScene.classList.toggle('hidden');
    if((menu.classList.contains('animate__fadeInTopRight'))){
        menu.classList.remove('animate__fadeInTopRight');
    }
    menu.classList.toggle('hidden');
    menu.classList.toggle('animate__fadeInTopRight');
});
menuCloseImg.addEventListener('click', function (){
    for (let i=0;i<darkScene.length;i++){
        darkScene[i].classList.add('hidden');
    }
    //darkScene.classList.add('hidden');
    menu.classList.add('hidden');
});

//FILTERS scripts

let filterLabel = document.querySelector('.filterLabel');
let filterPopup = document.querySelector('.filterPopup');
let filterIcon = document.querySelector('.filterIcon');
let filterPopupCategoryTitle = document.querySelectorAll('.filterPopupCategoryTitle');
let filterSizeCheckboxes = document.querySelector('.filterSizeCheckboxes');
let filterSizeWrap = document.querySelector('.filterSizeWrap');
let filterTrendsWrap = document.querySelector('.filterTrendsWrap');
let filterPriceWrap = document.querySelector('.filterPriceWrap');
let filterTrendsCheckboxes = document.querySelector('.filterTrendsCheckboxes');
let filterPriceCheckboxes = document.querySelector('.filterPriceCheckboxes');
let filterPrice = document.querySelector('.filterPrice');

if(url.includes('catalog.html')){
    filterLabel.addEventListener('click', function (){
        filterPopup.classList.toggle('hidden');
        filterLabel.classList.toggle('filterPopupLabelHover');
        filterIcon.classList.toggle('filterPopupIconHover');

        if(filterIcon.getAttribute('src') === "static/images/catalog/filters/filter.svg"){
            filterIcon.setAttribute('src', "static/images/catalog/filters/filterHover.svg");
        }else {
            filterIcon.setAttribute('src', "static/images/catalog/filters/filter.svg");
        }
    });

    filterPopupCategoryTitle.forEach(function (catTitle){
       catTitle.addEventListener('click', function (event){
           event.target.nextElementSibling.classList.toggle('hidden');// nextElementSibling - даёт нам ближайшего соседа справа для элемента filterpopupCategoryTittle
       });
    });

    filterSizeWrap.addEventListener('click', function (){
       filterSizeCheckboxes.classList.toggle('hidden');
    });

    filterTrendsWrap.addEventListener('click', function (){
        filterTrendsCheckboxes.classList.toggle('hidden');
    });

    filterPriceWrap.addEventListener('click', function (){
        filterPriceCheckboxes.classList.toggle('hidden');
        filterPriceCheckboxes.classList.toggle('filterPriceFixedPosition');
    });


}

//Product scripts

let sliderImages = document.querySelectorAll('.sliderImg');
let sliderLeftArrow = document.querySelector('.sliderLeftArrow');
let sliderRightArrow = document.querySelector('.sliderRightArrow');
let sliderImgFirst = document.querySelector('.sliderImgFirst');
let sliderImgLast = document.querySelector('.sliderImgLast');
let collectionFilterColor = document.querySelector('.collectionFilterColorWrap');
let collectionFilterSize = document.querySelector('.collectionFilterSizeWrap');
let collectionFilterQuantity = document.querySelector('.collectionFilterQuantityWrap');
let collectionFilterColorCheckboxes = document.querySelector('.filterColorsCheckboxes');
let collectionFilterSizeCheckboxes = document.querySelector('.filterCollectionSizeCheckboxes');
let collectionFilterQuantityCheckboxes = document.querySelector('.filterQuantityCheckboxes');
let nonHiddenEl = null;
console.log(sliderImages);

if(url.includes("product.html")){
    sliderRightArrow.addEventListener('click', function (){
        sliderImages.forEach(function (el){
           if(!(el.classList.contains('hidden'))){
               nonHiddenEl= el;

           }
        });
        nonHiddenEl.classList.add('hidden');
        if(nonHiddenEl.nextElementSibling != null){
            nonHiddenEl.nextElementSibling.classList.remove('hidden');
            if(nonHiddenEl.nextElementSibling.classList.contains('animate__fadeInLeftBig')){
                nonHiddenEl.nextElementSibling.classList.remove('animate__fadeInLeftBig');
            }
            if(!(nonHiddenEl.nextElementSibling.classList.contains('animate__fadeInRightBig'))){
                nonHiddenEl.nextElementSibling.classList.add('animate__fadeInRightBig');
            }
        }else {
            sliderImgFirst.classList.remove('hidden');
            if(sliderImgFirst.classList.contains('animate__fadeInLeftBig')){
                sliderImgFirst.classList.remove('animate__fadeInLeftBig');
            }
            if(!(sliderImgFirst.classList.contains('animate__fadeInRightBig'))){
                sliderImgFirst.classList.add('animate__fadeInRightBig');
            }
        }
    });

    sliderLeftArrow.addEventListener('click', function (){
        sliderImages.forEach(function (el){
            if(!(el.classList.contains('hidden'))){
                nonHiddenEl= el;
            }
        });
        nonHiddenEl.classList.add('hidden');
        if(nonHiddenEl.previousElementSibling != null){
            nonHiddenEl.previousElementSibling.classList.remove('hidden');
            if(nonHiddenEl.previousElementSibling.classList.contains('animate__fadeInRightBig')){
                nonHiddenEl.previousElementSibling.classList.remove('animate__fadeInRightBig');
            }
            if(!(nonHiddenEl.previousElementSibling.classList.contains('animate__fadeInLeftBig'))){
                nonHiddenEl.previousElementSibling.classList.add('animate__fadeInLeftBig');
            }
        }else {
            sliderImgLast.classList.remove('hidden');
            if(sliderImgLast.classList.contains('animate__fadeInRightBig')){
                sliderImgLast.classList.remove('animate__fadeInRightBig');
            }
            if(!(sliderImgLast.classList.contains('animate__fadeInLeftBig'))){
                sliderImgLast.classList.add('animate__fadeInLeftBig');
            }
        }
    });

    collectionFilterColor.addEventListener('click', function (){
        collectionFilterColorCheckboxes.classList.toggle('hidden');
    });

    collectionFilterSize.addEventListener('click', function (){
        collectionFilterSizeCheckboxes.classList.toggle('hidden');
    });sww

    collectionFilterQuantity.addEventListener('click', function (){
        collectionFilterQuantityCheckboxes.classList.toggle('hidden');
    })
}



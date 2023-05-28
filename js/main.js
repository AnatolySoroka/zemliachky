$(document).ready(function () {
    $(".about__slider").slick({
        arrows: true,
        lazyLoad: 'ondemand',
        // lazyLoad: 'progressive',
        // slidesToShow: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    variableWidth: true,
                    centerPadding: '200px',
                    // slidesToShow: 2,
                    arrows: false,
                }
            },]
    });
});


$(document).ready(function () {
    $(".ukrainian-heroes__slider").slick({
        arrow: true,
        variableWidth: true,
        lazyLoad: 'ondemand',
        // autoplay: true,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    arrows: false,
                }
            },]
    });
});

$(document).ready(function () {
    $(".psyhological-support__slider").slick({
        arrows: true,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        // autoplay: true,
        // centerPadding: '0px',
    });
});

$(document).ready(function () {
    $(".partners__slider").slick({
        arrow: true,
        // autoplay: true,
        infinite: false,
        variableWidth: true,
        lazyLoad: 'ondemand',
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    arrows: false,
                    // slidesToShow: 2,
                }
            }]
    });
});


$(document).ready(function () {
    $(".about-project__slider").slick({
        arrows: true,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        // variableWidth: true,
        // centerPadding: '0px',
        // autoplay: true,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    // centerPadding: '0px',
                    // centerMode: false,
                }
            },]
    });
});

$(document).ready(function () {
    $(".goal__slider").slick({
        arrows: true,
        slidesToShow: 1,
        // variableWidth: true,
        lazyLoad: 'ondemand',
        // autoplay: true,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    // centerPadding: '0px',
                    // centerMode: false,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    // slidesToShow: 1.2,
                    arrows: false,
                    variableWidth: true,
                }
            },]
    });
});


$(document).ready(function () {
    $(".reports__slider").slick({
        arrows: true,
        lazyLoad: 'ondemand',
        // slidesToShow: 4,
        variableWidth: true,
        // autoplay: true,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    // slidesToShow: 3,
                    arrows: false,
                    // centerPadding: '0px',
                    // centerMode: false,
                }
            },]
    });
});

// burger btn

const burgerBtn = document.querySelector('.burger__btn');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    const header = document.querySelector('.header');
    if (burgerBtn.classList.contains('active')) {
        header.style.maxHeight = header.scrollHeight + 'px'
    } else {
        header.style.maxHeight = null;
    }
})



// select language
const language = document.querySelectorAll('.language');
language.forEach(el => {
    el.addEventListener('mouseover', () => {
        el.querySelector('.select-language__list').classList.add('active');
    });
    el.addEventListener('mouseout', () => {
        el.querySelector('.select-language__list').classList.remove('active')
    });

})


// accordion
const accordion = document.querySelectorAll('.item__title');

accordion.forEach(el => {
    el.addEventListener('click', () => {
        const content = el.nextElementSibling;

        if (content.style.maxHeight) {
            document.querySelectorAll('.item__content').forEach(el => {
                el.style.maxHeight = null;
                el.parentElement.classList.remove('active');
            });
        } else {
            document.querySelectorAll('.item__content').forEach(el => {
                el.style.maxHeight = null;
                el.parentElement.classList.remove('active');
            });
            content.style.maxHeight = content.scrollHeight + 'px';
            content.parentElement.classList.add('active');
        }
    })
});


//////
const list = document.querySelectorAll('.help__list-item');
list.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('active')
        el.nextElementSibling.classList.toggle('active')
    })
})



// copy to clipboard
const allText = document.querySelectorAll('.accordion__item .item__content p');
if (allText.length > 0) {
    allText.forEach(el => {
        el.addEventListener('click', () => {
            const copyText = el.querySelector('span').innerText;
            copyToClipboard(copyText)
        });
    });
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    const popup = document.querySelector('.my-popup');
    popup.classList.add('show');
    setTimeout(() => {
        popup.classList.remove('show');
    }, 2000);
}

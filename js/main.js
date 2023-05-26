$(document).ready(function () {
    $(".about__slider").slick({
        arrow: true,
        slidesToShow: 1,
        centerPadding: '0px',
        // autoplay: true,
    });
});


$(document).ready(function () {
    $(".ukrainian-heroes__slider").slick({
        arrow: true,
        slidesToShow: 3,
        // centerPadding: '0px',
        // centerMode: true,
        // adaptiveHeight: true,
        autoplay: true,
        // variableWidth: true
    });
});

$(document).ready(function () {
    $(".psyhological-support__slider").slick({
        arrow: true,
        slidesToShow: 1,
        autoplay: true,
        // centerPadding: '0px',
    });
});

$(document).ready(function () {
    $(".partners__slider").slick({
        // arrow: true,
        slidesToShow: 6,
        // centerPadding: '0px',
        autoplay: true,
    });
});


$(document).ready(function () {
    $(".about-project__slider").slick({
        arrow: true,
        slidesToShow: 1,
        // centerPadding: '0px',
        autoplay: true,
    });
});

$(document).ready(function () {
    $(".goal__slider").slick({
        arrow: true,
        slidesToShow: 1,
        // centerPadding: '0px',
        autoplay: true,
    });
});


$(document).ready(function () {
    $(".reports__slider").slick({
        arrow: true,
        slidesToShow: 4,
        // centerPadding: '0px',
        autoplay: true,
    });
});


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

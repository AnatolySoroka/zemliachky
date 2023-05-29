$(document).ready(function () {
    $(".about__slider").slick({
        arrows: true,
        lazyLoad: 'ondemand',
        autoplay: true,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    variableWidth: true,
                    centerPadding: '200px',
                    arrows: false,
                }
            },]
    });
});


$(document).ready(function () {
    $(".ukrainian-heroes__slider").slick({
        arrow: true,
        variableWidth: true,
        lazyLoad: 'progressive',
        autoplay: true,
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
        autoplay: true,
    });
});

$(document).ready(function () {
    $(".partners__slider").slick({
        arrow: true,
        autoplay: true,
        infinite: false,
        variableWidth: true,
        lazyLoad: 'progressive',
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
                }
            }]
    });
});


$(document).ready(function () {
    $(".about-project__slider").slick({
        arrows: true,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        autoplay: true,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },]
    });
});

$(document).ready(function () {
    $(".goal__slider").slick({
        arrows: true,
        slidesToShow: 1,
        lazyLoad: 'ondemand',
        autoplay: true,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 426,
                settings: {
                    arrows: false,
                    variableWidth: true,
                }
            },]
    });
});


$(document).ready(function () {
    $(".reports__slider").slick({
        arrows: true,
        lazyLoad: 'progressive',
        variableWidth: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1190,
                settings: {
                    arrows: false,
                }
            },]
    });
});



// scroll to top button
const scrollToTopBtn = document.querySelector('.scroll-top__btn');

scrollToTopBtn.addEventListener('click', goTop);
window.addEventListener('scroll', trackScroll);

function trackScroll() {
    const offset = window.pageYOffset;
    const coords = document.documentElement.clientHeight;
    if (offset > coords) {
        scrollToTopBtn.classList.add('scroll-top__btn--show');
    } else {
        scrollToTopBtn.classList.remove('scroll-top__btn--show')
    }
}

function goTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -65);
        setTimeout(goTop, 0)
    }
}

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



// video
const videoItem = document.querySelector('.video__item');
const videoItemBg = document.querySelector('.video__item-bg')

window.addEventListener('DOMContentLoaded', () => {
    const playBtn = document.querySelector('.video__item-play');

    playBtn.addEventListener('click', () => {

        if (videoItem.classList.contains('ready')) {
            return;
        }

        videoItem.classList.add('ready');
        const src = videoItem.dataset.src;

        videoItem.insertAdjacentHTML('afterbegin', `<iframe src="${src}" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>`);
        videoItemBg.classList.add('hide')
    })
})
// const videoInit = (selector) => {
//     const videos = document.querySelectorAll(selector)

//     if (videos.length > 0) {
//         videos.forEach(video => {
//             videoGenerate(video)
//         })
//     }
// }

// const videoGenerate = (video) => {
//     const btn = video.querySelector('.video-block__button')
//     const videoID = btn.dataset.videoId
//     const container = video.querySelector('.video-block__inner')

//     btn.addEventListener('click', () => {
//         const iframe = iframeGenerate(videoID)

//         container.innerHTML = '';
//         container.appendChild(iframe)
//     })
// }

// const iframeGenerate = (videoID) => {
//     const iframe = document.createElement('iframe')

//     const src = `https://www.youtube.com/embed/${videoID}?rel=0&showinfo=0&autoplay=1`

//     iframe.setAttribute('src', src)
//     iframe.setAttribute('frameborder', '0')
//     iframe.setAttribute('allow', 'autoplay')
//     iframe.setAttribute('allowfullscreen', '')
//     iframe.classList.add('video-block__content')

//     return iframe
// }

// videoInit('.video-block')
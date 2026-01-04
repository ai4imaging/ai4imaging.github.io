document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    const carbox = document.querySelector('.carbox');
    const leftBtn = document.getElementById('leftBtn');
    const rightBtn = document.getElementById('rightBtn');

    let scrollLeft = 0;
    const singleWidth = carbox.children[0].offsetWidth; // 假设每个元素宽度相等
    const totalWidth = carbox.offsetWidth; // 容器宽度，假设等于单个元素的宽度
    let maxScrollLeft = carbox.scrollWidth - totalWidth;

    rightBtn.addEventListener('click', () => {
        leftBtn.classList.remove('block-bot-active');
        rightBtn.classList.add('block-bot-active');
        for (let i = 0; i < 4; i++) {
            carbox.children[i].style.display = 'none'
        }
        carbox.children[4].style.display = 'block'
        // if (scrollLeft < maxScrollLeft) {
        //     scrollLeft = Math.min(scrollLeft + singleWidth, maxScrollLeft);
        //     carbox.scrollLeft = scrollLeft;
        // }
    });

    leftBtn.addEventListener('click', () => {
        rightBtn.classList.remove('block-bot-active');
        leftBtn.classList.add('block-bot-active');
        for (let i = 0; i < 5; i++) {
            carbox.children[i].style.display = 'block'
        }
        carbox.children[4].style.display = 'none'
        // if (scrollLeft > 0) {
        //     scrollLeft = Math.max(scrollLeft - singleWidth, 0);
        //     carbox.scrollLeft = scrollLeft;
        // }
    });
    const moreBtn = document.getElementById('moreBtn');
    const newBoxes = document.querySelectorAll('.new-box');

    // 设置初始显示的新闻项数量
    let visibleCount = 6;

    // 更多按钮点击事件处理函数
    moreBtn.addEventListener('click', function () {
        var isExpanded = this.textContent === 'More';
        console.log(isExpanded)
        if (this.textContent === 'More') {

            for (let i = visibleCount; i < newBoxes.length; i++) {
                newBoxes[i].style.display = 'block';
            }
            this.textContent = 'Pack up';
        }else {
            for (let i = visibleCount; i < newBoxes.length; i++) {
                newBoxes[i].style.display = 'none';
            }
            this.textContent = 'More' ;
        }
    });
});
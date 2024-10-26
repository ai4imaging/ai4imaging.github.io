document.addEventListener('DOMContentLoaded', function () {
    // 为每个 p-box 添加事件监听器
    document.querySelectorAll('.p-box').forEach(function(box) {
        const downArrow = box.querySelector('.down');
        const upArrow = box.querySelector('.up');
        const pItemTime = box.querySelector('.p-item-time');

        downArrow.addEventListener('click', function() {
            pItemTime.style.height='auto'; // 展开内容
            upArrow.style.display = 'inline'; // 显示上箭头
            downArrow.style.display = 'none'; // 隐藏下箭头
        });

        upArrow.addEventListener('click', function() {
            pItemTime.style.height='0'; // 收起内容
            upArrow.style.display = 'none'; // 隐藏上箭头
            downArrow.style.display = 'inline'; // 显示下箭头
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {

// 获取弹窗元素
// 获取下拉菜单和下拉内容的元素
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.getElementById('dropdown');

// 鼠标进入下拉菜单时显示下拉内容
dropdown.addEventListener('mouseenter', function() {
    dropdownContent.style.display = 'block'; // 显示下拉内容
    dropdownContent.style.opacity = '0';
    dropdownContent.style.transform = 'translateY(-20px)';
    setTimeout(function() {
        dropdownContent.style.opacity = '1';
        dropdownContent.style.transform = 'translateY(0)';
    }, 10); // 延迟10毫秒以确保先设置display属性
});

// 鼠标离开下拉菜单时隐藏下拉内容
dropdown.addEventListener('mouseleave', function() {
    dropdownContent.style.opacity = '0';
    dropdownContent.style.transform = 'translateY(-20px)';
    dropdownContent.style.display = 'none'; // 隐藏下拉内容
});
const currentPath = window.location.pathname;

// 获取所有的链接元素
const links = document.querySelectorAll('.dropdown-content a');

// 遍历链接元素
links.forEach(link => {
    // 获取链接的 href 属性
    const href = link.getAttribute('href');
    console.log(href)
    // 检查当前路径是否包含链接的 href
    if (currentPath.includes(href.split('/')[1])) {
        // 如果包含，改变链接的颜色
        link.style.color = '#333333'; // 你可以选择你喜欢的颜色
    }
});

})
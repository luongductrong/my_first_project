var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

// Đóng mở mobile menu
mobileMenu.onclick = function() {
    var isClose = header.clientHeight === headerHeight;
    if (isClose) {
        header.style.height = 'auto';
    } else {
        header.style = null;
    }
};

// Tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#navigation li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
        
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if (!isParentMenu) {
            header.style = null;
        } else {
            event.preventDefault();
        }          
    };
}

// Đóng menu khi click vào bất kỳ vùng nào trên màn hình
document.addEventListener('click', function(event) {
    // Kiểm tra xem phần tử được click có thuộc về header không
    var isHeaderElement = event.target.closest('#header') !== null;

    // Nếu không thuộc về header, đóng menu
    if (!isHeaderElement) {
        header.style = null;
    }
});
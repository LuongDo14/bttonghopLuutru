document.addEventListener('DOMContentLoaded', function () {
    const productForm = document.getElementById('product-form');
    const productList = document.getElementById('product-list');

    // Lấy danh sách sản phẩm từ localStorage (nếu có)
    const products = JSON.parse(localStorage.getItem('products')) || [];

    // Hiển thị danh sách sản phẩm
    function displayProducts() {
        productList.innerHTML = '';
        for (let i = 0; i < products.length; i++) {
            const product = products[i];
            const productItem = document.createElement('div');
            productItem.classList.add('product');
            productItem.innerHTML = `
                <span>Tên sản phẩm: ${product.name}</span>
                <span>Giá sản phẩm: ${product.price} VNĐ</span>
                <button onclick="deleteProduct(${i})">Xóa</button>
            `;
            productList.appendChild(productItem);
        }
    }

    displayProducts();

    // Xử lý khi người dùng thêm sản phẩm
    productForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const productName = document.getElementById('product-name').value;
        const productPrice = document.getElementById('product-price').value;

        if (productName.trim() === '' || productPrice.trim() === '') {
            alert('Vui lòng nhập tên và giá sản phẩm.');
            return;
        }

        const product = {
            name: productName,
            price: productPrice
        };

        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
        displayProducts();
        productForm.reset();
    });

    // Xử lý khi người dùng xóa sản phẩm
    window.deleteProduct = function (index) {
        if (confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
            products.splice(index, 1);
            localStorage.setItem('products', JSON.stringify(products));
            displayProducts();
        }
    };
});

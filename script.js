let cart = JSON.parse(localStorage.getItem('cart') || '[]');

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    alert(`${name} wurde dem Warenkorb hinzugefügt.`);
}

function updateCartCount() {
    const count = cart.length;
    const el = document.getElementById('cart-count');
    if (el) {
        el.textContent = count;
    }
}

document.addEventListener('DOMContentLoaded', updateCartCount);

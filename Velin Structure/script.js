// Product & Cart Data and Configuration

const products = [
    { id: 1, name: "Stylish Men's Tee", brand: "RAW", price: 20, image: "https://images-na.ssl-images-amazon.com/images/I/71Uhxs+VUBL._SLDPMOBCAROUSELAUTOCROP288221_MCnd_AC_SR462,693_.jpg" },
    { id: 2, name: "Elegant Women's Dress", brand: "Fashionista", price: 25, image: "https://i5.walmartimages.com/asr/3c1779b6-154a-4efa-91b5-e5f676e29bfe_1.f266ae53425ce18e0bea8fec0bf2c40e.jpeg" },
    { id: 3, name: "Casual Kid's Jacket", brand: "TinyTots", price: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCoUjzeR_f85kgdX-v2-xqcF7M9gTvpNORyg&s" },
    { id: 4, name: "Comfy Sneakers", brand: "FootFlex", price: 22, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKdS6ZCNTihllmxzQrtbT4l1e_zxF0s0tKk-uiVHTkCgFdHTAlVV6qEUWSwN6emkXhgs&usqp=CAU" },
    { id: 5, name: "H&M Slim Fit V-neck T-shirt", brand: "CoolBrand", price: 18, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGf9aPXDuLpFp6OVa55sWMwC-fbh-H1a_LA&s" },
    { id: 6, name: "Empire Waist Dress", brand: "EcoThreads", price: 27, image: "https://prettykittyfashion.co.uk/cdn/shop/products/7_6b15e1fb-29e5-4fb9-930e-7cc0cf512087.jpg?v=1677064122" },
    { id: 7, name: "Double Poly Sunglass", brand: "Fashionista", price: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7jYmBLWg-e50KhNPfH2jRYRUP0WEUX4wBYkH1zSLy-gWvVqBsIDCTO2rvsREOphMoxbY&usqp=CAU" },
    { id: 8, name: "MEN'S SLIPER GREY/ORANGE", brand: "StyleMax", price: 35, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpmVEWBZQ2gpyChX2BCfEijyqvcpvYWbBJA&s" },
    // --- START: 8 New Products Added ---
    { id: 9, name: "Urban Explorer Backpack", brand: "TrailBlazer", price: 55, image: "https://cdn11.bigcommerce.com/s-me8jghab9t/images/stencil/1000x1000/products/567/52832/oe8o8bmx12uulwfbut2q__91969.1709233430.jpg?c=1" },
    { id: 10, name: "Wireless Charging Pad", brand: "ElectroCharge", price: 28, image: "https://img.drz.lazcdn.com/static/bd/p/a1d41ee71f857221624b182cb2ac8e1e.jpg_720x720q80.jpg" },
    { id: 11, name: "Cozy Knit Scarf", brand: "WarmEmbrace", price: 19, image: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/15/5885493/1.jpg?7893" },
    { id: 12, name: "Stainless Steel Water Bottle", brand: "HydroFlow", price: 24, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=200&q=60" },
    { id: 13, name: "Premium Leather Wallet", brand: "ArtisanCraft", price: 32, image: "https://www.saniastore.pk/cdn/shop/files/16674473072ffef961580b143b812207.jpg?v=1740916508&width=600" },
    { id: 14, name: "Ceramic Coffee Mug", brand: "MorningBrew", price: 26, image: "https://clayimagebd.com/web/image/product.template/83/image_1024?unique=5a3d989" },
    { id: 15, name: "Portable Bluetooth Speaker", brand: "SoundWave", price: 39, image: "https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTFMS2w0d0RBT0wuX1NTNDAwXy5qcGc.jpg" },
    { id: 16, name: "Yoga Mat with Strap", brand: "ZenFlex", price: 30, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60" }
    // --- END: 8 New Products Added ---
];

const shippingCost = 10;
const discountRate = 0.15;


// Cart Functions (accessible globally for onclick)

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    document.querySelectorAll("#cart-count").forEach(span => {
        if (span) span.textContent = cart.length;
    });
}

function addToCart(productId) {
    console.log("Adding to cart, Product ID:", productId);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

    // Also re-render cart if it's visible on the page, e.g., in a modal or sidebar
    if (typeof window.renderCart === 'function' && document.getElementById("cart-items")) {
        window.renderCart();
    }
}

function removeFromCart(productIdToRemove) {
    console.log("Attempting to remove one instance of Product ID:", productIdToRemove);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const indexToRemove = cart.findIndex(id => id === productIdToRemove);

    if (indexToRemove !== -1) {
        cart.splice(indexToRemove, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("Product removed. New cart:", cart);
        if (typeof window.renderCart === 'function' && document.getElementById("cart-items")) {
             window.renderCart();
        }
    } else {
        console.warn("Product ID to remove not found in cart:", productIdToRemove);
    }
    updateCartCount();
}


// Order Now Function

function orderNow() {
    console.log("Order Now clicked.");
    const messageElement = document.getElementById("thank-you");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Define classes for different message states (consider aligning these with your theme if different from product page)

    const successTextClass = "text-emerald-900"; // Example theme-aligned success
    const successBorderClass = "border-emerald-700";
    const successBgClass = "bg-emerald-100";

    const warningTextClass = "text-red-900"; // Example theme-aligned warning
    const warningBorderClass = "border-red-700";
    const warningBgClass = "bg-red-100";

    if (messageElement) {
        if (cart.length === 0) {
            messageElement.textContent = "Please select an item before placing an order.";
            messageElement.classList.remove(successTextClass, successBorderClass, successBgClass);
            messageElement.classList.add(warningTextClass, warningBorderClass, warningBgClass);
            console.log("Cart is empty. 'Please select item' message displayed.");
        } else {
            messageElement.textContent = "Thank you for shopping with us!";
            messageElement.classList.remove(warningTextClass, warningBorderClass, warningBgClass);
            messageElement.classList.add(successTextClass, successBorderClass, successBgClass);
            console.log("Thank you message displayed.");
            localStorage.setItem("cart", JSON.stringify([]));
            console.log("Cart cleared from localStorage.");
            if (typeof window.renderCart === 'function' && document.getElementById("cart-items")) {
                window.renderCart();
            }
            updateCartCount();
        }
        messageElement.classList.remove("hidden");
        messageElement.classList.add("block");
    } else {
        console.error("Element with ID 'thank-you' not found. Cannot display order message.");
    }
}



// DOMContentLoaded - Main script execution

document.addEventListener("DOMContentLoaded", () => {
    // --- Hamburger Menu Logic ---
    const hamburger = document.querySelector(".hamburger-menu");
    const navItemsGroup = document.getElementById("navItemsGroup");
    const bars = hamburger ? hamburger.querySelectorAll(".bar") : [];
    let menuOpen = false;

    if (hamburger && navItemsGroup && bars.length === 3) {
        hamburger.addEventListener("click", () => {
            menuOpen = !menuOpen;
            navItemsGroup.classList.toggle("hidden");
            if (menuOpen) {
                bars[0].classList.add('transform', 'rotate-45', 'translate-y-[7px]');
                bars[1].classList.add('opacity-0');
                bars[2].classList.add('transform', '-rotate-45', '-translate-y-[7px]');
            } else {
                bars[0].classList.remove('transform', 'rotate-45', 'translate-y-[7px]');
                bars[1].classList.remove('opacity-0');
                bars[2].classList.remove('transform', '-rotate-45', '-translate-y-[7px]');
            }
        });
    }

    // --- Hero Slider Initialization ---
    if (typeof Swiper !== 'undefined') {
        if (document.querySelector('.hero-slider')) {
            const heroSlider = new Swiper('.hero-slider', {
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                loop: true,
                effect: 'slide',
                pagination: {
                    el: '.hero-slider .swiper-pagination', // Added .hero-slider to specify context
                    clickable: true,
                },
                a11y: {
                    prevSlideMessage: 'Previous slide',
                    nextSlideMessage: 'Next slide',
                    paginationBulletMessage: 'Go to slide {{index}}',
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: false,
                },
            });
        }
    } else {
        if (document.querySelector('.hero-slider')) {
            console.error('Swiper library not loaded, but .hero-slider element is present.');
        }
    }

    // --- START: Customer Reviews Slider Initialization ---
    if (typeof Swiper !== 'undefined') {
        if (document.querySelector('.customer-reviews-slider')) {
            const customerReviewsSlider = new Swiper('.customer-reviews-slider', {
                loop: true,
                autoplay: {
                    delay: 4500, // Slightly different delay for variety
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                slidesPerView: 1,
                spaceBetween: 16,
                pagination: {
                    el: '.customer-reviews-slider .swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    640: { // sm
                        slidesPerView: 2,
                        spaceBetween: 24
                    },
                    1024: { // lg
                        slidesPerView: 3,
                        spaceBetween: 32
                    }
                },
                a11y: {
                    prevSlideMessage: 'Previous review',
                    nextSlideMessage: 'Next review',
                    paginationBulletMessage: 'Go to review {{index}}',
                },
                keyboard: {
                    enabled: true,
                    onlyInViewport: false,
                },
            });
        }
    } else {
        if (document.querySelector('.customer-reviews-slider')) {
             console.error('Swiper library not loaded, but .customer-reviews-slider element is present.');
        }
    }
    // --- END: Customer Reviews Slider Initialization ---


    // --- Product Rendering Function (Theme Aligned) ---
    function renderProducts() {
        const container = document.getElementById("product-grid");
        if (!container) return;

        if (!products || products.length === 0) {
            container.innerHTML = "<p class='text-center col-span-full text-slate-500'>No products available.</p>";
            return;
        }
        container.innerHTML = "";
        products.forEach(product => {
            const div = document.createElement("div");
            div.className = "border border-slate-200 p-4 text-center bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between min-h-[350px] "; // Adjusted min-height

            const rating = Math.floor(Math.random() * 3) + 3;
            let starsHTML = '';
            for (let i = 1; i <= 5; i++) {
                if (i <= rating) {
                    starsHTML += '<span class="text-amber-400">★</span>'; // Filled star
                } else {
                    starsHTML += '<span class="text-slate-300">★</span>'; // Empty star
                }
            }

            div.innerHTML = `
                <div class="flex-grow">
                    <img src="${product.image || 'https://via.placeholder.com/150x100.png?text=No+Image'}" alt="${product.name}" class="w-full h-40 object-contain mb-3 rounded">
                    <h3 class="text-lg font-semibold mt-0 mb-1 text-slate-800">${product.name}</h3>
                    ${product.brand ? `<p class="text-xs text-slate-500 opacity-75 mb-2">${product.brand}</p>` : ''}
                    <div class="flex justify-center items-center mb-2">
                        ${starsHTML}
                        <span class="ml-1 text-xs text-slate-500">(${Math.floor(Math.random() * 150) + 10} reviews)</span>
                    </div>
                    <p class="mb-4 text-md text-slate-600">Price: $${product.price.toFixed(2)}</p>
                </div>
                <button onclick="addToCart(${product.id})" class="py-2 px-4 bg-orange-900 hover:bg-orange-700 active:bg-green-700 text-white border-none rounded cursor-pointer transition-colors duration-200 self-center w-full sm:w-auto mt-auto">Add to Cart</button>
            `;
            container.appendChild(div);
        });
    }

    // --- Cart Rendering Function (Theme Aligned, for cart.html) ---
    window.renderCart = function() {
        const cartItemsList = document.getElementById("cart-items");
        if (!cartItemsList) return; // Only run if on cart page

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartItemsList.innerHTML = "";
        let subtotal = 0;

        if (cart.length === 0) {
            cartItemsList.innerHTML = "<li class='text-center text-slate-500 py-4'>Your cart is empty.</li>";
        } else {
            const productCounts = {};
            cart.forEach(productId => {
                productCounts[productId] = (productCounts[productId] || 0) + 1;
            });

            Object.keys(productCounts).forEach(key => {
                const productId = parseInt(key);
                const product = products.find(p => p.id === productId);
                const count = productCounts[key];

                if (product) {
                    subtotal += product.price * count;
                    const li = document.createElement("li");
                    li.className = "flex justify-between items-center py-3 border-b border-slate-200 last:border-b-0";
                    li.innerHTML = `
                        <span class="text-slate-700 flex-grow">${product.name} (x${count}) - $${(product.price * count).toFixed(2)}</span>
                        <button onclick="removeFromCart(${product.id})" class="ml-4 py-1 px-3 bg-rose-600 hover:bg-rose-700 text-white text-xs border-none rounded cursor-pointer transition-colors duration-200 flex-shrink-0">Remove One x</button>
                    `;
                    cartItemsList.appendChild(li);
                } else {
                    console.warn("Product not found in products list for ID:", productId);
                }
            });
        }

        const discountValue = subtotal * discountRate;
        const actualShippingCost = cart.length > 0 ? shippingCost : 0; // Assuming shippingCost and discountRate are global or passed
        const totalValue = Math.max(0, subtotal - discountValue + actualShippingCost);

        const subtotalEl = document.getElementById("subtotal");
        const discountEl = document.getElementById("discount");
        const shippingEl = document.getElementById("shipping");
        const totalEl = document.getElementById("total");

        // Theme aligned text colors for summary
        if(subtotalEl) subtotalEl.textContent = subtotal.toFixed(2);
        if(discountEl) discountEl.textContent = discountValue.toFixed(2);
        if(shippingEl) shippingEl.textContent = actualShippingCost.toFixed(2);
        if(totalEl) {
            totalEl.textContent = totalValue.toFixed(2);
            totalEl.classList.add("text-indigo-700", "font-semibold"); // Example: Highlight total
        }
    }

    // --- Initial Calls on Page Load ---
    if (document.getElementById("product-grid")) {
        renderProducts();
    }
    // Check if on cart page before calling renderCart to avoid errors on other pages
    if (window.location.pathname.includes("cart.html") || document.getElementById("cart-items")) {
        if (typeof window.renderCart === 'function') {
            window.renderCart();
        }
    }
    updateCartCount();
});
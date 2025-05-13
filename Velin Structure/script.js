// Product & Cart Data 

const products = [
    { id: 1, name: "Stylish Men's Tee", brand: "RAW", price: 20, image: "https://images-na.ssl-images-amazon.com/images/I/71Uhxs+VUBL._SLDPMOBCAROUSELAUTOCROP288221_MCnd_AC_SR462,693_.jpg" },
    { id: 2, name: "Elegant Women's Dress", brand: "Fashionista", price: 25, image: "https://i5.walmartimages.com/asr/3c1779b6-154a-4efa-91b5-e5f676e29bfe_1.f266ae53425ce18e0bea8fec0bf2c40e.jpeg" },
    { id: 3, name: "Casual Kid's Jacket", brand: "TinyTots", price: 30, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCoUjzeR_f85kgdX-v2-xqcF7M9gTvpNORyg&s" },
    { id: 4, name: "Comfy Sneakers", brand: "FootFlex", price: 22, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKdS6ZCNTihllmxzQrtbT4l1e_zxF0s0tKk-uiVHTkCgFdHTAlVV6qEUWSwN6emkXhgs&usqp=CAU" },
    { id: 5, name: "H&M Slim Fit V-neck T-shirt", brand: "CoolBrand", price: 18, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjGf9aPXDuLpFp6OVa55sWMwC-fbh-H1a_LA&s" },
    { id: 6, name: "Empire Waist Dress", brand: "EcoThreads", price: 27, image: "https://prettykittyfashion.co.uk/cdn/shop/products/7_6b15e1fb-29e5-4fb9-930e-7cc0cf512087.jpg?v=1677064122" },
    { id: 7, name: "Double Poly Sunglass", brand: "Fashionista", price: 15, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7jYmBLWg-e50KhNPfH2jRYRUP0WEUX4wBYkH1zSLy-gWvVqBsIDCTO2rvsREOphMoxbY&usqp=CAU" },
    { id: 8, name: "MEN'S SLIPER GREY/ORANGE", brand: "StyleMax", price: 35, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUpmVEWBZQ2gpyChX2BCfEijyqvcpvYWbBJA&s" },
    { id: 9, name: "Urban Explorer Backpack", brand: "TrailBlazer", price: 55, image: "https://cdn11.bigcommerce.com/s-me8jghab9t/images/stencil/1000x1000/products/567/52832/oe8o8bmx12uulwfbut2q__91969.1709233430.jpg?c=1" },
    { id: 10, name: "Wireless Charging Pad", brand: "ElectroCharge", price: 28, image: "https://img.drz.lazcdn.com/static/bd/p/a1d41ee71f857221624b182cb2ac8e1e.jpg_720x720q80.jpg" },
    { id: 11, name: "Cozy Knit Scarf", brand: "WarmEmbrace", price: 19, image: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/15/5885493/1.jpg?7893" },
    { id: 12, name: "Stainless Steel Water Bottle", brand: "HydroFlow", price: 24, image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=200&q=60" },
    { id: 13, name: "Premium Leather Wallet", brand: "ArtisanCraft", price: 32, image: "https://www.saniastore.pk/cdn/shop/files/16674473072ffef961580b143b812207.jpg?v=1740916508&width=600" },
    { id: 14, name: "Ceramic Coffee Mug", brand: "MorningBrew", price: 26, image: "https://clayimagebd.com/web/image/product.template/83/image_1024?unique=5a3d989" },
    { id: 15, name: "Portable Bluetooth Speaker", brand: "SoundWave", price: 39, image: "https://www.ubuy.com.bd/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNTFMS2w0d0RBT0wuX1NTNDAwXy5qcGc.jpg" },
    { id: 16, name: "Yoga Mat with Strap", brand: "ZenFlex", price: 30, image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8eW9nYSUyMG1hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=200&q=60" }
    // --- END:  ---
];

const shippingCost = 10;
const discountRate = 0.15; 


// Cart Functions (accessible globally for onclick)

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    // Find all cart count elements 
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

    // Show notification (Example - using the existing notification bubble from front.html)
    const cartNotification = document.getElementById('cart-notification-bubble');
    if (cartNotification) {
        cartNotification.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
        cartNotification.classList.add('opacity-100', 'translate-y-0');

        setTimeout(() => {
            cartNotification.classList.remove('opacity-100', 'translate-y-0');
            cartNotification.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
        }, 3000); // Hide after 3 seconds
    }


    // Re-render cart if it's visible 
    if (typeof window.renderCart === 'function' && document.getElementById("cart-items")) {
        window.renderCart();
    }
}

function removeFromCart(productIdToRemove) {
    console.log("Attempting to remove one instance of Product ID:", productIdToRemove);
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const indexToRemove = cart.findIndex(id => id === productIdToRemove); // Find only the first instance

    if (indexToRemove !== -1) {
        cart.splice(indexToRemove, 1); // Remove only one item
        localStorage.setItem("cart", JSON.stringify(cart));
        console.log("Product removed. New cart:", cart);
        // Re-render cart if on cart page
        if (typeof window.renderCart === 'function' && document.getElementById("cart-items")) {
             window.renderCart();
        }
    } else {
        console.warn("Product ID to remove not found in cart:", productIdToRemove);
    }
    updateCartCount(); // Update count after removal
}


// Order Now Function

function orderNow() {
    console.log("Order Now clicked.");
    const messageElement = document.getElementById("thank-you");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const successTextClass = "text-green-800";
    const successBorderClass = "border-green-300";
    const successBgClass = "bg-green-50";

    const warningTextClass = "text-red-800";
    const warningBorderClass = "border-red-300";
    const warningBgClass = "bg-red-50";

    if (messageElement) {
        if (cart.length === 0) {
            messageElement.innerHTML = `<h3 class="text-xl font-semibold mb-1">Oops!</h3><p>Your cart is empty. Please add items before ordering.</p>`; // More user-friendly message
            messageElement.classList.remove(successTextClass, successBorderClass, successBgClass);
            messageElement.classList.add(warningTextClass, warningBorderClass, warningBgClass);
            console.log("Cart is empty. 'Your cart is empty' message displayed.");
        } else {
            // Changed message content slightly
            messageElement.innerHTML = `<h3 class="text-xl font-semibold mb-1">Thank You!</h3><p>Your order has been placed successfully.</p>`;
            messageElement.classList.remove(warningTextClass, warningBorderClass, warningBgClass);
            messageElement.classList.add(successTextClass, successBorderClass, successBgClass);
            console.log("Thank you message displayed.");
            localStorage.setItem("cart", JSON.stringify([])); // Clear the cart
            console.log("Cart cleared from localStorage.");
            // Re-render the (now empty) cart on the cart page
            if (typeof window.renderCart === 'function' && document.getElementById("cart-items")) {
                window.renderCart();
            }
            updateCartCount(); // Update count to 0
        }
        messageElement.classList.remove("hidden");
        messageElement.classList.add("block"); // Make sure it's visible
    } else {
        console.error("Element with ID 'thank-you' not found. Cannot display order message.");
    }
}



// DOMContentLoaded - Main script execution

document.addEventListener("DOMContentLoaded", () => {
    // --- Hamburger Menu Logic (No theme changes needed here) ---
    const hamburger = document.querySelector(".hamburger-menu");
    const navItemsGroup = document.getElementById("navItemsGroup");
    const bars = hamburger ? hamburger.querySelectorAll(".bar") : [];
    let menuOpen = false;

    if (hamburger && navItemsGroup && bars.length === 3) {
        hamburger.addEventListener("click", () => {
            menuOpen = !menuOpen;
            navItemsGroup.classList.toggle("hidden");
            // Animation classes added/removed in HTML/CSS, no change needed here
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

    // --- Hero Slider Initialization (No theme changes needed, controlled by CSS) ---
    if (typeof Swiper !== 'undefined') {
        if (document.querySelector('.hero-slider')) {
            const heroSlider = new Swiper('.hero-slider', {
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                },
                loop: true,
                effect: 'slide', // or 'fade' if you prefer
                pagination: {
                    el: '.hero-slider .swiper-pagination',
                    clickable: true,
                },
                a11y: { /* Accessibility options */ },
                keyboard: { enabled: true, onlyInViewport: false },
            });
        }
    } else {
        if (document.querySelector('.hero-slider')) {
            console.error('Swiper library not loaded, but .hero-slider element is present.');
        }
    }

    // --- Customer Reviews Slider Initialization (No theme changes needed, controlled by CSS) ---
    if (typeof Swiper !== 'undefined') {
        if (document.querySelector('.customer-reviews-slider')) {
            const customerReviewsSlider = new Swiper('.customer-reviews-slider', {
                loop: true,
                autoplay: {
                    delay: 4500,
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
                    640: { slidesPerView: 2, spaceBetween: 24 },
                    1024: { slidesPerView: 3, spaceBetween: 32 }
                },
                 a11y: { /* Accessibility options */ },
                 keyboard: { enabled: true, onlyInViewport: false },
            });
        }
    } else {
         if (document.querySelector('.customer-reviews-slider')) {
             console.error('Swiper library not loaded, but .customer-reviews-slider element is present.');
         }
    }


    // --- Product Rendering Function (Aligned with Light Theme) ---
    function renderProducts() {
        const container = document.getElementById("product-grid");
        if (!container) return; // Only run if product grid exists

        if (!products || products.length === 0) {
            container.innerHTML = "<p class='text-center col-span-full text-slate-500 py-10'>No products available at the moment.</p>"; // User-friendly message
            return;
        }
        container.innerHTML = ""; // Clear previous products
        products.forEach(product => {
            const div = document.createElement("div");
            // Light Theme Classes for product card
            div.className = "bg-white rounded-lg shadow-md overflow-hidden group border border-slate-200 flex flex-col justify-between min-h-[380px] transition-shadow duration-300 hover:shadow-lg"; // Adjusted min-height slightly

            const rating = Math.floor(Math.random() * 3) + 3; // 3, 4, or 5 stars
            let starsHTML = '';
            for (let i = 1; i <= 5; i++) {
                starsHTML += `<span class="${i <= rating ? 'text-amber-400' : 'text-slate-300'}">★</span>`; // Conditional star color
            }

            div.innerHTML = `
                <div class="p-4 flex-grow">
                    <img src="${product.image || 'https://via.placeholder.com/300x300.png?text=No+Image'}" alt="${product.name}" class="w-full h-48 object-contain mb-4 rounded-md group-hover:opacity-90 transition-opacity duration-300">
                    <h3 class="text-md font-semibold mb-1 text-slate-800 truncate">${product.name}</h3>
                    ${product.brand ? `<p class="text-xs text-slate-500 mb-2">${product.brand}</p>` : ''}
                    <div class="flex justify-start items-center mb-2 text-xs"> <!-- Align stars left -->
                        ${starsHTML}
                        <span class="ml-2 text-slate-500">(${Math.floor(Math.random() * 150) + 10})</span> <!-- Random review count -->
                    </div>
                    <p class="mb-3 text-lg font-medium text-orange-600">$${product.price.toFixed(2)}</p>
                </div>
                <div class="p-4 pt-0 mt-auto"> 
                    <button onclick="addToCart(${product.id})" class="w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white font-semibold py-2 px-4 rounded-md transition duration-200 shadow hover:shadow-md text-sm">
                       <i class="fas fa-cart-plus mr-1"></i> Add to Cart
                    </button>
                </div>
            `;
            container.appendChild(div);
        });
    }

    // --- Cart Rendering Function (Aligned with Light Theme) ---
    // Made globally available for use by addToCart/removeFromCart/orderNow
    window.renderCart = function() {
        const cartItemsList = document.getElementById("cart-items");
        if (!cartItemsList) return; // Only run if on cart page

        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartItemsList.innerHTML = ""; // Clear previous items
        let subtotal = 0;

        if (cart.length === 0) {
            cartItemsList.innerHTML = "<li class='text-center text-slate-500 py-6'>Your cart is empty.</li>"; // Centered empty message
        } else {
            // Group items by product ID to show quantity
            const productCounts = {};
            cart.forEach(productId => {
                productCounts[productId] = (productCounts[productId] || 0) + 1;
            });

            // Render each unique product
            Object.keys(productCounts).forEach(key => {
                const productId = parseInt(key);
                const product = products.find(p => p.id === productId);
                const count = productCounts[key];

                if (product) {
                    subtotal += product.price * count;
                    const li = document.createElement("li");
                    
                    li.className = "flex items-center justify-between py-4"; // Removed border here, using divide-y on <ul> in HTML
                    li.innerHTML = `
                        <div class="flex items-center space-x-3 flex-grow min-w-0"> 
                            <img src="${product.image || 'https://via.placeholder.com/80x80.png?text=No+Image'}" alt="${product.name}" class="w-12 h-12 object-cover rounded flex-shrink-0">
                            <div class="min-w-0"> 
                                <h3 class="text-sm font-medium text-slate-700 truncate">${product.name}</h3>
                                <p class="text-xs text-slate-500">Qty: ${count} × $${product.price.toFixed(2)}</p>
                                <p class="text-sm font-semibold text-slate-800">$${(product.price * count).toFixed(2)}</p>
                            </div>
                        </div>
                        <button onclick="removeFromCart(${product.id})" title="Remove one ${product.name}" class="ml-4 py-1 px-2 bg-rose-100 hover:bg-rose-200 text-rose-600 text-xs border border-rose-200 rounded cursor-pointer transition-colors duration-200 flex-shrink-0">
                           <i class="fas fa-times"></i> 
                        </button>
                    `;
                    cartItemsList.appendChild(li);
                } else {
                    // Handle cases where a product ID in the cart might not be in the current products list
                    console.warn("Product not found in products list for ID:", productId);
                    // Optionally remove invalid IDs from cart here
                    // removeFromCart(productId); // Be careful with recursive calls
                }
            });
        }

        // Calculate final totals
        const discountValue = subtotal * discountRate;
        const actualShippingCost = cart.length > 0 ? shippingCost : 0;
        const totalValue = Math.max(0, subtotal - discountValue + actualShippingCost); // Ensure total isn't negative

        // Update summary elements (IDs from cart.html)
        const subtotalEl = document.getElementById("subtotal");
        const discountEl = document.getElementById("discount");
        const shippingEl = document.getElementById("shipping");
        const totalEl = document.getElementById("total");

        // Apply light theme styles to summary text
        if (subtotalEl) subtotalEl.textContent = subtotal.toFixed(2);
        if (discountEl) discountEl.textContent = discountValue.toFixed(2); // Discount shown as positive value
        if (shippingEl) shippingEl.textContent = actualShippingCost.toFixed(2);
        if (totalEl) {
            totalEl.textContent = totalValue.toFixed(2);
            // Ensure total has appropriate classes (already set in HTML, but good practice)
            totalEl.closest('p').classList.add("text-xl", "font-semibold", "text-slate-800");
        }
    }

    // --- Initial Calls on Page Load ---
    // Render products if on the main page
    if (document.getElementById("product-grid")) {
        renderProducts();
    }

    // Render cart if on the cart page
    // Checking pathname is safer than just checking for #cart-items existence
    if (window.location.pathname.includes("cart.html") || document.getElementById("cart-items")) {
        if (typeof window.renderCart === 'function') {
            window.renderCart();
        } else {
            console.error("renderCart function not found, but cart elements are present.");
        }
    }

    // Update cart count on all pages
    updateCartCount();

    // --- Review Form Placeholder Logic ---
    // (Keeping the placeholder logic from cart.html's embedded script, if needed)
    const reviewForm = document.getElementById('review-form');
    const reviewFeedback = document.getElementById('review-feedback');
    if(reviewForm && reviewFeedback) {
        reviewForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission for this example
            // --- Add your actual form submission logic here (e.g., using fetch) ---

            // Show feedback message (Light theme friendly color)
            reviewFeedback.textContent = 'Thank you for your review!';
            reviewFeedback.className = 'mt-4 text-center text-sm text-teal-600 h-5'; // Explicitly set class
            reviewForm.reset(); // Clear the form
             // Reset select color
             const ratingSelect = document.getElementById('review-rating');
             if (ratingSelect) ratingSelect.classList.add('text-slate-400');

            // Optionally clear the message after a few seconds
            setTimeout(() => {
                reviewFeedback.textContent = '';
            }, 4000);
        });

        // Fix select placeholder color logic
        const ratingSelect = document.getElementById('review-rating');
        if(ratingSelect) {
            ratingSelect.addEventListener('change', function() {
                if (this.value) {
                    this.classList.remove('text-slate-400');
                    this.classList.add('text-slate-700');
                } else {
                    this.classList.add('text-slate-400');
                    this.classList.remove('text-slate-700');
                }
            });
            // Initial check in case the page reloads with a value selected
             if (ratingSelect.value) {
                 ratingSelect.classList.remove('text-slate-400');
                 ratingSelect.classList.add('text-slate-700');
             }
        }
    }

}); 

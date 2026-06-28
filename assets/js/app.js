// ===== STATE MANAGEMENT =====
let cart = [];
let favorites = [];
let currentFilter = 'all';
let currentModalProduct = null;
let modalQty = 1;
let currentSlide = 0;
let checkoutData = {};

// ===== PRODUCTS DATABASE =====
const products = [
    // --- مياه عادية ---
    {
        id: 1, name: 'مياه العين 330 مل', category: 'water',
        price: 2.5, desc: 'مياه معدنية طبيعية نقية، مثالية للحمل في أي مكان',
        badge: 'جديد', badgeClass: 'badge-new',
        img: 'assets/images/products/water-330ml-pack.jpg'
    },
    {
        id: 2, name: 'مياه العين 500 مل', category: 'water',
        price: 3.5, desc: 'العبوة الكلاسيكية الأكثر مبيعاً',
        badge: 'الأكثر بيعاً', badgeClass: 'badge-hot',
        img: 'assets/images/products/rpet-500ml.jpg'
    },
    {
        id: 3, name: 'مياه العين 1.5 لتر', category: 'water',
        price: 6.5, desc: 'مناسبة للعائلة والمنزل',
        badge: 'توفير', badgeClass: 'badge-sale',
        img: 'assets/images/products/zero-1.5L.jpg'
    },
    {
        id: 4, name: 'مياه العين 2 لتر', category: 'water',
        price: 8.5, desc: 'حجم عائلي كبير للاستخدام اليومي',
        badge: '', badgeClass: '',
        img: 'assets/images/products/zero-1.5L.jpg'
    },
    {
        id: 5, name: 'مياه العين rPET 500 مل', category: 'water',
        price: 4.0, desc: 'عبوة صديقة للبيئة من بلاستيك معاد تدويره',
        badge: 'بيئي', badgeClass: 'badge-eco',
        img: 'assets/images/products/rpet-500ml.jpg'
    },
    {
        id: 6, name: 'مياه العين 250 مل', category: 'water',
        price: 1.5, desc: 'حجم صغير محمول للأطفال والرحلات',
        badge: '', badgeClass: '',
        img: 'assets/images/products/water-330ml-pack.jpg'
    },

    // --- قلونات ---
    {
        id: 7, name: 'قلون مياه العين 5 لتر', category: 'gallon',
        price: 15, desc: 'مناسب للمكاتب والمنازل، سهل الحمل',
        badge: 'الأفضل', badgeClass: 'badge-hot',
        img: 'assets/images/products/gallon-5L.jpg'
    },
    {
        id: 8, name: 'قلون مياه العين 4 جالون', category: 'gallon',
        price: 22, desc: 'مثالي للمبردات المنزلية والمكتبية',
        badge: '', badgeClass: '',
        img: 'assets/images/products/gallon-4g.jpg'
    },
    {
        id: 9, name: 'قلون مياه العين 5 جالون', category: 'gallon',
        price: 28, desc: 'الحجم الأكبر لاحتياجات المكاتب',
        badge: 'توفير', badgeClass: 'badge-sale',
        img: 'assets/images/products/gallon-5L.jpg'
    },
    {
        id: 10, name: 'قلون مياه العين زيرو 4 جالون', category: 'gallon',
        price: 24, desc: 'بدون صوديوم، متوازن pH',
        badge: 'جديد', badgeClass: 'badge-new',
        img: 'assets/images/products/zero-gallon.jpg'
    },

    // --- مياه فوارة ---
    {
        id: 11, name: 'مياه العين الفوارة 330 مل زجاج', category: 'sparkling',
        price: 5.5, desc: 'فقاعات منعشة في زجاجة أنيقة',
        badge: 'جديد', badgeClass: 'badge-new',
        img: 'assets/images/products/sparkling-glass-750ml.jpg'
    },
    {
        id: 12, name: 'مياه العين الفوارة 750 مل زجاج', category: 'sparkling',
        price: 10, desc: 'للمطاعم والمناسبات الراقية',
        badge: 'فاخر', badgeClass: 'badge-hot',
        img: 'assets/images/products/sparkling-glass-750ml.jpg'
    },
    {
        id: 13, name: 'مياه العين الفوارة 500 مل', category: 'sparkling',
        price: 4.5, desc: 'انتعاش فوار في كل رشفة',
        badge: '', badgeClass: '',
        img: 'assets/images/products/sparkling-glass-750ml.jpg'
    },
    {
        id: 14, name: 'مياه العين الفوارة 1.5 لتر', category: 'sparkling',
        price: 8, desc: 'للحفلات والتجمعات العائلية',
        badge: 'توفير', badgeClass: 'badge-sale',
        img: 'assets/images/products/sparkling-glass-750ml.jpg'
    },

    // --- مياه فاخرة ---
    {
        id: 15, name: 'مياه العين زجاج 750 مل', category: 'premium',
        price: 12, desc: 'زجاجة فاخرة للمناسبات والمطاعم الراقية',
        badge: 'فاخر', badgeClass: 'badge-hot',
        img: 'assets/images/products/glass-750ml.jpg'
    },
    {
        id: 16, name: 'مياه العين زجاج 330 مل', category: 'premium',
        price: 6, desc: 'تصميم أنيق مثالي للمناسبات',
        badge: '', badgeClass: '',
        img: 'assets/images/products/water-330ml-pack.jpg'
    },
    {
        id: 17, name: 'باقة زجاج 750 مل × 6', category: 'premium',
        price: 65, desc: 'باقة اقتصادية من الزجاجات الفاخرة',
        badge: 'توفير', badgeClass: 'badge-sale',
        img: 'assets/images/products/glass-750ml-pack.jpg'
    },
    {
        id: 18, name: 'باقة زجاج 330 مل × 6', category: 'premium',
        price: 32, desc: 'مثالية للهدايا والمناسبات',
        badge: 'هدية', badgeClass: 'badge-eco',
        img: 'assets/images/products/water-330ml-pack.jpg'
    },

    // --- مياه وظيفية ---
    {
        id: 19, name: 'مياه العين القلوية 1.5 لتر', category: 'functional',
        price: 7, desc: 'pH 9 معززة بالمعادن الطبيعية لصحة أفضل',
        badge: 'صحي', badgeClass: 'badge-eco',
        img: 'assets/images/products/alkaline-1.5L.jpg'
    },
    {
        id: 20, name: 'مياه العين زيرو 1.5 لتر', category: 'functional',
        price: 6, desc: 'بدون صوديوم، متوازن pH، مثالية للحمية',
        badge: 'جديد', badgeClass: 'badge-new',
        img: 'assets/images/products/zero-1.5L.jpg'
    },
    {
        id: 21, name: 'مياه العين الرياضية 500 مل', category: 'functional',
        price: 7, desc: 'معززة بالإلكتروليت للرياضيين',
        badge: 'رياضي', badgeClass: 'badge-hot',
        img: 'assets/images/products/alkaline-1.5L.jpg'
    },
    {
        id: 22, name: 'مياه العين للأطفال 250 مل', category: 'functional',
        price: 4.5, desc: 'آمنة للأطفال، خالية من الفلور',
        badge: 'أطفال', badgeClass: 'badge-eco',
        img: 'assets/images/products/water-330ml-pack.jpg'
    },
    {
        id: 23, name: 'مياه العين بالزنك 500 مل', category: 'functional',
        price: 6, desc: 'معززة بالزنك لدعم المناعة',
        badge: 'صحي', badgeClass: 'badge-eco',
        img: 'assets/images/products/alkaline-1.5L.jpg'
    },
    {
        id: 24, name: 'مياه العين بالمغنيسيوم 500 مل', category: 'functional',
        price: 6.5, desc: 'تساعد على استرخاء العضلات',
        badge: '', badgeClass: '',
        img: 'assets/images/products/alkaline-1.5L.jpg'
    }
];

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Show loading overlay then hide after content is ready (5 seconds splash)
    const overlay = document.getElementById('page-loading-overlay');
    if (overlay) {
        setTimeout(() => {
            overlay.classList.add('hidden');
            // Completely remove from DOM after fade out
            setTimeout(() => overlay.remove(), 600);
        }, 5000);
    }
    
    // Restore previous page from session
    const savedPage = sessionStorage.getItem('currentPage');
    if (savedPage && document.getElementById(savedPage)) {
        goToPage(savedPage);
    }
    
    renderProducts();
    startHeroCarousel();
    setupOTPInputs();
});

// ===== PAGE NAVIGATION =====
function goToPage(pageId) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');

    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    if (pageId === 'home-page') document.getElementById('nav-home').classList.add('active');
    else if (pageId === 'cart-page') document.getElementById('nav-cart').classList.add('active');
    else if (pageId === 'favorites-page') document.getElementById('nav-fav').classList.add('active');
    else if (pageId === 'notifications-page') document.getElementById('nav-notif').classList.add('active');

    if (pageId === 'cart-page') renderCart();
    else if (pageId === 'favorites-page') renderFavorites();
    else if (pageId === 'checkout-invoice-page') renderInvoice();
    else if (pageId === 'otp-page') {
        setupOTPInputs();
        showOTPLoading();
    }

    // Save current page to session storage
    sessionStorage.setItem('currentPage', pageId);

    window.scrollTo(0, 0);
}

// ===== PRODUCTS RENDERING =====
function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    const filtered = currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter);

    filtered.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image" onclick="openModal(${product.id})">
                <img src="${product.img}" alt="${product.name}">
                ${product.badge ? `<div class="product-badge ${product.badgeClass}">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-desc">${product.desc}</div>
                <div class="product-footer">
                    <div class="product-price">${product.price.toFixed(2)} د.إ</div>
                    <div class="product-actions">
                        <button class="product-btn add" onclick="addToCart(${product.id}, event)">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="product-btn fav ${favorites.includes(product.id) ? 'active' : ''}" 
                                onclick="toggleFavorite(${product.id}, event)">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// ===== FILTER PRODUCTS =====
function filterProducts(category, element) {
    currentFilter = category;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    if (element) element.classList.add('active');
    renderProducts();
}

// ===== CART MANAGEMENT =====
function addToCart(productId, event) {
    event.stopPropagation();
    const product = products.find(p => p.id === productId);
    const existing = cart.find(c => c.id === productId);

    if (existing) {
        existing.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartBadge();
    showNotification(`تم إضافة ${product.name} إلى السلة`);
}

function removeFromCart(productId) {
    cart = cart.filter(c => c.id !== productId);
    updateCartBadge();
    renderCart();
}

function updateCartQty(productId, change) {
    const item = cart.find(c => c.id === productId);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) removeFromCart(productId);
        else renderCart();
        updateCartBadge();
    }
}

function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const total = cart.reduce((sum, item) => sum + item.qty, 0);
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
}

function renderCart() {
    const content = document.getElementById('cart-content');

    if (cart.length === 0) {
        content.innerHTML = `
            <div class="cart-empty">
                <div class="cart-empty-icon"><i class="fas fa-shopping-cart"></i></div>
                <p>السلة فارغة</p>
                <p style="font-size:0.85rem; margin-top:0.5rem;">ابدأ بإضافة المنتجات المفضلة لديك</p>
            </div>
        `;
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const delivery = subtotal >= 50 ? 0 : 5;
    const total = subtotal + delivery;

    let html = '<div class="cart-items">';
    cart.forEach(item => {
        html += `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.img}" alt="${item.name}">
                </div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price.toFixed(2)} د.إ</div>
                    <div class="cart-item-controls">
                        <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">−</button>
                        <div class="qty-value">${item.qty}</div>
                        <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
                        <button class="remove-btn" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
    html += '</div>';

    html += `
        <div class="cart-summary">
            <div class="summary-row">
                <span>المجموع الفرعي</span>
                <span>${subtotal.toFixed(2)} د.إ</span>
            </div>
            <div class="summary-row">
                <span>رسوم التوصيل</span>
                <span>${delivery.toFixed(2)} د.إ</span>
            </div>
            ${subtotal < 50 ? `<div class="summary-hint">أضف ${(50 - subtotal).toFixed(2)} د.إ للحصول على توصيل مجاني</div>` : ''}
            <div class="summary-row total">
                <span>الإجمالي</span>
                <span>${total.toFixed(2)} د.إ</span>
            </div>
        </div>
        <button class="btn-primary" onclick="goToPage('checkout-info-page')" style="width:100%;">
            <i class="fas fa-arrow-left"></i> إتمام الطلب · ${total.toFixed(2)} د.إ
        </button>
    `;

    content.innerHTML = html;
}

// ===== FAVORITES =====
function toggleFavorite(productId, event) {
    event.stopPropagation();
    const idx = favorites.indexOf(productId);
    if (idx > -1) {
        favorites.splice(idx, 1);
    } else {
        favorites.push(productId);
    }

    document.querySelectorAll('.product-btn.fav').forEach((btn, i) => {
        const card = btn.closest('.product-card');
        const id = parseInt(card.querySelector('.product-btn.add').onclick.toString().match(/\d+/)[0]);
        if (favorites.includes(id)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    updateFavoriteBadge();
}

function updateFavoriteBadge() {
    const badge = document.getElementById('fav-badge');
    badge.textContent = favorites.length;
    badge.style.display = favorites.length > 0 ? 'flex' : 'none';
}

function renderFavorites() {
    const content = document.getElementById('favorites-content');

    if (favorites.length === 0) {
        content.innerHTML = `
            <div class="favorites-empty">
                <div class="favorites-empty-icon"><i class="fas fa-heart"></i></div>
                <p>لا توجد منتجات مفضلة</p>
                <p style="font-size:0.85rem; margin-top:0.5rem;">أضف منتجاتك المفضلة لسهولة الوصول إليها</p>
            </div>
        `;
        return;
    }

    const favProducts = products.filter(p => favorites.includes(p.id));
    let html = '<div class="favorites-grid">';

    favProducts.forEach(product => {
        html += `
            <div class="product-card" onclick="openModal(${product.id})">
                <div class="product-image">
                    <img src="${product.img}" alt="${product.name}">
                    ${product.badge ? `<div class="product-badge ${product.badgeClass}">${product.badge}</div>` : ''}
                </div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-desc">${product.desc}</div>
                    <div class="product-footer">
                        <div class="product-price">${product.price.toFixed(2)} د.إ</div>
                        <div class="product-actions">
                            <button class="product-btn add" onclick="addToCart(${product.id}, event)">
                                <i class="fas fa-plus"></i>
                            </button>
                            <button class="product-btn fav active" onclick="toggleFavorite(${product.id}, event)">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    html += '</div>';
    content.innerHTML = html;
}

// ===== PRODUCT MODAL =====
function openModal(productId) {
    currentModalProduct = products.find(p => p.id === productId);
    modalQty = 1;

    document.getElementById('modal-img').src = currentModalProduct.img;
    document.getElementById('modal-title').textContent = currentModalProduct.name;
    document.getElementById('modal-desc').textContent = currentModalProduct.desc;
    document.getElementById('modal-price').textContent = currentModalProduct.price.toFixed(2) + ' د.إ';
    document.getElementById('modal-qty').textContent = '1';

    document.getElementById('product-modal').classList.add('active');
}

function closeModal(event) {
    if (event.target.id === 'product-modal') {
        document.getElementById('product-modal').classList.remove('active');
    }
}

function changeModalQty(change) {
    modalQty = Math.max(1, modalQty + change);
    document.getElementById('modal-qty').textContent = modalQty;
}

document.getElementById('modal-add-btn').addEventListener('click', () => {
    for (let i = 0; i < modalQty; i++) {
        addToCart(currentModalProduct.id, { stopPropagation: () => {} });
    }
    document.getElementById('product-modal').classList.remove('active');
    showNotification(`تم إضافة ${modalQty} × ${currentModalProduct.name} إلى السلة`);
});

// ===== CHECKOUT - CUSTOMER INFO =====
function validateCustomerInfo(event) {
    event.preventDefault();
    const name = document.getElementById('customer-name').value.trim();
    const phone = document.getElementById('customer-phone').value.trim();
    const email = document.getElementById('customer-email').value.trim();
    
    if (!name || name.length < 3) {
        alert('الرجاء إدخال اسم صحيح');
        return;
    }
    
    if (!phone || phone.length !== 9) {
        alert('الرجاء إدخال رقم هاتف صحيح (9 أرقام)');
        return;
    }
    
    checkoutData.name = name;
    checkoutData.phone = '+971' + phone;
    checkoutData.email = email;
    goToPage('checkout-address-page');
}

// ===== CHECKOUT - ADDRESS =====
function validateAddress(event) {
    event.preventDefault();
    const emirate = document.getElementById('address-emirate').value.trim();
    const area = document.getElementById('address-area').value.trim();
    const street = document.getElementById('address-street').value.trim();
    
    if (!emirate) {
        alert('الرجاء اختيار الإمارة');
        return;
    }
    
    if (!area || area.length < 2) {
        alert('الرجاء إدخال المنطقة');
        return;
    }
    
    if (!street || street.length < 2) {
        alert('الرجاء إدخال الشارع والمبنى');
        return;
    }
    
    checkoutData.emirate = emirate;
    checkoutData.area = area;
    checkoutData.street = street;
    checkoutData.unit = document.getElementById('address-unit').value.trim() || 'بدون رقم وحدة';
    checkoutData.addressType = document.querySelector('input[name="address-type"]:checked').value;
    goToPage('checkout-invoice-page');
}

// ===== INVOICE =====
function renderInvoice() {
    const orderId = '#' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const today = new Date().toLocaleDateString('ar-AE');

    // إنشاء محتوى الفاتورة
    let invoiceHtml = `
        <div style="background:white; border-radius:12px; padding:1.5rem; margin-bottom:1rem;">
            <div style="display:flex; justify-content:space-between; margin-bottom:1.5rem; border-bottom:1px solid #e0e6ed; padding-bottom:1rem;">
                <div>
                    <div style="font-size:0.8rem; color:var(--text-light);">رقم الطلب</div>
                    <div id="invoice-order-id" style="font-size:1.2rem; font-weight:700; color:var(--primary);">${orderId}</div>
                </div>
                <div style="text-align:left;">
                    <div style="font-size:0.8rem; color:var(--text-light);">التاريخ</div>
                    <div id="invoice-date" style="font-size:1rem; font-weight:600;">${today}</div>
                </div>
            </div>

            <div style="margin-bottom:1.5rem; padding-bottom:1rem; border-bottom:1px solid #e0e6ed;">
                <div style="font-size:0.8rem; color:var(--text-light); margin-bottom:0.5rem;">معلومات العميل</div>
                <div style="font-weight:600; margin-bottom:0.3rem;" id="invoice-name"></div>
                <div style="color:var(--text-light); font-size:0.9rem;" id="invoice-phone"></div>
            </div>

            <div style="margin-bottom:1.5rem;">
                <div style="font-size:0.8rem; color:var(--text-light); margin-bottom:0.8rem; font-weight:600;">تفاصيل الطلب</div>
                <div id="invoice-items" style="margin-bottom:1rem;"></div>
            </div>

            <div style="background:#f9fafb; border-radius:8px; padding:1rem;">
                <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
                    <span style="color:var(--text-light);">المجموع الفرعي</span>
                    <span id="invoice-subtotal" style="font-weight:600;">0.00 د.إ</span>
                </div>
                <div style="display:flex; justify-content:space-between; margin-bottom:0.8rem; padding-bottom:0.8rem; border-bottom:1px solid #e0e6ed;">
                    <span style="color:var(--text-light);">رسوم التوصيل</span>
                    <span id="invoice-delivery" style="font-weight:600;">0.00 د.إ</span>
                </div>
                <div style="display:flex; justify-content:space-between;">
                    <span style="font-weight:700; font-size:1.1rem;">الإجمالي</span>
                    <span id="invoice-total" style="font-weight:700; font-size:1.1rem; color:var(--primary);">0.00 د.إ</span>
                </div>
            </div>
        </div>
    `;
    document.getElementById('invoice-content').innerHTML = invoiceHtml;

    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const delivery = subtotal >= 50 ? 0 : 5;
    const total = subtotal + delivery;

    let itemsHtml = '';
    cart.forEach(item => {
        itemsHtml += `
            <div class="invoice-item">
                <div class="invoice-item-name">${item.name}</div>
                <div class="invoice-item-qty">× ${item.qty}</div>
                <div class="invoice-item-price">${(item.price * item.qty).toFixed(2)} د.إ</div>
            </div>
        `;
    });

    // تحديث البيانات
    document.getElementById('invoice-order-id').textContent = orderId;
    document.getElementById('invoice-date').textContent = today;
    document.getElementById('invoice-name').textContent = checkoutData.name;
    document.getElementById('invoice-phone').textContent = checkoutData.phone;
    document.getElementById('invoice-items').innerHTML = itemsHtml;
    document.getElementById('invoice-subtotal').textContent = subtotal.toFixed(2) + ' د.إ';
    document.getElementById('invoice-delivery').textContent = delivery.toFixed(2) + ' د.إ';
    document.getElementById('invoice-total').textContent = total.toFixed(2) + ' د.إ';

    checkoutData.orderId = orderId;
    checkoutData.subtotal = subtotal;
    checkoutData.delivery = delivery;
    checkoutData.total = total;
}

// ===== CARD DISPLAY FUNCTIONS =====
function updateCardDisplay() {
    const holderName = document.getElementById('card-holder').value || 'الاسم';
    document.getElementById('card-display-name').textContent = holderName.toUpperCase();
}

function formatCardNumber(input) {
    let value = input.value.replace(/\s/g, '').replace(/[^0-9]/g, '');
    // Limit to 16 digits
    value = value.slice(0, 16);
    let formatted = '';
    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) formatted += ' ';
        formatted += value[i];
    }
    input.value = formatted;
    
    // Validate on input
    if (value.length === 16) {
        validateCardNumber(input);
    } else {
        const cardNumberInput = document.getElementById('card-number');
        cardNumberInput.style.borderColor = '#e0e6ed';
    }
    
    // Update card display - آخر 4 أرقام
    const lastFour = value.slice(-4).padStart(4, '0');
    if (document.getElementById('card-last-four')) {
        document.getElementById('card-last-four').textContent = lastFour;
    }
}

function formatExpiry(input) {
    let value = input.value.replace(/[^0-9]/g, '');
    // Limit to 4 digits (MMYY)
    value = value.slice(0, 4);
    if (value.length >= 2) {
        value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    input.value = value;
    validateCardExpiry(input);
}

// ===== CARD VALIDATION FUNCTIONS =====
function luhnCheck(cardNumber) {
    let sum = 0;
    let isEven = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i], 10);
        if (isEven) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
        isEven = !isEven;
    }
    return sum % 10 === 0;
}

function validateCardNumber(input) {
    const value = input.value.replace(/\s/g, '');
    const cardNumberInput = document.getElementById('card-number');
    
    if (value.length === 0) {
        cardNumberInput.style.borderColor = '#e0e6ed';
        return false;
    }
    
    if (value.length !== 16) {
        cardNumberInput.style.borderColor = '#d32f2f';
        return false;
    }
    
    if (!luhnCheck(value)) {
        cardNumberInput.style.borderColor = '#d32f2f';
        return false;
    }
    
    cardNumberInput.style.borderColor = '#4caf50';
    return true;
}

function validateCardExpiry(input) {
    const value = input.value;
    const expiryInput = document.getElementById('card-expiry');
    
    if (value.length === 0) {
        expiryInput.style.borderColor = '#e0e6ed';
        return false;
    }
    
    if (value.length !== 5 || value[2] !== '/') {
        expiryInput.style.borderColor = '#d32f2f';
        return false;
    }
    
    const month = parseInt(value.slice(0, 2), 10);
    const year = parseInt(value.slice(3, 5), 10);
    
    if (month < 1 || month > 12) {
        expiryInput.style.borderColor = '#d32f2f';
        return false;
    }
    
    const currentYear = new Date().getFullYear() % 100;
    const currentMonth = new Date().getMonth() + 1;
    
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
        expiryInput.style.borderColor = '#d32f2f';
        return false;
    }
    
    expiryInput.style.borderColor = '#4caf50';
    return true;
}

function validateCardCVV(input) {
    const value = input.value;
    const cvvInput = document.getElementById('card-cvv');
    
    if (value.length === 0) {
        cvvInput.style.borderColor = '#e0e6ed';
        return false;
    }
    
    if (value.length !== 3) {
        cvvInput.style.borderColor = '#d32f2f';
        return false;
    }
    
    cvvInput.style.borderColor = '#4caf50';
    return true;
}

// ===== PAYMENT =====
function selectPaymentMethod(method, element) {
    document.querySelectorAll('.payment-method-card').forEach(card => {
        card.classList.remove('active');
        card.querySelector('i').className = 'fas fa-circle';
        card.querySelector('i').style.color = '#ddd';
    });

    element.classList.add('active');
    element.querySelector('i').className = 'fas fa-check-circle';
    element.querySelector('i').style.color = 'var(--primary)';

    checkoutData.paymentMethod = method;

    const cardForm = document.getElementById('card-payment-form');
    const otherBtn = document.getElementById('other-payment-btn');

    if (method === 'card') {
        cardForm.style.display = 'block';
        otherBtn.style.display = 'none';
    } else {
        cardForm.style.display = 'none';
        otherBtn.style.display = 'block';
    }
    
    // Save payment method to session
    sessionStorage.setItem('paymentMethod', method);
}

function submitCardPayment(event) {
    event.preventDefault();

    const cardHolder = document.getElementById('card-holder').value;
    const cardNumber = document.getElementById('card-number').value.replace(/\s/g, '');
    const cardExpiry = document.getElementById('card-expiry').value;
    const cardCVV = document.getElementById('card-cvv').value;

    // Validate all fields
    const isCardValid = validateCardNumber(document.getElementById('card-number'));
    const isExpiryValid = validateCardExpiry(document.getElementById('card-expiry'));
    const isCVVValid = validateCardCVV(document.getElementById('card-cvv'));

    if (!isCardValid || !isExpiryValid || !isCVVValid) {
        showNotification('⚠ يرجى إدخال بيانات البطاقة بشكل صحيح');
        return;
    }

    checkoutData.cardHolder = cardHolder;
    checkoutData.cardNumber = '****' + cardNumber.slice(-4);

    goToPage('otp-page');
    displayOTPPhone();
}

function submitOtherPayment() {
    goToPage('otp-page');
    displayOTPPhone();
}

function displayOTPPhone() {
    const phone = checkoutData.phone;
    // Show only last 4 digits
    const lastFour = phone.slice(-4);
    document.getElementById('otp-phone').textContent = `تم إرسال رمز التحقق إلى: ****${lastFour}`;
}

// ===== OTP =====
function showOTPLoading() {
    // Disabled as requested
    return;
}

function setupOTPInputs() {
    const inputs = document.querySelectorAll('.otp-input');
    // Focus first input (leftmost in LTR)
    if (inputs.length > 0) {
        // Ensure inputs are LTR
        inputs.forEach(inp => {
            inp.setAttribute('dir', 'ltr');
        });
    }
    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            // Only allow digits
            e.target.value = e.target.value.replace(/[^0-9]/g, '');
            if (e.target.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && e.target.value === '' && index > 0) {
                inputs[index - 1].focus();
            }
        });
        
        input.addEventListener('focus', (e) => {
            e.target.select();
        });
    });
    // Auto-focus first input when OTP page opens
    if (inputs.length > 0) {
        setTimeout(() => inputs[0].focus(), 300);
    }
}

function verifyOTP(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('.otp-input');
    const otp = Array.from(inputs).map(i => i.value).join('');

    if (otp.length !== 6) {
        alert('الرجاء إدخال الرمز كاملاً');
        return;
    }

    const submitBtn = document.getElementById('otp-submit-btn');
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.6';

    // محاكاة التحقق مع تأخير بسيط بدون لودر
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '1';
        showNotification('تم التحقق من الهوية بنجاح');
        setTimeout(() => {
            goToPage('success-page');
            displaySuccess();
        }, 500);
    }, 1500);
}

function resendOTP() {
    showNotification('تم إعادة إرسال الرمز');
    document.querySelectorAll('.otp-input').forEach(input => {
        input.value = '';
    });
    document.querySelector('.otp-input').focus();
}

// ===== SUCCESS PAGE =====
function displaySuccess() {
    document.getElementById('success-order-id').textContent = checkoutData.orderId;
    document.getElementById('success-total').textContent = checkoutData.total.toFixed(2) + ' د.إ';
}

// ===== HERO CAROUSEL =====
let currentAdSlide = 0;

function startHeroCarousel() {
    // There are 5 ad slides in the HTML now
    setInterval(() => {
        currentSlide = (currentSlide + 1) % 5;
        goToSlide(currentSlide);
    }, 4000);
}

function goToSlide(index) {
    currentSlide = index;
    const slides = document.getElementById('hero-slides');
    slides.style.transform = `translateX(${-index * 100}%)`;

    document.querySelectorAll('.hero-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function goToAdSlide(index) {
    currentAdSlide = index;
    const carousel = document.getElementById('ads-carousel');
    if (carousel) {
        carousel.style.transform = `translateX(${-index * 100}%)`;
        carousel.style.transition = 'transform 0.5s ease';
    }
    
    document.querySelectorAll('.ads-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
        dot.style.background = i === index ? 'var(--primary)' : '#ddd';
    });
}

// ===== UTILITIES =====
function showNotification(message) {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        bottom: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--primary);
        color: white;
        padding: 0.8rem 1.2rem;
        border-radius: 8px;
        font-size: 0.9rem;
        z-index: 2000;
        animation: slideUp 0.3s ease;
    `;
    notif.textContent = message;
    document.body.appendChild(notif);

    setTimeout(() => {
        notif.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => notif.remove(), 300);
    }, 2000);
}

// ===== SEARCH =====
document.getElementById('search-input').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (query === '') {
        renderProducts();
        return;
    }

    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    const results = products.filter(p => 
        p.name.includes(query) || p.desc.includes(query)
    );

    if (results.length === 0) {
        grid.innerHTML = '<div style="grid-column:1/-1; text-align:center; padding:2rem; color:var(--text-light);">لم يتم العثور على منتجات</div>';
        return;
    }

    results.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image" onclick="openModal(${product.id})">
                <img src="${product.img}" alt="${product.name}">
                ${product.badge ? `<div class="product-badge ${product.badgeClass}">${product.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-desc">${product.desc}</div>
                <div class="product-footer">
                    <div class="product-price">${product.price.toFixed(2)} د.إ</div>
                    <div class="product-actions">
                        <button class="product-btn add" onclick="addToCart(${product.id}, event)">
                            <i class="fas fa-plus"></i>
                        </button>
                        <button class="product-btn fav ${favorites.includes(product.id) ? 'active' : ''}" 
                                onclick="toggleFavorite(${product.id}, event)">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
});

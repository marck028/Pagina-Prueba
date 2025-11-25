// ============================================
// CONFIGURATION DATA
// ============================================
const CONFIG = {
    pageTitle: "Recargas de Juegos y Saldo Digital (Precios en Bs)",
    whatsappNumber: "59160351093",
    currency: "bs",
    colors: {
        primary: "#02A9F4",
        secondary: "#E91E63",
        accent: "#F4C42A",
        textDark: "#000000",
        highlight: "#18D6D1"
    },
    media: {
        faviconUrl: "img/favicon.png",
        logoUrl: "img/logo.png"
    },
    games: [
        {
            name: "ROBLOX",
            slug: "roblox",
            iconUrl: "img/roblox.webp",
            requirementsList: [
                "Usuario y Contraseña de tu cuenta de Roblox"
            ],
            products: [
                {
                    option: "500 Robux",
                    price: 70,
                    whatsappMessage: "Hola, estoy interesado en la recarga de 500 Robux para ROBLOX por 70bs. Por favor, envíame el comprobante de pago e indica si el método de recarga será por: 1. Usuario y contraseña (recomienda). 2. Gift Card."
                },
                {
                    option: "1000 Robux",
                    price: 140,
                    whatsappMessage: "Hola, estoy interesado en la recarga de 1000 Robux para ROBLOX por 140bs. Por favor, envíame el comprobante de pago e indica si el método de recarga será por: 1. Usuario y contraseña (recomienda). 2. Gift Card."
                },
                {
                    option: "2000 Robux",
                    price: 280,
                    whatsappMessage: "Hola, estoy interesado en la recarga de 2000 Robux para ROBLOX por 280bs. Por favor, envíame el comprobante de pago e indica si el método de recarga será por: 1. Usuario y contraseña (recomienda). 2. Gift Card."
                },
                {
                    option: "5250 Robux",
                    price: 700,
                    whatsappMessage: "Hola, estoy interesado en la recarga de 5250 Robux para ROBLOX por 700bs. Por favor, envíame el comprobante de pago e indica si el método de recarga será por: 1. Usuario y contraseña (recomienda). 2. Gift Card."
                },
                {
                    option: "Roblox Premium (1 Mes)",
                    price: 130,
                    whatsappMessage: "Hola, estoy interesado en la suscripción Roblox Premium por 130bs. Por favor, envíame el comprobante de pago y tu usuario y contraseña de ROBLOX para activar la suscripción."
                }
            ]
        },
        {
            name: "Clash Royale",
            slug: "clash-royale",
            iconUrl: "img/clashroyale.webp",
            requirementsList: [
                "Correo ligado a tu cuenta (se recibirá un código para acceder)"
            ],
            products: [
                {
                    option: "Pass Royale",
                    price: 120,
                    whatsappMessage: "Hola, quiero comprar el Pass Royale de Clash Royale por 120bs. Por favor, envíame el comprobante de pago y los datos de inicio de sesión de tu cuenta (Supercell ID, Google Play, o Apple ID) para la recarga."
                },
                {
                    option: "80 Gemas",
                    price: 10,
                    whatsappMessage: "Hola, quiero comprar 80 Gemas de Clash Royale por 10bs. Por favor, envíame el comprobante de pago y los datos de inicio de sesión de tu cuenta (Supercell ID, Google Play, o Apple ID) para la recarga."
                },
                {
                    option: "500 Gemas",
                    price: 30,
                    whatsappMessage: "Hola, quiero comprar 500 Gemas de Clash Royale por 30bs. Por favor, envíame el comprobante de pago y los datos de inicio de sesión de tu cuenta (Supercell ID, Google Play, o Apple ID) para la recarga."
                },
                {
                    option: "1200 Gemas",
                    price: 65,
                    whatsappMessage: "Hola, quiero comprar 1200 Gemas de Clash Royale por 65bs. Por favor, envíame el comprobante de pago y los datos de inicio de sesión de tu cuenta (Supercell ID, Google Play, o Apple ID) para la recarga."
                },
                {
                    option: "2500 Gemas",
                    price: 130,
                    whatsappMessage: "Hola, quiero comprar 2500 Gemas de Clash Royale por 130bs. Por favor, envíame el comprobante de pago y los datos de inicio de sesión de tu cuenta (Supercell ID, Google Play, o Apple ID) para la recarga."
                }
            ]
        },
        {
            name: "Clash of Clans",
            slug: "clash-of-clans",
            iconUrl: "img/clashofc.webp",
            requirementsList: [
                "Correo ligado a tu cuenta (se recibirá un código para acceder)"
            ],
            products: [
                {
                    option: "Pase de Oro",
                    price: 20,
                    whatsappMessage: "Hola, quiero el Pase de Oro de Clash of Clans por 20bs. Por favor, envíame el comprobante de pago y los datos de inicio de sesión de tu cuenta (Supercell ID, Google Play, o Apple ID) para la recarga."
                },
                {
                    option: "Mini Pase",
                    price: 25,
                    whatsappMessage: "Hola, quiero el Mini Pase de Clash of Clans por 25bs. Por favor, envíame el comprobante de pago y los datos de inicio de sesión de tu cuenta (Supercell ID, Google Play, o Apple ID) para la recarga."
                },
                {
                    option: "80 Gemas",
                    price: 10,
                    whatsappMessage: "Hola, quiero 80 Gemas de Clash of Clans por 10bs. Por favor, envíame el comprobante de pago y los datos de inicio de sesión de tu cuenta (Supercell ID, Google Play, o Apple ID) para la recarga."
                },
                {
                    option: "500 Gemas",
                    price: 30,
                    whatsappMessage: "Hola, quiero 500 Gemas de Clash of Clans por 30bs. Por favor, envíame el comprobante de pago y los datos de inicio de sesión de tu cuenta (Supercell ID, Google Play, o Apple ID) para la recarga."
                },
                {
                    option: "1200 Gemas",
                    price: 65,
                    whatsappMessage: "Hola, quiero 1200 Gemas de Clash of Clans por 65bs. Por favor, envíame el comprobante de pago y los datos de inicio de sesión de tu cuenta (Supercell ID, Google Play, o Apple ID) para la recarga."
                }
            ]
        },
        {
            name: "Brawl Stars",
            slug: "brawl-stars",
            iconUrl: "img/brawl-stars-logo.png",
            requirementsList: [
                "Correo ligado a tu cuenta (se recibirá un código para acceder)"
            ],
            products: [
                {
                    option: "Pase Brawl Plus",
                    price: 130,
                    whatsappMessage: "Hola, quiero el Pase Brawl Plus de Brawl Stars por 130bs. Por favor, envíame el comprobante de pago y los datos de inicio de sesión de tu cuenta (Supercell ID, Google Play, o Apple ID) para la recarga."
                },
                {
                    option: "Pase Brawl",
                    price: 90,
                    whatsappMessage: "Hola, quiero el Pase Brawl de Brawl Stars por 90bs. Por favor, envíame el comprobante de pago y los datos de inicio de sesión de tu cuenta (Supercell ID, Google Play, o Apple ID) para la recarga."
                }
            ]
        },
        {
            name: "Steam Saldo",
            slug: "steam-saldo",
            iconUrl: "img/Steam.png",
            requirementsList: [
                "Usuario y Contraseña de tu cuenta de Steam"
            ],
            products: [
                {
                    option: "5 Dólares Saldo Steam",
                    price: 65,
                    whatsappMessage: "Hola, quiero 5 Dólares de Saldo Steam por 65bs. Por favor, envíame el comprobante de pago y el nombre de usuario de tu cuenta de Steam para generar el código de recarga."
                },
                {
                    option: "10 Dólares Saldo Steam",
                    price: 130,
                    whatsappMessage: "Hola, quiero 10 Dólares de Saldo Steam por 130bs. Por favor, envíame el comprobante de pago y el nombre de usuario de tu cuenta de Steam para generar el código de recarga."
                },
                {
                    option: "20 Dólares Saldo Steam",
                    price: 260,
                    whatsappMessage: "Hola, quiero 20 Dólares de Saldo Steam por 260bs. Por favor, envíame el comprobante de pago y el nombre de usuario de tu cuenta de Steam para generar el código de recarga."
                },
                {
                    option: "50 Dólares Saldo Steam",
                    price: 650,
                    whatsappMessage: "Hola, quiero 50 Dólares de Saldo Steam por 650bs. Por favor, envíame el comprobante de pago y el nombre de usuario de tu cuenta de Steam para generar el código de recarga."
                }
            ]
        },
        {
            name: "Vistas TikTok",
            slug: "vistas-tiktok",
            iconUrl: "img/tiktok.png",
            requirementsList: [
                "Usuario y Contraseña de tu cuenta de TikTok (opcionalmente puede requerir Google/Facebook, pero se recomienda poner solo usuario y contraseña)"
            ],
            products: [
                {
                    option: "22k a 60k Vistas",
                    price: 50,
                    whatsappMessage: "Hola, quiero el paquete de 22k a 60k Vistas para TikTok por 50bs. Por favor, envíame el comprobante de pago y el *enlace completo del video* de TikTok que deseas promocionar."
                },
                {
                    option: "33k a 90k Vistas",
                    price: 70,
                    whatsappMessage: "Hola, quiero el paquete de 33k a 90k Vistas para TikTok por 70bs. Por favor, envíame el comprobante de pago y el *enlace completo del video* de TikTok que deseas promocionar."
                },
                {
                    option: "45k a 120k Vistas",
                    price: 100,
                    whatsappMessage: "Hola, quiero el paquete de 45k a 120k Vistas para TikTok por 100bs. Por favor, envíame el comprobante de pago y el *enlace completo del video* de TikTok que deseas promocionar."
                }
            ]
        },
        {
            name: "Fortnite",
            slug: "fortnite",
            iconUrl: "img/fortnite.png",
            requirementsList: [
                "Usuario y Contraseña o Correo de tu cuenta de Fortnite"
            ],
            products: [
                {
                    option: "1000 V-Bucks",
                    price: 80,
                    whatsappMessage: "Hola, quiero 1000 V-Bucks de Fortnite por 80bs. Por favor, envíame el comprobante de pago y tu usuario y contraseña o correo de Fortnite."
                },
                {
                    option: "2800 V-Bucks",
                    price: 200,
                    whatsappMessage: "Hola, quiero 2800 V-Bucks de Fortnite por 200bs. Por favor, envíame el comprobante de pago y tu usuario y contraseña o correo de Fortnite."
                },
                {
                    option: "5000 V-Bucks",
                    price: 350,
                    whatsappMessage: "Hola, quiero 5000 V-Bucks de Fortnite por 350bs. Por favor, envíame el comprobante de pago y tu usuario y contraseña o correo de Fortnite."
                },
                {
                    option: "13500 V-Bucks",
                    price: 850,
                    whatsappMessage: "Hola, quiero 13500 V-Bucks de Fortnite por 850bs. Por favor, envíame el comprobante de pago y tu usuario y contraseña o correo de Fortnite."
                }
            ]
        }
    ]
};

// ============================================
// DOM ELEMENTS
// ============================================
const gamesGrid = document.getElementById('gamesGrid');
const productModal = document.getElementById('productModal');
const closeModalBtn = document.getElementById('closeModal');
const modalGameIcon = document.getElementById('modalGameIcon');
const modalGameName = document.getElementById('modalGameName');
const requirementsList = document.getElementById('requirementsList');
const productsGrid = document.getElementById('productsGrid');

// ============================================
// INITIALIZE APP
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderGameCards();
    setupEventListeners();
});

// ============================================
// RENDER GAME CARDS
// ============================================
function renderGameCards() {
    gamesGrid.innerHTML = '';

    CONFIG.games.forEach((game, index) => {
        const gameCard = createGameCard(game, index);
        gamesGrid.appendChild(gameCard);
    });
}

function createGameCard(game, index) {
    const card = document.createElement('div');
    card.className = 'game-card';
    card.style.animationDelay = `${index * 0.1}s`;

    card.innerHTML = `
    <div class="game-icon-wrapper">
      <img src="${game.iconUrl}" alt="${game.name} Icon" class="game-icon" loading="lazy">
    </div>
    <h3 class="game-name">${game.name}</h3>
    <p class="game-description">${game.products.length} opciones disponibles</p>
    <button class="view-products-btn" data-game-slug="${game.slug}">
      Ver Productos
    </button>
  `;

    // Add click event to the button
    const viewBtn = card.querySelector('.view-products-btn');
    viewBtn.addEventListener('click', () => openModal(game));

    return card;
}

// ============================================
// MODAL FUNCTIONALITY
// ============================================
function openModal(game) {
    // Set modal header
    modalGameIcon.src = game.iconUrl;
    modalGameIcon.alt = `${game.name} Icon`;
    modalGameName.textContent = game.name;

    // Render requirements
    renderRequirements(game.requirementsList);

    // Render products
    renderProducts(game.products);

    // Show modal with animation
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

function renderRequirements(requirements) {
    requirementsList.innerHTML = '';

    requirements.forEach(requirement => {
        const li = document.createElement('li');
        li.textContent = requirement;
        requirementsList.appendChild(li);
    });
}

function renderProducts(products) {
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    card.innerHTML = `
    <div class="product-info">
      <h4>${product.option}</h4>
      <div class="product-price">${product.price} ${CONFIG.currency.toUpperCase()}</div>
    </div>
    <button class="buy-btn" data-whatsapp-message="${encodeURIComponent(product.whatsappMessage)}">
      Comprar
    </button>
  `;

    // Add click event to buy button
    const buyBtn = card.querySelector('.buy-btn');
    buyBtn.addEventListener('click', () => handlePurchase(product.whatsappMessage));

    return card;
}

// ============================================
// WHATSAPP INTEGRATION
// ============================================
function handlePurchase(message) {
    const whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Close modal button
    closeModalBtn.addEventListener('click', closeModal);

    // Close modal when clicking outside content
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            closeModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && productModal.classList.contains('active')) {
            closeModal();
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============================================
// IMAGE ERROR HANDLING
// ============================================
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.error('Image failed to load:', e.target.src);
        // You can set a fallback image here if needed
        // e.target.src = 'img/placeholder.png';
    }
}, true);

// ============================================
// UTILITY FUNCTIONS
// ============================================
function formatPrice(price) {
    return `${price} ${CONFIG.currency.toUpperCase()}`;
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.remove('loading');
                observer.unobserve(img);
            }
        });
    });

    // Observe all images with loading class
    document.querySelectorAll('img.loading').forEach(img => {
        imageObserver.observe(img);
    });
}

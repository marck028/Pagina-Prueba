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
                    whatsappMessage: "Hola, estoy interesado en la recarga de 500 Robux para ROBLOX por 70bs. ¿Los datos que necesito proporcionar son el usuario y contraseña verdad?"
                },
                {
                    option: "1000 Robux",
                    price: 140,
                    whatsappMessage: "Hola, estoy interesado en la recarga de 1000 Robux para ROBLOX por 140bs. ¿Los datos que necesito proporcionar son el usuario y contraseña verdad?"
                },
                {
                    option: "2000 Robux",
                    price: 280,
                    whatsappMessage: "Hola, estoy interesado en la recarga de 2000 Robux para ROBLOX por 280bs. ¿Los datos que necesito proporcionar son el usuario y contraseña verdad?"
                },
                {
                    option: "5250 Robux",
                    price: 700,
                    whatsappMessage: "Hola, estoy interesado en la recarga de 5250 Robux para ROBLOX por 700bs. ¿Los datos que necesito proporcionar son el usuario y contraseña verdad?"
                },
                {
                    option: "Roblox Premium (1 Mes)",
                    price: 130,
                    whatsappMessage: "Hola, estoy interesado en la suscripción Roblox Premium por 130bs. ¿Los datos que necesito proporcionar son el usuario y contraseña de ROBLOX verdad?"
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
                    whatsappMessage: "Hola, quiero comprar el Pass Royale de Clash Royale por 120bs. ¿Los datos que necesito proporcionar son el correo ligado a mi cuenta verdad?"
                },
                {
                    option: "80 Gemas",
                    price: 10,
                    whatsappMessage: "Hola, quiero comprar 80 Gemas de Clash Royale por 10bs. ¿Los datos que necesito proporcionar son el correo ligado a mi cuenta verdad?"
                },
                {
                    option: "500 Gemas",
                    price: 30,
                    whatsappMessage: "Hola, quiero comprar 500 Gemas de Clash Royale por 30bs. ¿Los datos que necesito proporcionar son el correo ligado a mi cuenta verdad?"
                },
                {
                    option: "1200 Gemas",
                    price: 65,
                    whatsappMessage: "Hola, quiero comprar 1200 Gemas de Clash Royale por 65bs. ¿Los datos que necesito proporcionar son el correo ligado a mi cuenta verdad?"
                },
                {
                    option: "2500 Gemas",
                    price: 130,
                    whatsappMessage: "Hola, quiero comprar 2500 Gemas de Clash Royale por 130bs. ¿Los datos que necesito proporcionar son el correo ligado a mi cuenta verdad?"
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
                    whatsappMessage: "Hola, quiero el Pase de Oro de Clash of Clans por 20bs. ¿Los datos que necesito proporcionar son el correo ligado a mi cuenta verdad?"
                },
                {
                    option: "Mini Pase",
                    price: 25,
                    whatsappMessage: "Hola, quiero el Mini Pase de Clash of Clans por 25bs. ¿Los datos que necesito proporcionar son el correo ligado a mi cuenta verdad?"
                },
                {
                    option: "80 Gemas",
                    price: 10,
                    whatsappMessage: "Hola, quiero 80 Gemas de Clash of Clans por 10bs. ¿Los datos que necesito proporcionar son el correo ligado a mi cuenta verdad?"
                },
                {
                    option: "500 Gemas",
                    price: 30,
                    whatsappMessage: "Hola, quiero 500 Gemas de Clash of Clans por 30bs. ¿Los datos que necesito proporcionar son el correo ligado a mi cuenta verdad?"
                },
                {
                    option: "1200 Gemas",
                    price: 65,
                    whatsappMessage: "Hola, quiero 1200 Gemas de Clash of Clans por 65bs. ¿Los datos que necesito proporcionar son el correo ligado a mi cuenta verdad?"
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
                    whatsappMessage: "Hola, quiero el Pase Brawl Plus de Brawl Stars por 130bs. ¿Los datos que necesito proporcionar son el correo ligado a mi cuenta verdad?"
                },
                {
                    option: "Pase Brawl",
                    price: 90,
                    whatsappMessage: "Hola, quiero el Pase Brawl de Brawl Stars por 90bs. ¿Los datos que necesito proporcionar son el correo ligado a mi cuenta verdad?"
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
                    whatsappMessage: "Hola, quiero 5 Dólares de Saldo Steam por 65bs. ¿Los datos que necesito proporcionar son el usuario y contraseña de Steam verdad?"
                },
                {
                    option: "10 Dólares Saldo Steam",
                    price: 130,
                    whatsappMessage: "Hola, quiero 10 Dólares de Saldo Steam por 130bs. ¿Los datos que necesito proporcionar son el usuario y contraseña de Steam verdad?"
                },
                {
                    option: "20 Dólares Saldo Steam",
                    price: 260,
                    whatsappMessage: "Hola, quiero 20 Dólares de Saldo Steam por 260bs. ¿Los datos que necesito proporcionar son el usuario y contraseña de Steam verdad?"
                },
                {
                    option: "50 Dólares Saldo Steam",
                    price: 650,
                    whatsappMessage: "Hola, quiero 50 Dólares de Saldo Steam por 650bs. ¿Los datos que necesito proporcionar son el usuario y contraseña de Steam verdad?"
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
                    whatsappMessage: "Hola, quiero el paquete de 22k a 60k Vistas para TikTok por 50bs. ¿Los datos que necesito proporcionar son el usuario y contraseña de TikTok verdad?"
                },
                {
                    option: "33k a 90k Vistas",
                    price: 70,
                    whatsappMessage: "Hola, quiero el paquete de 33k a 90k Vistas para TikTok por 70bs. ¿Los datos que necesito proporcionar son el usuario y contraseña de TikTok verdad?"
                },
                {
                    option: "45k a 120k Vistas",
                    price: 100,
                    whatsappMessage: "Hola, quiero el paquete de 45k a 120k Vistas para TikTok por 100bs. ¿Los datos que necesito proporcionar son el usuario y contraseña de TikTok verdad?"
                }
            ]
        },
        {
            name: "Fortnite",
            slug: "fortnite",
            iconUrl: "img/fornite.jpeg",
            requirementsList: [
                "Usuario y Contraseña o Correo de tu cuenta de Fortnite"
            ],
            products: [
                {
                    option: "1000 Pavos",
                    price: 120,
                    whatsappMessage: "Hola, quiero 1000 Pavos de Fortnite por 120bs. ¿Los datos que necesito proporcionar son el usuario y contraseña o correo de Fortnite verdad?"
                },
                {
                    option: "2800 Pavos",
                    price: 300,
                    whatsappMessage: "Hola, quiero 2800 Pavos de Fortnite por 300bs. ¿Los datos que necesito proporcionar son el usuario y contraseña o correo de Fortnite verdad?"
                },
                {
                    option: "5000 Pavos",
                    price: 480,
                    whatsappMessage: "Hola, quiero 5000 Pavos de Fortnite por 480bs. ¿Los datos que necesito proporcionar son el usuario y contraseña o correo de Fortnite verdad?"
                },
                {
                    option: "13500 Pavos",
                    price: 1100,
                    whatsappMessage: "Hola, quiero 13500 Pavos de Fortnite por 1100bs. ¿Los datos que necesito proporcionar son el usuario y contraseña o correo de Fortnite verdad?"
                },
                {
                    option: "Club Fortnite",
                    price: 160,
                    whatsappMessage: "Hola, quiero el Club Fortnite por 160bs. ¿Los datos que necesito proporcionar son el usuario y contraseña o correo de Fortnite verdad?"
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

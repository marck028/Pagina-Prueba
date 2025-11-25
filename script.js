// ============================================
// DATA CONFIGURATION
// ============================================
const CONFIG = {
    pageTitle: "Recargas de Juegos y Saldo Digital (Precios en Bs)",
    whatsappNumber: "591",
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
            iconUrl: "img/roblox.png",
            requirementsList: [
                "Comprobante de pago.",
                "Usuario y contraseña de tu cuenta de Roblox (método recomendado) o código de Gift Card.",
                "Cuenta sin verificación de 2 pasos activa temporalmente."
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
                    "option": "5250 Robux",
                    "price": 700,
                    "whatsappMessage": "Hola, estoy interesado en la recarga de 5250 Robux para ROBLOX por 700bs. Por favor, envíame el comprobante de pago e indica si el método de recarga será por: 1. Usuario y contraseña (recomienda). 2. Gift Card."
                },
                {
                    "option": "Roblox Premium (1 Mes)",
                    "price": 130,
                    "whatsappMessage": "Hola, estoy interesado en la suscripción Roblox Premium por 130bs. Por favor, envíame el comprobante de pago y tu usuario y contraseña de ROBLOX para activar la suscripción."
                }
            ]
        },
        {
            name: "Clash Royale",
            slug: "clash-royale",
            iconUrl: "img/icon-clashroyale.png",
            requirementsList: [
                "Comprobante de pago.",
                "Datos de inicio de sesión de tu cuenta (Supercell ID, Google Play, o Apple ID).",
                "Código de verificación si aplica (se solicitará durante la recarga)."
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
            iconUrl: "img/icon-clashofclans.png",
            requirementsList: [
                "Comprobante de pago.",
                "Datos de inicio de sesión de tu cuenta (Supercell ID, Google Play, o Apple ID).",
                "Código de verificación si aplica (se solicitará durante la recarga)."
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
            iconUrl: "img/icon-brawlstars.png",
            requirementsList: [
                "Comprobante de pago.",
                "Datos de inicio de sesión de tu cuenta (Supercell ID, Google Play, o Apple ID).",
                "Código de verificación si aplica (se solicitará durante la recarga)."
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
            iconUrl: "img/icon-steam.png",
            requirementsList: [
                "Comprobante de pago.",
                "Nombre de usuario de tu cuenta de Steam (para asegurarnos que la región sea compatible).",
                "El saldo se envía en formato de código de recarga (Gift Card)."
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
            iconUrl: "img/icon-tiktok.png",
            requirementsList: [
                "Comprobante de pago.",
                "El enlace completo y directo del video de TikTok que deseas promocionar.",
                "El video debe ser público y no tener restricciones de edad/región."
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
        }
    ]
};

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Generates a WhatsApp link with a pre-filled message
 * @param {string} phoneNumber - WhatsApp phone number
 * @param {string} message - Pre-filled message
 * @returns {string} WhatsApp URL
 */
function generateWhatsAppLink(phoneNumber, message) {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
}

/**
 * Formats price with currency
 * @param {number} price - Price value
 * @param {string} currency - Currency code
 * @returns {string} Formatted price string
 */
function formatPrice(price, currency) {
    return `${price} <span class="currency">${currency}</span>`;
}

/**
 * Creates a product item element
 * @param {Object} product - Product data
 * @param {string} phoneNumber - WhatsApp phone number
 * @returns {HTMLElement} Product item element
 */
function createProductItem(product, phoneNumber) {
    const productItem = document.createElement('div');
    productItem.className = 'product-item';

    const whatsappLink = generateWhatsAppLink(phoneNumber, product.whatsappMessage);

    productItem.innerHTML = `
    <div class="product-info">
      <div class="product-name">${product.option}</div>
      <div class="product-price">${formatPrice(product.price, CONFIG.currency)}</div>
    </div>
    <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp">
      Comprar
    </a>
  `;

    return productItem;
}

/**
 * Creates a game card element
 * @param {Object} game - Game data
 * @returns {HTMLElement} Game card element
 */
function createGameCard(game) {
    const gameCard = document.createElement('div');
    gameCard.className = 'game-card';
    gameCard.setAttribute('data-game', game.slug);

    // Create game header
    const gameHeader = document.createElement('div');
    gameHeader.className = 'game-header';

    // Render image with empty space fallback
    // Using iconUrl from the new config
    const iconContent = `<img src="${game.iconUrl}" alt="${game.name}" class="game-image" onerror="this.style.opacity='0'">`;

    gameHeader.innerHTML = `
    <div class="game-icon-wrapper">${iconContent}</div>
    <h2 class="game-name">${game.name}</h2>
  `;

    // Create requirements section
    // Handling requirementsList array
    let requirementsHtml = '';
    if (game.requirementsList && game.requirementsList.length > 0) {
        requirementsHtml = '<ul class="req-list">';
        game.requirementsList.forEach(req => {
            requirementsHtml += `<li>${req}</li>`;
        });
        requirementsHtml += '</ul>';
    }

    const requirementsDiv = document.createElement('div');
    requirementsDiv.className = 'game-requirements';
    requirementsDiv.innerHTML = `
    <span class="req-label">Requisitos:</span>
    ${requirementsHtml}
  `;

    // Create products list
    const productsList = document.createElement('div');
    productsList.className = 'products-list';

    game.products.forEach(product => {
        const productItem = createProductItem(product, CONFIG.whatsappNumber);
        productsList.appendChild(productItem);
    });

    gameCard.appendChild(gameHeader);
    gameCard.appendChild(requirementsDiv);
    gameCard.appendChild(productsList);

    return gameCard;
}

/**
 * Renders all game cards to the grid
 */
function renderGames() {
    const gamesGrid = document.getElementById('gamesGrid');

    if (!gamesGrid) {
        console.error('Games grid container not found');
        return;
    }

    // Clear existing content
    gamesGrid.innerHTML = '';

    // Add animation delay for staggered effect
    CONFIG.games.forEach((game, index) => {
        const gameCard = createGameCard(game);
        gameCard.style.animationDelay = `${index * 0.1}s`;
        gamesGrid.appendChild(gameCard);
    });
}

/**
 * Sets up the floating WhatsApp button
 */
function setupWhatsAppFloat() {
    const whatsappFloat = document.getElementById('whatsappFloat');
    const footerWhatsApp = document.getElementById('footerWhatsApp');

    const defaultMessage = "Hola, estoy interesado en sus servicios de recarga. ¿Podrían darme más información?";
    const whatsappLink = generateWhatsAppLink(CONFIG.whatsappNumber, defaultMessage);

    if (whatsappFloat) {
        whatsappFloat.href = whatsappLink;
    }

    if (footerWhatsApp) {
        footerWhatsApp.href = whatsappLink;
    }
}

/**
 * Adds smooth scroll behavior for anchor links
 */
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

/**
 * Adds intersection observer for fade-in animations
 */
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.game-card').forEach(card => {
        observer.observe(card);
    });
}

// ============================================
// INITIALIZATION
// ============================================

/**
 * Initialize the application when DOM is ready
 */
function init() {
    console.log('🎮 Initializing Game Recharge Website...');

    // Render all games
    renderGames();

    // Setup WhatsApp buttons
    setupWhatsAppFloat();

    // Setup smooth scrolling
    setupSmoothScroll();

    // Setup scroll animations
    setupScrollAnimations();

    console.log('✅ Website initialized successfully!');
}

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { CONFIG, generateWhatsAppLink, formatPrice };
}

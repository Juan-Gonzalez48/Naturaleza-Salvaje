// ===================== CATÁLOGO COMPLETO (31 productos con presentaciones) =====================
const productosData = [
    { id: 1, nombre: "Aceite de Coco Extra Virgen", categoria: "corporal", descripcion: "Perfecto para fortalecer y dar vitalidad a las fibras capilares, estimula el crecimiento del cabello, repara puntas abiertas, es un excelente hidratante para tu piel y cabello...", descCorta: "Multiusos: hidrata piel y cabello, desmaquilla, repara puntas.", imagen: "Fotos/AceiteCoco.jpg.jpeg", presentaciones: [{ tamaño: "125 gr", precio: 16000, precioTexto: "$16.000" }, { tamaño: "250 gr", precio: 26000, precioTexto: "$26.000" }, { tamaño: "500 gr", precio: 42000, precioTexto: "$42.000" }] },
    { id: 2, nombre: "Aceite de Argán", categoria: "corporal", descripcion: "30 ml. Fortalece y repara cabello, cejas y pestañas.", descCorta: "Repara cabello, cejas y pestañas.", imagen: "Fotos/AceiteArgan.jpg.jpeg", presentaciones: [{ tamaño: "30 ml", precio: 16000, precioTexto: "$16.000" }] },
    { id: 3, nombre: "Aceite de Almendras", categoria: "corporal", descripcion: "Hidrata profundamente la piel, previene estrías.", descCorta: "Hidrata profundamente la piel.", imagen: "Fotos/AceiteAlmendras.jpg.jpeg", presentaciones: [{ tamaño: "275 ml", precio: 19000, precioTexto: "$19.000" }] },
    { id: 4, nombre: "Agua de Rosas Tonificante", categoria: "facial", descripcion: "Tonifica, calma, regula el pH.", descCorta: "Tonifica y calma la piel.", imagen: "Fotos/AguaRosas.jpg.jpeg", presentaciones: [{ tamaño: "300 ml", precio: 12000, precioTexto: "$12.000" }] },
    { id: 5, nombre: "Tónico de Arroz", categoria: "facial", descripcion: "Exfoliante natural, reduce manchas.", descCorta: "Exfoliante natural, reduce manchas.", imagen: "Fotos/FacialArroz.jpg.jpeg", presentaciones: [{ tamaño: "250 ml", precio: 14000, precioTexto: "$14.000" }] },
    { id: 6, nombre: "Sérum Facial Vitamina C", categoria: "facial", descripcion: "Antioxidante, unifica el tono, estimula colágeno.", descCorta: "Antioxidante, unifica el tono.", imagen: "Fotos/VitaminaC.jpg.jpeg", presentaciones: [{ tamaño: "35 ml", precio: 22500, precioTexto: "$22.500" }] },
    { id: 7, nombre: "Sérum Ácido Hialurónico", categoria: "facial", descripcion: "Hidratación intensa, efecto relleno.", descCorta: "Hidratación intensa, efecto relleno.", imagen: "Fotos/AcidoHialuronico.jpg.jpeg", presentaciones: [{ tamaño: "35 ml", precio: 28000, precioTexto: "$28.000" }] },
    { id: 8, nombre: "Sérum Facial Aloe Vera", categoria: "facial", descripcion: "Antioxidante, cierra poros, trata acné.", descCorta: "Antioxidante, cierra poros.", imagen: "Fotos/AloeVera.jpg.jpeg", presentaciones: [{ tamaño: "35 ml", precio: 17000, precioTexto: "$17.000" }] },
    { id: 9, nombre: "Jabón Facial Carbón Activado", categoria: "facial", descripcion: "Purifica, elimina impurezas.", descCorta: "Purifica, elimina impurezas.", imagen: "Fotos/JabonCarbon.jpg.jpeg", presentaciones: [{ tamaño: "145 gr", precio: 13000, precioTexto: "$13.000" }] },
    { id: 10, nombre: "Jabón Facial Caléndula, Manzanilla y Miel", categoria: "facial", descripcion: "Ideal para piel sensible, cicatriza.", descCorta: "Ideal para piel sensible.", imagen: "Fotos/JabonFacial.jpg.jpeg", presentaciones: [{ tamaño: "145 gr", precio: 12000, precioTexto: "$12.000" }] },
    { id: 11, nombre: "Jabón Anticelulítico y Exfoliante", categoria: "corporal", descripcion: "Exfolia, detox, anticelulítico.", descCorta: "Exfolia, detox, anticelulítico.", imagen: "Fotos/JabonAnticelulitis.jpg.jpeg", presentaciones: [{ tamaño: "145 gr", precio: 13000, precioTexto: "$13.000" }] },
    { id: 12, nombre: "Jabón Facial de Avena y Colágeno", categoria: "facial", descripcion: "Nutrición extrema, colágeno.", descCorta: "Nutrición extrema, piel sedosa.", imagen: "Fotos/JabonAvena.jpg.jpeg", presentaciones: [{ tamaño: "75 gr", precio: 8000, precioTexto: "$8.000" }] },
    { id: 13, nombre: "Jabón Facial de Arroz y Colágeno", categoria: "facial", descripcion: "Nutrición extrema.", descCorta: "Nutrición extrema.", imagen: "Fotos/JabonArroz.jpg.jpeg", presentaciones: [{ tamaño: "60 gr", precio: 7000, precioTexto: "$7.000" }] },
    { id: 14, nombre: "Exfoliante Labial", categoria: "labios-cejas", descripcion: "Exfolia y suaviza los labios.", descCorta: "Exfolia y suaviza.", imagen: "Fotos/ExfolianteLabial.jpg.jpeg", presentaciones: [{ tamaño: "20 gr", precio: 8000, precioTexto: "$8.000" }] },
    { id: 15, nombre: "Bálsamo Labial", categoria: "labios-cejas", descripcion: "Hidratación intensa.", descCorta: "Hidratación intensa.", imagen: "Fotos/BalsamoLabial.jpeg", presentaciones: [{ tamaño: "20 gr", precio: 7000, precioTexto: "$7.000" }] },
    { id: 16, nombre: "Bálsamo Labial Chapstick", categoria: "labios-cejas", descripcion: "Protección duradera.", descCorta: "Protección duradera.", imagen: "Fotos/BalsamoLabialChapstick.jpg.jpeg", presentaciones: [{ tamaño: "20 gr", precio: 7000, precioTexto: "$7.000" }] },
    { id: 17, nombre: "Bálsamo de Cejas y Pestañas", categoria: "labios-cejas", descripcion: "Fortalece y mejora apariencia.", descCorta: "Fortalece y mejora.", imagen: "Fotos/BalsamoCejas-pestañas.jpg.jpeg", presentaciones: [{ tamaño: "20 gr", precio: 8000, precioTexto: "$8.000" }] },
    { id: 18, nombre: "Sérum de Pestañas", categoria: "labios-cejas", descripcion: "Fortalece, estimula crecimiento.", descCorta: "Fortalece y estimula.", imagen: "Fotos/Pestañas.jpg.jpeg", presentaciones: [{ tamaño: "10 ml", precio: 21000, precioTexto: "$21.000" }] },
    { id: 19, nombre: "Arcilla Detox con Té Verde", categoria: "facial", descripcion: "Purificante, limpia profundamente.", descCorta: "Purificante.", imagen: "Fotos/ArcillaTeVerde.jpg.jpeg", presentaciones: [{ tamaño: "50 ml", precio: 12000, precioTexto: "$12.000" }] },
    { id: 20, nombre: "Exfoliante de Baño", categoria: "corporal", descripcion: "Elimina células muertas.", descCorta: "Elimina células muertas.", imagen: "Fotos/ExfolianteBaño.jpg.jpeg", presentaciones: [{ tamaño: "200 gr", precio: 14500, precioTexto: "$14.500" }] },
    { id: 21, nombre: "Leche de Coco Crema Corporal", categoria: "corporal", descripcion: "Hidrata profundamente.", descCorta: "Hidratación profunda.", imagen: "Fotos/LecheCocoCrema.jpg.jpeg", presentaciones: [{ tamaño: "250 gr", precio: 22000, precioTexto: "$22.000" }] },
    { id: 22, nombre: "Tónico Capilar Extracrecimiento", categoria: "capilar", descripcion: "Estimula crecimiento, fortalece.", descCorta: "Estimula crecimiento.", imagen: "Fotos/TonicoCapilarCrecimiento.jpg.jpeg", presentaciones: [{ tamaño: "350 ml", precio: 31000, precioTexto: "$31.000" }] },
    { id: 23, nombre: "Extracto de Romero", categoria: "capilar", descripcion: "Estimula crecimiento.", descCorta: "Estimula crecimiento.", imagen: "Fotos/ExtractoRomero.jpg.jpeg", presentaciones: [{ tamaño: "50 ml", precio: 24000, precioTexto: "$24.000" }] },
    { id: 24, nombre: "Extracto de Cebolla", categoria: "capilar", descripcion: "Estimula crecimiento, sin olor.", descCorta: "Estimula crecimiento.", imagen: "Fotos/ExtractoCebollaCapilar.jpg.jpeg", presentaciones: [{ tamaño: "50 ml", precio: 18000, precioTexto: "$18.000" }] },
    { id: 25, nombre: "Chocolaterapia Capilar", categoria: "capilar", descripcion: "Nutrición extrema.", descCorta: "Nutrición extrema.", imagen: "Fotos/Chocolaterapia.jpg.jpeg", presentaciones: [{ tamaño: "250 gr", precio: 30000, precioTexto: "$30.000" }] },
    { id: 26, nombre: "Tratamiento de Restauración", categoria: "capilar", descripcion: "Reestructura cabello dañado.", descCorta: "Reestructura.", imagen: "Fotos/TratamientoRestauracion.jpg.jpeg", presentaciones: [{ tamaño: "125 gr", precio: 15000, precioTexto: "$15.000" }] },
    { id: 27, nombre: "Tratamiento de Crecimiento", categoria: "capilar", descripcion: "Revitaliza, reduce caída.", descCorta: "Revitaliza.", imagen: "Fotos/TratamientoCrecimiento.jpg.jpeg", presentaciones: [{ tamaño: "125 gr", precio: 15000, precioTexto: "$15.000" }] },
    { id: 28, nombre: "Mantequilla Capilar", categoria: "capilar", descripcion: "Hidratación profunda.", descCorta: "Hidratación profunda.", imagen: "Fotos/MantequillaCapilar.jpg.jpeg", presentaciones: [{ tamaño: "250 gr", precio: 27000, precioTexto: "$27.000" }] },
    { id: 29, nombre: "Shampoo y Acondicionador", categoria: "capilar", descripcion: "Limpieza y crecimiento.", descCorta: "Limpieza y crecimiento.", imagen: "Fotos/ShampooAcondicionador.jpg.jpeg", presentaciones: [{ tamaño: "265 ml", precio: 20000, precioTexto: "$20.000" }] },
    { id: 30, nombre: "Repolarizador Multivitamínico", categoria: "capilar", descripcion: "Fortalece, previene caída.", descCorta: "Fortalece.", imagen: "Fotos/ReporalizadorMultivitaminico.jpg.jpeg", presentaciones: [{ tamaño: "275 ml", precio: 23000, precioTexto: "$23.000" }] },
    { id: 31, nombre: "Biotina Gotas Capilares", categoria: "capilar", descripcion: "Fortalece, estimula crecimiento.", descCorta: "Fortalece.", imagen: "Fotos/BiotinaGotasCapilar.jpg.jpeg", presentaciones: [{ tamaño: "35 ml", precio: 23000, precioTexto: "$23.000" }] },
    { id: 32, nombre: "Bálsamo Hidratante para Mascotas", categoria: "mascotas", descripcion: "Cuida patitas, natural.", descCorta: "Cuida patitas.", imagen: "Fotos/BalsamoMascotas.jpg.jpeg", presentaciones: [{ tamaño: "35 gr", precio: 17000, precioTexto: "$17.000" }] }
];

let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let currentCategory = "all";
let pendingProduct = null;

// Funciones de carrito
function updateCartUI() {
    const totalQty = cartItems.reduce((sum, i) => sum + i.cantidad, 0);
    const cartCountSpan = document.getElementById("cartCount");
    if (cartCountSpan) cartCountSpan.innerText = totalQty;
    localStorage.setItem("cart", JSON.stringify(cartItems));
}

function addToCartWithOptions(product, size, price, priceText) {
    const existingIndex = cartItems.findIndex(i => i.id === product.id && i.size === size);
    if (existingIndex !== -1) {
        cartItems[existingIndex].cantidad++;
    } else {
        cartItems.push({ id: product.id, nombre: product.nombre, size: size, precio: priceText, precioNum: price, cantidad: 1 });
    }
    updateCartUI();
    showToast(`✨ ${product.nombre} (${size}) añadido`);
}

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
}

// Modal de selección de presentación
function showOptionsModal(product) {
    pendingProduct = product;
    const modal = document.getElementById("optionsModal");
    const title = document.getElementById("optionsModalTitle");
    const optionsList = document.getElementById("optionsList");
    title.innerText = `Selecciona presentación - ${product.nombre}`;
    optionsList.innerHTML = "";
    product.presentaciones.forEach(pres => {
        const btn = document.createElement("div");
        btn.className = "option-btn";
        btn.innerHTML = `<span class="option-size">${pres.tamaño}</span><span class="option-price">${pres.precioTexto}</span>`;
        btn.dataset.size = pres.tamaño;
        btn.dataset.price = pres.precio;
        btn.dataset.priceText = pres.precioTexto;
        btn.addEventListener("click", () => {
            addToCartWithOptions(product, btn.dataset.size, parseInt(btn.dataset.price), btn.dataset.priceText);
            closeOptionsModal();
        });
        optionsList.appendChild(btn);
    });
    modal.style.display = "flex";
}

function closeOptionsModal() {
    document.getElementById("optionsModal").style.display = "none";
    pendingProduct = null;
}

// Modal de detalle del producto
function showModal(product) {
    const modal = document.getElementById("productModal");
    document.getElementById("modalTitle").innerText = product.nombre;
    document.getElementById("modalDesc").innerHTML = `<strong>${product.descripcion}</strong><br><br><i class="fas fa-leaf"></i> 100% natural · Sin crueldad`;
    if (product.presentaciones.length > 1) {
        const minPrice = Math.min(...product.presentaciones.map(p => p.precio));
        const maxPrice = Math.max(...product.presentaciones.map(p => p.precio));
        document.getElementById("modalPrice").innerHTML = `Desde $${minPrice.toLocaleString()} hasta $${maxPrice.toLocaleString()} COP`;
    } else {
        document.getElementById("modalPrice").innerHTML = `${product.presentaciones[0].precioTexto} COP`;
    }
    document.getElementById("modalImage").src = product.imagen;
    modal.style.display = "flex";
}

function closeModal() {
    document.getElementById("productModal").style.display = "none";
}

// Renderizado de productos
function getPriceRange(product) {
    if (product.presentaciones.length === 1) return product.presentaciones[0].precioTexto;
    const precios = product.presentaciones.map(p => p.precio);
    return `$${Math.min(...precios).toLocaleString()} - $${Math.max(...precios).toLocaleString()}`;
}

function renderProducts(category) {
    const grid = document.getElementById("productsGrid");
    const filtered = category === "all" ? productosData : productosData.filter(p => p.categoria === category);
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-message">No hay productos en esta categoría 🌿</div>`;
        return;
    }
    grid.innerHTML = filtered.map(p => {
        let catLabel = "";
        switch(p.categoria) {
            case "facial": catLabel = "Cuidado Facial"; break;
            case "capilar": catLabel = "Cuidado Capilar"; break;
            case "corporal": catLabel = "Corporal"; break;
            case "labios-cejas": catLabel = "Labios & Cejas"; break;
            case "mascotas": catLabel = "Mascotas"; break;
        }
        return `
            <div class="product-card">
                <img class="product-img" src="${p.imagen}" alt="${p.nombre}" loading="lazy">
                <div class="card-content">
                    <div class="product-category">${catLabel}</div>
                    <div class="product-title">${p.nombre}</div>
                    <div class="product-desc">${p.descCorta}</div>
                    <div class="product-price">${getPriceRange(p)} COP</div>
                    <div class="card-buttons">
                        <button class="btn-detail" data-id="${p.id}"><i class="far fa-eye"></i> Detalles</button>
                        <button class="btn-cart" data-id="${p.id}"><i class="fas fa-shopping-cart"></i> Agregar</button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
    document.querySelectorAll(".btn-detail").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const prod = productosData.find(p => p.id === parseInt(btn.dataset.id));
            if (prod) showModal(prod);
        });
    });
    document.querySelectorAll(".btn-cart").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const prod = productosData.find(p => p.id === parseInt(btn.dataset.id));
            if (prod) {
                if (prod.presentaciones.length === 1) {
                    const pres = prod.presentaciones[0];
                    addToCartWithOptions(prod, pres.tamaño, pres.precio, pres.precioTexto);
                } else {
                    showOptionsModal(prod);
                }
            }
        });
    });
}

// Carrito modal checkout
function showCartModal() {
    if (cartItems.length === 0) {
        alert("🌿 Tu carrito está vacío. ¡Agrega productos!");
        return;
    }
    let modal = document.getElementById("cartModal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "cartModal";
        modal.className = "cart-modal";
        document.body.appendChild(modal);
    }
    let itemsHtml = "";
    let total = 0;
    cartItems.forEach(item => {
        let subtotal = item.precioNum * item.cantidad;
        total += subtotal;
        itemsHtml += `<div style="display:flex; justify-content:space-between; margin-bottom:0.8rem;"><span>${item.nombre} (${item.size}) x${item.cantidad}</span><span>$${subtotal.toLocaleString()}</span></div>`;
    });
    modal.innerHTML = `
        <h3>🛍️ Tu pedido</h3>
        <div class="cart-items-list">${itemsHtml}</div>
        <div class="cart-total">Total: $${total.toLocaleString()}</div>
        <button class="btn btn-secondary" id="clearCartBtn">Vaciar carrito</button>
        <button class="whatsapp-checkout" id="whatsappOrderBtn"><i class="fab fa-whatsapp"></i> Enviar pedido por WhatsApp</button>
        <button class="btn-close-cart">Cerrar</button>
    `;
    modal.classList.add("active");
    document.getElementById("clearCartBtn")?.addEventListener("click", () => {
        cartItems = [];
        updateCartUI();
        modal.classList.remove("active");
        showToast("Carrito vaciado");
    });
    document.getElementById("whatsappOrderBtn")?.addEventListener("click", () => sendOrderByWhatsApp(total));
    modal.querySelector(".btn-close-cart")?.addEventListener("click", () => modal.classList.remove("active"));
}

function sendOrderByWhatsApp(total) {
    let message = "*🛒 NUEVO PEDIDO - Naturaleza Salvaje*%0A%0A";
    cartItems.forEach(item => {
        message += `• ${item.nombre} (${item.size}) x${item.cantidad} → ${item.precio} c/u%0A`;
    });
    message += `%0A💰 *Total:* $${total.toLocaleString()}%0A%0A📦 ¡Gracias por tu compra!`;
    window.open(`https://wa.me/573214058442?text=${message}`, "_blank");
}

// Filtros
function initFilters() {
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.category;
            renderProducts(currentCategory);
        });
    });
}

// Contadores animados
function initCounters() {
    const animate = (el, target, label) => {
        if (!el) return;
        let current = 0;
        const step = target / 50;
        const interval = setInterval(() => {
            current += step;
            if (current >= target) {
                el.innerText = target;
                clearInterval(interval);
            } else {
                el.innerText = Math.floor(current);
            }
        }, 30);
        const labelSpan = el.parentElement?.querySelector(".stat-label");
        if (labelSpan) labelSpan.innerText = label;
    };
    animate(document.getElementById("yearsCount"), 8, "Años de experiencia");
    animate(document.getElementById("productsCount"), 32, "Productos naturales");
    animate(document.getElementById("customersCount"), 1250, "Clientes felices");
}

// Inicializaciones
function initSwiper() {
    if (typeof Swiper !== "undefined") {
        new Swiper(".testimonial-swiper", {
            loop: true,
            autoplay: { delay: 4000 },
            pagination: { el: ".swiper-pagination", clickable: true },
        });
    }
}

function initAOS() {
    if (typeof AOS !== "undefined") AOS.init({ duration: 1000, once: true });
}

function initMobileMenu() {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("active");
            const icon = toggle.querySelector("i");
            if (nav.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
                if (window.innerWidth <= 768) {
                    document.getElementById("mainNav")?.classList.remove("active");
                    const toggleIcon = document.querySelector("#menuToggle i");
                    if (toggleIcon) {
                        toggleIcon.classList.remove("fa-times");
                        toggleIcon.classList.add("fa-bars");
                    }
                }
            }
        });
    });
}

function initContactForm() {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("📩 Mensaje enviado (demo). Gracias por contactarnos.");
            form.reset();
        });
    }
}

function initGlobalEvents() {
    document.getElementById("cartIcon")?.addEventListener("click", showCartModal);
    document.getElementById("closeModalBtn")?.addEventListener("click", closeModal);
    document.getElementById("closeOptionsModal")?.addEventListener("click", closeOptionsModal);
    window.addEventListener("click", (e) => {
        if (e.target === document.getElementById("productModal")) closeModal();
        if (e.target === document.getElementById("optionsModal")) closeOptionsModal();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts("all");
    initFilters();
    initCounters();
    initSwiper();
    initAOS();
    initMobileMenu();
    initSmoothScroll();
    initContactForm();
    initGlobalEvents();
    updateCartUI();
});

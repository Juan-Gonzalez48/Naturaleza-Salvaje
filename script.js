// ===================== CATÁLOGO COMPLETO =====================
const productosData = [
    { id: 1, nombre: "Aceite de Coco Extra Virgen", categoria: "corporal", descripcion: "Perfecto para fortalecer y dar vitalidad a las fibras capilares, estimula el crecimiento del cabello, repara puntas abiertas, es un excelente hidratante para tu piel y cabello, estimula la regeneración de la piel, te ayuda a desmaquillar incluso el maquillaje a prueba de agua sin maltratar tu rostro, es un aceite natural prensado en frío que le puedes dar tanto uso cosmético como culinario, excelente para freídos no profundos.", descCorta: "Multiusos: hidrata piel y cabello, desmaquilla, repara puntas.", imagen: "Fotos/AceiteCoco.jpg.jpeg", presentaciones: [{ tamaño: "125 gr", precio: 16000, precioTexto: "$16.000" }, { tamaño: "250 gr", precio: 26000, precioTexto: "$26.000" }, { tamaño: "500 gr", precio: 42000, precioTexto: "$42.000" }] },
    { id: 2, nombre: "Aceite de Argán Puro", categoria: "corporal", descripcion: "30 ml. Este maravilloso aceite es increíble para fortalecer y reparar tu cabello, tus cejas y lo mejor tus pestañas, gracias a todos sus ácidos grasos es realmente un reparador natural.", descCorta: "Repara cabello, cejas y pestañas. Antioxidante.", imagen: "Fotos/AceiteArgan.jpg.jpeg", presentaciones: [{ tamaño: "30 ml", precio: 16000, precioTexto: "$16.000" }] },
    { id: 3, nombre: "Aceite de Almendras", categoria: "corporal", descripcion: "El aliado perfecto para la nutrición total de tu cuerpo. Enriquecido con vitaminas y ácidos grasos esenciales, este aceite de rápida absorción hidrata profundamente la piel, suaviza las zonas secas y previene la aparición de estrías.", descCorta: "Hidrata profundamente la piel. Prevención de estrías.", imagen: "Fotos/AceiteAlmendras.jpg.jpeg", presentaciones: [{ tamaño: "275 ml", precio: 19000, precioTexto: "$19.000" }] },
    { id: 4, nombre: "Agua de Rosas Tonificante", categoria: "facial", descripcion: "300 ml. Tónico facial que ayuda a prevenir el envejecimiento prematuro, devolviéndole suavidad a la piel. Perfecta para regular el pH de la piel, calma enrojecimientos e hinchazón después de la depilación.", descCorta: "Tonifica y calma la piel. Regula el pH.", imagen: "Fotos/AguaRosas.jpg.jpeg", presentaciones: [{ tamaño: "300 ml", precio: 12000, precioTexto: "$12.000" }] },
    { id: 5, nombre: "Tónico de Arroz", categoria: "facial", descripcion: "Ayuda a retrasar los signos del envejecimiento, ya que cuenta con propiedades exfoliantes y blanqueadoras muy bondadosas para el cutis. Reduce las manchas, estimula la circulación, favorece la producción de colágeno.", descCorta: "Exfoliante natural, reduce manchas y unifica el tono.", imagen: "Fotos/FacialArroz.jpg.jpeg", presentaciones: [{ tamaño: "250 ml", precio: 14000, precioTexto: "$14.000" }] },
    { id: 6, nombre: "Sérum Facial Vitamina C", categoria: "facial", descripcion: "35 ml. Previene y mejora signos de fotoenvejecimiento como manchas y líneas de expresión. Recupera el brillo natural y elasticidad de la piel. Esencial para la producción de Colágeno.", descCorta: "Antioxidante, unifica el tono, estimula colágeno.", imagen: "Fotos/VitaminaC.jpg.jpeg", presentaciones: [{ tamaño: "35 ml", precio: 22500, precioTexto: "$22.500" }] },
    { id: 7, nombre: "Sérum Ácido Hialurónico", categoria: "facial", descripcion: "35 ml. Sus propiedades son espectaculares, tiene una impresionante capacidad para retener la humedad de la piel, su efecto en la piel es tensor al instante, rellena líneas de expresión y arrugas.", descCorta: "Hidratación intensa, efecto relleno y tensor.", imagen: "Fotos/AcidoHialuronico.jpg.jpeg", presentaciones: [{ tamaño: "35 ml", precio: 28000, precioTexto: "$28.000" }] },
    { id: 8, nombre: "Sérum Facial Aloe Vera", categoria: "facial", descripcion: "35 ml. Es perfecto tanto para pieles secas como grasas. Estimula producción de colágeno y elastina. Aporta hidratación profunda, perfecto para antes del maquillaje.", descCorta: "Antioxidante, cierra poros, regenera, trata acné.", imagen: "Fotos/AloeVera.jpg.jpeg", presentaciones: [{ tamaño: "35 ml", precio: 17000, precioTexto: "$17.000" }] },
    { id: 9, nombre: "Jabón Facial Carbón Activado", categoria: "facial", descripcion: "145 gr. Ideal para pieles con acné, pues gracias al carbón activado nos ayudará a secar los granitos, espinillas y puntos negros, sin resecar la piel.", descCorta: "Purifica, elimina impurezas, calma irritaciones.", imagen: "Fotos/JabonCarbon.jpg.jpeg", presentaciones: [{ tamaño: "145 gr", precio: 13000, precioTexto: "$13.000" }] },
    { id: 10, nombre: "Jabón Facial Caléndula, Manzanilla y Miel", categoria: "facial", descripcion: "145 gr. La caléndula y la manzanilla son plantas medicinales usadas por siglos por sus propiedades curativas. Producto 100% natural regenerador, cicatrizante, calmante y humectante.", descCorta: "Ideal para piel sensible, cicatriza, antiacné.", imagen: "Fotos/JabonFacial.jpg.jpeg", presentaciones: [{ tamaño: "145 gr", precio: 12000, precioTexto: "$12.000" }] },
    { id: 11, nombre: "Jabón Anticelulitis y Exfoliante", categoria: "corporal", descripcion: "A base de Café y centella asiática. Ideal para mejorar la apariencia de tu cuerpo, dejándola mucho más suave, joven, hidratada y sin impurezas.", descCorta: "Exfolia, detox, anticelulítico, tonifica.", imagen: "Fotos/JabonAnticelulitis.jpg.jpeg", presentaciones: [{ tamaño: "145 gr", precio: 13000, precioTexto: "$13.000" }] },
    { id: 12, nombre: "Jabón Facial de Avena y Colágeno", categoria: "facial", descripcion: "75 gr. Un jabón facial a base de avena y colágeno, que hidrata y nutre tu piel.", descCorta: "Nutrición extrema, colágeno + vitamina E, piel sedosa.", imagen: "Fotos/JabonAvena.jpg.jpeg", presentaciones: [{ tamaño: "75 gr", precio: 8000, precioTexto: "$8.000" }] },
    { id: 13, nombre: "Jabón Facial de Arroz y Colágeno", categoria: "facial", descripcion: "60 gr. Un jabón facial a base de arroz y colágeno, que hidrata y nutre tu piel.", descCorta: "Nutrición, suavidad, brillo natural.", imagen: "Fotos/JabonArroz.jpg.jpeg", presentaciones: [{ tamaño: "60 gr", precio: 7000, precioTexto: "$7.000" }] },
    { id: 14, nombre: "Exfoliante Labial", categoria: "labios-cejas", descripcion: "20 gr. Estimula la regeneración celular en la piel de nuestros labios, los mantiene suaves, humectados y aporta volumen natural.", descCorta: "Labios suaves, elimina cueritos, volumen natural.", imagen: "Fotos/ExfolianteLabial.jpg.jpeg", presentaciones: [{ tamaño: "20 gr", precio: 8000, precioTexto: "$8.000" }] },
    { id: 15, nombre: "Bálsamo Labial", categoria: "labios-cejas", descripcion: "20 gr. Un bálsamo labial hidratante que suaviza y protege los labios secos y agrietados. Rico en ingredientes naturales que nutren profundamente.", descCorta: "Hidratación intensa, brillo natural, protección.", imagen: "Fotos/BalsamoLabial.jpeg", presentaciones: [{ tamaño: "20 gr", precio: 7000, precioTexto: "$7.000" }] },
    { id: 16, nombre: "Bálsamo Labial Chapstick", categoria: "labios-cejas", descripcion: "Bálsamo labial en formato chapstick que proporciona hidratación intensa y protección duradera.", descCorta: "Hidratación intensa, protección duradera, formato práctico.", imagen: "Fotos/BalsamoLabialChapstick.jpg.jpeg", presentaciones: [{ tamaño: "20 gr", precio: 7000, precioTexto: "$7.000" }] },
    { id: 17, nombre: "Bálsamo de Cejas y Pestañas", categoria: "labios-cejas", descripcion: "Bálsamo para cejas y pestañas que nutre y protege, mejorando su apariencia y salud.", descCorta: "Nutrición intensa, fortalece, mejora apariencia.", imagen: "Fotos/BalsamoCejas-pestañas.jpg.jpeg", presentaciones: [{ tamaño: "20 gr", precio: 8000, precioTexto: "$8.000" }] },
    { id: 18, nombre: "Sérum de Pestañas", categoria: "labios-cejas", descripcion: "10 ml. Un serum específico para pestañas que fortalece, estimula el crecimiento y mejora la apariencia.", descCorta: "Fortalece, estimula crecimiento, mejora apariencia.", imagen: "Fotos/Pestañas.jpg.jpeg", presentaciones: [{ tamaño: "10 ml", precio: 21000, precioTexto: "$21.000" }] },
    { id: 19, nombre: "Arcilla Detox con Té Verde", categoria: "facial", descripcion: "50 ml. Mascarilla purificante y de limpieza profunda que ayuda a eliminar y prevenir barritos, puntos negros e impurezas.", descCorta: "Purifica, elimina impurezas, equilibra el pH.", imagen: "Fotos/ArcillaTeVerde.jpg.jpeg", presentaciones: [{ tamaño: "50 ml", precio: 12000, precioTexto: "$12.000" }] },
    { id: 20, nombre: "Exfoliante de Baño", categoria: "corporal", descripcion: "200 gr. Un exfoliante suave que elimina las células muertas de la piel y promueve la renovación celular.", descCorta: "Elimina células muertas, hidrata, suaviza piel.", imagen: "Fotos/ExfolianteBaño.jpg.jpeg", presentaciones: [{ tamaño: "200 gr", precio: 14500, precioTexto: "$14.500" }] },
    { id: 21, nombre: "Leche de Coco Crema Corporal", categoria: "corporal", descripcion: "250 gr. Crema corporal a base de aceite de coco, vitamina E y colágeno, que hidrata y nutre tu piel.", descCorta: "Hidrata profundamente, suaviza piel.", imagen: "Fotos/LecheCocoCrema.jpg.jpeg", presentaciones: [{ tamaño: "250 gr", precio: 22000, precioTexto: "$22.000" }] },
    { id: 22, nombre: "Tónico Capilar Extracrecimiento", categoria: "capilar", descripcion: "350 ml. Estimula un crecimiento acelerado en las fibras capilares, fortaleciendo, previniendo y tratando la caída del cabello.", descCorta: "Acelera crecimiento, fortalece raíz, sin grasa.", imagen: "Fotos/TonicoCapilarCrecimiento.jpg.jpeg", presentaciones: [{ tamaño: "350 ml", precio: 31000, precioTexto: "$31.000" }] },
    { id: 23, nombre: "Extracto de Romero", categoria: "capilar", descripcion: "50 ml. Un extracto natural de romero que estimula el crecimiento del cabello y fortalece las raíces.", descCorta: "Estimula crecimiento, fortalece raíces.", imagen: "Fotos/ExtractoRomero.jpg.jpeg", presentaciones: [{ tamaño: "50 ml", precio: 24000, precioTexto: "$24.000" }] },
    { id: 24, nombre: "Extracto de Cebolla", categoria: "capilar", descripcion: "50 ml. Un extracto natural de cebolla que estimula el crecimiento del cabello y fortalece las raíces.", descCorta: "Estimula crecimiento, fortalece raíces.", imagen: "Fotos/ExtractoCebollaCapilar.jpg.jpeg", presentaciones: [{ tamaño: "50 ml", precio: 18000, precioTexto: "$18.000" }] },
    { id: 25, nombre: "Chocolaterapia Capilar", categoria: "capilar", descripcion: "250 gr. Mascarilla concentrada rica en vitaminas y minerales que reúne los beneficios del extracto de cacao y café colombiano.", descCorta: "Nutrición extrema, realza color, fortalece fibra.", imagen: "Fotos/Chocolaterapia.jpg.jpeg", presentaciones: [{ tamaño: "250 gr", precio: 30000, precioTexto: "$30.000" }] },
    { id: 26, nombre: "Tratamiento de Restauración", categoria: "capilar", descripcion: "125 gr. Tratamiento capilar a base de extracto natural de aguacate y aceite de argán, libre de sal y sin parabenos.", descCorta: "Reestructura cabello dañado, hidrata y da brillo.", imagen: "Fotos/TratamientoRestauracion.jpg.jpeg", presentaciones: [{ tamaño: "125 gr", precio: 15000, precioTexto: "$15.000" }] },
    { id: 27, nombre: "Tratamiento de Crecimiento", categoria: "capilar", descripcion: "125 gr. Tratamiento capilar a base de extractos naturales de cebolla, romero y aceite de coco, formulado sin sal y sin parabenos.", descCorta: "Revitaliza cabello estancado, reduce caída.", imagen: "Fotos/TratamientoCrecimiento.jpg.jpeg", presentaciones: [{ tamaño: "125 gr", precio: 15000, precioTexto: "$15.000" }] },
    { id: 28, nombre: "Mantequilla Capilar", categoria: "capilar", descripcion: "250 gr. Mantequilla capilar a base de aceite de argán y manteca de karité, ideal para hidratar y nutrir el cabello seco y dañado.", descCorta: "Hidratación profunda, suavidad, brillo.", imagen: "Fotos/MantequillaCapilar.jpg.jpeg", presentaciones: [{ tamaño: "250 gr", precio: 27000, precioTexto: "$27.000" }] },
    { id: 29, nombre: "Shampoo y Acondicionador", categoria: "capilar", descripcion: "265 ml. Con todos los beneficios de la cebolla, el romero y el aceite de coco, estimula el crecimiento de tu cabello y previene su caída.", descCorta: "Limpieza profunda, suavidad, brillo.", imagen: "Fotos/ShampooAcondicionador.jpg.jpeg", presentaciones: [{ tamaño: "265 ml", precio: 20000, precioTexto: "$20.000" }] },
    { id: 30, nombre: "Repolarizador Multivitamínico", categoria: "capilar", descripcion: "275 ml. Repolarizador a base de vitaminas y minerales, ideal para fortalecer el cabello y estimular su crecimiento.", descCorta: "Fortalece el cabello, estimula el crecimiento, previene la caída.", imagen: "Fotos/ReporalizadorMultivitaminico.jpg.jpeg", presentaciones: [{ tamaño: "275 ml", precio: 23000, precioTexto: "$23.000" }] },
    { id: 31, nombre: "Biotina Gotas Capilares", categoria: "capilar", descripcion: "35 ml. Biotina gotas capilares a base de ingredientes naturales, ideales para fortalecer el cabello y estimular su crecimiento.", descCorta: "Fortalece el cabello, estimula el crecimiento, previene la caída.", imagen: "Fotos/BiotinaGotasCapilar.jpg.jpeg", presentaciones: [{ tamaño: "35 ml", precio: 23000, precioTexto: "$23.000" }] },
    { id: 32, nombre: "Bálsamo Hidratante para Mascotas", categoria: "mascotas", descripcion: "35 gr. Bálsamo hidratante formulado con ingredientes 100% naturales, seguros y comestibles, ideal para cuidar la piel y las patitas de tu peludo.", descCorta: "Hidrata la piel y el pelaje, previene la sequedad.", imagen: "Fotos/BalsamoMascotas.jpg.jpeg", presentaciones: [{ tamaño: "35 gr", precio: 17000, precioTexto: "$17.000" }] }
];

// ===================== VARIABLES GLOBALES =====================
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let currentCategory = "all";
let pendingProduct = null;

// ===================== FUNCIONES DEL CARRITO =====================
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

// ===================== MODALES =====================
function showOptionsModal(product) {
    pendingProduct = product;
    const modal = document.getElementById("optionsModal");
    const title = document.getElementById("optionsModalTitle");
    const optionsList = document.getElementById("optionsList");
    
    title.innerText = `Selecciona presentación - ${product.nombre}`;
    let optionsHtml = "";
    product.presentaciones.forEach(pres => {
        optionsHtml += `<div class="option-btn" data-size="${pres.tamaño}" data-price="${pres.precio}" data-price-text="${pres.precioTexto}">
                            <span class="option-size">${pres.tamaño}</span>
                            <span class="option-price">${pres.precioTexto}</span>
                        </div>`;
    });
    optionsList.innerHTML = optionsHtml;
    
    document.querySelectorAll("#optionsList .option-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            addToCartWithOptions(pendingProduct, btn.dataset.size, parseInt(btn.dataset.price), btn.dataset.priceText);
            closeOptionsModal();
        });
    });
    modal.style.display = "flex";
}

function closeOptionsModal() {
    document.getElementById("optionsModal").style.display = "none";
    pendingProduct = null;
}

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

// ===================== RENDERIZADO DE PRODUCTOS =====================
function getPriceRange(product) {
    if (product.presentaciones.length === 1) return product.presentaciones[0].precioTexto;
    const precios = product.presentaciones.map(p => p.precio);
    return `$${Math.min(...precios).toLocaleString()} - $${Math.max(...precios).toLocaleString()}`;
}

function renderProducts(category) {
    const grid = document.getElementById("productsGrid");
    if (!grid) return;
    const filtered = category === "all" ? productosData : productosData.filter(p => p.categoria === category);
    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-message" style="text-align:center; padding:2rem;">No hay productos en esta categoría 🌿</div>`;
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
            default: catLabel = "Natural";
        }
        return `
            <div class="product-card">
                <img class="product-card__img" src="${p.imagen}" alt="${p.nombre}" loading="lazy">
                <div class="product-card__content">
                    <div class="product-card__category">${catLabel}</div>
                    <div class="product-card__title">${p.nombre}</div>
                    <div class="product-card__desc">${p.descCorta}</div>
                    <div class="product-card__price">${getPriceRange(p)} COP</div>
                    <div class="product-card__buttons">
                        <button class="btn-detail" data-id="${p.id}"><i class="far fa-eye"></i> Detalles</button>
                        <button class="btn-cart" data-id="${p.id}"><i class="fas fa-shopping-cart"></i> Agregar</button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
    
    document.querySelectorAll(".btn-detail").forEach(btn => {
        btn.addEventListener("click", () => {
            const prod = productosData.find(p => p.id === parseInt(btn.dataset.id));
            if (prod) showModal(prod);
        });
    });
    document.querySelectorAll(".btn-cart").forEach(btn => {
        btn.addEventListener("click", () => {
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

// ===================== CARRITO MODAL =====================
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
        itemsHtml += `<div style="display:flex; justify-content:space-between; margin-bottom:0.8rem;">
                        <span>${item.nombre} (${item.size}) x${item.cantidad}</span>
                        <span>$${subtotal.toLocaleString()}</span>
                      </div>`;
    });
    modal.innerHTML = `
        <h3>🛍️ Tu pedido</h3>
        <div class="cart-items-list">${itemsHtml}</div>
        <div class="cart-total">Total: $${total.toLocaleString()}</div>
        <button class="btn btn--secondary" id="clearCartBtn">Vaciar carrito</button>
        <button class="whatsapp-checkout" id="whatsappOrderBtn"><i class="fab fa-whatsapp"></i> Enviar pedido por WhatsApp</button>
        <button class="btn-close-cart" style="margin-top:0.5rem; background:none; border:none; cursor:pointer;">Cerrar</button>
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

// ===================== FILTROS =====================
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

// ===================== CONTADORES =====================
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
        const parent = el.parentElement;
        const labelSpan = parent.querySelector(".stat__label");
        if (labelSpan) labelSpan.innerText = label;
    };
    animate(document.getElementById("yearsCount"), 8, "Años de experiencia");
    animate(document.getElementById("productsCount"), 32, "Productos naturales");
    animate(document.getElementById("customersCount"), 1250, "Clientes felices");
}

// ===================== INICIALIZACIONES =====================
function initSwiper() {
    if (typeof Swiper !== "undefined") {
        new Swiper(".testimonial-swiper", {
            loop: true,
            autoplay: { delay: 4000, disableOnInteraction: false },
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
            nav.classList.toggle("header__nav--open");
            const icon = toggle.querySelector("i");
            if (nav.classList.contains("header__nav--open")) {
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
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#") return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
                if (nav && nav.classList.contains("header__nav--open")) {
                    nav.classList.remove("header__nav--open");
                    if (toggle) {
                        const icon = toggle.querySelector("i");
                        icon.classList.remove("fa-times");
                        icon.classList.add("fa-bars");
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
            alert("📩 Mensaje enviado. Gracias por contactarnos.");
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

// ===================== INICIALIZACIÓN PRINCIPAL =====================
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

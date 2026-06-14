// ===================== CATÁLOGO COMPLETO DE NATURALEZA SALVAJE =====================
const productosData = [
    // 1. Aceite de Coco Extra Virgen
    { 
        id: 1, 
        nombre: "Aceite de Coco Extra Virgen", 
        categoria: "corporal", 
        descripcion: "Perfecto para fortalecer y dar vitalidad a las fibras capilares, estimula el crecimiento del cabello, repara puntas abiertas, es un excelente hidratante para tu piel y cabello, estimula la regeneración de la piel, te ayuda a desmaquillar incluso el maquillaje a prueba de agua sin maltratar tu rostro, es un aceite natural prensado en frío que le puedes dar tanto uso cosmético como culinario, excelente para freídos no profundos.",
        descCorta: "Multiusos: hidrata piel y cabello, desmaquilla, repara puntas.",
        imagen: "Fotos/AceiteCoco.jpg.jpeg",
        presentaciones: [
            { tamaño: "125 gr", precio: 16000, precioTexto: "$16.000" },
            { tamaño: "250 gr", precio: 26000, precioTexto: "$26.000" },
            { tamaño: "500 gr", precio: 42000, precioTexto: "$42.000" }
        ]
    },
    // 2. Aceite de Argán Puro
    { 
        id: 2, 
        nombre: "Aceite de Argán ", 
        categoria: "corporal", 
        descripcion: "30 ml. Este maravilloso aceite es increíble para fortalecer y reparar tu cabello, tus cejas y lo mejor tus pestañas, gracias a todos sus ácidos grasos es realmente un reparador natural. En tu cabello puedes usarlo todos los días de medios a puntas, esto te ayudará a controlar el frizz y devolverle la vitalidad que ha perdido.",
        descCorta: "Repara cabello, cejas y pestañas. Antioxidante.",
        imagen: "Fotos/AceiteArgan.jpg.jpeg",
        presentaciones: [
            { tamaño: "30 ml", precio: 16000, precioTexto: "$16.000" }
        ]
    },
    // 3. Aceite de Almendras
    { 
        id: 3, 
        nombre: "Aceite de Almendras",
        categoria: "corporal",
        descripcion: "El aliado perfecto para la nutrición total de tu cuerpo. Enriquecido con vitaminas y ácidos grasos esenciales, este aceite de rápida absorción hidrata profundamente la piel, suaviza las zonas secas y previene la aparición de estrías.",
        descCorta: "Hidrata profundamente la piel. Prevención de estrías.",
        imagen: "Fotos/AceiteAlmendras.jpg.jpeg",
        presentaciones: [
            { tamaño: "275 ml", precio: 19000, precioTexto: "$19.000" }
        ]
    },

    // 4. Agua de Rosas Tonificante
    { 
        id: 4, 
        nombre: "Agua de Rosas Tonificante", 
        categoria: "facial", 
        descripcion: "300 ml. Tónico facial que ayuda a prevenir el envejecimiento prematuro, devolviéndole suavidad a la piel. Perfecta para regular el pH de la piel, calma enrojecimientos e hinchazón después de la depilación, ayuda a unificar el tono de piel, es perfecta para pieles acneicas, ayuda a eliminar cicatrices y manchas provocadas por el acné, también ayuda a fijar el maquillaje. Utilízala día y noche en tu rutina de limpieza facial, refresca, tonifica, humecta y nutre en un solo paso.",
        descCorta: "Tonifica y calma la piel. Regula el pH.",
        imagen: "Fotos/AguaRosas.jpg.jpeg",
        presentaciones: [
            { tamaño: "300 ml", precio: 12000, precioTexto: "$12.000" }
        ]
    },
    // 5. Tónico de Arroz
    { 
        id: 5, 
        nombre: "Tónico de Arroz", 
        categoria: "facial", 
        descripcion: "Ayuda a retrasar los signos del envejecimiento, ya que cuenta con propiedades exfoliantes y blanqueadoras muy bondadosas para el cutis. Reduce las manchas, estimula la circulación, favorece la producción de colágeno, limpia el rostro.",
        descCorta: "Exfoliante natural, reduce manchas y unifica el tono.",
        imagen: "Fotos/FacialArroz.jpg.jpeg",
        presentaciones: [
            { tamaño: "250 ml", precio: 14000, precioTexto: "$14.000" }
        ]
    },
    // 6. Sérum Facial Vitamina C
    { 
        id: 6, 
        nombre: "Sérum Facial Vitamina C", 
        categoria: "facial", 
        descripcion: "35 ml. Previene y mejora signos de fotoenvejecimiento como manchas y líneas de expresión. Recupera el brillo natural y elasticidad de la piel. Esencial para la producción de Colágeno. Apto en todo tipo de piel, también en pieles sensibles. Neutraliza los radicales libres. Es despigmentante. Regula el exceso de sebo. Potencia la regeneración celular unificando el tono de tu piel.",
        descCorta: "Antioxidante, unifica el tono, estimula colágeno.",
        imagen: "Fotos/VitaminaC.jpg.jpeg",
        presentaciones: [
            { tamaño: "35 ml", precio: 22500, precioTexto: "$22.500" }
        ]
    },
    // 7. Sérum Ácido Hialurónico
    { 
        id: 7, 
        nombre: "Sérum Ácido Hialurónico", 
        categoria: "facial", 
        descripcion: "35 ml. Sus propiedades son espectaculares, tiene una impresionante capacidad para retener la humedad de la piel, su efecto en la piel es tensor al instante, rellena líneas de expresión y arrugas y alisa visiblemente la piel. El ácido hialurónico actúa como una esponja, capaz de retener grandes cantidades de agua en la piel, aporta volumen, reduce arrugas y revitaliza.",
        descCorta: "Hidratación intensa, efecto relleno y tensor.",
        imagen: "Fotos/AcidoHialuronico.jpg.jpeg",
        presentaciones: [
            { tamaño: "35 ml", precio: 28000, precioTexto: "$28.000" }
        ]
    },
    // 8. Sérum Facial Aloe vera
    { 
        id: 8, 
        nombre: "Sérum Facial Aloe vera", 
        categoria: "facial", 
        descripcion: "35 ml. Es perfecto tanto para pieles secas como grasas. Estimula producción de colágeno y elastina. Aporta hidratación profunda, perfecto para antes del maquillaje. Estimula la regeneración celular. Excelente antioxidante, previene arrugas y elimina manchas. Ayuda a cerrar poros abiertos. Ayuda a tratar el acné. Perfecto para pieles secas y rosácea. Ayuda a curar quemaduras solares. Trata manchas solares.",
        descCorta: "Antioxidante, cierra poros, regenera, trata acné.",
        imagen: "Fotos/AloeVera.jpg.jpeg",
        presentaciones: [
            { tamaño: "35 ml", precio: 17000, precioTexto: "$17.000" }
        ]
    },
    // 9. Jabón Facial Carbón Activado
    { 
        id: 9, 
        nombre: "Jabón Facial Carbón Activado", 
        categoria: "facial", 
        descripcion: "145 gr. Ideal para pieles con acné, pues gracias al carbón activado nos ayudará a secar los granitos, espinillas y puntos negros, MUY IMPORTANTE sin resecar la piel ni ser un producto abrasivo, gracias a las propiedades humectantes y nutritivas del aceite de coco y la avena. Adicional, las propiedades restauradoras de la avena ayudan con irritaciones, dermatitis y rojeces, evitando la deshidratación.",
        descCorta: "Purifica, elimina impurezas, calma irritaciones.",
        imagen: "Fotos/JabonCarbon.jpg.jpeg",
        presentaciones: [
            { tamaño: "145 gr", precio: 13000, precioTexto: "$13.000" }
        ]
    },
    // 10. Jabón Facial Caléndula, Manzanilla y Miel
    { 
        id: 10, 
        nombre: "Jabón Facial Caléndula, Manzanilla y Miel", 
        categoria: "facial", 
        descripcion: "145 gr. La caléndula y la manzanilla son plantas medicinales usadas por siglos por sus propiedades curativas. Producto 100% natural regenerador, cicatrizante, calmante y humectante. Poder cicatrizante, ayuda con marcas de acné, limpia, hidrata y revitaliza. Propiedades antioxidantes, previene envejecimiento prematuro. Efecto calmante para pieles irritadas. Antiacné. Suaviza y mejora la textura.",
        descCorta: "Ideal para piel sensible, cicatriza, antiacné.",
        imagen: "Fotos/JabonFacial.jpg.jpeg",
        presentaciones: [
            { tamaño: "145 gr", precio: 12000, precioTexto: "$12.000" }
        ]
    },
    // 11. Jabón anticelulítis y exfoliante 
    { 
        id: 11, 
        nombre: "Jabón anticelulítis y exfoliante", 
        categoria: "corporal", 
        descripcion: "A base de Café y centella asiática. Ideal para mejorar la apariencia de tu cuerpo, dejándola mucho más suave, joven, hidratada y sin impurezas. Su forma de masajeador te ayudará a estimular la circulación de glúteos, piernas, abdomen y brazos, eliminando celulitis e impurezas. Gracias al café tendrás efecto detox, regenerador, tonificante, suavizante y anticelulitis. La centella asiática mejora la apariencia de la piel al 100%.",
        descCorta: "Exfolia, detox, anticelulítico, tonifica.",
        imagen: "Fotos/JabonAnticelulitis.jpg.jpeg",
        presentaciones: [
            { tamaño: "145 gr", precio: 13000, precioTexto: "$13.000" }
        ]
    },
    // 12. Jabón facial de avena y colageno
    { 
        id: 12, 
        nombre: "Jabón facial de avena y colágeno", 
        categoria: "facial", 
        descripcion: "75 gr. Un jabón facial a base de avena y colágeno, que hidrata y nutre tu piel. Nos cercioramos de que tuviese mucha vitamina E y colágeno para que tu piel siempre permanezca joven, suave, tersa y demasiado nutrida gracias a las propiedades del aceite de coco. El olor de este producto lo amarás y perdura todo el día en tu piel.",
        descCorta: "Nutrición extrema, colágeno + vitamina E, piel sedosa.",
        imagen: "Fotos/JabonAvena.jpg.jpeg",
        presentaciones: [
            { tamaño: "75 gr", precio: 8000, precioTexto: "$8.000" }
        ]
    },
    // 13. Jabón facial de arroz y colageno
    { 
        id: 13, 
        nombre: "Jabón facial de arroz y colágeno", 
        categoria: "facial", 
        descripcion: "60 gr. Un jabón facial a base de arroz y colágeno, que hidrata y nutre tu piel. Nos cercioramos de que tuviese mucha vitamina E y colágeno para que tu piel siempre permanezca joven, suave, tersa y demasiado nutrida gracias a las propiedades del aceite de coco. El olor de este producto lo amarás y perdura todo el día en tu piel.",
        descCorta: "Nutrición extrema, colágeno + vitamina E, piel sedosa.",
        imagen: "Fotos/JabonArroz.jpg.jpeg",
        presentaciones: [
            { tamaño: "60 gr", precio: 7000, precioTexto: "$7.000" }
        ]
    },
    // 14. exfoliante labial 
    { 
        id: 14, 
        nombre: "exfoliante labial", 
        categoria: "labios-cejas", 
        descripcion: "20 gr. Estimula la regeneración celular en la piel de nuestros labios, los mantiene suaves, humectados y aporta volumen natural. Remueve células muertas y cueritos, los deja extremadamente suaves. A base de ingredientes 100% naturales como el aceite de coco. ¡Su olor incomparable!",
        descCorta: "Acelera crecimiento, fortalece raíz, sin grasa.",
        imagen: "Fotos/ExfolianteLabial.jpg.jpeg",
        presentaciones: [
            { tamaño: "20 gr", precio: 8000, precioTexto: "$8.000" }
        ]
    },
    // 14. Balsamo labial
    { 
        id: 14, 
        nombre: "Balsamo labial", 
        categoria: "labios-cejas", 
        descripcion: "20 gr. Un balsamo labial hidratante que suaviza y protege los labios secos y agrietados. Rico en ingredientes naturales que nutren profundamente y proporcionan un acabado con brillo natural. Ideal para mantener los labios suaves y atractivos durante todo el día.",
        descCorta: "Hidratación intensa, brillo natural, protección.",
        imagen: "Fotos/BalsamoLabial.jpeg",
        presentaciones: [
            { tamaño: "20 gr", precio: 7000, precioTexto: "$7.000" }
        ]
    },
    // 15. Balsamo de cejas y pestañas
    { 
        id: 15, 
        nombre: "Balsamo de cejas y pestañas", 
        categoria: "labios-cejas", 
        descripcion: "Un balsamo para cejas y pestañas que nutre y protege, mejorando su apariencia y salud. Rico en ingredientes naturales que fortalecen y estimulan el crecimiento. Ideal para mantener cejas y pestañas sanas y atractivas.",
        descCorta: "Nutrición intensa, fortalece, mejora apariencia.",
        imagen: "Fotos/BalsamoCejas-pestañas.jpg.jpeg",
        presentaciones: [
            { tamaño: "20 gr", precio: 8000, precioTexto: "$8.000" }
        ]
    },
    // 16. Serum de pestañas
    { 
        id: 16, 
        nombre: "Serum de pestañas", 
        categoria: "labios-cejas", 
        descripcion: "10 ml. Un serum específico para pestañas que fortalece, estimula el crecimiento y mejora la apariencia de las mismas. Rico en ingredientes naturales que nutren y protegen, proporcionando un resultado visible en poco tiempo.",
        descCorta: "Fortalece, estimula crecimiento, mejora apariencia.",
        imagen: "Fotos/Pestañas.jpg.jpeg",
        presentaciones: [
            { tamaño: "10 ml", precio: 21000, precioTexto: "$21.000" }
        ]
    },
    // 17. Arcilla detox con te verde
    { 
        id: 17, 
        nombre: "Arcilla detox con te verde", 
        categoria: "facial", 
        descripcion: "50 ml. Una increíble mascarilla purificante y de limpieza profunda que nos ayuda a eliminar y prevenir barritos, puntos negros e impurezas. Adicionalmente, nos ayuda a equilibrar el pH de nuestra piel de forma natural.",
        descCorta: "Frena caída, crecimiento acelerado, sin mal olor.",
        imagen: "Fotos/ArcillaTeVerde.jpg.jpeg",
        presentaciones: [
            { tamaño: "50 ml", precio: 12000, precioTexto: "$12.000" }
        ]
    },
    // 18. Exfoliante de Baño
    { 
        id: 18, 
        nombre: "Exfoliante de Baño", 
        categoria: "facial", 
        descripcion: "200 gr. Un exfoliante suave que elimina las células muertas de la piel y promueve la renovación celular. Rico en ingredientes naturales que hidratan y suavizan la piel, dejándola más clara y con un aspecto más saludable.",
        descCorta: "Elimina células muertas, hidrata, suaviza piel.",
        imagen: "Fotos/ExfolianteBaño.jpg.jpeg",
        presentaciones: [
            { tamaño: "200 gr", precio: 14500, precioTexto: "$14.500" }
        ]
    },
    // 19. Leche de coco crema corporal
    { 
        id: 19, 
        nombre: "Leche de coco crema corporal", 
        categoria: "corporal", 
        descripcion: "250 gr. Una crema corporal a base de aceite de coco, vitamina E y colágeno, que hidrata y nutre tu piel como no imaginas. Nos cercioramos de que tuviese una alta concentración de vitamina E y colágeno para que tu piel siempre permanezca joven, suave, tersa y profundamente nutrida, potenciada por las increíbles propiedades del aceite de coco.",
        descCorta: "Hidrata profundamente, suaviza piel.",
        imagen: "Fotos/LecheCocoCrema.jpg.jpeg",
        presentaciones: [
            { tamaño: "250 gr", precio: 22000, precioTexto: "$22.000" }
        ]
    },

    // 20. Tonico capilar (extracrecimiento)
    { 
        id: 20, 
        nombre: "Tonico capilar (extracrecimiento)", 
        categoria: "capilar", 
        descripcion: "350 ml. Estimula un crecimiento acelerado en las fibras capilares, fortaleciendo, previniendo y tratando la caída del cabello, mientras elimina hongos y picores del cuero cabelludo.",
        descCorta: "Reestructura cabello dañado, hidrata y da brillo.",
        imagen: "Fotos/TonicoCapilarCrecimiento.jpg.jpeg",
        presentaciones: [
            { tamaño: "350 ml", precio: 31000, precioTexto: "$31.000" }
        ]
    },
    // 21. extracto de romero
    { 
        id: 21, 
        nombre: "Extracto de Romero", 
        categoria: "capilar", 
        descripcion: "50 ml. Un extracto natural de romero que estimula el crecimiento del cabello y fortalece las raíces. Ideal para prevenir la caída y promover un cabello más saludable.",
        descCorta: "Estimula crecimiento, fortalece raíces.",
        imagen: "Fotos/ExtractoRomero.jpg.jpeg",
        presentaciones: [
            { tamaño: "50 ml", precio: 24000, precioTexto: "$24.000" }
        ]
    },

    // 22. extracto de cebolla
    { 
        id: 22, 
        nombre: "Extracto de Cebolla", 
        categoria: "capilar", 
        descripcion: "50 ml. Un extracto natural de cebolla que estimula el crecimiento del cabello y fortalece las raíces. Ideal para prevenir la caída y promover un cabello más saludable.",
        descCorta: "Estimula crecimiento, fortalece raíces.",
        imagen: "Fotos/ExtractoCebollaCapilar.jpg.jpeg",
        presentaciones: [
            { tamaño: "50 ml", precio: 18000, precioTexto: "$18.000" }
        ]
    },
    // 23. Chocolaterapia capilar
    { 
        id: 23, 
        nombre: "Chocolaterapia capilar", 
        categoria: "capilar", 
        descripcion: "250 gr. Una mascarilla concentrada, rica en vitaminas y minerales, que reúne todos los increíbles beneficios del extracto de cacao y el auténtico café colombiano en un solo producto.",
        descCorta: "Limpieza natural, activa el crecimiento, fortalece.",
        imagen: "Fotos/Chocolaterapia.jpg.jpeg",
        presentaciones: [
            { tamaño: "250 gr", precio: 30000, precioTexto: "$30.000" }
        ]
    },
    // 24. tratamiento de Restauracion
    { 
        id: 24, 
        nombre: "Tratamiento de Restauracion", 
        categoria: "capilar", 
        descripcion: "125 gr. Tratamiento capilar a base de extracto natural de aguacate y aceite de argán, libre de sal y sin parabenos. Es perfecto para cabellos dañados, ya que reestructura la fibra capilar y mejora las puntas abiertas, devolviéndole la salud, el brillo y la vida a tu cabello.",
        descCorta: "Nutre, desenreda y potencia el crecimiento.",
        imagen: "Fotos/TratamientoRestauracion.jpg.jpeg",
        presentaciones: [
            { tamaño: "125 gr", precio: 15000, precioTexto: "$15.000" }
        ]
    },
    // 25. Tratamiento de Crecimiento
    { 
        id: 25, 
        nombre: "Tratamiento de Crecimiento", 
        categoria: "capilar", 
        descripcion: "125 gr. Tratamiento capilar a base de extractos naturales de cebolla, romero y aceite de coco, formulado sin sal y sin parabenos. Es perfecto para todo tipo de cabello, especialmente para aquellos cabellos estancados, con caída y sin crecimiento.",
        descCorta: "Repara, da brillo, termoprotector, anti-frizz.",
        imagen: "Fotos/TratamientoCrecimiento.jpg.jpeg",
        presentaciones: [
            { tamaño: "125 gr", precio: 15000, precioTexto: "$15.000" }
        ]
    },
    // 26. mantequilla capilar
    { 
        id: 26, 
        nombre: "Mantequilla Capilar", 
        categoria: "capilar", 
        descripcion: "250 gr. Mantequilla capilar a base de aceite de argán y manteca de karité, ideal para hidratar y nutrir el cabello seco y dañado. Proporciona suavidad, brillo y facilidad de peinado. Sin parabenos ni sulfatos.",
        descCorta: "Hidratación profunda, suavidad, brillo.",
        imagen: "Fotos/MantequillaCapilar.jpg.jpeg",
        presentaciones: [
            { tamaño: "250 gr", precio: 27000, precioTexto: "$27.000" }
        ]

    },
    // 28. Shampoo y acondicionador
    { 
        id: 28, 
        nombre: "Shampoo y Acondicionador", 
        categoria: "capilar", 
        descripcion: "265 ml. Con todos los beneficios de la cebolla, el romero y el aceite de coco, nuestro shampoo y acondicionador son el aliado excelente a la hora de estimular el crecimiento de tu cabello y, a la vez, tratar y prevenir su caída.",
        descCorta: "Limpieza profunda, suavidad, brillo.",
        imagen: "Fotos/ShampooAcondicionador.jpg.jpeg",
        presentaciones: [
            { tamaño: "265 ml", precio: 20000, precioTexto: "$20.000" }
        ]
    },
    // 29. Reporalizador multivitaminico
    { 
        id: 29, 
        nombre: "Reporalizador Multivitaminico", 
        categoria: "capilar", 
        descripcion: "275 ml. Reporalizador a base de vitaminas y minerales, ideal para fortalecer el cabello y estimular su crecimiento. Proporciona nutrición profunda y ayuda a prevenir la caída del cabello.",
        descCorta: "Fortalece el cabello, estimula el crecimiento, previene la caída.",
        imagen: "Fotos/ReporalizadorMultivitaminico.jpg.jpeg",
        presentaciones: [
            { tamaño: "275 ml", precio: 23000, precioTexto: "$23.000" }
        ]
    },
    // 30. Biotina gotas capilares
    { 
        id: 30, 
        nombre: "Biotina Gotas Capilares", 
        categoria: "capilar", 
        descripcion: "35 ml. Biotina gotas capilares a base de ingredientes naturales, ideales para fortalecer el cabello y estimular su crecimiento. Proporciona nutrición profunda y ayuda a prevenir la caída del cabello.",
        descCorta: "Fortalece el cabello, estimula el crecimiento, previene la caída.",
        imagen: "Fotos/BiotinaGotasCapilar.jpg.jpeg",
        presentaciones: [
            { tamaño: "35 ml", precio: 23000, precioTexto: "$23.000" }
        ]
    },
    // 31. Balsamo Hidratante para mascotas
    { 
        id: 31, 
        nombre: "Balsamo Hidratante para mascotas", 
        categoria: "mascotas", 
        descripcion: "35 gr. Nuestro bálsamo hidratante para mascotas está formulado con ingredientes 100% naturales, seguros y comestibles, ideales para cuidar la piel y las patitas de tu peludo. Su mezcla de mantecas vegetales y aceites nutritivos calma, protege y regenera zonas resecas, agrietadas o irritadas, incluso después de caminatas largas o exposiciones al sol.",
        descCorta: "Hidrata la piel y el pelaje, previene la sequedad.",
        imagen: "Fotos/BalsamoMascotas.jpg.jpeg",
        presentaciones: [
            { tamaño: "35 gr", precio: 17000, precioTexto: "$17.000" }
        ]
    },
];

// ===================== VARIABLES GLOBALES =====================
let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let currentCategory = "all";
let pendingProduct = null; // Para producto en espera de selección de presentación

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
        cartItems.push({ 
            id: product.id, 
            nombre: product.nombre,
            size: size,
            precio: priceText,
            precioNum: price,
            cantidad: 1 
        });
    }
    updateCartUI();
    showToast(`✨ ${product.nombre} (${size}) añadido`);
}

function showToast(msg) {
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.className = "toast";
        document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
}

// ===================== MODAL DE SELECCIÓN DE PRESENTACIÓN =====================
function showOptionsModal(product) {
    pendingProduct = product;
    const modal = document.getElementById("optionsModal");
    const title = document.getElementById("optionsModalTitle");
    const optionsList = document.getElementById("optionsList");
    
    if (!modal || !title || !optionsList) return;
    
    title.innerText = `Selecciona presentación - ${product.nombre}`;
    
    let optionsHtml = "";
    product.presentaciones.forEach(pres => {
        optionsHtml += `
            <div class="option-btn" data-size="${pres.tamaño}" data-price="${pres.precio}" data-price-text="${pres.precioTexto}">
                <span class="option-size">${pres.tamaño}</span>
                <span class="option-price">${pres.precioTexto}</span>
            </div>
        `;
    });
    optionsList.innerHTML = optionsHtml;
    
    document.querySelectorAll("#optionsList .option-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const size = btn.dataset.size;
            const price = parseInt(btn.dataset.price);
            const priceText = btn.dataset.priceText;
            addToCartWithOptions(pendingProduct, size, price, priceText);
            closeOptionsModal();
        });
    });
    
    modal.style.display = "flex";
}

function closeOptionsModal() {
    const modal = document.getElementById("optionsModal");
    if (modal) modal.style.display = "none";
    pendingProduct = null;
}

// ===================== MODAL DE DETALLE DEL PRODUCTO =====================
function showModal(product) {
    const modal = document.getElementById("productModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalPrice = document.getElementById("modalPrice");
    const modalImage = document.getElementById("modalImage");
    
    if (!modal) return;
    
    modalTitle.innerText = product.nombre;
    modalDesc.innerHTML = `<strong>${product.descripcion}</strong><br><br><i class="fas fa-leaf"></i> 100% natural · Sin crueldad`;
    
    // Mostrar rango de precios si tiene múltiples presentaciones
    if (product.presentaciones.length > 1) {
        const minPrice = Math.min(...product.presentaciones.map(p => p.precio));
        const maxPrice = Math.max(...product.presentaciones.map(p => p.precio));
        modalPrice.innerHTML = `Desde $${minPrice.toLocaleString()} hasta $${maxPrice.toLocaleString()} COP`;
    } else {
        modalPrice.innerHTML = `${product.presentaciones[0].precioTexto} COP`;
    }
    
    modalImage.src = product.imagen;
    modal.style.display = "flex";
}

function closeModal() {
    const modal = document.getElementById("productModal");
    if (modal) modal.style.display = "none";
}

// ===================== RENDERIZADO DE PRODUCTOS =====================
function getPriceRange(product) {
    if (product.presentaciones.length === 1) {
        return product.presentaciones[0].precioTexto;
    }
    const precios = product.presentaciones.map(p => p.precio);
    const min = Math.min(...precios);
    const max = Math.max(...precios);
    return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
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
        const priceDisplay = getPriceRange(p);
        return `
            <div class="product-card">
                <img class="product-img" src="${p.imagen}" alt="${p.nombre}" loading="lazy">
                <div class="card-content">
                    <div class="product-category">${catLabel}</div>
                    <div class="product-title">${p.nombre}</div>
                    <div class="product-desc">${p.descCorta}</div>
                    <div class="product-price">${priceDisplay} COP</div>
                    <div class="card-buttons">
                        <button class="btn-detail" data-id="${p.id}"><i class="far fa-eye"></i> Detalles</button>
                        <button class="btn-cart" data-id="${p.id}"><i class="fas fa-shopping-cart"></i> Agregar</button>
                    </div>
                </div>
            </div>
        `;
    }).join("");
    
    // Eventos para botones de detalles y agregar al carrito
    document.querySelectorAll(".btn-detail").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(btn.dataset.id);
            const prod = productosData.find(p => p.id === id);
            if (prod) showModal(prod);
        });
    });
    
    document.querySelectorAll(".btn-cart").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const id = parseInt(btn.dataset.id);
            const prod = productosData.find(p => p.id === id);
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

// ===================== CARRITO MODAL (CHECKOUT POR WHATSAPP) =====================
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
        itemsHtml += `
            <div style="display:flex; justify-content:space-between; margin-bottom:0.8rem;">
                <span>${item.nombre} (${item.size}) x${item.cantidad}</span>
                <span>$${subtotal.toLocaleString()}</span>
            </div>
        `;
    });
    
    modal.innerHTML = `
        <h3>🛍️ Tu pedido</h3>
        <div class="cart-items-list">${itemsHtml}</div>
        <div class="cart-total">Total: $${total.toLocaleString()}</div>
        <button class="btn btn-secondary" id="clearCartBtn">Vaciar carrito</button>
        <button class="whatsapp-checkout" id="whatsappOrderBtn">
            <i class="fab fa-whatsapp"></i> Enviar pedido por WhatsApp
        </button>
        <button class="btn-close-cart" style="margin-top:0.5rem; background:none; border:none; cursor:pointer;">Cerrar</button>
    `;
    
    modal.classList.add("active");
    
    document.getElementById("clearCartBtn")?.addEventListener("click", () => {
        cartItems = [];
        updateCartUI();
        modal.classList.remove("active");
        showToast("Carrito vaciado");
    });
    
    document.getElementById("whatsappOrderBtn")?.addEventListener("click", () => {
        sendOrderByWhatsApp(total);
    });
    
    modal.querySelector(".btn-close-cart")?.addEventListener("click", () => {
        modal.classList.remove("active");
    });
}

function sendOrderByWhatsApp(total) {
    let message = "🛒 NUEVO PEDIDO - Naturaleza Salvaje*%0A%0A";
    cartItems.forEach(item => {
        message += `• ${item.nombre} (${item.size}) x${item.cantidad} → ${item.precio} c/u%0A`;
    });
    message += `%0A💰 Total:* $${total.toLocaleString()}%0A%0A📦 ¡Gracias por tu compra!`;
    const phone = "573214058442"; // Cambia por tu número de WhatsApp con código país (sin +)
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

// ===================== FILTROS =====================
function initFilters() {
    const btns = document.querySelectorAll(".filter-btn");
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            btns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            currentCategory = btn.dataset.category;
            renderProducts(currentCategory);
        });
    });
}

// ===================== CONTADORES ANIMADOS =====================
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
        const labelSpan = parent.querySelector(".stat-label");
        if (labelSpan) labelSpan.innerText = label;
    };

}

// ===================== INICIALIZACIONES EXTERNAS =====================
function initSwiper() {
    if (typeof Swiper !== "undefined") {
        new Swiper(".testimonial-swiper", {
            loop: true,
            autoplay: { delay: 4000, disableOnInteraction: false },
            pagination: { el: ".swiper-pagination", clickable: true },
            spaceBetween: 30,
        });
    }
}

function initAOS() {
    if (typeof AOS !== "undefined") {
        AOS.init({ duration: 1000, once: true });
    }
}

function initCursor() {
    if (window.innerWidth <= 768) return;
    const cursor = document.querySelector(".cursor");
    const follower = document.querySelector(".cursor-follower");
    if (!cursor || !follower) return;
    
    document.addEventListener("mousemove", (e) => {
        cursor.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
        follower.style.transform = `translate(${e.clientX - 15}px, ${e.clientY - 15}px)`;
    });
    
    const links = document.querySelectorAll("a, button, .filter-btn, .btn-cart, .btn-detail");
    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            cursor.style.transform = `scale(1.5)`;
            follower.style.transform = `scale(1.5)`;
        });
        link.addEventListener("mouseleave", () => {
            cursor.style.transform = `scale(1)`;
            follower.style.transform = `scale(1)`;
        });
    });
}

function initMobileMenu() {
    const toggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".nav-links");
    if (toggle && navLinks) {
        toggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const targetId = this.getAttribute("href");
            if (targetId === "#" || targetId === "") return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
}

function initContactForm() {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("📩 Mensaje enviado (demo). Gracias por contactarnos, pronto te responderemos.");
            form.reset();
        });
    }
}

function initGlobalEvents() {
    const cartIcon = document.getElementById("cartIcon");
    if (cartIcon) cartIcon.addEventListener("click", showCartModal);
    
    const closeModalBtn = document.getElementById("closeModalBtn");
    if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
    
    const closeOptionsBtn = document.getElementById("closeOptionsModal");
    if (closeOptionsBtn) closeOptionsBtn.addEventListener("click", closeOptionsModal);
    
    window.addEventListener("click", (e) => {
        const productModal = document.getElementById("productModal");
        const optionsModal = document.getElementById("optionsModal");
        if (e.target === productModal) closeModal();
        if (e.target === optionsModal) closeOptionsModal();
    });
}

// ===================== INICIALIZACIÓN PRINCIPAL =====================
document.addEventListener("DOMContentLoaded", () => {
    renderProducts("all");
    initFilters();
    initCounters();
    initSwiper();
    initAOS();
    initCursor();
    initMobileMenu();
    initSmoothScroll();
    initContactForm();
    initGlobalEvents();
    updateCartUI();
});

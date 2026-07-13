/* Carta de demostración: reemplaza nombres, precios, descripciones e imágenes aquí. */
const dishes = [
  { id: 1, name: "Ceviche clásico", category: "ceviches", description: "Pescado fresco, limón, cebolla roja, ají y acompañamientos tradicionales.", price: "S/ 28.00", image: "assets/images/hero/ceviche-hero.png", position: "72% center", badge: "Más pedido" },
  { id: 2, name: "Ceviche mixto", category: "ceviches", description: "Pescado y mariscos bañados en leche de tigre de la casa.", price: "S/ 34.00", image: "assets/images/hero/ceviche-hero.png", position: "80% center", badge: "Recomendado" },
  { id: 3, name: "Leche de tigre", category: "entradas", description: "Cítrica, intensa y refrescante, con pescado fresco y ají peruano.", price: "S/ 18.00", image: "assets/images/dishes/especialidades-marinas.png", position: "49% 12%" },
  { id: 4, name: "Causa acevichada", category: "entradas", description: "Papa amarilla, palta y un fresco coronado de ceviche.", price: "S/ 22.00", image: "assets/images/hero/ceviche-hero.png", position: "65% center" },
  { id: 5, name: "Jalea mixta", category: "pescados", description: "Pescados y mariscos crocantes, yuca dorada y salsa criolla.", price: "S/ 38.00", image: "assets/images/dishes/especialidades-marinas.png", position: "86% 12%", badge: "Especialidad" },
  { id: 6, name: "Arroz con mariscos", category: "pescados", description: "Arroz sazonado al estilo peruano con una selección de mariscos.", price: "S/ 34.00", image: "assets/images/dishes/especialidades-marinas.png", position: "10% 10%" },
  { id: 7, name: "Chicharrón de pescado", category: "pescados", description: "Bocados dorados acompañados de salsa criolla y limón.", price: "S/ 30.00", image: "assets/images/dishes/especialidades-marinas.png", position: "10% 82%" },
  { id: 8, name: "Lomo saltado", category: "criollos", description: "Carne salteada, cebolla, tomate, papas y arroz blanco.", price: "S/ 32.00", image: "assets/images/dishes/especialidades-marinas.png", position: "16% 36%" },
  { id: 9, name: "Ají de gallina", category: "criollos", description: "Clásica crema de ají amarillo con pollo, arroz y papa.", price: "S/ 27.00", image: "assets/images/dishes/especialidades-marinas.png", position: "28% 50%" },
  { id: 10, name: "Parihuela marina", category: "sopas", description: "Caldo concentrado de pescados y mariscos con aromas peruanos.", price: "S/ 36.00", image: "assets/images/dishes/especialidades-marinas.png", position: "50% 78%", badge: "Sabor intenso" },
  { id: 11, name: "Chupe de camarones", category: "sopas", description: "Sopa cremosa de camarones, papa, choclo y queso fresco.", price: "S/ 39.00", image: "assets/images/dishes/especialidades-marinas.png", position: "56% 70%" },
  { id: 12, name: "Chicha morada", category: "bebidas", description: "Bebida de maíz morado con frutas y especias.", price: "S/ 8.00", image: "assets/images/dishes/especialidades-marinas.png", position: "91% 40%" },
  { id: 13, name: "Limonada de hierbaluisa", category: "bebidas", description: "Limón recién exprimido con una nota herbal y hielo.", price: "S/ 9.00", image: "assets/images/hero/ceviche-hero.png", position: "65% 10%" },
  { id: 14, name: "Suspiro limeño", category: "postres", description: "Manjar suave con merengue ligero y un toque de canela.", price: "S/ 14.00", image: "assets/images/dishes/especialidades-marinas.png", position: "72% 18%" },
  { id: 15, name: "Torta tres leches", category: "postres", description: "Bizcocho húmedo y cremoso con acabado delicado.", price: "S/ 15.00", image: "assets/images/dishes/especialidades-marinas.png", position: "74% 65%" }
];

const menuGrid = document.querySelector("#menu-grid");
const filterButtons = document.querySelectorAll(".filter-button");

function renderMenu(filter = "all") {
  const selected = filter === "all" ? dishes : dishes.filter((dish) => dish.category === filter);
  menuGrid.innerHTML = selected.map((dish) => `
    <article class="menu-item">
      <div class="menu-item__image">
        <img src="${dish.image}" alt="${dish.name}" width="260" height="220" loading="lazy" style="object-position:${dish.position}">
      </div>
      <div class="menu-item__copy">
        ${dish.badge ? `<span class="menu-item__badge">${dish.badge}</span>` : ""}
        <div class="menu-item__meta"><h3>${dish.name}</h3><strong>${dish.price}*</strong></div>
        <p>${dish.description}</p>
      </div>
    </article>`).join("");
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => { item.classList.remove("is-active"); item.setAttribute("aria-pressed", "false"); });
    button.classList.add("is-active");
    button.setAttribute("aria-pressed", "true");
    renderMenu(button.dataset.filter);
  });
});

renderMenu();


/* =========================================================
   Milèle Jewels — shared data + cart logic
   Placeholder catalog (real product photos/data live in
   your Lovable/Supabase backend and weren't accessible here —
   swap the `img` field for real photo URLs whenever ready).
   ========================================================= */

const WHATSAPP_NUMBER = "919497233822"; // from site footer, no leading +

const PRODUCTS = [
  // Necklaces (15 products)
  { id: "p1", name: "Zaveri Kundan Choker",      category: "Necklaces", price: 48500, oldPrice: null,  tag: "New", img: "public/Necklaces/003fe12c-68f7-49ff-9851-d3dc95b37bfb.jpg" },
  { id: "p2", name: "Meenakari Leaf Necklace",    category: "Necklaces", price: 62000, oldPrice: 68000, tag: "Sale", img: "public/Necklaces/05c2f244-5d0b-4be9-996a-687b1142e367.jpg" },
  { id: "p3", name: "Antique Temple Haar",        category: "Necklaces", price: 91500, oldPrice: null,  tag: null, img: "public/Necklaces/09da15b4-2fc6-450c-823b-58a25d4809f4.jpg" },
  { id: "p4", name: "Pearl Layered Necklace",     category: "Necklaces", price: 55000, oldPrice: null,  tag: "New", img: "public/Necklaces/0c246d81-debb-41f4-9d9a-d9cc4c815061.jpg" },
  { id: "p5", name: "Gold Polki Rani Haar",       category: "Necklaces", price: 125000, oldPrice: 135000, tag: "Sale", img: "public/Necklaces/11656673-c3fe-4733-906a-83e2f557a13e.jpg" },
  { id: "p6", name: "Diamond Solitaire Pendant",  category: "Necklaces", price: 89000, oldPrice: null,  tag: null, img: "public/Necklaces/13958ced-6b30-4e7a-a811-c92b5003fea3.jpg" },
  { id: "p7", name: "Traditional Jadau Choker",   category: "Necklaces", price: 78000, oldPrice: null,  tag: "New", img: "public/Necklaces/17fc3efa-2300-46e3-8404-e898e22ed109.jpg" },
  { id: "p8", name: "Heritage Gold Mala",         category: "Necklaces", price: 67000, oldPrice: 72000, tag: "Sale", img: "public/Necklaces/1c750ed3-1638-41ee-b363-fa49e84bc01a.jpg" },
  { id: "p9", name: "Kundan & Pearl Necklace",    category: "Necklaces", price: 95000, oldPrice: null,  tag: null, img: "public/Necklaces/22fc8d40-eb18-4177-90f4-78492273ca8f.jpg" },
  { id: "p10", name: "Victorian Style Necklace",  category: "Necklaces", price: 58000, oldPrice: null,  tag: "New", img: "public/Necklaces/2543221f-f4b6-4784-886a-eebb94295c07.jpg" },
  { id: "p11", name: "Temple Jewellery Haar",     category: "Necklaces", price: 110000, oldPrice: null,  tag: null, img: "public/Necklaces/2a77cad2-d9f1-4f26-997e-5bfad6fa5c92.jpg" },
  { id: "p12", name: "Ruby & Emerald Necklace",   category: "Necklaces", price: 145000, oldPrice: 155000, tag: "Sale", img: "public/Necklaces/309cfeb2-b85d-47e8-aee7-3f5a32d6889b.jpg" },
  { id: "p13", name: "Gold Filigree Necklace",    category: "Necklaces", price: 42000, oldPrice: null,  tag: null, img: "public/Necklaces/33fdbfab-360b-4359-a368-97f57be4079d.jpg" },
  { id: "p14", name: "Navratna Gold Necklace",    category: "Necklaces", price: 85000, oldPrice: null,  tag: "New", img: "public/Necklaces/372f1178-a01c-4d75-b1b6-74f860b78b1d.jpg" },
  { id: "p15", name: "Antique Gold Choker Set",   category: "Necklaces", price: 72000, oldPrice: 79000, tag: "Sale", img: "public/Necklaces/3c288478-3966-42b4-978a-719311c95da1.jpg" },

  // Earrings (15 products)
  { id: "p16", name: "Polki Drop Earrings",       category: "Earrings",  price: 27500, oldPrice: null,  tag: "New", img: "public/Earrings/00bd8ab3-31d9-4701-bfa3-9c8d37df6c74.jpg" },
  { id: "p17", name: "Jhumka Gold Filigree",      category: "Earrings",  price: 19800, oldPrice: null,  tag: null, img: "public/Earrings/066107a7-7251-4859-b5c6-5d9861f54531.jpg" },
  { id: "p18", name: "Kundan Stud Set",           category: "Earrings",  price: 15200, oldPrice: 17000, tag: "Sale", img: "public/Earrings/0a1f68fb-e428-4c00-9844-a8360d971a40.jpg" },
  { id: "p19", name: "Diamond Chandelier Earrings", category: "Earrings", price: 45000, oldPrice: null,  tag: "New", img: "public/Earrings/0d8843a0-a9f2-427c-8af9-f0867652e2a0.jpg" },
  { id: "p20", name: "Pearl Drop Earrings",       category: "Earrings",  price: 22000, oldPrice: 25000, tag: "Sale", img: "public/Earrings/11cfc398-12e9-4cee-ae56-395dd5e6a814.jpg" },
  { id: "p21", name: "Gold Hoop Earrings",        category: "Earrings",  price: 18500, oldPrice: null,  tag: null, img: "public/Earrings/152d9501-adcf-4e6b-bfdd-cecc6ea4cbf8.jpg" },
  { id: "p22", name: "Meenakari Jhumka",          category: "Earrings",  price: 24000, oldPrice: null,  tag: "New", img: "public/Earrings/180a5a9e-b0d0-4571-afb7-692484cb2965.jpg" },
  { id: "p23", name: "Antique Gold Studs",        category: "Earrings",  price: 16000, oldPrice: 18000, tag: "Sale", img: "public/Earrings/1d242bb8-71dc-421e-aa43-a6a08b78ea7f.jpg" },
  { id: "p24", name: "Temple Style Earrings",     category: "Earrings",  price: 31000, oldPrice: null,  tag: null, img: "public/Earrings/231f879a-a787-4e72-81aa-09e2bad05716.jpg" },
  { id: "p25", name: "Kundan Dangler Earrings",   category: "Earrings",  price: 28000, oldPrice: null,  tag: "New", img: "public/Earrings/261f8af1-51d0-4df4-8e5e-239e91227360.jpg" },
  { id: "p26", name: "Victorian Pearl Earrings",  category: "Earrings",  price: 23000, oldPrice: 26000, tag: "Sale", img: "public/Earrings/2ab16bc0-ccb0-44b9-a284-5e866865acc6.jpg" },
  { id: "p27", name: "Navratna Earrings",         category: "Earrings",  price: 35000, oldPrice: null,  tag: null, img: "public/Earrings/31f05d0d-1028-4839-9aac-09de7ed338d3.jpg" },
  { id: "p28", name: "Gold Filigree Chandeliers", category: "Earrings",  price: 38000, oldPrice: null,  tag: "New", img: "public/Earrings/35a1af8e-b1ed-464a-b07c-c2045c2ea500.jpg" },
  { id: "p29", name: "Ruby Kundan Earrings",      category: "Earrings",  price: 32000, oldPrice: 36000, tag: "Sale", img: "public/Earrings/397becca-c308-440e-a4c9-528907294e03.jpg" },
  { id: "p30", name: "Emerald Drop Earrings",     category: "Earrings",  price: 29000, oldPrice: null,  tag: null, img: "public/Earrings/3c2e3ffc-a7a6-44cf-9e45-a2388a7e1f16.jpg" },

  // Rings (15 products)
  { id: "p31", name: "Heritage Signet Ring",      category: "Rings",     price: 22400, oldPrice: null,  tag: null, img: "public/Rings/025e919d-b0bf-496d-835c-45a983bed8eb.jpg" },
  { id: "p32", name: "Rose Cut Diamond Band",     category: "Rings",     price: 58900, oldPrice: null,  tag: "New", img: "public/Rings/07b4e72d-f5a6-4dcc-a31b-c288ad3dba41.jpg" },
  { id: "p33", name: "Filigree Cocktail Ring",    category: "Rings",     price: 31700, oldPrice: null,  tag: null, img: "public/Rings/0a2acdbb-460a-496e-8519-cc1ab795adca.jpg" },
  { id: "p34", name: "Kundan Statement Ring",     category: "Rings",     price: 26500, oldPrice: 29000, tag: "Sale", img: "public/Rings/0ec3ca3d-9180-4c03-8830-cdc72d40ff7d.jpg" },
  { id: "p35", name: "Gold Solitaire Ring",       category: "Rings",     price: 65000, oldPrice: null,  tag: "New", img: "public/Rings/13084f6e-5bbf-4209-b75a-ae984c8ae9da.jpg" },
  { id: "p36", name: "Antique Temple Ring",       category: "Rings",     price: 42000, oldPrice: null,  tag: null, img: "public/Rings/15786fd6-fc30-48a2-b845-6508d7dcbc3e.jpg" },
  { id: "p37", name: "Navratna Gold Ring",        category: "Rings",     price: 48000, oldPrice: 52000, tag: "Sale", img: "public/Rings/19065e80-6d00-4fd1-8001-42c7bff4e85c.jpg" },
  { id: "p38", name: "Victorian Cluster Ring",    category: "Rings",     price: 35000, oldPrice: null,  tag: "New", img: "public/Rings/1f31f844-7463-4928-8558-8254cc51a8c7.jpg" },
  { id: "p39", name: "Polki Stackable Ring",      category: "Rings",     price: 18000, oldPrice: null,  tag: null, img: "public/Rings/233c7b2b-3f9a-4014-87ca-a0fcc246bbc4.jpg" },
  { id: "p40", name: "Meenakari Cocktail Ring",   category: "Rings",     price: 28000, oldPrice: 31000, tag: "Sale", img: "public/Rings/265b9dcf-388b-482c-8e52-e0d816ef5f5a.jpg" },
  { id: "p41", name: "Gold Band with Diamonds",   category: "Rings",     price: 52000, oldPrice: null,  tag: "New", img: "public/Rings/2bd7eab8-27f9-4e45-be36-a1f553f02115.jpg" },
  { id: "p42", name: "Kundan Flower Ring",        category: "Rings",     price: 24000, oldPrice: null,  tag: null, img: "public/Rings/332a71e4-f3e8-404d-8df3-6ac738335ffc.jpg" },
  { id: "p43", name: "Ruby & Diamond Ring",       category: "Rings",     price: 75000, oldPrice: 82000, tag: "Sale", img: "public/Rings/3660d9cb-1151-4ab5-8fdc-16bab07e4125.jpg" },
  { id: "p44", name: "Pearl & Gold Ring",         category: "Rings",     price: 19500, oldPrice: null,  tag: "New", img: "public/Rings/3997f2b1-181b-4ecc-a0e0-dea510714b3b.jpg" },
  { id: "p45", name: "Antique Filigree Ring",     category: "Rings",     price: 27000, oldPrice: 30000, tag: "Sale", img: "public/Rings/3c88b80d-24b0-4b50-bd47-2bb1e9a7c2ee.jpg" },

  // Bracelets (15 products)
  { id: "p46", name: "Gold Chain Bracelet",       category: "Bracelets", price: 24600, oldPrice: null,  tag: null, img: "public/Bracelets/039370f4-606f-41ad-a802-e74115c7ca3e.jpg" },
  { id: "p47", name: "Kundan Kada",               category: "Bracelets", price: 39900, oldPrice: 44000, tag: "Sale", img: "public/Bracelets/084bdd26-ab15-4929-ba34-9e7bb775563d.jpg" },
  { id: "p48", name: "Beaded Gold Bangle",        category: "Bracelets", price: 21300, oldPrice: null,  tag: null, img: "public/Bracelets/0a83646e-14fa-4e11-ac13-49305103b6e8.jpg" },
  { id: "p49", name: "Diamond Tennis Bracelet",   category: "Bracelets", price: 85000, oldPrice: null,  tag: "New", img: "public/Bracelets/0f3ac9f6-66e5-4d67-a53d-334c879a075a.jpg" },
  { id: "p50", name: "Polki Bracelet",            category: "Bracelets", price: 42000, oldPrice: 46000, tag: "Sale", img: "public/Bracelets/132e5f1f-a854-474c-aeea-b8ae2bf4e05e.jpg" },
  { id: "p51", name: "Gold Charm Bracelet",       category: "Bracelets", price: 28000, oldPrice: null,  tag: "New", img: "public/Bracelets/1600a6a4-b4d9-490c-b694-482d9b9555c5.jpg" },
  { id: "p52", name: "Antique Cuff Bracelet",     category: "Bracelets", price: 35000, oldPrice: 39000, tag: "Sale", img: "public/Bracelets/1bb415b7-1157-4dc0-aed0-cc10f875fc15.jpg" },
  { id: "p53", name: "Temple Style Bangle",       category: "Bracelets", price: 31000, oldPrice: null,  tag: null, img: "public/Bracelets/22e46866-e5bb-434f-87aa-e70e744ea199.jpg" },
  { id: "p54", name: "Meenakari Kada",           category: "Bracelets", price: 26000, oldPrice: null,  tag: "New", img: "public/Bracelets/2365f6cb-fb07-4b01-b787-b3b598afdc74.jpg" },
  { id: "p55", name: "Pearl & Gold Bracelet",     category: "Bracelets", price: 23000, oldPrice: 26000, tag: "Sale", img: "public/Bracelets/29eeeb4c-7ca6-4684-b5cf-51fd47c97417.jpg" },
  { id: "p56", name: "Navratna Bracelet",         category: "Bracelets", price: 48000, oldPrice: null,  tag: null, img: "public/Bracelets/2c8ce56d-1971-41af-a610-ad70ce34c4ad.jpg" },
  { id: "p57", name: "Gold Filigree Bangle",      category: "Bracelets", price: 29000, oldPrice: null,  tag: "New", img: "public/Bracelets/3331ff71-03dd-436f-a742-9e9d4196212b.jpg" },
  { id: "p58", name: "Kundan Charm Bracelet",     category: "Bracelets", price: 33000, oldPrice: 37000, tag: "Sale", img: "public/Bracelets/36d23c22-7101-4e5a-a291-3db0e31bc311.jpg" },
  { id: "p59", name: "Victorian Link Bracelet",   category: "Bracelets", price: 27000, oldPrice: null,  tag: null, img: "public/Bracelets/3b8fe63e-2e9e-4e4b-8320-c3b6d5e91832.jpg" },
  { id: "p60", name: "Emerald & Diamond Kada",    category: "Bracelets", price: 62000, oldPrice: 68000, tag: "Sale", img: "public/Bracelets/3df01ac7-dd8b-4a10-8ea8-fc867d91b8d2.jpg" },
];

const fmtINR = (n) => "₹" + n.toLocaleString("en-IN");

/* ---------------- cart storage ---------------- */
function getCart() {
  try { return JSON.parse(localStorage.getItem("melele_cart")) || {}; }
  catch { return {}; }
}
function saveCart(cart) {
  localStorage.setItem("melele_cart", JSON.stringify(cart));
  updateCartCount();
}
function addToCart(id) {
  const cart = getCart();
  cart[id] = (cart[id] || 0) + 1;
  saveCart(cart);
}
function setQty(id, qty) {
  const cart = getCart();
  if (qty <= 0) delete cart[id];
  else cart[id] = qty;
  saveCart(cart);
}
function removeFromCart(id) {
  const cart = getCart();
  delete cart[id];
  saveCart(cart);
}
function cartCount() {
  return Object.values(getCart()).reduce((a, b) => a + b, 0);
}
function updateCartCount() {
  document.querySelectorAll("[data-cart-count]").forEach(el => {
    el.textContent = cartCount();
  });
}

/* ---------------- product card render ---------------- */
function diamondIconSVG() {
  return `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 8L12 2L20 8L12 22L4 8Z" stroke="#211B14" stroke-width="1" stroke-linejoin="round"/>
    <path d="M4 8H20M8.5 8L12 2L15.5 8M8.5 8L12 22M15.5 8L12 22" stroke="#211B14" stroke-width="0.75" stroke-linejoin="round"/>
  </svg>`;
}

function productCard(p) {
  const mediaHtml = p.img
    ? `<img src="${p.img}" alt="${p.name}" loading="lazy">`
    : diamondIconSVG();
  return `
    <div class="product-card">
      <div class="product-media">
        ${p.tag ? `<span class="product-tag">${p.tag}</span>` : ""}
        ${mediaHtml}
      </div>
      <div class="product-info">
        <div class="product-cat">${p.category}</div>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-price-row">
          <div class="product-price">
            ${p.oldPrice ? `<span class="strike">${fmtINR(p.oldPrice)}</span>` : ""}${fmtINR(p.price)}
          </div>
          <button class="add-btn" onclick="addToCart('${p.id}'); this.textContent='Added'; setTimeout(()=>this.textContent='Add',1200)">Add</button>
        </div>
      </div>
    </div>`;
}

function renderGrid(el, list) {
  el.innerHTML = list.map(productCard).join("");
}

/* ---------------- whatsapp checkout ---------------- */
function buildWhatsAppMessage() {
  const cart = getCart();
  const lines = ["Hi Milèle! I'd like to order:"];
  let total = 0;
  Object.entries(cart).forEach(([id, qty]) => {
    const p = PRODUCTS.find(x => x.id === id);
    if (!p) return;
    lines.push(`• ${p.name} x${qty} — ${fmtINR(p.price * qty)}`);
    total += p.price * qty;
  });
  lines.push("", `Total: ${fmtINR(total)}`);
  return encodeURIComponent(lines.join("\n"));
}

function checkoutOnWhatsApp() {
  const msg = buildWhatsAppMessage();
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
}

/* ---------------- init on every page ---------------- */
document.addEventListener("DOMContentLoaded", updateCartCount);

const WHATSAPP_NUMBER = document.body.dataset.whatsapp || "2348084245962";
const BRANCH_NAME = document.body.dataset.branch || "Apapa";
const PAGE_SIZE = 8;

const products = [
  {
    id: "iphone-17-pro-max",
    name: "iPhone 17 Pro Max",
    brand: "Apple",
    collection: "iPhone",
    tag: "Pro Max",
    image: "images/17promax-1.jpg",
    description: "The top large-screen iPhone option for a premium Apple experience."
  },
  {
    id: "iphone-17-pro",
    name: "iPhone 17 Pro",
    brand: "Apple",
    collection: "iPhone",
    tag: "Pro",
    image: "images/17pro-1.jpg",
    description: "A premium Pro iPhone option in a more compact flagship size."
  },
  {
    id: "iphone-17-air",
    name: "iPhone 17 Air",
    brand: "Apple",
    collection: "iPhone",
    tag: "Air",
    image: "images/17air-1.jpg",
    description: "A sleek iPhone choice for customers who value a lighter design."
  },
  {
    id: "iphone-17",
    name: "iPhone 17",
    brand: "Apple",
    collection: "iPhone",
    tag: "iPhone",
    image: "images/17-1.jpg",
    description: "A balanced current-generation iPhone for everyday use."
  },
  {
    id: "iphone-16-plus",
    name: "iPhone 16 Plus",
    brand: "Apple",
    collection: "iPhone",
    tag: "Plus",
    image: "images/16plus-1.jpg",
    description: "A roomy iPhone display without moving into the Pro Max range."
  },
  {
    id: "iphone-16",
    name: "iPhone 16",
    brand: "Apple",
    collection: "iPhone",
    tag: "iPhone",
    image: "images/16-1.jpg",
    description: "A polished everyday iPhone with a comfortable standard size."
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    brand: "Apple",
    collection: "iPhone",
    tag: "Popular",
    image: "images/15-1.jpeg",
    description: "A popular modern iPhone choice for camera, apps and daily use."
  },
  {
    id: "iphone-14-pro",
    name: "iPhone 14 Pro",
    brand: "Apple",
    collection: "iPhone",
    tag: "Pro",
    image: "images/14pro-1.jpeg",
    description: "A compact Pro iPhone option with premium everyday appeal."
  },
  {
    id: "iphone-14",
    name: "iPhone 14",
    brand: "Apple",
    collection: "iPhone",
    tag: "iPhone",
    image: "images/14-1.jpeg",
    description: "A dependable iPhone upgrade for work, photos and entertainment."
  },
  {
    id: "iphone-13-pro",
    name: "iPhone 13 Pro",
    brand: "Apple",
    collection: "iPhone",
    tag: "Pro",
    image: "images/13pro-1.jpeg",
    description: "A strong-value Pro iPhone in a manageable size."
  },
  {
    id: "iphone-13",
    name: "iPhone 13",
    brand: "Apple",
    collection: "iPhone",
    tag: "Popular",
    image: "images/13-1.jpeg",
    description: "A widely loved iPhone option with practical everyday value."
  },
  {
    id: "iphone-12-pro-max",
    name: "iPhone 12 Pro Max",
    brand: "Apple",
    collection: "iPhone",
    tag: "Pro Max",
    image: "images/12promax-1.jpeg",
    description: "A large-screen premium iPhone at a more accessible level."
  },
  {
    id: "iphone-12-pro",
    name: "iPhone 12 Pro",
    brand: "Apple",
    collection: "iPhone",
    tag: "Pro",
    image: "images/12pro-1.jpeg",
    description: "A refined Pro iPhone choice for everyday Apple users."
  },
  {
    id: "iphone-12",
    name: "iPhone 12",
    brand: "Apple",
    collection: "iPhone",
    tag: "Great value",
    image: "images/12.jpeg",
    description: "A familiar modern iPhone design with accessible everyday value."
  },
  {
    id: "iphone-11-pro-max",
    name: "iPhone 11 Pro Max",
    brand: "Apple",
    collection: "iPhone",
    tag: "Pro Max",
    image: "images/11promax-1.jpeg",
    description: "A classic large-screen Pro Max option for essential daily use."
  },
  {
    id: "iphone-11-pro",
    name: "iPhone 11 Pro",
    brand: "Apple",
    collection: "iPhone",
    tag: "Pro",
    image: "images/11pro-1.jpeg",
    description: "A compact classic iPhone for customers entering the Pro range."
  },
  {
    id: "iphone-11",
    name: "iPhone 11",
    brand: "Apple",
    collection: "iPhone",
    tag: "Classic",
    image: "images/11-1.jpeg",
    description: "A practical and recognisable iPhone for everyday essentials."
  },
  {
    id: "iphone-xs-max",
    name: "iPhone XS Max",
    brand: "Apple",
    collection: "iPhone",
    tag: "Classic Max",
    image: "images/classic/iphone-xs-max.jpg",
    description: "A large-screen classic iPhone with a premium stainless-steel design."
  },
  {
    id: "iphone-xs",
    name: "iPhone XS",
    brand: "Apple",
    collection: "iPhone",
    tag: "Classic",
    image: "images/classic/iphone-xs.jpg",
    description: "A compact premium classic for everyday Apple essentials."
  },
  {
    id: "iphone-xr",
    name: "iPhone XR",
    brand: "Apple",
    collection: "iPhone",
    tag: "Popular",
    image: "images/classic/iphone-xr.jpg",
    description: "A colourful, practical iPhone option with a roomy display."
  },
  {
    id: "iphone-x",
    name: "iPhone X",
    brand: "Apple",
    collection: "iPhone",
    tag: "Classic",
    image: "images/classic/iphone-x.png",
    description: "The classic all-screen iPhone design for essential daily use."
  },
  {
    id: "iphone-8-plus",
    name: "iPhone 8 Plus",
    brand: "Apple",
    collection: "iPhone",
    tag: "Plus",
    image: "images/classic/iphone-8-plus.png",
    description: "A larger classic iPhone with a familiar home-button experience."
  },
  {
    id: "iphone-8",
    name: "iPhone 8",
    brand: "Apple",
    collection: "iPhone",
    tag: "Compact",
    image: "images/classic/iphone-8.png",
    description: "A compact glass-back iPhone for calls, apps and daily essentials."
  },
  {
    id: "iphone-7-plus",
    name: "iPhone 7 Plus",
    brand: "Apple",
    collection: "iPhone",
    tag: "Plus",
    image: "images/classic/iphone-7-plus.png",
    description: "A large classic iPhone option with a dual-camera design."
  },
  {
    id: "iphone-7",
    name: "iPhone 7",
    brand: "Apple",
    collection: "iPhone",
    tag: "Classic",
    image: "images/classic/iphone-7.png",
    description: "A familiar compact iPhone for basic everyday use."
  },
  {
    id: "iphone-6s-plus",
    name: "iPhone 6s Plus",
    brand: "Apple",
    collection: "iPhone",
    tag: "Plus",
    image: "images/classic/iphone-6s-plus.png",
    description: "A larger home-button iPhone for simple daily tasks."
  },
  {
    id: "iphone-6s",
    name: "iPhone 6s",
    brand: "Apple",
    collection: "iPhone",
    tag: "Classic",
    image: "images/classic/iphone-6s.png",
    description: "A compact classic iPhone for calls and essential applications."
  },
  {
    id: "iphone-6-plus",
    name: "iPhone 6 Plus",
    brand: "Apple",
    collection: "iPhone",
    tag: "Plus",
    image: "images/classic/iphone-6-plus.png",
    description: "A large-screen early-generation iPhone for basic use."
  },
  {
    id: "iphone-6",
    name: "iPhone 6",
    brand: "Apple",
    collection: "iPhone",
    tag: "Classic",
    image: "images/classic/iphone-6.png",
    description: "An early-generation compact iPhone offered subject to availability."
  },
  {
    id: "iphone-se-3rd-generation",
    name: "iPhone SE (3rd Generation)",
    brand: "Apple",
    collection: "iPhone",
    tag: "SE",
    image: "images/classic/iphone-se-3.png",
    description: "A compact home-button iPhone with newer-generation performance."
  },
  {
    id: "iphone-se-2nd-generation",
    name: "iPhone SE (2nd Generation)",
    brand: "Apple",
    collection: "iPhone",
    tag: "SE",
    image: "images/classic/iphone-se-2.png",
    description: "A compact and familiar iPhone design for practical everyday use."
  },
  {
    id: "iphone-se-1st-generation",
    name: "iPhone SE (1st Generation)",
    brand: "Apple",
    collection: "iPhone",
    tag: "SE",
    image: "images/classic/iphone-se-1.png",
    description: "The original compact SE model, available subject to current stock."
  },
  {
    id: "samsung-z-fold-7",
    name: "Galaxy Z Fold 7",
    brand: "Samsung",
    collection: "Foldable",
    tag: "Foldable",
    image: "images/products/samsung-galaxy-z-fold-7.jpeg",
    description: "A premium foldable built for a bigger-screen mobile experience."
  },
  {
    id: "samsung-z-fold-6",
    name: "Galaxy Z Fold 6",
    brand: "Samsung",
    collection: "Foldable",
    tag: "Foldable",
    image: "images/products/samsung-galaxy-z-fold-6.jpeg",
    description: "A versatile foldable for work, entertainment and multitasking."
  },
  {
    id: "samsung-z-fold-5",
    name: "Galaxy Z Fold 5",
    brand: "Samsung",
    collection: "Foldable",
    tag: "Foldable",
    image: "images/products/samsung-galaxy-z-fold-5.jpeg",
    description: "Large-screen flexibility in a refined, pocketable foldable design."
  },
  {
    id: "samsung-z-flip-4",
    name: "Galaxy Z Flip 4",
    brand: "Samsung",
    collection: "Foldable",
    tag: "Compact",
    image: "images/products/samsung-galaxy-z-flip-4.jpeg",
    description: "A compact flip phone made for portability and personal style."
  },
  {
    id: "samsung-s25-ultra",
    name: "Galaxy S25 Ultra 5G",
    brand: "Samsung",
    collection: "Ultra",
    tag: "Flagship",
    image: "images/products/samsung-galaxy-s25-ultra-5g.jpeg",
    description: "Premium Galaxy performance with the signature Ultra experience."
  },
  {
    id: "samsung-s24-ultra",
    name: "Galaxy S24 Ultra 5G",
    brand: "Samsung",
    collection: "Ultra",
    tag: "Ultra",
    image: "images/products/samsung-galaxy-s24-ultra-5g.jpeg",
    description: "A polished flagship choice for camera, productivity and everyday use."
  },
  {
    id: "samsung-s23-ultra",
    name: "Galaxy S23 Ultra 5G",
    brand: "Samsung",
    collection: "Ultra",
    tag: "Ultra",
    image: "images/products/samsung-galaxy-s23-ultra-5g.jpeg",
    description: "A capable Ultra device with a premium big-screen form factor."
  },
  {
    id: "samsung-s23",
    name: "Galaxy S23 5G",
    brand: "Samsung",
    collection: "Galaxy S",
    tag: "Galaxy S",
    image: "images/products/samsung-galaxy-s23-5g.jpeg",
    description: "Compact flagship performance for a balanced everyday upgrade."
  },
  {
    id: "samsung-s22-ultra",
    name: "Galaxy S22 Ultra",
    brand: "Samsung",
    collection: "Ultra",
    tag: "Ultra",
    image: "images/products/samsung-galaxy-s22-ultra.jpeg",
    description: "A distinctive Galaxy Ultra option with a confident premium design."
  },
  {
    id: "samsung-s22-plus",
    name: "Galaxy S22+ 5G",
    brand: "Samsung",
    collection: "Galaxy S",
    tag: "Galaxy S",
    image: "images/products/samsung-galaxy-s22-plus-5g.jpeg",
    description: "A larger Galaxy S option for media, work and daily communication."
  },
  {
    id: "samsung-s21-ultra",
    name: "Galaxy S21 Ultra 5G",
    brand: "Samsung",
    collection: "Ultra",
    tag: "Ultra",
    image: "images/products/samsung-galaxy-s21-ultra-5g.jpeg",
    description: "An accessible route into Samsung’s high-end Ultra experience."
  },
  {
    id: "samsung-s21-plus",
    name: "Galaxy S21+ 5G",
    brand: "Samsung",
    collection: "Galaxy S",
    tag: "Galaxy S",
    image: "images/products/samsung-galaxy-s21-plus-5g.jpeg",
    description: "A roomy, polished Galaxy device for reliable everyday performance."
  },
  {
    id: "samsung-s21",
    name: "Galaxy S21 5G",
    brand: "Samsung",
    collection: "Galaxy S",
    tag: "Great value",
    image: "images/products/samsung-galaxy-s21-5g.jpeg",
    description: "A compact Galaxy flagship option with practical everyday value."
  },
  {
    id: "samsung-s10-plus",
    name: "Galaxy S10+",
    brand: "Samsung",
    collection: "Galaxy S",
    tag: "Classic",
    image: "images/products/samsung-galaxy-s10-plus.jpeg",
    description: "A proven Galaxy classic for essential apps, calls and content."
  },
  {
    id: "samsung-s10",
    name: "Galaxy S10",
    brand: "Samsung",
    collection: "Galaxy S",
    tag: "Classic",
    image: "images/products/samsung-galaxy-s10.jpeg",
    description: "A familiar premium Samsung design at a more accessible level."
  },
  {
    id: "google-pixel-9-pro-fold",
    name: "Pixel 9 Pro Fold",
    brand: "Google",
    collection: "Foldable",
    tag: "Pixel Fold",
    image: "images/products/google-pixel-9-pro-fold.jpg",
    description: "Google’s clean Pixel experience in a flexible foldable format."
  },
  {
    id: "google-pixel-6a",
    name: "Pixel 6a",
    brand: "Google",
    collection: "Pixel",
    tag: "Pixel",
    image: "images/products/google-pixel-6a.webp",
    description: "A compact Pixel option for smart everyday photography and Android."
  },
  {
    id: "google-pixel-6",
    name: "Pixel 6",
    brand: "Google",
    collection: "Pixel",
    tag: "Pixel",
    image: "images/products/google-pixel-6.webp",
    description: "Distinctive Google hardware with a clean, straightforward experience."
  },
  {
    id: "iphone-16-pro-max",
    name: "iPhone 16 Pro Max",
    brand: "Apple",
    collection: "iPhone",
    tag: "Pro Max",
    image: "images/16promax-1.jpg",
    description: "A premium large-screen iPhone option for demanding everyday use."
  },
  {
    id: "iphone-16-pro",
    name: "iPhone 16 Pro",
    brand: "Apple",
    collection: "iPhone",
    tag: "Pro",
    image: "images/16pro-1.jpg",
    description: "Pro-level iPhone experience in a more compact flagship size."
  },
  {
    id: "iphone-15-pro-max",
    name: "iPhone 15 Pro Max",
    brand: "Apple",
    collection: "iPhone",
    tag: "Pro Max",
    image: "images/15promax-1.jpeg",
    description: "A refined large-screen iPhone for camera, work and entertainment."
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    brand: "Apple",
    collection: "iPhone",
    tag: "Pro",
    image: "images/15pro-1.jpeg",
    description: "A compact premium iPhone with a polished Pro experience."
  },
  {
    id: "iphone-14-pro-max",
    name: "iPhone 14 Pro Max",
    brand: "Apple",
    collection: "iPhone",
    tag: "Pro Max",
    image: "images/14promax-1.jpeg",
    description: "A popular big-screen iPhone option with premium everyday appeal."
  },
  {
    id: "iphone-13-pro-max",
    name: "iPhone 13 Pro Max",
    brand: "Apple",
    collection: "iPhone",
    tag: "Popular",
    image: "images/13promax-1.jpeg",
    description: "A dependable premium iPhone choice with strong practical value."
  }
];

const state = {
  filter: "All",
  query: "",
  visible: PAGE_SIZE
};

const productGrid = document.querySelector("#productGrid");
const filterTabs = document.querySelector("#filterTabs");
const searchInput = document.querySelector("#searchInput");
const resultsCount = document.querySelector("#resultsCount");
const loadMoreButton = document.querySelector("#loadMore");
const productDialog = document.querySelector("#productDialog");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#navMenu");

function whatsappUrl(productName) {
  const text = `Hello Increase Original Super Store ${BRANCH_NAME} branch, I am interested in the ${productName}. Please confirm today's price, available condition, storage and colours.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function accessoryWhatsappUrl(accessoryName) {
  const text = `Hello Increase Original Super Store ${BRANCH_NAME} branch, I am interested in ${accessoryName}. Please share your current options, prices and available colours.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

function matchesFilter(product) {
  if (state.filter === "All") return true;
  if (state.filter === "Foldable") return product.collection === "Foldable";
  if (state.filter === "Ultra") return product.collection === "Ultra";
  return product.brand === state.filter;
}

function filteredProducts() {
  const query = state.query.trim().toLowerCase();
  return products.filter((product) => {
    const searchable = `${product.name} ${product.brand} ${product.collection} ${product.description}`.toLowerCase();
    return matchesFilter(product) && (!query || searchable.includes(query));
  });
}

function productCard(product) {
  return `
    <article class="product-card" data-product-id="${product.id}" tabindex="0" role="button" aria-label="View ${product.name} details">
      <div class="product-media">
        <img class="${product.image.includes("images/classic/") ? "product-image-contain" : ""}" src="${product.image}" alt="${product.name} available from Increase Original Super Store" loading="lazy" decoding="async">
        <span class="product-tag">${product.tag}</span>
      </div>
      <div class="product-body">
        <p class="product-brand">${product.brand}</p>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-footer">
          <span>Ask for today’s price</span>
          <button type="button" tabindex="-1" aria-hidden="true">↗</button>
        </div>
      </div>
    </article>`;
}

function renderProducts() {
  const matches = filteredProducts();
  const visibleProducts = matches.slice(0, state.visible);

  resultsCount.textContent = `${matches.length} device${matches.length === 1 ? "" : "s"} available to enquire about`;
  productGrid.innerHTML = visibleProducts.length
    ? visibleProducts.map(productCard).join("")
    : `<p class="empty-state">No matching device found. Try another search or ask us on WhatsApp.</p>`;

  loadMoreButton.hidden = visibleProducts.length >= matches.length;

  productGrid.querySelectorAll(".product-card").forEach((card) => {
    card.addEventListener("click", () => openProduct(card.dataset.productId));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProduct(card.dataset.productId);
      }
    });
  });
}

function setFilter(filter) {
  state.filter = filter;
  state.visible = PAGE_SIZE;
  filterTabs.querySelectorAll(".filter").forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle("active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  renderProducts();
}

function openProduct(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;

  const image = document.querySelector("#dialogImage");
  image.src = product.image;
  image.alt = product.name;
  document.querySelector("#dialogBrand").textContent = `${product.brand} · ${product.collection}`;
  document.querySelector("#dialogTitle").textContent = product.name;
  document.querySelector("#dialogDescription").textContent = product.description;
  document.querySelector("#dialogWhatsApp").href = whatsappUrl(product.name);
  productDialog.showModal();
  document.body.style.overflow = "hidden";
}

function closeProduct() {
  productDialog.close();
  document.body.style.overflow = "";
}

filterTabs.addEventListener("click", (event) => {
  const button = event.target.closest(".filter");
  if (button) setFilter(button.dataset.filter);
});

searchInput.addEventListener("input", () => {
  state.query = searchInput.value;
  state.visible = PAGE_SIZE;
  renderProducts();
});

loadMoreButton.addEventListener("click", () => {
  state.visible += PAGE_SIZE;
  renderProducts();
});

document.querySelectorAll("[data-collection], [data-brand]").forEach((card) => {
  card.addEventListener("click", () => {
    setFilter(card.dataset.collection || card.dataset.brand);
    document.querySelector("#shop").scrollIntoView({ behavior: "smooth" });
  });
});

document.querySelectorAll("[data-accessory]").forEach((link) => {
  link.href = accessoryWhatsappUrl(link.dataset.accessory);
});

menuToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  document.body.classList.toggle("menu-open", open);
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    document.body.classList.remove("menu-open");
  });
});

document.querySelector(".dialog-close").addEventListener("click", closeProduct);
productDialog.addEventListener("click", (event) => {
  const bounds = productDialog.getBoundingClientRect();
  const inside = event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom;
  if (!inside) closeProduct();
});
productDialog.addEventListener("close", () => { document.body.style.overflow = ""; });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
document.querySelector("#year").textContent = new Date().getFullYear();

setFilter("All");

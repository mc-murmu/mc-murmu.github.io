const apps = [
  {
    name: "Movie Box",
    version: "90020126",
    category: "Entertainment",
    logo: "https://imgdb.in/i/gKk4IUvZRK.jpg",
    description: "Watch movies free without spending a penny.",
    badge: "New",
    download: ""
  }
];

const featured = null;

const categories = [
  ["All", "▦"],
  ["Tools", "⌕"],
  ["Games", "🎮"],
  ["Social", "♟"],
  ["Media", "▶"],
  ["Entertainment", "🎬"],
  ["Other", "◇"]
];

const grid = document.getElementById("appGrid");
const categoryBar = document.getElementById("categoryBar");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

let selectedCategory = "All";
let visibleCount = 8;


function renderCategories() {
  categoryBar.innerHTML = categories.map(([name, icon]) => `
    <button class="category ${name === selectedCategory ? "active" : ""}" data-category="${name}">
      <span class="cat-icon">${icon}</span>
      <span>${name}</span>
    </button>
  `).join("");

  categoryBar.querySelectorAll(".category").forEach(btn => {
    btn.addEventListener("click", () => {
      selectedCategory = btn.dataset.category;
      renderCategories();
      renderApps();
    });
  });
}


function badgeClass(badge) {
  return badge === "Popular"
    ? "popular"
    : badge === "Trending"
    ? "trending"
    : "";
}


function renderApps() {
  const q = searchInput.value.trim().toLowerCase();

  const filtered = apps.filter(app =>
    (selectedCategory === "All" || app.category === selectedCategory) &&
    (
      !q ||
      `${app.name} ${app.category} ${app.description}`
        .toLowerCase()
        .includes(q)
    )
  );

  const shown = filtered.slice(0, visibleCount);

  grid.innerHTML = shown.map(app => `
    <article class="app-card">

      <div class="app-top">

        <div class="app-logo">
          <img
            src="${app.logo}"
            alt="${app.name} logo"
            onerror="this.style.display='none'"
          >
        </div>

        <span class="badge ${badgeClass(app.badge)}">
          ${app.badge}
        </span>

      </div>

      <div class="app-info">
        <div class="app-name">${app.name}</div>

        <div class="app-meta">
          ${app.version}
          <span class="dot">•</span>
          ${app.category}
        </div>
      </div>

      <div class="app-description">
        ${app.description}
      </div>

      ${
        app.download
          ? `<button class="download" onclick="window.open('${app.download}', '_blank')">
               ↓ &nbsp; Download
             </button>`
          : `<button class="download" disabled>
               ⏳ &nbsp; Coming Soon
             </button>`
      }

    </article>
  `).join("");

  noResults.style.display =
    filtered.length ? "none" : "block";

  document.getElementById("loadMore").style.display =
    filtered.length > visibleCount ? "block" : "none";
}


function renderFeatured() {
  const featuredBox = document.getElementById("featuredApp");

  // No featured APK yet
  featuredBox.innerHTML = `
    <div class="no-featured">
      No featured APK yet.
    </div>
  `;
}


document.getElementById("loadMore").addEventListener("click", () => {
  visibleCount += 4;
  renderApps();
});


searchInput.addEventListener("input", () => {
  visibleCount = 8;
  renderApps();
});


document.querySelector(".theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light");

  document.querySelector(".theme-toggle").textContent =
    document.body.classList.contains("light") ? "☀" : "☾";
});


document.querySelector(".search-toggle").addEventListener("click", () => {
  searchInput.focus();

  document.querySelector(".hero").scrollIntoView({
    behavior: "smooth"
  });
});


renderCategories();
renderFeatured();
renderApps();

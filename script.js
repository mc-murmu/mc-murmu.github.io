const apps = [
  {
    name: "Movie Box",
    version: "90020126",
    category: "Entertainment",
    logo: "https://imgdb.in/i/gKk4IUvZRK.jpg",
    description: "Watch movies free without spending a penny.",
    badge: "New",
    download: ""
  },

  {
    name: "YouTube Premium",
    version: "21.36.12",
    category: "Media",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
    description:
      "Enjoy YouTube with fewer interruptions, background playback, and a smoother viewing experience.",
    badge: "Popular",
    download: ""
  }
];


const grid = document.getElementById("appGrid");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");
const loadMore = document.getElementById("loadMore");
const featuredApp = document.getElementById("featuredApp");

let visibleCount = 8;


/* =========================================
   BADGE CLASS
   ========================================= */

function badgeClass(badge) {

  return badge === "Popular"
    ? "popular"
    : badge === "Trending"
    ? "trending"
    : "";

}


/* =========================================
   RENDER APPS
   ========================================= */

function renderApps() {

  const q = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";


  const filtered = apps.filter(app =>

    !q ||

    `${app.name} ${app.category} ${app.description}`
      .toLowerCase()
      .includes(q)

  );


  const shown = filtered.slice(0, visibleCount);


  grid.innerHTML = shown.map(app => `

    <article class="app-card">

      <div class="app-top">

        <div class="app-logo">

          <img
            src="${app.logo}"
            alt="${app.name} logo"
            loading="lazy"
            onerror="this.style.display='none'"
          >

        </div>


        <span class="badge ${badgeClass(app.badge)}">
          ${app.badge}
        </span>

      </div>


      <div class="app-info">

        <div class="app-name">
          ${app.name}
        </div>


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

          ? `
            <button
              class="download"
              type="button"
              onclick="window.open('${app.download}', '_blank')"
            >
              ↓ &nbsp; Download
            </button>
          `

          : `
            <button
              class="download"
              type="button"
              disabled
            >
              ⏳ &nbsp; Coming Soon
            </button>
          `
      }

    </article>

  `).join("");


  /* =========================================
     NO RESULTS
     ========================================= */

  if (filtered.length === 0) {

    noResults.style.display = "block";

  } else {

    noResults.style.display = "none";

  }


  /* =========================================
     LOAD MORE BUTTON
     ========================================= */

  if (filtered.length > visibleCount) {

    loadMore.style.display = "block";

  } else {

    loadMore.style.display = "none";

  }

}


/* =========================================
   FEATURED APP
   ========================================= */

function renderFeatured() {

  if (!featuredApp || apps.length === 0) {
    return;
  }


  const app = apps[0];


  featuredApp.innerHTML = `

    <article class="featured-card">

      <div class="app-logo">

        <img
          src="${app.logo}"
          alt="${app.name} logo"
          loading="lazy"
          onerror="this.style.display='none'"
        >

      </div>


      <div class="featured-info">

        <span class="badge ${badgeClass(app.badge)}">
          ${app.badge}
        </span>


        <h3>
          ${app.name}
        </h3>


        <div class="app-meta">

          ${app.version}

          <span class="dot">•</span>

          ${app.category}

        </div>


        <p>
          ${app.description}
        </p>


        ${
          app.download

            ? `
              <button
                class="download"
                type="button"
                onclick="window.open('${app.download}', '_blank')"
              >
                ↓ &nbsp; Download
              </button>
            `

            : `
              <button
                class="download"
                type="button"
                disabled
              >
                ⏳ &nbsp; Coming Soon
              </button>
            `
        }

      </div>

    </article>

  `;

}


/* =========================================
   SEARCH
   ========================================= */

if (searchInput) {

  searchInput.addEventListener("input", () => {

    visibleCount = 8;

    renderApps();

  });

}


/* =========================================
   LOAD MORE
   ========================================= */

if (loadMore) {

  loadMore.addEventListener("click", () => {

    visibleCount += 8;

    renderApps();

  });

}


/* =========================================
   INITIAL RENDER
   ========================================= */

renderApps();

renderFeatured();

This version also fixes the incomplete ending and adds Featured APK rendering, while preserving your existing search and “Coming Soon” behavior.

One important point: your "Movie Box" and "YouTube Premium" entries currently have "download: """, so both will correctly show Coming Soon until you put their download links there.

  loadMore.style.display =
    filtered.length > visibleCount ? "block" : "none";
}


function renderFeatured() {

  const featuredBox =
    document.getElementById("featuredApp");

  featuredBox.innerHTML = `
    <div class="no-featured">
      No featured APK yet.
    </div>
  `;
}


loadMore.addEventListener("click", () => {

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
    document.body.classList.contains("light")
      ? "☀"
      : "☾";

});


document.querySelector(".search-toggle").addEventListener("click", () => {

  searchInput.focus();

  document.querySelector(".hero").scrollIntoView({
    behavior: "smooth"
  });

});


renderFeatured();
renderApps();
function renderFeatured() {
  const featuredBox = document.getElementById("featuredApp");

  featuredBox.innerHTML = `
    <div class="no-featured">
      No featured APK yet.
    </div>
  `;
}


document.getElementById("loadMore").style.display =
  filtered.length > visibleCount ? "block" : "none";


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


renderFeatured();
renderApps();

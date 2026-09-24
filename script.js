const apps = [
  {
    name: "Movie Box pro",
    version: "90020126",
    category: "Entertainment",
    logo: "https://imgdb.in/i/gTP4p50STC.png",
    description: "Watch movies free without spending a penny.",
    badge: "New",
    download: "https://www.mediafire.com/file/mfbh8wh0vx6133m/MovieBox_4_%255BBY-BIJAY%255D.apk/file"
  },

  {
    name: "YouTube Premium",
    version: "v6.23.53.3",
    category: "media",
    logo: "https://imgdb.in/i/gTPaHnsJBC.png",
    description: "Enjoy YouTube with fewer interruptions, background playback, and a smoother viewing experience.",
    badge: "popular",
    download: "https://www.mediafire.com/file/afkf84lxjf18o5p/YouTube_Premium_21.10.493_clone.apk/file"
  },
  {
    name: "Micro G",
    version: "v21.36.12",
    category: "Media",
    logo: "https://imgdb.in/i/gTPdlzQhFu.png",
    description: "Extra for YouTube premium. app required for account login 🔥.",
    badge: "Popular",
    download: "https://www.mediafire.com/file/i167y6s90rp83kx/microG_Services_0.3.13.2.250932.apk/file"
  },
  {
    name: "NetPlay premium",
    version: "v0.4.86",
    category: "Entertainment",
    logo: "https://imgdb.in/i/gTRMyeKE6Y.webp",
    description: "Netplay APK is a free and easy-to-use streaming app that lets you watch movies, anime, TV shows, and sports in HD 🔥.",
    badge: "Funn",
    download: ""
  },
  {
    name: "CapCut  (Ultra Version Pro)",
    version: "v19.7.0",
    category: "Tools",
    logo: "https://imgdb.in/i/gU0lIc9R3W.png",
    description: "● Pro | Paid features unlocked\n● Stable mod\n● No VPN required\n● All templates working\n● Business builder mode enabled\n● Security notice removed\n● Multiple languages available\n● Regional restrictions removed\n● Login by \"Email & Number & Facebook & Tiktok\" ✅\n● Can export your videos without login & without internet ✅\n● Requires Android 6.0 or higher\n● CPU architecture: Universal\n● Optimized and cleaned resources for fast loading",
    badge: "Trending",
    download: ""
  },
  {
    name: "Pawxy Vpn [ Premium ]",
    version: "v.1.14.0",
    category: "Social",
    logo: "https://imgdb.in/i/gU1leDvmOk.png",
    description: "• Premium unlocked 💥\n• All regions unlocked \n• Safe & secure 🔐",
    badge: "Social",
    download: "https://www.mediafire.com/file/z1c5v6uuatxbjim/Pawxy_1.14.0%255Bby-bijay%255D.apk/file"
  },
  {
    name: "Lightroom [ Premium ]",
    version: "v11.5.0",
    category: "Tools",
    logo: "https://imgdb.in/i/gUH8cjXmGA.png",
    description: "• Premium unlocked ✓\n• Optimize for higher Android version ✓\n• Safe & secure 🔐\n• Mod by Marang B4bu",
    badge: "Popular",
    download: "https://www.mediafire.com/file/ovf0law2s0gr2z7/Lightroom_11.5.0_%255BBY-BIJ4Y%255D.apk/file"
  }
];


const grid = document.getElementById("appGrid");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");
const loadMore = document.getElementById("loadMore");

let visibleCount = 8;


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
          ? `<button
               class="download"
               onclick="window.open('${app.download}', '_blank')">
               ↓ &nbsp; Download
             </button>`
          : `<button
               class="download"
               disabled>
               ⏳ &nbsp; Coming Soon
             </button>`
      }

    </article>
  `).join("");


  noResults.style.display =
    filtered.length ? "none" : "block";


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
document.addEventListener("pointerdown", function(event) {

  const flowers = ["🌸", "🌺", "🌼", "🌷", "💮"];
  const count = 10;

  for (let i = 0; i < count; i++) {

    const flower = document.createElement("span");

    flower.textContent =
      flowers[Math.floor(Math.random() * flowers.length)];
  

    flower.style.position = "fixed";
    flower.style.left = event.clientX + "px";
    flower.style.top = event.clientY + "px";
    flower.style.pointerEvents = "none";
    flower.style.fontSize = (14 + Math.random() * 12) + "px";
    flower.style.zIndex = "9999";

    document.body.appendChild(flower);

    const angle = Math.random() * Math.PI * 2;
    const distance = 40 + Math.random() * 80;

    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    flower.animate(
      [
        {
          transform: "translate(-50%, -50%) scale(0.3)",
          opacity: 1
        },
        {
          transform:
            `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1)`,
          opacity: 0
        }
      ],
      {
        duration: 1800,
        easing: "cubic-bezier(.2,.8,.3,1)"
      }
    );

    setTimeout(() => {
      flower.remove();
    }, 1800);

  }

});


renderFeatured();
renderApps();

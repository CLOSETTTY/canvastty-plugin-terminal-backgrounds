document.addEventListener("DOMContentLoaded", async () => {
  let scenes = [];
  try {
    const res = await fetch("scenes.json");
    scenes = await res.json();
  } catch (err) {
    console.error("Failed to load scenes.json", err);
  }

  const galleryGrid = document.getElementById("gallery-grid");
  const searchInput = document.getElementById("search-input");
  const tabButtons = document.querySelectorAll(".tab-btn");
  const countBadge = document.getElementById("count-badge");
  const toast = document.getElementById("toast");

  let currentCategory = "all";
  let searchQuery = "";

  function renderGallery() {
    galleryGrid.innerHTML = "";

    const filtered = scenes.filter((scene) => {
      const matchCat = currentCategory === "all" || scene.cat === currentCategory;
      const q = searchQuery.toLowerCase();
      const matchSearch =
        !q ||
        scene.name.toLowerCase().includes(q) ||
        scene.nameRu.toLowerCase().includes(q) ||
        scene.desc.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });

    countBadge.textContent = `${filtered.length} фонов`;

    if (filtered.length === 0) {
      galleryGrid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary);">Ничего не найдено</div>`;
      return;
    }

    filtered.forEach((scene) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <div class="card-media">
          <img src="assets/previews/${scene.id}.webp" loading="lazy" alt="${scene.nameRu}" onerror="this.src='assets/posters/${scene.id}.webp'">
        </div>
        <div class="card-body">
          <div class="card-title-row">
            <span class="card-title">${scene.nameRu}</span>
            <span class="card-tag">${scene.cat}</span>
          </div>
          <div class="card-desc">${scene.desc}</div>
          <div class="card-footer">
            <button class="btn-apply" data-id="${scene.id}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              Скопировать код для CanvasTTY
            </button>
          </div>
        </div>
      `;

      const btn = card.querySelector(".btn-apply");
      btn.addEventListener("click", () => {
        const promptText = `Добавь анимированный фон "${scene.nameRu}" (ID: "${scene.id}") из плагина Fine Dots Backgrounds Pack в CanvasTTY. Файлы уже находятся в плагине: pieces/${scene.id}.js и data/${scene.id}.json. Зарегистрируй фон в каталоге терминалов!`;
        navigator.clipboard.writeText(promptText).then(() => {
          showToast(`Задание для «${scene.nameRu}» скопировано!`);
        });
      });

      galleryGrid.appendChild(card);
    });
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2800);
  }

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value.trim();
    renderGallery();
  });

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.getAttribute("data-cat");
      renderGallery();
    });
  });

  renderGallery();
});

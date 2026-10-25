<p align="center">
  <a href="README.md"><strong>English</strong></a> ·
  <a href="README.ru.md">Русский</a>
</p>

# ✨ Fine Dots Backgrounds Pack for CanvasTTY

<p align="center">
  <strong>Curated collection of 20 animated Braille 2×4 subpixel matrix backgrounds for CanvasTTY terminals.</strong><br>
  🎮 20 Live Scenes · ⚡ Subpixel Matrix · 🪟 Windows · 🐧 Linux · 🍎 macOS<br>
  <a href="#-gallery--live-previews">View Gallery</a> ·
  <a href="#-installation">Installation</a> ·
  <a href="LICENSE">MIT License</a>
</p>

A high-performance animated backgrounds collection designed specifically for [CanvasTTY](https://github.com/howdeploy/CanvasTTY). All scenes are rendered in **Fine Dots** (Braille $2\times 4$ subpixel matrix, `0x2800..0x28FF`) providing smooth subpixel geometry and zero distortion without stretching or cropping.

Strictly curated: 100% wholesome, clean, copyright-free animations (zero third-party movie clips or sensitive content).

---

## 🎨 Gallery & Live Previews

### ⚡ Cyberpunk & Neon

| Preview | Scene | Description |
| :---: | :--- | :--- |
| <img src="assets/previews/basketball-neon.webp" width="220" alt="Neon Dunk"> | **Neon Dunk**<br>`basketball-neon` | Dynamic basketball slam dunk under violet neon lighting |
| <img src="assets/previews/discipline-routine.webp" width="220" alt="Discipline Routine"> | **Discipline Routine**<br>`discipline-routine` | Motivational stylized workout routine in neon cyber aesthetic |
| <img src="assets/previews/neon-cityscape.webp" width="220" alt="Anime Greeting"> | **Anime Greeting**<br>`neon-cityscape` | Friendly cyber anime silhouette waving from a neon window |
| <img src="assets/previews/neon-highway.webp" width="220" alt="Cat on the Hood"> | **Cat on the Hood**<br>`neon-highway` | Calm ginger cat resting on a car hood under neon city light |

### 🌌 Space & Futurism

| Preview | Scene | Description |
| :---: | :--- | :--- |
| <img src="assets/previews/moon-astronaut.webp" width="220" alt="Moon Astronaut"> | **Moon Astronaut**<br>`moon-astronaut` | Atmospheric astronaut resting on the Moon with Earth in the background |
| <img src="assets/previews/orchestrator-goal.webp" width="220" alt="Tech HUD Loop"> | **Tech HUD Loop**<br>`orchestrator-goal` | Futuristic high-tech HUD scanning interface loop |

### 🕹️ Retro & Pixel Art

| Preview | Scene | Description |
| :---: | :--- | :--- |
| <img src="assets/previews/sneaky-golem.webp" width="220" alt="Voxel Golem"> | **Voxel Golem**<br>`sneaky-golem` | Charming walking voxel golem character |
| <img src="assets/previews/pixel-animation.webp" width="220" alt="Reaction Loop"> | **Reaction Loop**<br>`pixel-animation` | Iconic retro pixel reaction meme animation |
| <img src="assets/previews/aesthetic-drive.webp" width="220" alt="Fireplace Cat"> | **Fireplace Cat**<br>`aesthetic-drive` | Cozy cat warming up near a gentle fireplace |

### 🐱 Memes & Cute Cats

| Preview | Scene | Description |
| :---: | :--- | :--- |
| <img src="assets/previews/kotiki-tantsuyut.webp" width="220" alt="Dancing Cats DJ"> | **Dancing Cats DJ**<br>`kotiki-tantsuyut` | Energetic rhythmic dancing cats loop |
| <img src="assets/previews/komaru-cat.webp" width="220" alt="Komaru Cat"> | **Komaru Cat**<br>`komaru-cat` | The legendary Komaru cat rendered in Braille matrix |
| <img src="assets/previews/cat-stare.webp" width="220" alt="Lock-In Cat"> | **Lock-In Cat**<br>`cat-stare` | Focused meme cat locked in for late-night coding |
| <img src="assets/previews/bananchiki-komaru.webp" width="220" alt="Banana Komaru"> | **Banana Komaru**<br>`bananchiki-komaru` | Adorable Komaru cat in a banana costume |
| <img src="assets/previews/eshkere-cats.webp" width="220" alt="Dancing Cats Choir"> | **Dancing Cats Choir**<br>`eshkere-cats` | Charming meme cats dancing in a friendly circle |
| <img src="assets/previews/okak-cat.webp" width="220" alt="Hooded Cat"> | **Hooded Cat**<br>`okak-cat` | Cozy hooded cat observing the terminal |
| <img src="assets/previews/babrikosk-bear.webp" width="220" alt="Dancing Bear"> | **Dancing Bear**<br>`babrikosk-bear` | Upbeat cheerful dancing plush bear animation |
| <img src="assets/previews/skeleton-dance.webp" width="220" alt="Skeleton Dance"> | **Skeleton Dance**<br>`skeleton-dance` | Classic rhythmic retro dancing skeletons loop |
| <img src="assets/previews/interesno-meme.webp" width="220" alt="Curious Cat"> | **Curious Cat**<br>`interesno-meme` | Thoughtful curious meme cat reflecting on terminal logs |
| <img src="assets/previews/anime-girl-rain.webp" width="220" alt="Cozy Living Room Kittens"> | **Cozy Living Room Kittens**<br>`anime-girl-rain` | Cozy evening room scene with playful kittens |
| <img src="assets/previews/city-night-walk.webp" width="220" alt="Fisheye Cat"> | **Fisheye Cat**<br>`city-night-walk` | Playful close-up cat staring into a fisheye lens |

---

## 🚀 Installation

### 1. In CanvasTTY (One Click)
1. Open **CanvasTTY** → **Settings** (`⚙`) → **Plugins**.
2. Search for `terminal-backgrounds` or `fine-dots`.
3. Click **Install**.
4. Open the plugin card on the canvas to browse, preview, and apply any background directly to your terminal windows!

### 2. Manual Clone
```bash
git clone https://github.com/CLOSETTTY/canvastty-plugin-terminal-backgrounds.git
```

---

## 🛠️ Technical Details

| Detail | Specification |
| :--- | :--- |
| **Rendering Engine** | Fine Dots (Braille $2\times 4$ subpixel matrix, 256 masks) |
| **Color Depth** | 256-color K-Means palette |
| **Ground Anchor** | `#07090f` (matches CanvasTTY dark terminal background) |
| **Aspect Fit** | Natural geometric contain mode (no stretching, round dots) |
| **Storage Format** | Compact RLE-compressed frame data (`data/*.json`) + JS module (`pieces/*.js`) |

---

## 📜 License

Released under the [MIT License](LICENSE) © 2026 CLOSETTTY.

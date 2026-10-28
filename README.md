# ABeauty & Fashion (ABnF) — E-Commerce Web Experience

> A fully responsive, modern multi-page beauty and fashion e-commerce storefront created in **100% Pure HTML5 and CSS3** (no JavaScript). Designed with pixel-perfect fidelity from 34 wireframe & UI design mockups, supporting fluid container widths up to 1400px, dual language localization (English & Bengali), and complete checkout flows (including bKash, Nagad, and Cash on Delivery).

---

## 🌟 Live Demo & Portfolio Preview

- **Live URL**: `https://<your-github-username>.github.io/<your-repo-name>/`
- **Primary Pages**:
  - [🏠 Home (English)](index.html)
  - [🇧🇩 Home (বাংলা / Bengali)](index-bn.html)
  - [🛍️ Shop & Category Catalog](shop.html)
  - [✨ Product Details (Rose Dew Serum)](product.html)
  - [👜 Shopping Bag / Cart](cart.html)
  - [💳 Secure Checkout (Multi-step)](checkout.html)
  - [📱 Bangla Checkout (COD / bKash / Nagad)](checkout-bn.html)
  - [👤 My Account Dashboard](account.html)
  - [🌿 About Us & Brand Philosophy](about.html)
  - [💬 Contact Us & Quick FAQs](contact.html)
  - [🔍 Search Results & Filtering](search.html)
  - [📄 Privacy Policy](privacy.html)
  - [📜 Terms & Conditions](terms.html)
  - [🧖 404 Not Found Page](404.html)
  - [🪟 Interactive Modals & Popups Showcase](modals.html)

---

## 🎯 Project Highlights & Requirements Followed

| Requirement | Implementation Details |
| :--- | :--- |
| **Pure HTML & CSS Only** | Zero JavaScript used. All interactions (drawer menus, modals, accordions, tabs, form validations, cookie consent) are powered by native HTML5 semantics, CSS `:target`, checkbox hacks, and `<details>/<summary>`. |
| **Max Width Constraint** | Strictly capped to `1400px` (`--container-max-width: 1400px;`) with balanced padding for fluid responsiveness. |
| **Typography System** | `--font-body: "Inter", "Arial", sans-serif;`<br>`--font-display: "Inter", "Arial", sans-serif;`<br>`--font-accent: "Cormorant Garamond", "Georgia", serif;`<br>Plus `"Hind Siliguri"` for Bengali typography. |
| **Pixel-Perfect Fidelity** | Recreated the exact spacing, pastel card shades, radius (`8px` to `28px`), typography scales, badge treatments, and responsive layouts across Desktop, Tablet, and Mobile. |
| **No Generated Photos** | Used the provided brand `logo.png` and minimalist vector outlines (cosmetic dropper bottles, facial steamers, model silhouettes, and crescent moon) faithful to the design mockup line art. |

---

## 🎨 Design System & Color Tokens

- **Brand Dark (Aubergine / Espresso)**: `#180D14` & `#22121D`
- **Accent Rose / Magenta**: `#C2305C` (Hover: `#A5224A`)
- **Badge Coral / Sale**: `#E11D48`
- **Soft Blush Backgrounds**: `#FCF1F3` & `#FAF8F8`
- **Pastel Card Hues**:
  - Soft Pink: `#FCEAEB`
  - Warm Peach / Butter: `#F8EED9` & `#FFF3D6`
  - Gentle Sage: `#E7F0E8`
  - Soft Lilac / Lavender: `#EFEBF6` & `#E4DEF3`
  - Baby Blue: `#E3EDF6`

---

## 🚀 Step-by-Step Guide: Publishing to GitHub & GitHub Pages

Follow these simple steps in your terminal to publish this project to your GitHub profile and showcase it on your portfolio:

### Step 1: Initialize Git and Commit
```bash
# In the project directory:
git init
git add .
git commit -m "feat: complete ABeauty & Fashion responsive website in pure HTML & CSS"
```

### Step 2: Create a New Repository on GitHub
1. Open your browser and go to [github.com/new](https://github.com/new).
2. Set the repository name (for example: `ABnF-ecommerce` or `abeauty-fashion`).
3. Set visibility to **Public** (required for free GitHub Pages).
4. Leave "Add a README file" unchecked (we already created one).
5. Click **Create repository**.

### Step 3: Link and Push to GitHub
Copy the commands shown on GitHub (replace `<your-username>` and `<repo-name>` with yours):
```bash
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Step 4: Enable GitHub Pages for Free Live Hosting
1. On your GitHub repository page, click **Settings** (tab at the top).
2. In the left navigation, click **Pages** (under "Code and automation").
3. Under **Build and deployment > Source**, select **Deploy from a branch**.
4. Under **Branch**, select `main` and folder `/(root)`, then click **Save**.
5. Within 1–2 minutes, GitHub will generate your live site URL:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```
6. Add this link into the repository description header and in this `README.md` under **Live Demo**!

---

## 📁 Repository Structure

```text
ABnF/
├── assets/
│   ├── css/
│   │   └── style.css                 # Master responsive stylesheet (tokens, reset, components, layout)
│   └── images/
│       ├── logo.png                  # Official brand logo
│       ├── product-bottle.svg        # Scalable outline bottle artwork
│       ├── product-steamer.svg       # Scalable outline facial steamer artwork
│       ├── hero-model.svg            # Scalable outline campaign model silhouette
│       ├── icon-moon.svg             # Scalable outline night rituals crescent moon
│       └── article-placeholder.svg   # Scalable outline article graphic
├── Design/                           # 34 original design mockup PNGs + logo.png
├── index.html                        # Desktop & Mobile Home Page
├── index-bn.html                     # Bangla (বাংলা) Home Page
├── shop.html                         # Shop / Category Catalog with filter sidebar & pagination
├── product.html                      # Single Product page (Rose Dew Serum) with routine bundle & reviews
├── cart.html                         # Cart page with shipping progress bar & upsells
├── checkout.html                     # Multi-step checkout with credit card & express payments
├── checkout-bn.html                  # Bangla mobile checkout with bKash, Nagad & COD
├── account.html                      # My Account dashboard with orders & wishlist
├── about.html                        # About us, brand story, promises & journal links
├── contact.html                      # Contact form, direct channels & FAQ accordion
├── search.html                       # Search results with interactive dropdown & filters
├── privacy.html                      # Privacy policy with sticky table of contents & print
├── terms.html                        # Terms & conditions with summary alert & numbered clauses
├── 404.html                          # 404 Not Found error page with customer recommendations
├── modals.html                       # Standalone showcase of all 7 modal and popup states
├── .gitignore                        # Git exclusion rules
└── README.md                         # Portfolio documentation and deployment guide
```

---

## 💡 Pure CSS Interactions Implemented

- **Mobile Navigation Drawer**: Toggleable slide-out menu via hidden checkbox and CSS transitions.
- **Accordion Menus**: Native `<details>` and `<summary>` elements with animated rotating chevron indicators.
- **Overlay Modals**: Pure CSS `:target` selectors allow modals (Quick View, Added to Bag, Newsletter confirmation, Contact message sent) to open and close seamlessly without any JavaScript.
- **Custom Form Controls**: Custom styled checkboxes and radio buttons with smooth transition effects.
- **Dynamic Progress Bar**: Pure CSS progress bar showing progress toward free shipping threshold.
- **Language Switcher**: Seamless 1-click toggling between English (`index.html`) and Bengali (`index-bn.html`).

---

## 📄 License
This project is created as an educational and portfolio demonstration. All rights reserved.

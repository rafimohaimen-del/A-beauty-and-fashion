const fs = require('fs');

let css = fs.readFileSync('assets/css/style.css', 'utf8');

const mobileBnCss = `
/* ==========================================================================
   Mobile Responsive Styles for index-bn.html (33-Bangla-Mobile-Home.png)
   ========================================================================== */

@media (max-width: 768px) {
  /* 1. Top Announcement Bar */
  body.lang-bn .announcement-bar,
  .index-bn-page .announcement-bar {
    font-size: 0.75rem !important;
    padding: 8px 12px !important;
    text-align: center !important;
    background-color: #2A1220 !important;
    color: #FFFFFF !important;
  }

  body.lang-bn .announcement-sep-desktop,
  .index-bn-page .announcement-sep-desktop,
  body.lang-bn .announcement-helpline-desktop,
  .index-bn-page .announcement-helpline-desktop {
    display: none !important;
  }

  body.lang-bn .announcement-sep,
  .index-bn-page .announcement-sep {
    margin: 0 8px !important;
  }

  /* 2. Mobile Header & Subheader Search */
  body.lang-bn .site-header .container,
  .index-bn-page .site-header .container {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  body.lang-bn .header-actions .search-form,
  .index-bn-page .header-actions .search-form {
    display: none !important;
  }

  body.lang-bn .badge-desktop,
  .index-bn-page .badge-desktop {
    display: none !important;
  }

  body.lang-bn .badge-mobile,
  .index-bn-page .badge-mobile {
    display: inline !important;
  }

  body.lang-bn .badge-count,
  .index-bn-page .badge-count {
    background-color: #C2305C !important;
    color: #FFFFFF !important;
  }

  body.lang-bn .mobile-bn-subheader,
  .index-bn-page .mobile-bn-subheader {
    display: block !important;
    padding: 8px 16px 12px 16px !important;
    background-color: #FFFFFF !important;
  }

  body.lang-bn .mobile-bn-subheader .mobile-search-form,
  .index-bn-page .mobile-bn-subheader .mobile-search-form {
    display: flex !important;
    align-items: center !important;
    background-color: #F5F5F7 !important;
    border-radius: 9999px !important;
    padding: 0 16px !important;
    height: 44px !important;
    box-sizing: border-box !important;
    width: 100% !important;
  }

  body.lang-bn .mobile-bn-subheader .mobile-search-form .search-icon,
  .index-bn-page .mobile-bn-subheader .mobile-search-form .search-icon {
    display: flex !important;
    align-items: center !important;
    color: #8E8E93 !important;
    margin-right: 10px !important;
  }

  body.lang-bn .mobile-bn-subheader .mobile-search-input,
  .index-bn-page .mobile-bn-subheader .mobile-search-input {
    flex: 1 !important;
    border: none !important;
    background: transparent !important;
    font-family: var(--font-bn) !important;
    font-size: 0.92rem !important;
    color: #1F1219 !important;
    outline: none !important;
  }

  /* 3. Hero Section (Blush #FCEEF1) */
  body.lang-bn .hero-section,
  .index-bn-page .hero-section {
    background-color: #FCEEF1 !important;
    padding: 24px 0 32px 0 !important;
  }

  body.lang-bn .hero-section .container,
  .index-bn-page .hero-section .container {
    padding-left: 16px !important;
    padding-right: 16px !important;
  }

  body.lang-bn .hero-grid,
  .index-bn-page .hero-grid {
    display: flex !important;
    flex-direction: column !important;
    gap: 24px !important;
  }

  body.lang-bn .hero-content .eyebrow,
  .index-bn-page .hero-content .eyebrow {
    color: #C2305C !important;
    font-size: 0.92rem !important;
    font-weight: 700 !important;
    margin-bottom: 10px !important;
    letter-spacing: normal !important;
    display: block !important;
  }

  body.lang-bn .hero-title,
  .index-bn-page .hero-title {
    font-family: var(--font-bn) !important;
    font-size: 1.85rem !important;
    line-height: 1.25 !important;
    font-weight: 700 !important;
    margin-bottom: 14px !important;
    color: #1F1219 !important;
  }

  body.lang-bn .hero-title span,
  .index-bn-page .hero-title span {
    color: #C2305C !important;
  }

  body.lang-bn .hero-desc,
  .index-bn-page .hero-desc {
    font-size: 0.92rem !important;
    line-height: 1.55 !important;
    color: #5A5255 !important;
    margin-bottom: 22px !important;
  }

  body.lang-bn .hero-buttons,
  .index-bn-page .hero-buttons {
    margin-bottom: 0 !important;
    display: flex !important;
    flex-direction: column !important;
  }

  body.lang-bn .hero-buttons .btn-primary,
  .index-bn-page .hero-buttons .btn-primary {
    width: 100% !important;
    height: 50px !important;
    border-radius: 9999px !important;
    background-color: #1F1219 !important;
    color: #FFFFFF !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    font-size: 1rem !important;
    font-weight: 700 !important;
    text-decoration: none !important;
    box-sizing: border-box !important;
  }

  body.lang-bn .hero-buttons .btn-outline,
  .index-bn-page .hero-buttons .btn-outline,
  body.lang-bn .hero-trust-bar,
  .index-bn-page .hero-trust-bar,
  body.lang-bn .hero-glow-badge,
  .index-bn-page .hero-glow-badge,
  body.lang-bn .hero-inset-texture,
  .index-bn-page .hero-inset-texture,
  body.lang-bn .hero-product-toast,
  .index-bn-page .hero-product-toast {
    display: none !important;
  }

  body.lang-bn .hero-visual,
  .index-bn-page .hero-visual {
    margin-top: 0 !important;
    width: 100% !important;
    position: relative !important;
    display: block !important;
  }

  body.lang-bn .hero-main-card,
  .index-bn-page .hero-main-card {
    background-color: #F6D7E0 !important;
    border-radius: 24px !important;
    height: 340px !important;
    width: 100% !important;
    position: relative !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    overflow: hidden !important;
  }

  body.lang-bn .hero-label-caption-desktop,
  .index-bn-page .hero-label-caption-desktop {
    display: none !important;
  }

  body.lang-bn .hero-label-caption-mobile,
  .index-bn-page .hero-label-caption-mobile {
    display: block !important;
    position: absolute !important;
    bottom: 16px !important;
    left: 20px !important;
    font-size: 0.75rem !important;
    color: #5A454D !important;
    font-weight: 500 !important;
    background: transparent !important;
    padding: 0 !important;
  }

  /* 4. Flash Sale Card (Magenta #C8325F) */
  body.lang-bn .flash-sale-bn-bar,
  .index-bn-page .flash-sale-bn-bar {
    background-color: #C8325F !important;
    border-radius: 24px !important;
    padding: 20px !important;
    margin: 0 !important;
    width: 100% !important;
    display: flex !important;
    flex-direction: column !important;
    gap: 18px !important;
    box-sizing: border-box !important;
    min-height: auto !important;
  }

  body.lang-bn .desktop-flash-title,
  .index-bn-page .desktop-flash-title,
  body.lang-bn .flash-sale-subtitle,
  .index-bn-page .flash-sale-subtitle {
    display: none !important;
  }

  body.lang-bn .mobile-flash-title,
  .index-bn-page .mobile-flash-title {
    display: inline !important;
    font-size: 1.4rem !important;
    font-weight: 700 !important;
    color: #FFFFFF !important;
  }

  body.lang-bn .mobile-flash-badge,
  .index-bn-page .mobile-flash-badge {
    display: inline-block !important;
    font-size: 0.88rem !important;
    font-weight: 700 !important;
    color: #FFFFFF !important;
  }

  body.lang-bn .flash-sale-title,
  .index-bn-page .flash-sale-title {
    display: flex !important;
    align-items: center !important;
    justify-content: space-between !important;
    width: 100% !important;
    margin: 0 !important;
  }

  body.lang-bn .flash-sale-bn-bar .countdown-box,
  .index-bn-page .flash-sale-bn-bar .countdown-box {
    display: flex !important;
    gap: 8px !important;
    margin: 0 !important;
  }

  body.lang-bn .flash-sale-bn-bar .countdown-unit,
  .index-bn-page .flash-sale-bn-bar .countdown-unit {
    background-color: #FFFFFF !important;
    color: #1F1219 !important;
    border-radius: 12px !important;
    width: 52px !important;
    height: 52px !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    justify-content: center !important;
    font-size: 1.15rem !important;
    font-weight: 800 !important;
    line-height: 1 !important;
  }

  body.lang-bn .flash-sale-bn-bar .countdown-unit small,
  .index-bn-page .flash-sale-bn-bar .countdown-unit small {
    font-size: 0.65rem !important;
    font-weight: 600 !important;
    color: #6E6669 !important;
    margin-top: 3px !important;
  }

  body.lang-bn .flash-sale-action-btn,
  .index-bn-page .flash-sale-action-btn {
    background-color: #FFFFFF !important;
    color: #1F1219 !important;
    border-radius: 9999px !important;
    padding: 10px 24px !important;
    font-size: 0.95rem !important;
    font-weight: 700 !important;
    text-decoration: none !important;
    align-self: flex-end !important;
  }

  body.lang-bn .desktop-btn-text,
  .index-bn-page .desktop-btn-text {
    display: none !important;
  }

  body.lang-bn .mobile-btn-text,
  .index-bn-page .mobile-btn-text {
    display: inline !important;
  }

  /* 5. Category Section (3-Column Grid) */
  body.lang-bn .category-section,
  .index-bn-page .category-section {
    padding: 24px 0 !important;
  }

  body.lang-bn .desktop-cat-title,
  .index-bn-page .desktop-cat-title,
  body.lang-bn .desktop-cat-link,
  .index-bn-page .desktop-cat-link {
    display: none !important;
  }

  body.lang-bn .mobile-cat-title,
  .index-bn-page .mobile-cat-title {
    display: inline !important;
    font-size: 1.45rem !important;
    font-weight: 700 !important;
    color: #1F1219 !important;
  }

  body.lang-bn .category-grid,
  .index-bn-page .category-grid {
    display: grid !important;
    grid-template-columns: repeat(3, 1fr) !important;
    gap: 22px 12px !important;
    padding: 16px 0 0 0 !important;
  }

  body.lang-bn .category-card,
  .index-bn-page .category-card {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    text-decoration: none !important;
  }

  body.lang-bn .category-circle,
  .index-bn-page .category-circle {
    width: 90px !important;
    height: 90px !important;
    border-radius: 50% !important;
    margin: 0 auto 10px auto !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
  }

  body.lang-bn .category-circle img,
  .index-bn-page .category-circle img {
    width: 38px !important;
    height: auto !important;
  }

  body.lang-bn .category-name,
  .index-bn-page .category-name {
    font-size: 0.85rem !important;
    font-weight: 700 !important;
    color: #1F1219 !important;
    text-align: center !important;
  }

  /* 6. Bestsellers Section (2-Column Grid) */
  body.lang-bn .products-section,
  .index-bn-page .products-section {
    padding: 24px 0 !important;
  }

  body.lang-bn .desktop-bs-title,
  .index-bn-page .desktop-bs-title {
    display: none !important;
  }

  body.lang-bn .mobile-bs-title,
  .index-bn-page .mobile-bs-title {
    display: inline !important;
    font-size: 1.45rem !important;
    font-weight: 700 !important;
    color: #1F1219 !important;
  }

  body.lang-bn .product-grid,
  .index-bn-page .product-grid {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 18px 12px !important;
    padding-top: 16px !important;
  }

  body.lang-bn .product-card-visual,
  .index-bn-page .product-card-visual {
    border-radius: 16px !important;
    aspect-ratio: 1 / 1.15 !important;
    position: relative !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    overflow: hidden !important;
  }

  body.lang-bn .product-card-visual .wishlist-btn,
  .index-bn-page .product-card-visual .wishlist-btn,
  body.lang-bn .product-card-visual .product-photo-label,
  .index-bn-page .product-card-visual .product-photo-label,
  body.lang-bn .product-category-name,
  .index-bn-page .product-category-name {
    display: none !important;
  }

  body.lang-bn .product-card-visual .quick-add-btn,
  .index-bn-page .product-card-visual .quick-add-btn {
    position: absolute !important;
    bottom: 10px !important;
    right: 10px !important;
    width: 36px !important;
    height: 36px !important;
    border-radius: 50% !important;
    background-color: #1F1219 !important;
    color: #FFFFFF !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    font-size: 1.4rem !important;
    font-weight: 400 !important;
    line-height: 1 !important;
    text-decoration: none !important;
    box-shadow: 0 2px 6px rgba(0,0,0,0.18) !important;
  }

  body.lang-bn .product-card-visual img,
  .index-bn-page .product-card-visual img {
    width: 58px !important;
    height: auto !important;
  }

  body.lang-bn .product-title,
  .index-bn-page .product-title {
    font-size: 0.88rem !important;
    font-weight: 700 !important;
    color: #1F1219 !important;
    line-height: 1.3 !important;
    margin: 8px 0 4px 0 !important;
  }

  body.lang-bn .product-price,
  .index-bn-page .product-price {
    font-size: 0.95rem !important;
    font-weight: 800 !important;
    color: #1F1219 !important;
  }

  body.lang-bn .product-meta-row span[style*="#166534"],
  .index-bn-page .product-meta-row span[style*="#166534"] {
    display: none !important;
  }

  /* 7. Mobile Wallet Promo Card */
  body.lang-bn .mobile-payment-banner,
  .index-bn-page .mobile-payment-banner {
    display: none !important;
  }

  body.lang-bn .mobile-wallet-card,
  .index-bn-page .mobile-wallet-card {
    display: block !important;
    background-color: #FCE8ED !important;
    border-radius: 20px !important;
    padding: 22px 20px !important;
    margin: 16px 0 !important;
    box-sizing: border-box !important;
  }

  body.lang-bn .mobile-wallet-eyebrow,
  .index-bn-page .mobile-wallet-eyebrow {
    color: #C2305C !important;
    font-size: 0.8rem !important;
    font-weight: 700 !important;
    display: block !important;
    margin-bottom: 8px !important;
  }

  body.lang-bn .mobile-wallet-title,
  .index-bn-page .mobile-wallet-title {
    font-size: 1.25rem !important;
    font-weight: 700 !important;
    color: #1F1219 !important;
    line-height: 1.3 !important;
    margin: 0 0 8px 0 !important;
  }

  body.lang-bn .mobile-wallet-subtitle,
  .index-bn-page .mobile-wallet-subtitle {
    font-size: 0.78rem !important;
    color: #7A6E73 !important;
    margin: 0 !important;
  }

  /* 8. Beauty Blog Section */
  body.lang-bn .journal-section,
  .index-bn-page .journal-section {
    background-color: #FDF2F4 !important;
    padding: 32px 0 28px 0 !important;
  }

  body.lang-bn .desktop-journal-title,
  .index-bn-page .desktop-journal-title,
  body.lang-bn .desktop-journal-link,
  .index-bn-page .desktop-journal-link,
  body.lang-bn .journal-card.journal-card-3,
  .index-bn-page .journal-card.journal-card-3,
  body.lang-bn .journal-card:nth-child(n+3),
  .index-bn-page .journal-card:nth-child(n+3) {
    display: none !important;
  }

  body.lang-bn .mobile-journal-title,
  .index-bn-page .mobile-journal-title {
    display: inline !important;
    font-size: 1.45rem !important;
    font-weight: 700 !important;
    color: #1F1219 !important;
  }

  body.lang-bn .journal-grid,
  .index-bn-page .journal-grid {
    display: flex !important;
    gap: 14px !important;
    overflow-x: auto !important;
    padding-bottom: 8px !important;
    scroll-snap-type: x mandatory !important;
    -webkit-overflow-scrolling: touch !important;
  }

  body.lang-bn .journal-card,
  .index-bn-page .journal-card {
    flex: 0 0 78% !important;
    min-width: 250px !important;
    scroll-snap-align: start !important;
    background: transparent !important;
    border: none !important;
  }

  body.lang-bn .journal-visual,
  .index-bn-page .journal-visual {
    height: 180px !important;
    border-radius: 16px !important;
    margin-top: 0 !important;
  }

  body.lang-bn .journal-visual .product-photo-label,
  .index-bn-page .journal-visual .product-photo-label,
  body.lang-bn .journal-card-snippet,
  .index-bn-page .journal-card-snippet,
  body.lang-bn .journal-card-link,
  .index-bn-page .journal-card-link {
    display: none !important;
  }

  body.lang-bn .journal-eyebrow,
  .index-bn-page .journal-eyebrow {
    color: #C2305C !important;
    font-size: 0.78rem !important;
    font-weight: 700 !important;
    margin: 10px 0 4px 0 !important;
    display: block !important;
  }

  body.lang-bn .journal-card-title,
  .index-bn-page .journal-card-title {
    font-size: 0.95rem !important;
    font-weight: 700 !important;
    color: #1F1219 !important;
    line-height: 1.35 !important;
  }

  /* 9. Trust Signals (2x2 Grid) */
  body.lang-bn .trust-props-section,
  .index-bn-page .trust-props-section {
    padding: 28px 0 !important;
  }

  body.lang-bn .trust-props-grid,
  .index-bn-page .trust-props-grid {
    display: grid !important;
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 18px 12px !important;
  }

  body.lang-bn .trust-prop-card,
  .index-bn-page .trust-prop-card {
    display: flex !important;
    flex-direction: column !important;
    align-items: flex-start !important;
    gap: 4px !important;
    border: none !important;
    padding: 0 !important;
  }

  body.lang-bn .trust-prop-icon,
  .index-bn-page .trust-prop-icon {
    display: none !important;
  }

  body.lang-bn .trust-prop-content h4,
  .index-bn-page .trust-prop-content h4 {
    font-size: 0.92rem !important;
    font-weight: 700 !important;
    color: #1F1219 !important;
    margin: 0 !important;
  }

  body.lang-bn .trust-prop-content p,
  .index-bn-page .trust-prop-content p {
    font-size: 0.75rem !important;
    color: #7A6E73 !important;
    line-height: 1.35 !important;
    margin: 0 !important;
  }

  /* 10. Site Footer (Plum #2A1220) */
  body.lang-bn .site-footer,
  .index-bn-page .site-footer {
    background-color: #2A1220 !important;
    color: #FFFFFF !important;
    padding: 32px 0 24px 0 !important;
    text-align: center !important;
  }

  body.lang-bn .site-footer .footer-top,
  .index-bn-page .site-footer .footer-top {
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    gap: 16px !important;
  }

  body.lang-bn .site-footer .footer-brand,
  .index-bn-page .site-footer .footer-brand {
    margin-bottom: 0 !important;
  }

  body.lang-bn .site-footer .footer-logo-img,
  .index-bn-page .site-footer .footer-logo-img {
    display: none !important;
  }

  body.lang-bn .mobile-brand-title,
  .index-bn-page .mobile-brand-title {
    display: block !important;
    font-family: 'Bricolage Grotesque', var(--font-body) !important;
    font-size: 1.35rem !important;
    font-weight: 700 !important;
    color: #FFFFFF !important;
    margin-bottom: 0 !important;
  }

  body.lang-bn .mobile-brand-title em.accent-serif,
  .index-bn-page .mobile-brand-title em.accent-serif {
    font-style: italic !important;
    color: #FFFFFF !important;
  }

  body.lang-bn .site-footer .footer-tagline,
  .index-bn-page .site-footer .footer-tagline,
  body.lang-bn .site-footer .footer-social-links,
  .index-bn-page .site-footer .footer-social-links,
  body.lang-bn .site-footer .footer-col,
  .index-bn-page .site-footer .footer-col {
    display: none !important;
  }

  body.lang-bn .mobile-bn-footer-links,
  .index-bn-page .mobile-bn-footer-links {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 18px !important;
    margin: 6px 0 12px 0 !important;
  }

  body.lang-bn .mobile-bn-footer-links a,
  .index-bn-page .mobile-bn-footer-links a {
    color: rgba(255, 255, 255, 0.8) !important;
    font-size: 0.88rem !important;
    text-decoration: none !important;
    font-weight: 500 !important;
  }

  body.lang-bn .site-footer .footer-bottom,
  .index-bn-page .site-footer .footer-bottom {
    border-top: none !important;
    padding-top: 0 !important;
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    gap: 8px !important;
  }

  body.lang-bn .footer-copy-text,
  .index-bn-page .footer-copy-text,
  body.lang-bn .payment-methods-text,
  .index-bn-page .payment-methods-text {
    display: none !important;
  }

  body.lang-bn .mobile-bn-footer-payment,
  .index-bn-page .mobile-bn-footer-payment {
    display: block !important;
    font-size: 0.78rem !important;
    color: rgba(255, 255, 255, 0.65) !important;
    margin-bottom: 4px !important;
  }

  body.lang-bn .mobile-bn-footer-copy,
  .index-bn-page .mobile-bn-footer-copy {
    display: block !important;
    font-size: 0.78rem !important;
    color: rgba(255, 255, 255, 0.45) !important;
  }
}
`;

css = css.trimEnd() + '\n' + mobileBnCss;
// Enforce strict CRLF
css = css.replace(/\r?\n/g, '\r\n');

fs.writeFileSync('assets/css/style.css', css, 'utf8');
console.log('Successfully appended mobile Bangla CSS with CRLF!');

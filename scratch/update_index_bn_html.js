const fs = require('fs');

let html = fs.readFileSync('index-bn.html', 'utf8');

// 1. Ensure body class is index-bn-page lang-bn
html = html.replace('<body class="lang-bn">', '<body class="index-bn-page lang-bn">');

// 2. Announcement bar: add classes to desktop separators/helpline while preserving style="margin: 0 25px;"
html = html.replace(
  '<span class="announcement-sep" style="margin: 0 25px;">&#183;</span>\r\n    <span>হেল্পলাইন: +৮৮০ ১৭০০-০০০০০০</span>',
  '<span class="announcement-sep announcement-sep-desktop" style="margin: 0 25px;">&#183;</span>\r\n    <span class="announcement-helpline-desktop">হেল্পলাইন: +৮৮০ ১৭০০-০০০০০০</span>'
);
if (!html.includes('announcement-helpline-desktop')) {
  // Try LF variant in case
  html = html.replace(
    '<span class="announcement-sep" style="margin: 0 25px;">&#183;</span>\n    <span>হেল্পলাইন: +৮৮০ ১৭০০-০০০০০০</span>',
    '<span class="announcement-sep announcement-sep-desktop" style="margin: 0 25px;">&#183;</span>\r\n    <span class="announcement-helpline-desktop">হেল্পলাইন: +৮৮০ ১৭০০-০০০০০০</span>'
  );
}

// 3. Add mobile subheader with search input (placeholder="সিরাম, লিপস্টিক খুঁজুন...") right after header-inner
const headerInnerClose = '      </div>\r\n    </div>\r\n  </header>';
const headerInnerCloseLF = '      </div>\n    </div>\n  </header>';
const mobileSubheaderSnippet = `      </div>
      <!-- Mobile Subheader: Search Bar (matches 33-Bangla-Mobile-Home.png) -->
      <div class="mobile-subheader mobile-bn-subheader">
        <form action="search.html" method="get" class="mobile-search-form">
          <span class="search-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
          <input type="text" name="q" class="mobile-search-input" placeholder="সিরাম, লিপস্টিক খুঁজুন...">
        </form>
      </div>
    </div>
  </header>`;

if (html.includes(headerInnerClose)) {
  html = html.replace(headerInnerClose, mobileSubheaderSnippet.replace(/\n/g, '\r\n'));
} else if (html.includes(headerInnerCloseLF)) {
  html = html.replace(headerInnerCloseLF, mobileSubheaderSnippet.replace(/\n/g, '\r\n'));
}

// 4. Update Cart badge in header to support mobile Bangla numeral "২"
html = html.replace(
  '<span class="badge-count">2</span>',
  '<span class="badge-count"><span class="badge-desktop">2</span><span class="badge-mobile" style="display: none;">২</span></span>'
);

// 5. Hero Model Card: add mobile caption "জামদানি শাড়িতে মডেল — ঈদ লুক"
html = html.replace(
  `<span class="hero-label-caption"
              style="left: 28px; right: auto; text-align: left; transform: translateX(-1rem);">ক্যাম্পেইন ছবি &mdash; জামদানি শাড়িতে মডেল, ঈদ গ্লো লুক</span>`,
  `<span class="hero-label-caption hero-label-caption-desktop"
              style="left: 28px; right: auto; text-align: left; transform: translateX(-1rem);">ক্যাম্পেইন ছবি &mdash; জামদানি শাড়িতে মডেল, ঈদ গ্লো লুক</span>
            <span class="hero-label-caption hero-label-caption-mobile" style="display: none;">জামদানি শাড়িতে মডেল — ঈদ লুক</span>`
);

// 6. Flash Sale bar: add classes for mobile top row and button
html = html.replace(
  `<h2 class="flash-sale-title">ফ্ল্যাশ সেল &mdash; ৮০% পর্যন্ত ছাড়</h2>`,
  `<h2 class="flash-sale-title">
          <span class="desktop-flash-title">ফ্ল্যাশ সেল &mdash; ৮০% পর্যন্ত ছাড়</span>
          <span class="mobile-flash-title" style="display: none;">ফ্ল্যাশ সেল</span>
        </h2>
        <span class="mobile-flash-badge" style="display: none;">৪০% পর্যন্ত ছাড়</span>`
);
html = html.replace(
  `<a href="shop.html" class="btn" style="background: #FFF; color: var(--color-dark); font-weight: 700;">অফার দেখুন &rarr;</a>`,
  `<a href="shop.html" class="btn flash-sale-action-btn" style="background: #FFF; color: var(--color-dark); font-weight: 700;">
        <span class="desktop-btn-text">অফার দেখুন &rarr;</span>
        <span class="mobile-btn-text" style="display: none;">দেখুন</span>
      </a>`
);

// 7. Categories: add mobile title class
html = html.replace(
  `<h2 class="section-title">ক্যাটাগরি অনুযায়ী <span style="color: var(--color-accent);">কেনাকাটা</span></h2>`,
  `<h2 class="section-title">
          <span class="desktop-cat-title">ক্যাটাগরি অনুযায়ী <span style="color: var(--color-accent);">কেনাকাটা</span></span>
          <span class="mobile-cat-title" style="display: none;">ক্যাটাগরি</span>
        </h2>`
);

// 8. Bestsellers: add mobile title class
html = html.replace(
  `<h2 class="section-title">এই সপ্তাহের <span style="color: var(--color-accent);">বেস্টসেলার</span></h2>`,
  `<h2 class="section-title">
          <span class="desktop-bs-title">এই সপ্তাহের <span style="color: var(--color-accent);">বেস্টসেলার</span></span>
          <span class="mobile-bs-title" style="display: none;">বেস্টসেলার</span>
        </h2>`
);

// 9. Mobile Wallet Promo Card: add mobile-specific card container inside mobile-payment-section
const mobilePaymentBannerTarget = `<img src="assets/images/32-Bangla-Desktop-Home.svg" data-reference="Design/32-Bangla-Desktop-Home.svg" alt="মোবাইল ওয়ালেট অফার বিকাশ ও নগদ ক্যাশব্যাক এবং বিউটি টুলস — ২৫% পর্যন্ত ছাড়" class="mobile-payment-img" style="width: 100%; height: auto; display: block; border-radius: 32px;">
        </a>
      </div>`;

const mobileWalletCardSnippet = `<img src="assets/images/32-Bangla-Desktop-Home.svg" data-reference="Design/32-Bangla-Desktop-Home.svg" alt="মোবাইল ওয়ালেট অফার বিকাশ ও নগদ ক্যাশব্যাক এবং বিউটি টুলস — ২৫% পর্যন্ত ছাড়" class="mobile-payment-img" style="width: 100%; height: auto; display: block; border-radius: 32px;">
        </a>
      </div>
      <!-- Mobile Specific Wallet Card (matches 33-Bangla-Mobile-Home.png) -->
      <div class="mobile-wallet-card" style="display: none;">
        <span class="mobile-wallet-eyebrow">মোবাইল ওয়ালেট অফার</span>
        <h3 class="mobile-wallet-title">বিকাশ / নগদে পেমেন্টে [X]% ক্যাশব্যাক</h3>
        <p class="mobile-wallet-subtitle">ন্যূনতম অর্ডার ৳[১,৫০০] · শর্ত প্রযোজ্য</p>
      </div>`;

if (html.includes(mobilePaymentBannerTarget)) {
  html = html.replace(mobilePaymentBannerTarget, mobileWalletCardSnippet.replace(/\n/g, '\r\n'));
}

// 10. Beauty Blog: add mobile title class
html = html.replace(
  `<h2 class="section-title">বিউটি <span style="color: var(--color-accent);">ব্লগ</span> থেকে</h2>`,
  `<h2 class="section-title">
          <span class="desktop-journal-title">বিউটি <span style="color: var(--color-accent);">ব্লগ</span> থেকে</span>
          <span class="mobile-journal-title" style="display: none;">বিউটি <span style="color: var(--color-accent);">ব্লগ</span></span>
        </h2>`
);

// 11. Footer: add mobile brand title, mobile links, mobile payment line, and mobile copyright
html = html.replace(
  `<img src="Design/footer-logo.png" alt="ABeauty &amp; Fashion" class="footer-logo-img">
          </a>
          <span class="sr-only">ABeauty <em>&amp;</em> Fashion</span>`,
  `<img src="Design/footer-logo.png" alt="ABeauty &amp; Fashion" class="footer-logo-img">
            <span class="mobile-brand-title" style="display: none;">ABeauty <em class="accent-serif">&amp;</em> Fashion</span>
          </a>
          <span class="sr-only">ABeauty <em>&amp;</em> Fashion</span>`
);

const footerBrandDiv = `</div>

        <div class="footer-col">`;
const footerBrandDivWithMobileLinks = `</div>

        <!-- Mobile Horizontal Links (matches 33-Bangla-Mobile-Home.png) -->
        <div class="mobile-bn-footer-links" style="display: none;">
          <a href="about.html">আমাদের সম্পর্কে</a>
          <a href="contact.html">যোগাযোগ</a>
          <a href="privacy.html">প্রাইভেসি</a>
          <a href="terms.html">শর্তাবলি</a>
        </div>

        <div class="footer-col">`;

html = html.replace(footerBrandDiv, footerBrandDivWithMobileLinks.replace(/\n/g, '\r\n'));

const footerBottomTarget = `      <div class="footer-bottom">
        <div>&copy; ২০২৬ ABeauty &amp; Fashion · সর্বস্বত্ব সংরক্ষিত</div>
        <div class="payment-methods-text">
          <span class="payment-pill">বিকাশ</span>
          <span class="payment-pill">নগদ</span>
          <span class="payment-pill">ভিসা</span>
          <span class="payment-pill">মাস্টারকার্ড</span>
          <span class="payment-pill">ক্যাশ অন ডেলিভারি</span>
        </div>
      </div>`;

const footerBottomReplacement = `      <div class="footer-bottom">
        <div class="footer-copy-text">&copy; ২০২৬ ABeauty &amp; Fashion · সর্বস্বত্ব সংরক্ষিত</div>
        <div class="payment-methods-text">
          <span class="payment-pill">বিকাশ</span>
          <span class="payment-pill">নগদ</span>
          <span class="payment-pill">ভিসা</span>
          <span class="payment-pill">মাস্টারকার্ড</span>
          <span class="payment-pill">ক্যাশ অন ডেলিভারি</span>
        </div>
        <div class="mobile-bn-footer-payment" style="display: none;">
          পেমেন্ট: বিকাশ · নগদ · কার্ড · ক্যাশ অন ডেলিভারি
        </div>
        <div class="mobile-bn-footer-copy" style="display: none;">
          &copy; ২০২৬ ABeauty &amp; Fashion
        </div>
      </div>`;

if (html.includes(footerBottomTarget)) {
  html = html.replace(footerBottomTarget, footerBottomReplacement.replace(/\n/g, '\r\n'));
}

// Enforce strict CRLF
html = html.replace(/\r?\n/g, '\r\n');

fs.writeFileSync('index-bn.html', html, 'utf8');
console.log('Successfully updated index-bn.html with CRLF!');

const fs = require('fs');

let html = fs.readFileSync('index-bn.html', 'utf8');

// Hero caption
const heroCaptionOld = `<span class="hero-label-caption"
              style="left: 28px; right: auto; text-align: left; transform: translateX(-1rem);">ক্যাম্পেইন ছবি &mdash; জামদানি শাড়িতে মডেল, ঈদ গ্লো লুক</span>`;

const heroCaptionNew = `<span class="hero-label-caption hero-label-caption-desktop"
              style="left: 28px; right: auto; text-align: left; transform: translateX(-1rem);">ক্যাম্পেইন ছবি &mdash; জামদানি শাড়িতে মডেল, ঈদ গ্লো লুক</span>
            <span class="hero-label-caption hero-label-caption-mobile" style="display: none;">জামদানি শাড়িতে মডেল — ঈদ লুক</span>`;

if (html.includes(heroCaptionOld)) {
  html = html.replace(heroCaptionOld, heroCaptionNew);
  console.log('Replaced hero caption!');
} else {
  // Try regex replace
  html = html.replace(
    /<span class="hero-label-caption"[^>]*>ক্যাম্পেইন ছবি &mdash; জামদানি শাড়িতে মডেল, ঈদ গ্লো লুক<\/span>/,
    heroCaptionNew
  );
  console.log('Regex replaced hero caption!');
}

// Footer bottom
const footerBottomOld = `      <div class="footer-bottom">
        <div>&copy; ২০২৬ ABeauty &amp; Fashion · সর্বস্বত্ব সংরক্ষিত</div>
        <div class="payment-methods-text">
          <span class="payment-pill">বিকাশ</span>
          <span class="payment-pill">নগদ</span>
          <span class="payment-pill">ভিসা</span>
          <span class="payment-pill">মাস্টারকার্ড</span>
          <span class="payment-pill">ক্যাশ অন ডেলিভারি</span>
        </div>
      </div>`;

const footerBottomNew = `      <div class="footer-bottom">
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

if (html.includes(footerBottomOld)) {
  html = html.replace(footerBottomOld, footerBottomNew);
  console.log('Replaced footer bottom!');
} else {
  // Normalize newlines and replace
  const normHtml = html.replace(/\r\n/g, '\n');
  const normOld = footerBottomOld.replace(/\r\n/g, '\n');
  const normNew = footerBottomNew.replace(/\r\n/g, '\n');
  if (normHtml.includes(normOld)) {
    html = normHtml.replace(normOld, normNew);
    console.log('Replaced normalized footer bottom!');
  }
}

// Enforce strict CRLF
html = html.replace(/\r?\n/g, '\r\n');
fs.writeFileSync('index-bn.html', html, 'utf8');
console.log('Done!');

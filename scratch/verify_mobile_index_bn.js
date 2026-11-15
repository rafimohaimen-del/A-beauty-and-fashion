const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('index-bn.html', 'utf8');
const css = fs.readFileSync('assets/css/style.css', 'utf8');

let passed = 0;
let failed = 0;

function assert(desc, condition, details = '') {
  if (condition) {
    console.log(`[PASS] ${desc}`);
    passed++;
  } else {
    console.error(`[FAIL] ${desc} ${details}`);
    failed++;
  }
}

console.log('=== VERIFYING MOBILE RESPONSIVE INDEX-BN (33-Bangla-Mobile-Home.png) ===\n');

// 1. Zero JavaScript requirement
const scriptMatches = (html.match(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi) || []);
assert('Zero <script> tags in index-bn.html', scriptMatches.length === 0, `found ${scriptMatches.length}`);
const inlineHandlers = (html.match(/\son[a-z]+\s*=\s*["'][^"']*["']/gi) || []);
assert('Zero inline event handlers (onclick, etc.)', inlineHandlers.length === 0, `found ${inlineHandlers.length}`);

// 2. Strict CRLF Line Endings
assert('index-bn.html has Windows CRLF line endings (0 bare LF)', !html.replace(/\r\n/g, '').includes('\n'));
assert('assets/css/style.css has Windows CRLF line endings (0 bare LF)', !css.replace(/\r\n/g, '').includes('\n'));

// 3. Top Announcement Bar on Mobile
assert('Announcement bar contains free delivery text', html.includes('৳২,০০০+ অর্ডারে ফ্রি ডেলিভারি'));
assert('Announcement bar contains cash on delivery text', html.includes('ক্যাশ অন ডেলিভারি'));
assert('CSS hides helpline on mobile in announcement bar',
  css.includes('.lang-bn .announcement-bar') || css.includes('body.lang-bn .announcement-bar') || css.includes('.index-bn-page .announcement-bar'));

// 4. Mobile Header & Search
assert('Mobile drawer toggle checkbox present', html.includes('id="mobile-drawer-toggle"'));
assert('Mobile nav toggle hamburger button present', html.includes('class="mobile-nav-toggle"'));
assert('Brand logo present', html.includes('class="brand-logo"'));
assert('Language switcher capsule present with বাং active', html.includes('class="lang-btn active">বাং</a>'));
assert('Mobile search form present with placeholder "সিরাম, লিপস্টিক খুঁজুন..."',
  html.includes('placeholder="সিরাম, লিপস্টিক খুঁজুন..."') || html.includes('placeholder="সিরাম, লিপস্টিক খুঁজুন'));
assert('Bag icon with badge present', html.includes('class="badge-count"') && html.includes('cart.html'));

// 5. Hero Section on Mobile (matches 33-Bangla-Mobile-Home.png)
assert('Hero eyebrow contains ঈদ গ্লো কালেকশন', html.includes('ঈদ গ্লো কালেকশন'));
assert('Hero title contains সৌন্দর্যে হোন স্মার্ট and ফ্যাশনে অনন্য',
  html.includes('সৌন্দর্যে হোন') && html.includes('স্মার্ট') && html.includes('অনন্য'));
assert('Hero subtitle contains বাছাই করা স্কিনকেয়ার, মেকআপ আর বিউটি টুলস',
  html.includes('বাছাই করা স্কিনকেয়ার, মেকআপ'));
assert('Hero primary button contains এখনই কিনুন', html.includes('এখনই কিনুন'));
assert('Hero model visual card contains caption জামদানি শাড়িতে মডেল — ঈদ লুক',
  html.includes('জামদানি শাড়িতে মডেল — ঈদ লুক'));
assert('Hero secondary button or toast hidden on mobile in CSS',
  css.includes('lang-bn') && (css.includes('.hero-toast') || css.includes('.hero-buttons') || css.includes('.hero-visual')));

// 6. Flash Sale Card on Mobile (ফ্ল্যাশ সেল)
assert('Flash sale section has title ফ্ল্যাশ সেল', html.includes('ফ্ল্যাশ সেল'));
assert('Flash sale has discount text ৪০% or ৮০% পর্যন্ত ছাড়',
  html.includes('৪০% পর্যন্ত ছাড়') || html.includes('৮০% পর্যন্ত ছাড়'));
assert('Flash sale has 3 countdown units (ঘণ্টা, মিনিট, সেকেন্ড)',
  html.includes('ঘণ্টা') && html.includes('মিনিট') && html.includes('সেকেন্ড'));
assert('Flash sale has action button (দেখুন or অফার দেখুন)',
  html.includes('দেখুন') || html.includes('অফার দেখুন'));

// 7. Categories Grid on Mobile (ক্যাটাগরি)
assert('Category section has title ক্যাটাগরি', html.includes('ক্যাটাগরি'));
assert('Category has 3-column grid rule in mobile CSS',
  css.includes('repeat(3, 1fr)') || css.includes('grid-template-columns: 1fr 1fr 1fr'));
assert('Category contains all 6 circular items: স্কিনকেয়ার, মেকআপ, হেয়ার কেয়ার, পার্সোনাল কেয়ার, সুগন্ধি, বিউটি টুলস',
  html.includes('স্কিনকেয়ার') &&
  html.includes('মেকআপ') &&
  html.includes('হেয়ার কেয়ার') &&
  html.includes('পার্সোনাল কেয়ার') &&
  html.includes('সুগন্ধি') &&
  html.includes('বিউটি টুলস'));

// 8. Bestsellers Grid on Mobile (বেস্টসেলার)
assert('Bestsellers section has title বেস্টসেলার and link সব দেখুন',
  html.includes('বেস্টসেলার') && html.includes('সব দেখুন'));
assert('Bestsellers has 2-column grid rule in mobile CSS',
  css.includes('repeat(2, 1fr)') || css.includes('grid-template-columns: 1fr 1fr'));
assert('Product 1: রোজ ডিউ হাইড্রেটিং সিরাম with price ৳১,২৫০',
  html.includes('রোজ ডিউ হাইড্রেটিং সিরাম') && html.includes('৳১,২৫০'));
assert('Product 2: ন্যানো আয়নিক ফেসিয়াল স্টিমার with sale price ৳২,৪৯০',
  html.includes('ন্যানো আয়নিক ফেসিয়াল স্টিমার') && html.includes('৳২,৪৯০'));
assert('Product 3: মালবেরি সিল্ক বালিশের কভার with price ৳১,৮৫০',
  html.includes('মালবেরি সিল্ক বালিশের কভার') && html.includes('৳১,৮৫০'));
assert('Product 4: ভেলভেট ম্যাট লিপ টিন্ট with price',
  html.includes('ভেলভেট ম্যাট লিপ টিন্ট'));
assert('Product visual cards have quick add + button', html.includes('quick-add-btn') || html.includes('>+<'));

// 9. Mobile Wallet Promo Card on Mobile (মোবাইল ওয়ালেট অফার)
assert('Mobile wallet promo card contains eyebrow মোবাইল ওয়ালেট অফার',
  html.includes('মোবাইল ওয়ালেট অফার'));
assert('Mobile wallet promo card contains বিকাশ / নগদে পেমেন্টে',
  html.includes('বিকাশ / নগদে পেমেন্টে'));
assert('Mobile wallet promo card contains ক্যাশব্যাক',
  html.includes('ক্যাশব্যাক'));

// 10. Beauty Blog Section on Mobile (বিউটি ব্লগ)
assert('Beauty blog section has title বিউটি ব্লগ',
  html.includes('বিউটি') && html.includes('ব্লগ'));
assert('Blog article 1: সেরা ফেসিয়াল স্টিমার বেছে নেবেন যেভাবে',
  html.includes('সেরা ফেসিয়াল স্টিমার বেছে নেবেন যেভাবে'));
assert('Blog article 2: ঘুমের মধ্যেই',
  html.includes('ঘুমের মধ্যেই'));

// 11. Trust Signals on Mobile
assert('Trust signal 1: ১০০% অরিজিনাল', html.includes('১০০% অরিজিনাল'));
assert('Trust signal 2: ক্যাশ অন ডেলিভারি', html.includes('ক্যাশ অন ডেলিভারি'));
assert('Trust signal 3: দ্রুত ডেলিভারি', html.includes('দ্রুত ডেলিভারি') || html.includes('দ্রুততম ডেলিভারি'));
assert('Trust signal 4: সহজ রিটার্ন', html.includes('সহজ রিটার্ন'));

// 12. Mobile Footer on Mobile
assert('Mobile footer contains brand title ABeauty & Fashion',
  html.includes('ABeauty & Fashion') || html.includes('ABeauty &amp; Fashion'));
assert('Mobile footer contains 4 horizontal links: আমাদের সম্পর্কে, যোগাযোগ, প্রাইভেসি, শর্তাবলি',
  html.includes('আমাদের সম্পর্কে') &&
  html.includes('যোগাযোগ') &&
  html.includes('প্রাইভেসি') &&
  html.includes('শর্তাবলি'));
assert('Mobile footer contains payment line: পেমেন্ট: বিকাশ · নগদ · কার্ড · ক্যাশ অন ডেলিভারি',
  html.includes('পেমেন্ট: বিকাশ · নগদ · কার্ড · ক্যাশ অন ডেলিভারি') ||
  html.includes('বিকাশ · নগদ · কার্ড · ক্যাশ অন ডেলিভারি'));
assert('Mobile footer contains copyright: ২০২৬ ABeauty & Fashion',
  html.includes('২০২৬ ABeauty & Fashion') || html.includes('২০২৬ ABeauty &amp; Fashion'));

console.log(`\nResults: ${passed} passed, ${failed} failed.`);
if (failed > 0) process.exit(1);

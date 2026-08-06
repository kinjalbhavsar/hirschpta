/* ============================================================
   Shared layout — injects the nav and footer on every page.
   Edit the nav/footer in ONE place here; every page picks it up.
   Pages opt in with <div data-nav></div> and <div data-footer></div>,
   and set <body data-page="..."> for the active link highlight.
   ============================================================ */

/* Inline SVG icon sprite — pages reference these with
   <svg class="icon"><use href="#i-name"/></svg> */
const ICON_SPRITE = `
<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
  <symbol id="i-paw" viewBox="0 0 24 24"><g fill="currentColor" stroke="none"><circle cx="5.2" cy="9.7" r="1.9"/><circle cx="9.4" cy="6.3" r="2"/><circle cx="14.6" cy="6.3" r="2"/><circle cx="18.8" cy="9.7" r="1.9"/><path d="M12 10.5c-3.2 0-6.2 2.9-6.2 5.6 0 1.7 1.3 3 3 3 1.2 0 2-.7 3.2-.7s2 .7 3.2.7c1.7 0 3-1.3 3-3 0-2.7-3-5.6-6.2-5.6z"/></g></symbol>
  <symbol id="i-music" viewBox="0 0 24 24"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></symbol>
  <symbol id="i-brush" viewBox="0 0 24 24"><path d="m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"/><path d="M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"/></symbol>
  <symbol id="i-star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></symbol>
  <symbol id="i-basketball" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3v18"/><path d="M3 12h18"/><path d="M5.6 5.6c3.4 3.5 3.4 9.3 0 12.8"/><path d="M18.4 5.6c-3.4 3.5-3.4 9.3 0 12.8"/></symbol>
  <symbol id="i-soccer" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7.5l4.28 3.11-1.63 5.03H9.35l-1.63-5.03z"/><path d="M12 7.5V3"/><path d="M7.72 10.61L3.44 9.22"/><path d="M9.35 15.64l-2.64 3.64"/><path d="M14.65 15.64l2.64 3.64"/><path d="M16.28 10.61l4.28-1.39"/></symbol>
  <symbol id="i-chess" viewBox="0 0 24 24"><circle cx="12" cy="6" r="2.5"/><path d="M9.5 10.5h5"/><path d="M10.3 10.5c.3 2.6-.7 4.6-2.1 6.5h7.6c-1.4-1.9-2.4-3.9-2.1-6.5"/><path d="M7 20.5h10"/></symbol>
  <symbol id="i-bot" viewBox="0 0 24 24"><path d="M12 8V4H8"/><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></symbol>
  <symbol id="i-bus" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="13" rx="2"/><path d="M4 10h16"/><path d="M12 4v6"/><circle cx="8" cy="19.5" r="1.5"/><circle cx="16" cy="19.5" r="1.5"/></symbol>
  <symbol id="i-book-open" viewBox="0 0 24 24"><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/></symbol>
  <symbol id="i-sprout" viewBox="0 0 24 24"><path d="M7 20h10"/><path d="M10 20c5.5-2.5.8-6.4 3-10"/><path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"/><path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"/></symbol>
  <symbol id="i-piano" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 13h18"/><path d="M7.5 13v6"/><path d="M12 13v6"/><path d="M16.5 13v6"/></symbol>
  <symbol id="i-tent" viewBox="0 0 24 24"><path d="M3.5 20L12 4l8.5 16"/><path d="M12 14l3.5 6"/><path d="M2 20h20"/></symbol>
  <symbol id="i-mic" viewBox="0 0 24 24"><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><path d="M12 18v4"/></symbol>
  <symbol id="i-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a13.9 13.9 0 0 1 3.6 9 13.9 13.9 0 0 1-3.6 9 13.9 13.9 0 0 1-3.6-9A13.9 13.9 0 0 1 12 3z"/></symbol>
  <symbol id="i-message" viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></symbol>
  <symbol id="i-book" viewBox="0 0 24 24"><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/></symbol>
  <symbol id="i-grad" viewBox="0 0 24 24"><path d="M22 9L12 4 2 9l10 5 10-5z"/><path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5"/><path d="M22 9v5"/></symbol>
  <symbol id="i-vote" viewBox="0 0 24 24"><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></symbol>
  <symbol id="i-users" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></symbol>
  <symbol id="i-heart" viewBox="0 0 24 24"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z"/></symbol>
  <symbol id="i-clock" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/></symbol>
  <symbol id="i-smile" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M9 9h.01"/><path d="M15 9h.01"/></symbol>
  <symbol id="i-chart" viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M8 17v-5"/><path d="M13 17V8"/><path d="M18 17v-8"/></symbol>
  <symbol id="i-clipboard" viewBox="0 0 24 24"><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M9 12h6"/><path d="M9 16h6"/></symbol>
  <symbol id="i-file" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h8"/></symbol>
  <symbol id="i-scale" viewBox="0 0 24 24"><path d="M12 3v18"/><path d="M7 21h10"/><path d="M3 7h18"/><path d="m5 7-2.5 6a3.2 3.2 0 0 0 5 0L5 7z"/><path d="m19 7-2.5 6a3.2 3.2 0 0 0 5 0L19 7z"/></symbol>
  <symbol id="i-dollar" viewBox="0 0 24 24"><path d="M12 2v20"/><path d="M17 5.5H9.5a3.25 3.25 0 0 0 0 6.5h5a3.25 3.25 0 0 1 0 6.5H6"/></symbol>
  <symbol id="i-award" viewBox="0 0 24 24"><circle cx="12" cy="9" r="6"/><path d="M15.5 13.5 17 22l-5-3-5 3 1.5-8.5"/></symbol>
  <symbol id="i-search" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.35-4.35"/></symbol>
  <symbol id="i-receipt" viewBox="0 0 24 24"><path d="M5 2.5v19l1.8-1 1.8 1 1.8-1 1.8 1 1.8-1 1.8 1 1.8-1 1.4.8v-19l-1.4.7-1.8-1-1.8 1-1.8-1-1.8 1-1.8-1-1.8 1z"/><path d="M9 8h6"/><path d="M9 12h6"/><path d="M9 16h4"/></symbol>
  <symbol id="i-mail" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></symbol>
  <symbol id="i-facebook" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></symbol>
  <symbol id="i-user-plus" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6"/><path d="M22 11h-6"/></symbol>
  <symbol id="i-target" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></symbol>
  <symbol id="i-film" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="2"/><path d="M7 2v20"/><path d="M17 2v20"/><path d="M2 12h20"/><path d="M2 7h5"/><path d="M2 17h5"/><path d="M17 7h5"/><path d="M17 17h5"/></symbol>
  <symbol id="i-flag" viewBox="0 0 24 24"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><path d="M4 22v-7"/></symbol>
  <symbol id="i-calendar" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4"/><path d="M8 2v4"/><path d="M3 10h18"/></symbol>
  <symbol id="i-school" viewBox="0 0 24 24"><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 21v-4a3 3 0 0 1 6 0v4"/><path d="M12 9h.01"/></symbol>
  <symbol id="i-credit-card" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></symbol>
  <symbol id="i-check-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="m8.5 12 2.5 2.5 5-5"/></symbol>
  <symbol id="i-building" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/></symbol>
  <symbol id="i-phone" viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></symbol>
  <symbol id="i-presentation" viewBox="0 0 24 24"><path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/></symbol>
  <symbol id="i-utensils" viewBox="0 0 24 24"><path d="M3 2v7c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2V2"/><path d="M6 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3z"/><path d="M21 15v7"/></symbol>
  <symbol id="i-trophy" viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M6 2h12v7a6 6 0 0 1-12 0z"/><path d="M12 15v4"/><path d="M8 21h8"/></symbol>
  <symbol id="i-shield" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></symbol>
</svg>`;

const LOGO_PAW = `<svg class="icon icon-logo-paw" aria-hidden="true"><use href="#i-paw"/></svg>`;

const NAV_HTML = `
<nav class="nav" id="nav" aria-label="Main navigation">
  <div class="nav-inner">
    <a class="nav-logo" href="/">${LOGO_PAW} Hirsch PTA</a>
    <ul class="nav-links" id="nav-links">
      <li><a href="/" data-page="home">Home</a></li>
      <li class="has-sub" data-pages="about meetings">
        <a href="/about" data-page="about" class="nav-group">About <span class="caret" aria-hidden="true">&#9662;</span></a>
        <ul class="nav-sub">
          <li><a href="/about">Mission &amp; Board</a></li>
          <li><a href="/meetings" data-page="meetings">Meetings &amp; Documents</a></li>
        </ul>
      </li>
      <li><a href="/programs" data-page="programs">Programs</a></li>
      <li><a href="/events" data-page="events">Events</a></li>
      <li class="has-sub" data-pages="membership volunteer">
        <a href="/membership" data-page="membership" class="nav-group">Get Involved <span class="caret" aria-hidden="true">&#9662;</span></a>
        <ul class="nav-sub">
          <li><a href="/membership">Membership</a></li>
          <li><a href="/volunteer" data-page="volunteer">Volunteer</a></li>
        </ul>
      </li>
      <li class="has-sub" data-pages="donate fundraiser">
        <a href="/donate" data-page="donate" class="nav-group">Support Us <span class="caret" aria-hidden="true">&#9662;</span></a>
        <ul class="nav-sub">
          <li><a href="/donate">Donate</a></li>
          <li><a href="/fundraiser" data-page="fundraiser">Bulldog Jog</a></li>
          <li><a href="/donate#sponsors">Sponsors</a></li>
        </ul>
      </li>
      <li><a href="/gallery" data-page="gallery">Photos</a></li>
      <li class="nav-join"><a href="/membership" class="btn btn-primary btn-nav">Join the PTA</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-links">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-left">
      <span class="footer-logo">${LOGO_PAW} Hirsch PTA</span>
      <span>501(c)(3) &middot; EIN: 94-6184147</span>
      <span>O.N. Hirsch Elementary &middot; 41399 Chapel Way, Fremont, CA 94538</span>
    </div>
    <nav class="footer-center" aria-label="Footer">
      <a href="/about">About</a>
      <a href="/meetings">Meetings &amp; Minutes</a>
      <a href="/membership">Membership</a>
      <a href="/programs">Programs</a>
      <a href="/events">Events</a>
      <a href="/volunteer">Volunteer</a>
      <a href="/fundraiser">Bulldog Jog</a>
      <a href="/donate">Donate</a>
      <a href="/gallery">Photos</a>
    </nav>
    <div class="footer-right">
      <a href="mailto:pta.hirsch@gmail.com">pta.hirsch@gmail.com</a><br>
      <span style="margin-top:.3rem; display:block;">Built with &hearts; in Fremont, CA</span>
    </div>
  </div>
</footer>`;

document.body.insertAdjacentHTML('afterbegin', ICON_SPRITE);
document.querySelectorAll('[data-nav]').forEach(el => { el.outerHTML = NAV_HTML; });
document.querySelectorAll('[data-footer]').forEach(el => { el.outerHTML = FOOTER_HTML; });

/* ============================================================
   Shared layout — injects the nav and footer on every page.
   Edit the nav/footer in ONE place here; every page picks it up.
   Pages opt in with <div data-nav></div> and <div data-footer></div>,
   and set <body data-page="..."> for the active link highlight.
   ============================================================ */

const NAV_HTML = `
<nav class="nav" id="nav" aria-label="Main navigation">
  <div class="nav-inner">
    <a class="nav-logo" href="/">&#x1F43E; Hirsch PTA</a>
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
      <span class="footer-logo">&#x1F43E; Hirsch PTA</span>
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

document.querySelectorAll('[data-nav]').forEach(el => { el.outerHTML = NAV_HTML; });
document.querySelectorAll('[data-footer]').forEach(el => { el.outerHTML = FOOTER_HTML; });

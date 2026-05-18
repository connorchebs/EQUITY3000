(function () {
  var LOGO_NAV = 'https://lh3.googleusercontent.com/aida-public/AB6AXuA84T8gUhPEiAv64FlkwqW10usP5cNf5hrCyv7bbf_w-Jo55dIVqVr3NrR8-SswI0CTdjs8q4a11kMovSLDfrwgRoqfMp7SdD7e3BJUqqwR-ACLtZf9OPDwkGwr2j3r9aNnjyO0175BcLauvIQUCXEkxSGm-jJ0c6gd4S98deTZVCHMg4NR5IYJn3Evu5fN6Z9EmnYGkct5q6Y_U4MFeJHrmSv605yyuxJx2CvESn5xxLw0AzfNTughyZG0zHvi6_VkxA8uEe67Tm4';
  var LOGO_FOOTER = LOGO_NAV;

  // --- NAV ---
  var navEl = document.getElementById('shared-nav');
  if (navEl) {
    navEl.innerHTML = [
      '<header class="sticky top-0 z-50 bg-surface border-b border-outline-variant">',
        '<nav class="flex justify-between items-center w-full px-gutter max-w-container-max mx-auto h-20">',
          '<a href="index.html"><img src="' + LOGO_NAV + '" alt="EQUITY3000 Logo" class="h-10 w-auto object-contain"></a>',
          '<div class="hidden md:flex items-center space-x-8">',
            '<a data-nav="index.html" href="index.html" class="nav-link font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors">Home</a>',
            '<a data-nav="opportunities.html" href="opportunities.html" class="nav-link font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors">Opportunities</a>',
            '<a data-nav="team.html" href="team.html" class="nav-link font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors">Our Team</a>',
          '</div>',
          '<a href="contact.html" class="hidden lg:block px-6 py-3 border border-primary text-on-surface font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container transition-colors duration-300">Contact</a>',
        '</nav>',
      '</header>'
    ].join('');

    // Highlight active page
    var page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function (link) {
      if (link.dataset.nav === page) {
        link.classList.add('text-primary', 'border-b-2', 'border-tertiary-fixed-dim', 'pb-1', 'font-bold');
        link.classList.remove('text-on-surface-variant');
      }
    });
  }

  // --- FOOTER ---
  var footerEl = document.getElementById('shared-footer');
  if (footerEl) {
    footerEl.innerHTML = [
      '<footer class="bg-primary-container border-t border-outline-variant w-full">',
        '<div class="flex flex-col md:flex-row justify-between items-center w-full px-gutter py-stack-lg max-w-container-max mx-auto">',
          '<div class="mb-8 md:mb-0">',
            '<div class="mb-4"><img src="' + LOGO_FOOTER + '" alt="EQUITY3000 Logo" class="h-8 w-auto object-contain brightness-0 invert opacity-80"></div>',
            '<p class="font-body-md text-body-md text-on-primary-container opacity-80 max-w-xs">&copy; 2025 Equity3000. All rights reserved.</p>',
          '</div>',
          '<div class="flex flex-wrap justify-center gap-x-8 gap-y-4">',
            '<a href="#" class="font-label-md text-label-md text-on-primary-container opacity-80 hover:opacity-100 hover:text-surface-bright transition-colors">NDA</a>',
            '<a href="#" class="font-label-md text-label-md text-on-primary-container opacity-80 hover:opacity-100 hover:text-surface-bright transition-colors">Privacy Policy</a>',
          '</div>',
        '</div>',
      '</footer>'
    ].join('');
  }
})();

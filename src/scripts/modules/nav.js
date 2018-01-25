(function() {
	var navModule = {
		init: function() {
			this.cacheDom();
			this.cacheVariables();
			this.bindEvents();
		},
		cacheDom: function() {
			this.$hamburger = document.querySelector('#hamburger');
			this.$navClose = document.querySelector('#nav-close');
			this.$mobileNavBar = document.querySelector('#mobile-navbar');
      this.$mobileNavMenuOverlay = document.querySelector('#mobile-navmenu-overlay');
			this.$desktopNavBar = document.querySelector('#desktop-navbar');
      this.$window = window;
		},
		cacheVariables: function() {
			this.$lastScrollTop = 0;
		},
		bindEvents: function() {
			this.$hamburger.addEventListener('click', this.toggleOpen.bind(this));
			this.$navClose.addEventListener('click', this.toggleOpen.bind(this));
			this.$window.addEventListener('scroll', this.hideNav.bind(this));
		},
		hideNav: function() {
			var currentScrollTop = $(window).scrollTop();
			// If New Scroll Position > Old Scroll Position Hide Navbar

			if (currentScrollTop > this.$lastScrollTop && currentScrollTop > 30) {
				this.$mobileNavBar.classList.add('hidden');
				this.$desktopNavBar.classList.add('hidden');
			} else {
				this.$mobileNavBar.classList.remove('hidden');
				this.$desktopNavBar.classList.remove('hidden');
			}

			// Add Background Opacity if User Scrolls Down 50px
			if (currentScrollTop > 50) {
				this.$mobileNavBar.classList.add('nav-background');
				this.$desktopNavBar.classList.add('nav-background');
			} else {
				this.$mobileNavBar.classList.remove('nav-background');
				this.$desktopNavBar.classList.remove('nav-background');
			}

			this.$lastScrollTop = currentScrollTop;

		},
		toggleOpen: function() {
			var active = this.$mobileNavMenuOverlay.classList.contains('hide');

      if (active) {
        this.$mobileNavMenuOverlay.classList.remove('hide');
      } else {
        this.$mobileNavMenuOverlay.classList.add('hide');
      }
		}
	}
	navModule.init();
})();

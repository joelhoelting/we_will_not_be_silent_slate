(function () {
	var sizingModule = {
		init: function() {
			this.cacheDom();
			this.bindEvents();
		},
		cacheDom: function () {
      this.$sizingOverlay = document.querySelector('#sizing-overlay');
      this.$sizingOpen = document.querySelector('#sizing-open');
      this.$sizingClose = document.querySelector('#sizing-close');
		},
		bindEvents: function () {
      this.$sizingOpen.addEventListener('click', this.toggleOpen.bind(this));
			this.$sizingClose.addEventListener('click', this.toggleOpen.bind(this));
		},
    toggleOpen: function (e) {
			e.preventDefault();

			var active = this.$sizingOverlay.classList.contains('hide');

      if (active) {
        this.$sizingOverlay.classList.remove('hide');
      } else {
        this.$sizingOverlay.classList.add('hide');
      }
    }
	}
	// Only Initialize This Module on Product Page
	if (window.location.href.includes('product')) {
		sizingModule.init();
	}
})();

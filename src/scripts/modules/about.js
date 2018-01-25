(function () {
	var aboutModule = {
		init: function() {
			this.cacheDom();
			this.bindEvents();
		},
		cacheDom: function () {
      this.$history = $('#history');
      this.$revealHistoryLink = $('a#revealHistory');
		},
		bindEvents: function() {
			this.$revealHistoryLink.on('click', this.revealHistory.bind(this));
		},
		revealHistory: function () {
			this.$history.removeClass('hide');
			this.$revealHistoryLink.addClass('hide');
		}
	}
	aboutModule.init();

})();

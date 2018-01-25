(function () {
	var titleModule = {
		init: function() {
			this.cacheDom();
			this.changeTitle();
		},
		cacheDom: function () {
      this.$title = $('#title');
      this.$messages = $('#messages');
		},
		changeTitle: function () {
			var path = location.pathname;
			if (path == "/") {
				this.$title.html('<a href="/collections/current">EMBODY THE MESSAGE</a>');
			} else if (path == "/collections/current") {
				this.$title.html('A POWERFUL T-SHIRT<br> SETS US FORTH').css({'font-size': '1.2rem'});
			} else if (path == "/pages/about") {
				this.$title.html('ABOUT').css({'font-size': '2rem'});
			}
		}
	}
	titleModule.init();

})();

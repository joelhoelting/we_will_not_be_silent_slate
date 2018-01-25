(function () {
	var imagesModule = {
		init: function() {
			this.cacheDom();
			this.insertImages();
		},
		cacheDom: function () {
      this.$imagesDiv = $('div#images');
		},
		insertImages: function() {
			var images = [
				"http://res.cloudinary.com/dwebekbqy/image/upload/v1514341664/2-scaled-min_fkx2s1.jpg",
				"http://res.cloudinary.com/dwebekbqy/image/upload/v1514341664/6-scaled-min_h5p4al.jpg",
				"http://res.cloudinary.com/dwebekbqy/image/upload/v1514341664/1-scaled-min_japgdv.jpg",
				"http://res.cloudinary.com/dwebekbqy/image/upload/v1514341664/4-scaled-min_jiu529.jpg",
				"http://res.cloudinary.com/dwebekbqy/image/upload/v1514342711/7-scaled-min_gszqjp.jpg",
				"http://res.cloudinary.com/dwebekbqy/image/upload/v1514341664/5-scaled-min_dzqg2e.jpg"
			]

			var html = images.map(function(image) {
				return `<a href="/collections/current"><img src="${image}" /></a>`
			}).join('');

			this.$imagesDiv.prepend(html);
		}
	}
	if (window.location.pathname == "/pages/images") {
		imagesModule.init();
		console.log('images loaded!');
	} else {
		return;
	}

})();

(function () {
	var products = {
		init: function() {
      this.fetchProducts();
      this.cacheDom();
      this.cacheVariables();
      this.bindEvents();
		},
		cacheDom: function () {
      this.$searchInput = $('#search-products');
      this.$list = $('#list ul');
    },
    cacheVariables: function() {
      this.originalList = this.$list.html();
    },
    bindEvents: function () {
      var originalThis = this;
      // this.$searchInput.on('change', this.displayMatches);
      this.$searchInput.on('keyup', function(event) {
        originalThis.displayMatches(event);
      });
    },
    displayMatches: function(event) {
      if (event.target.value <= 1) {
        this.$list.html(this.originalList);
        return;
      }
      
      var matchArray = this.findMatches(event.target.value);
      console.log(matchArray);

      const searchedProducts = matchArray.map(product => {
        return `
          <li>
           <a href='/products/${product.url}'>${product.title}</a>
          </li>
        `;
      }).join('');
      this.$list.html(searchedProducts);
    },
    findMatches: function(wordToMatch) {
      return this.allProducts.filter(product => {
        const regex = new RegExp(wordToMatch, 'gi');
        return product.title.match(regex);
      });
    },
    fetchProducts: function() {
      var endpoint = 'https://us-central1-we-will-not-be-silent.cloudfunctions.net/getProducts';
      fetch(endpoint)
        .then(blob => blob.json())
        .then(data => {
          this.allProducts = data;
          this.$searchInput.removeAttr('disabled');
        });
    }
  }
  if (window.location.pathname == '/collections/current') {
    products.init();
  }

})();

// const cities = [];
// fetch(endpoint)
//   .then(blob => blob.json())
//   .then(data => cities.push(...data));

// function findMatches(wordToMatch, cities) {
//   return cities.filter(place => {
//     // here we need to figure out if the city or state matches what was searched
//     const regex = new RegExp(wordToMatch, 'gi');
//     return place.city.match(regex) || place.state.match(regex)
//   });
// }

// function numberWithCommas(x) {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
// }

// function displayMatches() {
//   const matchArray = findMatches(this.value, cities);
//   const html = matchArray.map(place => {
//     const regex = new RegExp(this.value, 'gi');
//     const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
//     const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
//     return `
//       <li>
//         <span class="name">${cityName}, ${stateName}</span>
//         <span class="population">${numberWithCommas(place.population)}</span>
//       </li>
//     `;
//   }).join('');
//   suggestions.innerHTML = html;
// }

// const searchInput = document.querySelector('.search');
// const suggestions = document.querySelector('.suggestions');

// searchInput.addEventListener('change', displayMatches);
// searchInput.addEventListener('keyup', displayMatches);
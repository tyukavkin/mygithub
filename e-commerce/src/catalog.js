function fnSearch(array, pattern, wholeWord) {
	var parts = pattern
		.trim()
		.toLowerCase()
		.split(/\s+/);

	return array.filter(function({ product }) {
		var description = product.toLowerCase().split(/\s+/);

		return parts.every(function(part) {
			return description.some(function(word) {
				return wholeWord ? word === part : word.startsWith(part);
			});
		});
	});
}

window.pg = {};

(async function() {
	const products = await fetch("../data.json").then(response =>
		response.json()
	);

	document.getElementById("search").addEventListener("input", performSearch);

	document
		.getElementById("price-min")
		.addEventListener("change", performSearch);
	document
		.getElementById("price-max")
		.addEventListener("change", performSearch);
	document.getElementById("order").addEventListener("change", performSearch);
	document
		.getElementById("results-per-page")
		.addEventListener("change", performSearch);
	document
		.getElementById("exact-search")
		.addEventListener("change", performSearch);

	performSearch();

	pg.performSearch = performSearch;

	function performSearch(number) {
		const page = typeof number === "number" ? number || 1 : 1;
		const { value } = document.getElementById("search");

		function comparator(order) {
			return [
				(a, b) => (a.product > b.product ? 1 : -1),
				(a, b) => (Number(a.price) > Number(b.price) ? 1 : -1),
				(a, b) => (Number(a.price) < Number(b.price) ? 1 : -1)
			][order];
		}

		const [min, max] = ((a, b) => (a > b ? [b, a] : [a, b]))(
			Number(document.getElementById("price-min").value),
			Number(document.getElementById("price-max").value)
		);

		document.getElementById(
			"range-display"
		).childNodes[0].textContent = `Price (${min}...${max})`;

		const result = fnSearch(
			products,
			value,
			document.getElementById("exact-search").checked
		).filter(({ price }) => {
			price = Number(price);
			return min <= price && price <= max;
		});

		result.sort(comparator(document.getElementById("order").value));

		let html = result
			.map(({ image, product, price }, index) => {
				if (
					index >=
					page * document.getElementById("results-per-page").value
				)
					return ``;

				const [, integer, decimal] = price.match(/^(\d+\.?\-?)(\d*)/);
				return `
				<div class="col-lg-4 col-md-6 col-12">
				<div class="single-product">
					<div class="product-img">
						<a href="product-details.html">
							<img class="default-img" src="${image}" alt="#">
							<img class="hover-img" src="${image}" alt="#">
						</a>
						<div class="button-head">
							<div class="product-action">
								<a data-toggle="modal" data-target="#exampleModal" title="Quick View" href="#"><i
										class=" ti-eye"></i><span>Quick Shop</span></a>
								<a title="Wishlist" href="#"><i class=" ti-heart "></i><span>Add to Wishlist</span></a>
								<a title="Compare" href="#"><i class="ti-bar-chart-alt"></i><span>Add to Compare</span></a>
							</div>
							<div class="product-action-2">
								<a title="Add to cart" href="#">Add to cart</a>
							</div>
						</div>
					</div>
					<div class="product-content">
						<h3><a href="product-details.html">${product}</a></h3>
						<div class="product-price">
							<span class="">${integer}${decimal ? "" : ".-"}
								<span class="">${
									decimal ? (decimal + "0").slice(0, 2) : ""
									}</span>
							</span>
						</div>
					</div>
				</div>
			</div>
					`;
			})
			.join("");

		if (
			result.length >
			page * document.getElementById("results-per-page").value
		)
			html += `
					<button type="button" onclick="pg.performSearch(${page + 1})">Load more</button>
				`;

		document.getElementById("products").innerHTML = html;
	}
})();

function init(){
	//reading the data from csv file
	d3.csv("Task_2.4_data.csv").then(function(data){
			console.log(data);
			wombatSightings = data;

			barChart(wombatSightings);
	});

	var w = 500;
	var h = 150;
	var barPadding = 3;

	//D3 block
	var svg = d3.select("#chart")
							.append("svg")
							.attr("width", w)
							.attr("height", h);

	function barChart(wombatSightings) {
			svg.selectAll("rect")
					.data(wombatSightings)
					.enter()
					.append("rect")
					// x coordinate and y coordinate
					.attr("x", function(d, i) {
							return i * (w / wombatSightings.length);
					})
					.attr("y", function(d) {
							return h - (d.wombats * 4);
					})
					// width and height of the bar chart
					.attr("width", function(d) {
							return (w / wombatSightings.length - barPadding);
					})
					.attr("height", function(d) {
							return d.wombats * 4;
					})
					// change all the bar colors to lime green
					.attr("fill", "limegreen");

			svg.selectAll("text")
					.data(wombatSightings)
					.enter()
					.append("text")
					.text(function(d) {
							return d.wombats;
					})
					.attr("fill", "black")
					.attr("x", function(d, i) {
							return i * (w / wombatSightings.length) + (w / wombatSightings.length - barPadding) / 2 - 8;
					})
					.attr("y", function(d) {
							return h - (d.wombats * 4) + 15; // Adjust the position to place it inside the bar
					})
					.attr("text-anchor", "middle");
	}
}

window.onload = init;

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>covid-19 stats</title>
		<script
			src="https://code.jquery.com/jquery-3.6.0.js"
			integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
			crossorigin="anonymous"
		></script>
		<link
			rel="stylesheet"
			href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
		/>
	</head>
	<body>
		<div
			class="container-fluid text-center my-3"
			style="background-color: #01c36e; color: blanchedalmond"
		>
			<h2>GRAPHICAL REPRESENTATION OF DATA OF COVID-19</h2>
		</div>
		<canvas id="myChart"></canvas>
	</body>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.6.0/chart.min.js"></script>
	<script>
		$(document).ready(function () {
			var url = " https://data.covid19india.org/data.json";
			$.getJSON(url, function (data) {
				console.log(data);
				var state = [];
				var confirmed = [];
				var recovered = [];
				var deaths = [];
				$.each(data.statewise, function (id, obj) {
					state.push(obj.state);
					confirmed.push(obj.confirmed);
					recovered.push(obj.recovered);
					deaths.push(obj.deaths);
				});
				state.shift();
				confirmed.shift();
				recovered.shift();
				deaths.shift();
				console.log(state);
				var chart = document.getElementById("myChart").getContext("2d");
				var chart = new Chart(myChart, {
					type: "bar",
					data: {
						labels: state,
						datasets: [
							{
								label: "confirmed cases",
								data: confirmed,
								backgroundColor: "blue",
								minbarlength: 100,
							},
							{
								label: "Recovered cases",
								data: recovered,
								backgroundColor: "yellow",
								minbarlength: 100,
							},
							{
								label: "Deceased",
								data: deaths,
								backgroundColor: "black",
								minbarlength: 100,
							},
						],
					},
					options: {},
				});
			});
		});
	</script>
</html>

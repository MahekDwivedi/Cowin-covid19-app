# using API SETU Covid-19 API and fetching data 
  
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
	<script src="js/jquery-3.6.0.min.js"></script>
	<script
		src="https://code.jquery.com/jquery-3.6.0.min.js"
		integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
		crossorigin="anonymous"
	></script>
	<script>
		fetch("https://api.covid19api.com/summary")
			.then((apidata) => {
				console.log(apidata);
				return apidata.json();
			})
			.then((actualdata) => {
				console.log(actualdata);
				const mydata = actualdata.Global.TotalConfirmed;
				const deaths = actualdata.Global.TotalDeaths;
				const recover = actualdata.Global.TotalRecovered;
				
				document.getElementById("total-cases").innerHTML = mydata;
				document.getElementById("total-deaths").innerHTML = deaths;
				document.getElementById("total-recovered").innerHTML = recover;

				for (i = 0; i < 192; i++) {
					var list = document.createElement("div");
					var newItem2 = document.createElement("div");
					var newItem = document.createElement("span");
					var newItem3 = document.createElement("span");

					var print2 = actualdata.Countries[i].Country;
					var print = actualdata.Countries[i].TotalConfirmed; //cases
					var print3 = actualdata.Countries[i].TotalDeaths; //cases

					var text = document.createTextNode(print); //cases
					var text2 = document.createTextNode(print2);
					var text3 = document.createTextNode(print3);

					newItem.appendChild(text); //cases
					newItem2.appendChild(text2);
					newItem3.appendChild(text3);

					newItem2.style.display = "inline-block";
					newItem2.style.width = "200px";
					// newItem2.style.backgroundColor = "#c2eddc";
					newItem.style.fontFamily = "karla";
					newItem.style.display = "inline-block";
					newItem.style.width = "200px";
					newItem3.style.fontFamily = "karla";

					// document.getElementById("inputtext").appendChild(list);
					document.getElementById("inputtext").appendChild(newItem2);

					document.getElementById("inputtext").appendChild(newItem);
					document.getElementById("inputtext").appendChild(newItem3);
					document.getElementById("inputtext").appendChild(list);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	</script>

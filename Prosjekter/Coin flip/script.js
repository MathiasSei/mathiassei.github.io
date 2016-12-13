var heads = 0;    
var tails = 0;
var canvas = document.getElementById("chart");
var ctx = canvas.getContext("2d");

var data = {
    datasets: [
        {
        	label: "Heads",
        	data: [heads],
        },	
        {
        	label: "Tails",
        	data: [tails],
        }
    ]
};

var coinFlipChart = new Chart(ctx , {
    type: "bar",
    data: data,
    options: {
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    } 
});

function coinFlip() {
    var flip = Math.random();
    console.log(flip);
    if (flip >= 0.5) {
        document.getElementById('coin').innerHTML = "Heads";
        heads++;
        coinFlipChart.data.datasets[0].data[0] = heads;
        coinFlipChart.update();
    } else {
        document.getElementById('coin').innerHTML = "Tails";
        tails++;
        coinFlipChart.data.datasets[1].data[0] = tails;
        coinFlipChart.update();
    }
}
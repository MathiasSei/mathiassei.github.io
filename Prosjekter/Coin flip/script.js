var heads = 0;
var tails = 0;
var canvas = document.getElementById("chart");
var canvas2 = document.getElementById('pieChart');
var ctx = canvas.getContext('2d');
var ctx2 = canvas2.getContext('2d');

var data = {
    datasets: [
        {
        	label: "Heads",
        	data: [heads],
          backgroundColor: [
            'rgba(255, 206, 86, 0.2)',
          ],
          borderColor: [
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
        },
        {
        	label: "Tails",
        	data: [tails],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        }
    ]
};

var pieData = {
  labels: [
    "Heads",
    "Tails"
  ],
  datasets: [
    {
      data: [tails, heads],
      backgroundColor: [

        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ]
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
                    beginAtZero: true,
                }
            }]
        }
    }
});

var coinFlipPieChart = new Chart(ctx2,{
    type: 'pie',
    data: pieData,
});

function coinFlip() {
    var flip = Math.random();
    if (flip >= 0.5) {
        document.getElementById('coin').innerHTML = "Heads";
        heads++;
        coinFlipChart.data.datasets[0].data[0] = heads;
        coinFlipPieChart.data.datasets[0].data[0] = heads;
    } else {
        document.getElementById('coin').innerHTML = "Tails";
        tails++;
        coinFlipChart.data.datasets[1].data[0] = tails;
        coinFlipPieChart.data.datasets[0].data[1] = tails;
    }
    coinFlipChart.update();
    coinFlipPieChart.update();
    flipPercentage();
}

function flipXtimes() {
  var x = document.getElementById('times').value;
  for (var i = 0; i < x; i++) {
    coinFlip();
  }
}

function toggleStats() {
  var x = document.getElementById('chartDiv');
  if (x.style.display === 'none') {
    x.style.display = 'block';
  } else {
    x.style.display = 'none';
  }
}

function flipPercentage() {
  var hp = 0, tp = 0;
  if (heads > tails) {
    tp = tails / (heads + tails);
    hp = 1 - tp;
  } else {
    hp = heads / (heads + tails);
    tp = 1 - hp;
  }
  document.getElementById('headsPercent').innerHTML = Math.round(hp * 100);
  document.getElementById('tailsPercent').innerHTML = Math.round(tp * 100);
}

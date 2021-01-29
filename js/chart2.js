new Chart(document.getElementById("bar-chart"), {
    type: 'bar',
    data: {
      labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday" ,"Friday" ,"Saturday"],
      datasets: [
        {
          label: "Profile  Reach(Daily)",
          backgroundColor: ["#008ed6", "#fe4365","#000","#e8c3b9","#c45850", "#45dc43", "#eded43"],
          data: [5267,3734,1784,4333,555,2232,889]
        }
      ]
    },
    options: {
      legend: { display: true },
      responsive:true,
      maintainAspectRatio : false,
      title: {
        display: true,
        text: "Profile  Reach(Daily)"
      }
    }
});
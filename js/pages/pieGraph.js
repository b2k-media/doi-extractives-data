$(document).ready(function(){

  var jsonFilePath= '';
  var orderPieChart= false;
  if (document.URL.search('/explore/employment/') > 1) {
    jsonFilePath = "../../data/graphs/employment.json";
  // } else if (document.URL.search('explore/how-it-work/erneuerbare_energien/') > 1) {
  //   jsonFilePath = "../../../data/graphs/erneuerbare_energien.json";
  } else if (document.URL.search('explore/zahlungsabgleich/') > 1) {
    jsonFilePath = "../../data/graphs/zahlungsabgleich_Pie.json";
    orderPieChart = true;
  }

  var isEn = document.URL.search('/en/');
  if (isEn === -1) {
    $.jqplot.sprintf.thousandsSeparator = '.';
    $.jqplot.sprintf.decimalMark = ',';
  }

  $.ajax({
    type: "GET",
    url: jsonFilePath,
    dataType: "text",
    success: function(data) {
      processData(data);
      orderLegends();
    }
  });

  function processData(data) {

    var jsonresponce = JSON.parse(data);
    plotPieGraph(jsonresponce);
  }

  function plotPieGraph(plotData) {
    var plot3 = $.jqplot('pieChart', plotData.data, {
        seriesDefaults:{
            shadow: false,
            renderer:$.jqplot.PieRenderer,
            rendererOptions:{
                dataLabelPositionFactor : 1.3,
                sliceMargin: 4,
                startAngle: -90,
                showDataLabels: true,
                dataLabelThreshold : 0,
                dataLabelFormatString:'%.2f%'
            }
        },
        seriesColors: plotData.color,
        legend:{
          show: true,
          location: $( window ).width() < 600 ? 's': 'e',
          placement: 'inside'
        },
        grid: {
            background: '#fff',
            drawBorder: false,
            drawGridlines: false,
            shadow: false
        },
        title: plotData.title
    });
  }

  function orderLegends() {
    if (orderPieChart) {
      var legentChart1 = $("#pieChart table.jqplot-table-legend tbody");
      legentChart1.children().each(function(i, tr){
        legentChart1.prepend(tr)
      });
    }
  }
});

$(document).ready(function(){

  var jsonData = [];
  var category = [];
  var isEn = document.URL.search('/en/');
  var ticks = [];
  var labels = [];
  var jsonFilePath= '';
  var displayTwoDecimalPoints = false;

  if (document.URL.search('/explore/exporte/') > 1) {
    jsonFilePath = "../../data/graphs/exporte.json";
    displayTwoDecimalPoints = true;
  } else if (document.URL.search('/explore/subventionen-und-steuerliche-begunstigungen/') > 1) {
    jsonFilePath = "../../data/graphs/subventionen1.json";
  } else if (document.URL.search('explore/how-it-work/anpassungsgeld') > 1) {
    jsonFilePath = "../../../data/graphs/anpassungsgeld.json";
  } else if (document.URL.search('explore/einnahmen/') > 1) {
    jsonFilePath = "../../data/graphs/einnahmen.json";
  }

  $.ajax({
    type: "GET",
    url: jsonFilePath,
    dataType: "text",
    success: function(data) {processData(data);}
  });

  function processData(data) {
    var jsonresponce = JSON.parse(data);
    for(var i=0; i<jsonresponce.length; i++) {
      renderChart(jsonresponce[i], i);
    }
  }

  function renderChart(jsondata, number) {

    jsonData = jsondata.data;
    category = jsondata.categories;
    title = jsonData.title;
    ticks= jsondata.xAxis;
    labels= jsondata.labels;
    var colors = jsondata.color;
    var chartTitle = (isEn > 1) ? jsondata.title_en : jsondata.title;
    plotGraph('chart'+(number+1),jsonData, jsondata, chartTitle, colors, ticks, labels, displayTwoDecimalPoints);
  }

  function plotGraph(chart, data, jsondata, chartTitle, colorsData, ticks, labels, displayTwoDecimalPoints) {

    var pointLabels = displayTwoDecimalPoints ?
      { show: true, location: 'e', edgeTolerance: -15, formatString: '%.2f' } :
      { show: true, location: 'e', edgeTolerance: -15 }
    $('#'+chart).height(((jsondata.data.length < 2) ? 2:jsondata.data.length) * ((jsondata.data[0].length < 2) ? 2:jsondata.data[0].length) * 40);
    plot2b = $.jqplot(chart, data, {
        animate: !$.jqplot.use_excanvas,
        seriesDefaults: {
            renderer:$.jqplot.BarRenderer,
            pointLabels: pointLabels,
            shadowAngle: 135,
            rendererOptions: {
                barDirection: 'horizontal',
                barMargin: 2,
                barWidth: 15
            }
        },
        seriesColors: colorsData,
        grid: {
            borderColor: 'white',
            shadow: false,
            drawBorder: true,
            background: '#d2dce6',
          },
        axes: {
            yaxis: {
                renderer: $.jqplot.CategoryAxisRenderer,
                autoscale: false,
                tickOptions:{
                showGridline: false,
                formatString: '%.2f'
              },
            },
            xaxis: {
              ticks: ticks,
              autoscale : false
            }
        },
        legend:{
          show: true,
          location:'s',
          placement: 'outside',
          labels: labels
        },
        title: chartTitle
    });
    $(".jqplot-xaxis-tick").last().text('Mio. €');

    if($( window ).width() < 600) {
      $(".jqplot-point-label").css("left", $( window ).width() - 50);
    } else {
      $(".jqplot-point-label").css("left", "650px");
    }
  }
});

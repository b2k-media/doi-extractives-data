$(document).ready(function(){

  var jsonData = [];
  var category = [];
  var jsonUnit = '';
  var isEn = document.URL.search('/en/');
  var ticks = [];
  var labels = [];
  var jsonFilePath= '';
  var displayTwoDecimalPoints = false;
  var noDotDisplayDecimal = false;
  var orderSeries1= false;
  var orderSeries2= false;

  if (isEn === -1) {
    $.jqplot.sprintf.thousandsSeparator = '.';
    $.jqplot.sprintf.decimalMark = ',';
  }

  if (document.URL.search('/explore/exporte/') > 1) {
    jsonFilePath = "../../data/graphs/exporte.json";
    displayTwoDecimalPoints = true;
    orderSeries1 = true;
    orderSeries2 = true;
  } else if (document.URL.search('/explore/subventionen-und-steuerliche-begunstigungen/') > 1) {
    jsonFilePath = "../../data/graphs/subventionen1.json";
  } else if (document.URL.search('explore/einnahmen/') > 1) {
    jsonFilePath = "../../data/graphs/einnahmen.json";
    orderSeries1 = true;
  } else if (document.URL.search('explore/how-it-work/wasser/') > 1) {
    jsonFilePath = "../../../data/graphs/wasser.json";
  } else if (document.URL.search('explore/gesamtdeutsche_rohstoffproduktion/') > 1) {
    jsonFilePath = "../../data/graphs/gesamtdeutsche_rohstoffproduktion.json";
    noDotDisplayDecimal = true;
  } else if (document.URL.search('explore/zahlungsabgleich/') > 1) {
    jsonFilePath = "../../data/graphs/zahlungsabgleich.json";
    displayTwoDecimalPoints = true;
    orderSeries1 = true;
    orderSeries2 = true;
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
    jsonUnit = jsondata.unit;
    var colors = jsondata.color;
    var chartTitle = (isEn > 1) ? jsondata.title_en : jsondata.title;
    plotGraph('chart'+(number+1),jsonData, jsondata, chartTitle, colors, ticks, labels, displayTwoDecimalPoints);
  }

  function plotGraph(chart, data, jsondata, chartTitle, colorsData, ticks, labels, displayTwoDecimalPoints) {

    var pointLabels;
    if(displayTwoDecimalPoints) {
      pointLabels = { show: true, location: 'e', edgeTolerance: -15, formatString: '%.2f' }
    } else if (noDotDisplayDecimal && chart == "chart3") {
      pointLabels = { show: true, location: 'e', edgeTolerance: -15, formatString: '%d' }
    } else {
      pointLabels = { show: true, location: 'e', edgeTolerance: -15 }
    }
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
    if(jsonUnit != null)
      $(".jqplot-xaxis-tick").last().text(jsonUnit);
    else if (chartTitle == "Abdeckung der Sektoren*" || chartTitle == "Abdeckung der Sektoren* EN")
      $(".jqplot-xaxis-tick").last().text('100%');
    else
      $(".jqplot-xaxis-tick").last().text('Mio. €');

    if($( window ).width() < 600) {
      $(".jqplot-point-label").css("left", $( window ).width() - 50);
    } else {
      $(".jqplot-point-label").css("left", "650px");
    }
  }
  function orderLegends() {
    if (orderSeries1) {
      var legentChart1 = $("#chart1 table.jqplot-table-legend tbody");
      legentChart1.children().each(function(i, tr){
        legentChart1.prepend(tr)
      });
    }
    if (orderSeries2) {
      var legent1 = $("#chart2 table.jqplot-table-legend tbody");
      legent1.children().each(function(i, tr){legent1.prepend(tr)});
    }
  }

});

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
  var xAxisNoDecimal = false;
  var oneLine = false;

  if (isEn === -1) {
    $.jqplot.sprintf.thousandsSeparator = '.';
    $.jqplot.sprintf.decimalMark = ',';
  }

  if (document.URL.search('/daten/exporte/') > 1) {
    jsonFilePath = "../../data/graphs/exporte.json";
    displayTwoDecimalPoints = true;
    orderSeries1 = true;
    orderSeries2 = true;
    xAxisNoDecimal = true;
  } else if (document.URL.search('/rohstoffgewinnung/subventionen-und-steuerliche-begunstigungen/') > 1) {
    jsonFilePath = "../../data/graphs/subventionen1.json";
    xAxisNoDecimal = true;
  } else if (document.URL.search('daten/BIP/') > 1) {
    jsonFilePath = "../../data/graphs/BIP.json";
    xAxisNoDecimal = true;
    orderSeries1 = true;
  } else if (document.URL.search('rohstoffgewinnung/wasser/') > 1) {
    jsonFilePath = "../../../data/graphs/wasser.json";
  } else if (document.URL.search('daten/gesamtdeutsche_rohstoffproduktion/') > 1) {
    jsonFilePath = "../../data/graphs/gesamtdeutsche_rohstoffproduktion.json";
    noDotDisplayDecimal = true;
  } else if (document.URL.search('daten/zahlungsabgleich/') > 1) {
    jsonFilePath = "../../data/graphs/zahlungsabgleich.json";
    xAxisNoDecimal = true;
    orderSeries1 = true;
    orderSeries2 = true;
    oneLine = true;
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
    jsonData = (isEn > 1 && jsondata.data_en != null ) ? jsondata.data_en : jsondata.data;
    category = jsondata.categories;
    title = jsonData.title;
    ticks= jsondata.xAxis;
    var labels = (isEn > 1 && jsondata.labels_en != null) ? jsondata.labels_en : jsondata.labels;
    jsonUnit = jsondata.unit;
    var colors = jsondata.color;
    var chartTitle = (isEn > 1) ? jsondata.title_en : jsondata.title;
    plotGraph('chart'+(number+1),jsonData, jsondata, chartTitle, colors, ticks, labels, displayTwoDecimalPoints);
  }

  function tickFormatter(format, val) {

    if (isEn === -1) {
      var parts=val.toString().split(".");
      return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".") + (parts[1] ? "," + parts[1] : "");
    } else {
      var parts=val.toString().split(".");
      return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") + (parts[1] ? "." + parts[1] : "");
    }
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

    var tickOptions = xAxisNoDecimal ? { formatString: "%d", formatter: tickFormatter } : { formatString: "%.1f", formatter: tickFormatter };
    $('#'+chart).height(((jsondata.data.length < 2) ? 2:jsondata.data.length) * ((jsondata.data[0].length < 2) ? 2:jsondata.data[0].length) * 40);

    plot_options = {
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
              autoscale : false,
              tickOptions: tickOptions
            }
        },
        legend:{
          show: true,
          location:'s',
          placement: 'outside',
          labels: labels
        },
        title: chartTitle
    }
    if(oneLine && "chart1" == chart){
      plot_options = {
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
                autoscale : false,
                tickOptions: tickOptions
              }
          },
          legend:{
            show: true,
            location:'s',
            placement: 'outside',
            labels: labels,
            renderer: $.jqplot.EnhancedLegendRenderer,
            rendererOptions: {
              numberRows: 1,
              seriesToggle: false
            }
          },
          title: chartTitle
      }
    }


    plot2b = $.jqplot(chart, data, plot_options);
    if(jsonUnit != null)
      $(".jqplot-xaxis-tick").last().text(jsonUnit);
    else if (chartTitle == "Abdeckung der Sektoren durch die an D-EITI teilnehmenden Unternehmen" || chartTitle == "Abdeckung der Sektoren EN")
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

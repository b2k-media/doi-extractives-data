---
title: zahlungsabgleich
layout: default
permalink: /daten/zahlungsabgleich/
breadcrumb:
  - title: Daten
    title_en: Explore Data
    permalink: /daten/
---

<main class="container-page-wrapper layout-state-pages">
  <!--<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.18/c3.css" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/c3/0.4.18/c3.min.js"></script>-->

  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="title">{% t zahlungsabgleich.title %}</h1>
    <div class="container-left-9">
        <p>
          {% t zahlungsabgleich.p1.p1 %}
          <a href="{{site.baseurl}}/daten/zahlungsabgleich/identifizierung-unternehmen">
            {% t zahlungsabgleich.p1.link1 %}
          </a>
          {% t zahlungsabgleich.p1.p2 %}
          <a href="{{site.baseurl}}/daten/zahlungsabgleich/auswahl-sektoren/">
            {% t zahlungsabgleich.p1.link2 %}
          </a>
          {% t zahlungsabgleich.p1.p3 %}
          <a href="{{site.baseurl}}/daten/zahlungsabgleich/unternehmen-und-zahlungsstroeme/">
            {% t zahlungsabgleich.p1.link3 %}
          </a>
          {% t zahlungsabgleich.p1.p4 %}
          <a href="{{site.baseurl}}/daten/zahlungsabgleich/zahlungsstroeme/#körperschaftsteuer">
            {% t zahlungsabgleich.p1.link4 %}
          </a>
          <a href="{{site.baseurl}}/daten/zahlungsabgleich/zahlungsstroeme/#feldes">
            {% t zahlungsabgleich.p1.link5 %}
          </a>
          <a href="{{site.baseurl}}/daten/zahlungsabgleich/zahlungsstroeme/#gewerbesteuer">
            {% t zahlungsabgleich.p1.link6 %}
          </a>
          <a href="{{site.baseurl}}/daten/zahlungsabgleich/zahlungsstroeme/#pachtzahlungen">
            {% t zahlungsabgleich.p1.link7 %}
          </a>
          {% t zahlungsabgleich.p1.p5 %}
          <a href="{{site.baseurl}}/daten/zahlungsabgleich/zahlungsstroeme/#wesentlichkeit">
            {% t zahlungsabgleich.p1.link8 %}
          </a>
          {% t zahlungsabgleich.p1.p6 %}
        </p>
        <p>
          {% t zahlungsabgleich.p2.p7 %}
          <a href="{{site.baseurl}}/daten/zahlungsabgleich/regierungsstellen-steuergeheimnis/">
            {% t zahlungsabgleich.p2.link8_1 %}
          </a>
          {% t zahlungsabgleich.p2.p7_1 %}
          <a href="{{site.baseurl}}/daten/zahlungsabgleich/regierungsstellen-steuergeheimnis/">
            {% t zahlungsabgleich.p2.link9 %}
          </a>
          {% t zahlungsabgleich.p2.p8 %}
        </p>
        <p>
          {% t zahlungsabgleich.p3.p9 %}
          <a href="{{site.baseurl}}/daten/zahlungsabgleich/zahlungsstroeme/#pachtzahlungen">
            {% t zahlungsabgleich.p3.link10_1 %}
          </a>
          {% t zahlungsabgleich.p3.p10 %}
        </p>
        <p>
          {% t zahlungsabgleich.p4.p11 %}
          <a href="{{site.baseurl}}/downloads/#zahlungsabgleich">
            {% t zahlungsabgleich.p4.link11 %}
          </a>
        </p>
        <br />
        <section id="förderabgaben" style="position: relative;">
          <h2>{% t zahlungsabgleich.förderabgaben.title %}</h2>
          <p>
            {% t zahlungsabgleich.förderabgaben.p1 %}
          </p>
          <br/>



          <!-- New Table
          <div id="chart"></div>
          <script>
          var chart = c3.generate({
            data: {
              x : 'x',
              labels: true,
              columns: [
                ['x', 'Körperschaftsteuer ', 'Feldes- und Förderabgaben', 'Zahlungsabgleich'],
                ['data1', 70993102, 231384156, 302377258],
                ['data2', 70993102, 231384156, 302377258]
                ],     
              names: {
                data1: 'Zahlungen Unternehmen',
                data2: 'Einnahmen staatliche Stellen'
              },
              colors: {
                data1: '#4682be',
                data2: '#28467a'
              },
              type: 'bar'
            },
            tooltip: {
              grouped: false, // Default true
              show: false
            },
            axis: {
              x: {
                type: 'category,' // this needed to load string x value
              },
              rotated: true
            },
            grid: {
              y: {
                lines: [
                  {value: 100000000},
                  {value: 200000000},
                  {value: 300000000}
                ]
              }
            },
            regions: [
              {axis: 'x', class: 'regionX'},
            ]
          });
          </script>





           END TEST -->
          <div class="explore-exploration slab-alpha">
            <div class="regions container">
              <div class="graph">
                <div class="container chart-container">
                  <div class="img-chart" id="chart1"></div>
                </div>
              </div>
              <table id="graph-legend-table">
                <tbody>
                  <tr>
                    <td class="first-image"></td>
                    <td class="text">{% t zahlungsabgleich.förderabgaben.chart_l1 %}</td>
                    <td class="second-image"></td>
                    <td class="text">{% t zahlungsabgleich.förderabgaben.chart_l2 %}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <br/>
          <p style="position: relative; margin-top: 50px !important;">
            {% t zahlungsabgleich.förderabgaben.p2 %}
            <a href="{{site.baseurl}}/daten/zahlungsabgleich/unternehmen-und-zahlungsstroeme/">
              {% t zahlungsabgleich.förderabgaben.link %}
            </a>
          </p>
        </section>
        
        <section id="abdeckung" style="position: relative;">
          <h2>{% t zahlungsabgleich.abdeckung.title %}</h2>
          <p>
            {% t zahlungsabgleich.abdeckung.p1 %}
          </p>
          <br/>
          <div class="explore-exploration slab-alpha">
            <div class="regions container">
              <div class="graph">
                <div class="container chart-container">
                  <div id="chart2"></div>
                </div>
              </div>
            </div>
          </div>
          <br/>
          <p style="font-size: 0.75rem; position: relative; margin-top: 50px !important;">
            {% t zahlungsabgleich.abdeckung.p2 %}
            <a href="{{site.baseurl}}/daten/zahlungsabgleich/identifizierung-unternehmen/">
              {% t zahlungsabgleich.abdeckung.link1 %}
            </a>
            {% t zahlungsabgleich.abdeckung.p3 %}
          </p>
          <p style="font-size: 0.75rem; ">
            {% t zahlungsabgleich.abdeckung.p4 %}
          </p>
          <p style="font-size: 0.75rem; ">
            {% t zahlungsabgleich.abdeckung.p5 %}
          </p>
          <p style="font-size: 0.75rem; ">
            {% t zahlungsabgleich.abdeckung.p6_1 %}
            <a href="https://www.bveg.de/Der-BVEG/Publikationen/Jahresberichte">
              {% t zahlungsabgleich.abdeckung.link3 %}
            </a>
            {% t zahlungsabgleich.abdeckung.p6_2 %}
          </p>
          <a href="{{site.baseurl}}/downloads/#zahlungsabgleich">
            <icon class="fa fa-file-text-o u-padding-right"></icon>
            {% t zahlungsabgleich.abdeckung.link2 %}
          </a>
          <br/><br/>
          <p>
            {% t zahlungsabgleich.abdeckung.p7 %}
          </p>
          <table>
            <tbody style="font-size: 0.9rem;">
              <tr>
                <td><strong>{% t zahlungsabgleich.abdeckung.table.head.h1 %}</strong></td>
                <td><strong>{% t zahlungsabgleich.abdeckung.table.head.h2 %}</strong></td>
                <td><strong>{% t zahlungsabgleich.abdeckung.table.head.h3 %}</strong></td>
              </tr>
              <tr>
                <td>{% t zahlungsabgleich.abdeckung.table.row1.p1 %}</td>
                <td>{% t zahlungsabgleich.abdeckung.table.row1.p2 %}</td>
                <td>{% t zahlungsabgleich.abdeckung.table.row1.p3 %}</td>
              </tr>
            </tbody>
          </table>
          <br/><br/>
        </section>
        <br />

        <br />
        <section id="unternehmen" style="position: relative;">
          <h2>{% t zahlungsabgleich.unternehmen.title %}</h2>
          <p>
            {% t zahlungsabgleich.unternehmen.p1 %}
            <a href="{{site.baseurl}}/daten/zahlungsabgleich/unternehmen-und-zahlungsstroeme/">
              {% t zahlungsabgleich.unternehmen.link1 %}
            </a>
            {% t zahlungsabgleich.unternehmen.p2 %}
          </p>
          <br/>
          <div id="chart-1" class="explore-exploration slab-alpha">
            <div class="regions container">
              <div class="graph">
                <div class="container chart-container">
                  <div id="pieChart"></div>
                </div>
              </div>
            </div>
          </div>
          <a href="{{site.baseurl}}/downloads/#zahlungsabgleich">
            <icon class="fa fa-file-text-o u-padding-right"></icon>
            {% t zahlungsabgleich.unternehmen.link2 %}
          </a>
          <p>
            {% t zahlungsabgleich.unternehmen.p3 %}
          </p>
          <table>
            <tbody style="font-size: 0.9rem;">
              <tr>
                <td><strong>{% t zahlungsabgleich.unternehmen.table.head.h1 %}</strong></td>
                <td><strong>{% t zahlungsabgleich.unternehmen.table.head.h2 %}</strong></td>
                <td><strong>{% t zahlungsabgleich.unternehmen.table.head.h3 %}</strong></td>
                <td><strong>{% t zahlungsabgleich.unternehmen.table.head.h4 %}</strong></td>
                <td><strong>{% t zahlungsabgleich.unternehmen.table.head.h5 %}</strong></td>
                <td><strong>{% t zahlungsabgleich.unternehmen.table.head.h6 %}</strong></td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row1.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row1.p2 %}
                    <sup>
                      <a href="#sub-1">
                        {% t zahlungsabgleich.sub-1.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row1.p3 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row1.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row1.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row1.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row2.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row2.p2 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row2.p3 %}
                    <sup>
                      <a href="#sub-2">
                        {% t zahlungsabgleich.sub-2.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row2.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row2.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row2.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row3.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row3.p2 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row3.p3 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row3.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row3.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row3.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row4.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row4.p2 %}
                    <sup>
                      <a href="#sub-2">
                        {% t zahlungsabgleich.sub-2.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row4.p3 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row4.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row4.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row4.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row5.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row5.p2 %}
                    <sup>
                      <a href="#sub-2">
                        {% t zahlungsabgleich.sub-2.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row5.p3 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row5.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row5.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row5.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row6.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row6.p2 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row6.p3 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row6.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row6.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row6.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row7.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row7.p2 %}
                    <sup>
                      <a href="#sub-1">
                        {% t zahlungsabgleich.sub-1.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row7.p3 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row7.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row7.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row7.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row8.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row8.p2 %}
                    <sup>
                      <a href="#sub-3">
                        {% t zahlungsabgleich.sub-3.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row8.p3 %}
                    <sup>
                      <a href="#sub-3">
                        {% t zahlungsabgleich.sub-3.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row8.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row8.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row8.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row9.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row9.p2 %}
                  <sup>
                    <a href="#sub-1">
                      {% t zahlungsabgleich.sub-1.title %}
                    </a>
                  </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row9.p3 %}
                    <sup>
                      <a href="#sub-4">
                        {% t zahlungsabgleich.sub-4.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row9.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row9.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row9.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row10.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row10.p2 %}
                    <sup>
                      <a href="#sub-3">
                        {% t zahlungsabgleich.sub-3.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row10.p3 %}
                    <sup>
                      <a href="#sub-3">
                        {% t zahlungsabgleich.sub-3.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row10.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row10.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row10.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row11.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row11.p2 %}
                    <sup>
                      <a href="#sub-3">
                        {% t zahlungsabgleich.sub-3.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row11.p3 %}
                    <sup>
                      <a href="#sub-3">
                        {% t zahlungsabgleich.sub-3.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row11.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row11.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row11.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row12.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row12.p2 %}
                    <sup>
                      <a href="#sub-1">
                        {% t zahlungsabgleich.sub-1.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row12.p3 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row12.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row12.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row12.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row13.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row13.p2 %}
                    <sup>
                      <a href="#sub-4">
                        {% t zahlungsabgleich.sub-4.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row13.p3 %}
                    <sup>
                      <a href="#sub-4">
                        {% t zahlungsabgleich.sub-4.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row13.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row13.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row13.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row14.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row14.p2 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row14.p3 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row14.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row14.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row14.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row15.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row15.p2 %}
                    <sup>
                      <a href="#sub-1">
                        {% t zahlungsabgleich.sub-1.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row15.p3 %}
                    <sup>
                      <a href="#sub-4">
                        {% t zahlungsabgleich.sub-4.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row15.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row15.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row15.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row16.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row16.p2 %}
                    <sup>
                      <a href="#sub-1">
                        {% t zahlungsabgleich.sub-1.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row16.p3 %}
                    <sup>
                      <a href="#sub-4">
                        {% t zahlungsabgleich.sub-4.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row16.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row16.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row16.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row17.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row17.p2 %}
                    <sup>
                      <a href="#sub-1">
                        {% t zahlungsabgleich.sub-1.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row17.p3 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row17.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row17.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row17.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row18.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row18.p2 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row18.p3 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row18.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row18.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row18.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row19.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row19.p2 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row19.p3 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row19.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row19.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row19.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row20.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row20.p2 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row20.p3 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row20.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row20.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row20.p6 %}</td>
              </tr>
              <!-- 12 -->
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row21.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row21.p2 %}
                    <sup>
                      <a href="#sub-3">
                        {% t zahlungsabgleich.sub-3.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row21.p3 %}
                    <sup>
                      <a href="#sub-3">
                        {% t zahlungsabgleich.sub-3.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row21.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row21.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row21.p6 %}</td>
              </tr>
              
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row22.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row22.p2 %}
                    <sup>
                      <a href="#sub-3">
                        {% t zahlungsabgleich.sub-3.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row22.p3 %}
                    <sup>
                      <a href="#sub-3">
                        {% t zahlungsabgleich.sub-3.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row22.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row22.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row22.p6 %}</td>
              </tr>
       
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row23.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row23.p2 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row23.p3 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row23.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row23.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row23.p6 %}</td>
              </tr>
              <!-- 14 -->
              <tr>
                  <td><strong>{% t zahlungsabgleich.unternehmen.table.row24.p1 %}</strong></td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row24.p2 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row24.p3 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row24.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row24.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row24.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row25.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row25.p2 %}
                   <sup>
                      <a href="#sub-1">
                        {% t zahlungsabgleich.sub-1.title %}
                      </a>
                   </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row25.p3 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row25.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row25.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row25.p6 %}</td>
              </tr>
              <tr>
                  <td>{% t zahlungsabgleich.unternehmen.table.row26.p1 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row26.p2 %}
                    <sup>
                      <a href="#sub-3">
                        {% t zahlungsabgleich.sub-3.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row26.p3 %}
                    <sup>
                      <a href="#sub-3">
                        {% t zahlungsabgleich.sub-3.title %}
                      </a>
                    </sup>
                  </td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row26.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row26.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row26.p6 %}</td>
              </tr>
              <tr>
                  <td><strong>{% t zahlungsabgleich.unternehmen.table.row27.p1 %}</strong></td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row27.p2 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row27.p3 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row27.p4 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row27.p5 %}</td>
                  <td>{% t zahlungsabgleich.unternehmen.table.row27.p6 %}</td>
              </tr>
            </tbody>
          </table>

          <p style="font-size: 0.75rem;" id="sub-1">
            <sup>{% t zahlungsabgleich.sub-1.title %}</sup>
            {% t zahlungsabgleich.sub-1.text %}
          </p>
          <p style="font-size: 0.75rem;" id="sub-4">
            <sup>{% t zahlungsabgleich.sub-2.title %}</sup>
            {% t zahlungsabgleich.sub-2.text %}
          </p>
          <p style="font-size: 0.75rem;" id="sub-3">
            <sup>{% t zahlungsabgleich.sub-3.title %}</sup>
            {% t zahlungsabgleich.sub-3.text %}
          </p>
          <p style="font-size: 0.75rem;" id="sub-2">
            <sup>{% t zahlungsabgleich.sub-4.title %}</sup>
            {% t zahlungsabgleich.sub-4.text %}
          </p>
          <a href="{{site.baseurl}}/downloads/#zahlungsabgleich">
            <icon class="fa fa-file-text-o u-padding-right"></icon>
            {% t zahlungsabgleich.unternehmen.link3 %}
          </a>
          <br/>
          <br/>
          <p>
            {% t zahlungsabgleich.unternehmen.p4 %}
            <a href="{{site.baseurl}}/daten/zahlungsabgleich/zahlungsstroeme/#besonderheiten">
              {% t zahlungsabgleich.unternehmen.link4 %}
            </a>
            {% t zahlungsabgleich.unternehmen.p5 %}
          </p>
          <p>
            {% t zahlungsabgleich.unternehmen.p6 %}
            <a href="{{site.baseurl}}/downloads/Zahlungsabgleich_Empehlungen_Unabhangiger_Verwalter.pdf">
              {% t zahlungsabgleich.unternehmen.link5 %}
            </a>
            {% t zahlungsabgleich.unternehmen.p7 %}
          </p>
          <p style="font-size: 0.75rem;">
            {% t zahlungsabgleich.unternehmen.p8 %}
            <a href="https://www.bundesanzeiger.de/">
              {% t zahlungsabgleich.unternehmen.link6 %}
            </a>
            {% t zahlungsabgleich.unternehmen.p9 %}
          </p>
        </section>
        <br />
        <section id="gewerbesteuer" style="position: relative;">
          <h2>{% t zahlungsabgleich.gewerbesteuer.title %}</h2>
          <p>
            {% t zahlungsabgleich.gewerbesteuer.p1 %}
            <a href="{{site.baseurl}}/downloads/Zahlungsabgleich_Empehlungen_Unabhangiger_Verwalter.pdf">
              {% t zahlungsabgleich.gewerbesteuer.link1 %}
            </a>
            {% t zahlungsabgleich.gewerbesteuer.p2 %}
          </p>
          <table>
            <tbody>
            <tr>
              <td><strong>{% t zahlungsabgleich.gewerbesteuer.table.head.h1 %}</strong></td>
              <td><strong>{% t zahlungsabgleich.gewerbesteuer.table.head.h2 %}</strong></td>
              <td><strong>{% t zahlungsabgleich.gewerbesteuer.table.head.h3 %}</strong></td>
              <td><strong>{% t zahlungsabgleich.gewerbesteuer.table.head.h7 %}</strong></td>
              <td><strong>{% t zahlungsabgleich.gewerbesteuer.table.head.h8 %}</strong></td>
            </tr>
            <tr>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row1.p1 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row1.p2 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row1.p3 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row1.p7 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row1.p8 %}</td>
            </tr>
            <tr>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row2.p1 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row2.p2 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row2.p3 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row2.p7 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row2.p8 %}</td>
            </tr>
            <tr>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row3.p1 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row3.p2 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row3.p3 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row3.p7 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row3.p8 %}</td>
            </tr>
            <tr>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row4.p1 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row4.p2 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row4.p3 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row4.p7 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuer.table.row4.p8 %}</td>
            </tr>
            <tr>
              <td><strong>{% t zahlungsabgleich.gewerbesteuer.table.row5.p1 %}</strong></td>
              <td><strong>{% t zahlungsabgleich.gewerbesteuer.table.row5.p2 %}</strong></td>
              <td><strong>{% t zahlungsabgleich.gewerbesteuer.table.row5.p3 %}</strong></td>
              <td><strong>{% t zahlungsabgleich.gewerbesteuer.table.row5.p7 %}</strong></td>
              <td><strong>{% t zahlungsabgleich.gewerbesteuer.table.row5.p8 %}</strong></td>
            </tr>

            </tbody>
          </table>

          <a href="{{site.baseurl}}/downloads/#zahlungsabgleich">
            <icon class="fa fa-file-text-o u-padding-right"></icon>
            {% t zahlungsabgleich.gewerbesteuer.link2 %}
          </a>


        </section>
        <br />
        <section id="gewerbesteuerEr" style="position: relative;">
          <h2>{% t zahlungsabgleich.gewerbesteuerEr.title %}</h2>
          <p>
            {% t zahlungsabgleich.gewerbesteuerEr.p1 %}
          </p>
          <p>
            {% t zahlungsabgleich.gewerbesteuerEr.p2 %}
          </p>
          <table>
            <tbody>
            <tr>
              <td><strong>{% t zahlungsabgleich.gewerbesteuerEr.table.head.h1 %}</strong></td>
              <td><strong>{% t zahlungsabgleich.gewerbesteuerEr.table.head.h2 %}</strong></td>
              <td><strong>{% t zahlungsabgleich.gewerbesteuerEr.table.head.h3 %}</strong></td>
              <td><strong>{% t zahlungsabgleich.gewerbesteuerEr.table.head.h7 %}</strong></td>
              <td><strong>{% t zahlungsabgleich.gewerbesteuerEr.table.head.h8 %}</strong></td>
            </tr>
            <tr>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row1 %}</td>
            </tr>
            <tr>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row2.p1 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row2.p2 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row2.p3 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row2.p7 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row2.p8 %}</td>
            </tr>
            <tr>
              <td style="padding-left: 30px;">{% t zahlungsabgleich.gewerbesteuerEr.table.row3.p1 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row3.p2 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row3.p3 %}
                <sup>
                  <a href="#sub-5">
                    {% t zahlungsabgleich.sub-5.title %}
                  </a>
                </sup>
              </td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row3.p7 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row3.p8 %}</td>
            </tr>
            <tr>
              <td style="padding-left: 30px;">{% t zahlungsabgleich.gewerbesteuerEr.table.row4.p1 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row4.p2 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row4.p3 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row4.p7 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row4.p8 %}</td>
            </tr>
            <tr>
              <td style="padding-left: 30px;">{% t zahlungsabgleich.gewerbesteuerEr.table.row5.p1 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row5.p2 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row5.p3 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row5.p7 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row5.p8 %}</td>
            </tr>
            <tr>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row6 %}</td>
            </tr>
            <tr>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row7.p1 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row7.p2 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row7.p3 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row7.p7 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row7.p8 %}</td>
            </tr>
            <tr>
              <td style="padding-left: 30px;">{% t zahlungsabgleich.gewerbesteuerEr.table.row8.p1 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row8.p2 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row8.p3 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row8.p7 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row8.p8 %}</td>
            </tr>
            <tr>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row9 %}</td>
            </tr>
            <tr>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row10.p1 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row10.p2 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row10.p3 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row10.p7 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row10.p8 %}</td>
            </tr>
            <tr>
              <td style="padding-left: 30px;">{% t zahlungsabgleich.gewerbesteuerEr.table.row11.p1 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row11.p2 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row11.p3 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row11.p7 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row11.p8 %}</td>
            </tr>
            <tr>
              <td style="padding-left: 30px;">{% t zahlungsabgleich.gewerbesteuerEr.table.row12.p1 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row12.p2 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row12.p3 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row12.p7 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row12.p8 %}</td>
            </tr>
            <tr>
              <td style="padding-left: 30px;">{% t zahlungsabgleich.gewerbesteuerEr.table.row13.p1 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row13.p2 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row13.p3 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row13.p7 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row13.p8 %}</td>
            </tr>
            <tr>
              <td style="padding-left: 30px;">{% t zahlungsabgleich.gewerbesteuerEr.table.row14.p1 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row14.p2 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row14.p3 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row14.p7 %}</td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row14.p8 %}</td>
            </tr>
            <tr>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row15 %}</td>
            </tr>
            <tr>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row16.p1 %}</td>
              <td><strong>{% t zahlungsabgleich.gewerbesteuerEr.table.row16.p2 %}</strong></td>
              <td><strong>{% t zahlungsabgleich.gewerbesteuerEr.table.row16.p3 %}</strong></td>
              <td><strong>{% t zahlungsabgleich.gewerbesteuerEr.table.row16.p7 %}</strong></td>
              <td>{% t zahlungsabgleich.gewerbesteuerEr.table.row16.p8 %}</td>
            </tr>
            </tbody>
          </table>
          <p style="font-size: 0.75rem;" id="sub-5">
            <sup>{% t zahlungsabgleich.sub-5.title %}</sup>
            {% t zahlungsabgleich.sub-5.text %}
          </p>
        </section>
        <section id="gewerbesteuerFa" style="position: relative;">
          <h2>{% t zahlungsabgleich.gewerbesteuerFa.title %}</h2>
          <p>
          {% t zahlungsabgleich.gewerbesteuerFa.p1 %}
        </p>
        <p>
          {% t zahlungsabgleich.gewerbesteuerFa.p2 %}
        </p>
        <p>  
          {% t zahlungsabgleich.gewerbesteuerFa.p3 %}
        </p>
        <p>
          {% t zahlungsabgleich.gewerbesteuerFa.p4 %}
        </p>
        <p>
          {% t zahlungsabgleich.gewerbesteuerFa.p5 %}
        </p>
        </section>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t zahlungsabgleich.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['zahlungsabgleich'].nav_items %}
        {% include case-studies/_nav-list.html nav_items=nav_items %}
        {% include layout/share-buttons.html %}
      </nav>
    </div>
  </section>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/static.min.js" charset="utf-8"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqPlot/1.0.8/jquery.jqplot.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jqPlot/1.0.8/jquery.jqplot.min.css"/>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqPlot/1.0.8/plugins/jqplot.barRenderer.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqPlot/1.0.8/plugins/jqplot.pieRenderer.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqPlot/1.0.8/plugins/jqplot.categoryAxisRenderer.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqPlot/1.0.8/plugins/jqplot.pointLabels.min.js"></script>
<script type="text/javascript" src="/js/jqplot.enhancedLegendRenderer.js"></script>




<script type="text/javascript" src="{{ site.baseurl_root }}/js/pages/pieGraph.js" charset="utf-8"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/pages/barGraph.js" charset="utf-8"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/explore.min.js" charset="utf-8"></script>

<script>
$('#chart1').bind('jqplotDataHighlight',
   function (ev, seriesIndex, pointIndex, data) {
     if(seriesIndex == 1)
        $("#graph-legend-table tr td:nth-child(1)").addClass('img-chart-1');
     if(seriesIndex == 0)
        $("#graph-legend-table tr td:nth-child(3)").addClass('img-chart-2');
   }
 );
$('#chart1').bind('jqplotDataUnhighlight',
  function (ev, seriesIndex, pointIndex, data) {
     $("#graph-legend-table tr td:nth-child(1)").removeClass('img-chart-1');
     $("#graph-legend-table tr td:nth-child(3)").removeClass('img-chart-2');
  }
);
</script>

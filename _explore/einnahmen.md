---
title: einnahmen
layout: default
permalink: /explore/einnahmen/
breadcrumb:
  - title: Daten
    permalink: /explore/
---

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="title">{% t einnahmen.title %}</h1>
    <div class="container-left-9">
      <p>{% t einnahmen.p1 %}</p>
      <section id="steuern" style="position: relative;">
        <h2 id="beschäftigte">
          {% t einnahmen.steuern.title %}
        </h2>
        <p>{% t einnahmen.steuern.p1 %}</p>
        <p>{% t einnahmen.steuern.p2 %}</p>
        <a href="{{site.baseurl}}/downloads/#steuern">
          <icon class="fa fa-file-text-o u-padding-right"></icon>
          {% t einnahmen.steuern.daten_einsehen %}
        </a>
        <br/>
        <h3 id="körperschaftsteuer">
          {% t einnahmen.steuern.körperschaftsteuer.title %}
        </h3>
        <p>{% t einnahmen.steuern.körperschaftsteuer.p %}</p>

        <h3 id="gewerbesteuer">
          {% t einnahmen.steuern.gewerbesteuer.title %}
        </h3>
        <p>{% t einnahmen.steuern.gewerbesteuer.p1 %}</p>
        <p>{% t einnahmen.steuern.gewerbesteuer.p2 %}</p>

        <h3 id="einkommensteuer">
          {% t einnahmen.steuern.einkommensteuer.title %}
        </h3>
        <p>{% t einnahmen.steuern.einkommensteuer.p1 %}</p>
        <p>{% t einnahmen.steuern.einkommensteuer.p2 %}</p>
        <p>{% t einnahmen.steuern.einkommensteuer.p3 %}</p>
        <p>{% t einnahmen.steuern.einkommensteuer.p4 %}</p>

        <h3 id="solidaritätszuschlag">
          {% t einnahmen.steuern.solidaritätszuschlag.title %}
        </h3>
        <p>{% t einnahmen.steuern.solidaritätszuschlag.p1 %}</p>
        <p>{% t einnahmen.steuern.solidaritätszuschlag.p2 %}</p>
        <p>
          {% t einnahmen.steuern.solidaritätszuschlag.p3_1 %}
          <a href="{{ site.baseurl }}/explore/how-it-work/anfallende-zahlungen">
          {% t einnahmen.steuern.solidaritätszuschlag.link1 %}
          </a>
          {% t einnahmen.steuern.solidaritätszuschlag.p3_2 %}
          <a href="{{ site.baseurl }}/explore/how-it-work/umgang-mit-der-natur">
          {% t einnahmen.steuern.solidaritätszuschlag.link2 %}
          </a>
          {% t einnahmen.steuern.solidaritätszuschlag.p3_3 %}
        </p>
      </section>
      <br/>
      <section id="steuereinnahmen" style="position: relative;">
        <h3>{% t einnahmen.steuereinnahmen.title %}</h3>
        <table class="einnahmen_table">
          <tbody>
            <tr>
              <th><strong>{% t einnahmen.steuereinnahmen.th1 %}</strong></th>
              <th></th>
              <th></th>
              <th></th>
              <th align="center"><strong>{% t einnahmen.steuereinnahmen.th2.title %}</strong></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td></td>
              <td>{% t einnahmen.steuereinnahmen.th2.th21 %}</td>
              <td>{% t einnahmen.steuereinnahmen.th2.th22 %}</td>
              <td>{% t einnahmen.steuereinnahmen.th2.th23 %}</td>
              <td>{% t einnahmen.steuereinnahmen.th2.th24 %}</td>
              <td>{% t einnahmen.steuereinnahmen.th2.th25 %}</td>
              <td>{% t einnahmen.steuereinnahmen.th2.th26 %}</td>
            </tr>
            <tr>
              <th></th><th></th><th></th>
              <th>{% t einnahmen.steuereinnahmen.th2.th0 %}</th>
              <th></th><th></th><th></th>
            </tr>
            <tr>
              <td>{% t einnahmen.steuereinnahmen.row1.td1 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row1.td2 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row1.td3 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row1.td4 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row1.td5 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row1.td6 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row1.td7 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.steuereinnahmen.row2.td1 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row2.td2 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row2.td3 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row2.td4 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row2.td5 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row2.td6 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row2.td7 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.steuereinnahmen.row3.td1 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row3.td2 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row3.td3 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row3.td4 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row3.td5 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row3.td6 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row3.td7 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.steuereinnahmen.row4.td1 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row4.td2 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row4.td3 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row4.td4 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row4.td5 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row4.td6 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row4.td7 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.steuereinnahmen.row5.td1 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row5.td2 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row5.td3 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row5.td4 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row5.td5 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row5.td6 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row5.td7 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.steuereinnahmen.row6.td1 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row6.td2 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row6.td3 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row6.td4 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row6.td5 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row6.td6 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row6.td7 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.steuereinnahmen.row7.td1 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row7.td2 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row7.td3 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row7.td4 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row7.td5 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row7.td6 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row7.td7 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.steuereinnahmen.row8 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.steuereinnahmen.row9.td1 %}</td>
              <td></td>
              <td></td>
              <td>{% t einnahmen.steuereinnahmen.row9.td4 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row9.td5 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row9.td6 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row9.td7 %}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <br/>
      <section id="förder_feldesabgaben" style="position: relative;">
        <h3 id="beschäftigte">
          {% t einnahmen.förder_feldesabgaben.title %}
        </h3>
        <p>{% t einnahmen.förder_feldesabgaben.p1 %}</p>
        <a href="{{site.baseurl}}/downloads/#daten-zur-exporte">
          <icon class="fa fa-file-text-o u-padding-right"></icon>
          {% t einnahmen.förder_feldesabgaben.daten_einsehen %}
        </a>
        <br/><br/>
        <p>{% t einnahmen.förder_feldesabgaben.p2 %}</p>
        <table class="einnahmen_table_1">
          <tbody>
            <tr>
              <th><strong>{% t einnahmen.förder_feldesabgaben.table1.th1 %}</strong></th>
              <th><strong>{% t einnahmen.förder_feldesabgaben.table1.th2 %}</strong></th>
              <th><strong>{% t einnahmen.förder_feldesabgaben.table1.th3 %}</strong></th>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row1.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row1.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row1.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row2.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row2.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row2.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row3.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row3.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row3.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row4.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row4.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row4.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row5.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row5.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row5.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row6.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row6.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row6.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row7.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row7.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row7.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row8.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row8.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row8.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row9.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row9.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row9.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row10.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row10.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row10.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row11.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row11.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row11.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row12.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row12.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row12.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row13.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row13.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row13.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row14.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row14.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row14.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row15.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row15.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row15.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row16.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row16.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row16.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row17.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row17.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row17.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row18.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row18.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row18.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row19.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row19.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row19.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row20.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row20.td2 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row20.td3 %}</td>
            </tr>
          </tbody>
        </table>
        <p>{% t einnahmen.förder_feldesabgaben.p3 %}</p>
        <table class="einnahmen_table_2">
          <tbody>
            <tr>
              <td colspan="2"><strong>{% t einnahmen.förder_feldesabgaben.table2.title %}</strong></td>
            </tr>
            <tr>
              <td><strong>{% t einnahmen.förder_feldesabgaben.table2.th1 %}</strong></td>
              <td><strong>{% t einnahmen.förder_feldesabgaben.table2.th2 %}</strong></td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table2.row1.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table2.row1.td2 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table2.row2.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table2.row2.td2 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table2.row3.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table2.row3.td2 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table2.row4.td1 %}</td>
              <td>{% t einnahmen.förder_feldesabgaben.table2.row4.td2 %}</td>
            </tr>
          </tbody>
        </table>
      </section>
      <br/>
      <section id="umsatz" style="position: relative;">
        <h3>
          {% t einnahmen.umsatz.title %}
        </h3>
        <p>{% t einnahmen.umsatz.p1 %}</p>
        <div class="explore-exploration slab-alpha">
          <div class="regions container">
            <div class="graph">
              <div class="container chart-container">
                <div id="chart1"></div>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: 110px !important">
          <a href="{{site.baseurl}}/downloads/#daten-zur-exporte">
            <icon class="fa fa-file-text-o u-padding-right"></icon>
            {% t einnahmen.umsatz.daten_einsehen %}
          </a>
        </div>
        <br/>
      </section>
      <section id="explanation" style="position: relative;">
        <p id="explanation-11">
          <sup>{% t einnahmen.umsatz.star1.title %}</sup>
          {% t einnahmen.umsatz.star1.text %}
        </p>
        <p id="explanation-11">
          <sup>{% t einnahmen.umsatz.star2.title %}</sup>
          {% t einnahmen.umsatz.star2.text %}
        </p>
      </section>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t einnahmen.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['einnahmen'].nav_items %}
        {% include case-studies/_nav-list.html nav_items=nav_items %}
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

<script type="text/javascript" src="{{ site.baseurl_root }}/js/pages/barGraph.js" charset="utf-8"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/explore.min.js" charset="utf-8"></script>

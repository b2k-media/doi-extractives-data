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
      <p>
        {% t einnahmen.p1_1 %}
        <a href="{{site.baseurl}}/explore/how-it-work/anfallende-zahlungen/">
          {% t einnahmen.link %}
        </a>
        {% t einnahmen.p1_2 %}
        <a href="{{site.baseurl}}/explore/how-it-work/umgang-mit-der-natur/">
          {% t einnahmen.link1 %}
        </a>
        {% t einnahmen.p1_3 %}
      </p>
      <section id="steuern" style="position: relative;">
        <h2 id="beschäftigte">
          {% t einnahmen.steuern.title %}
        </h2>
        <p>{% t einnahmen.steuern.p1 %}</p>
        <p>{% t einnahmen.steuern.p2 %}</p>
        <br/>
      </section>
      <br/>
      <section id="steuereinnahmen" style="position: relative;">
        <div class="chart-title-style" style="padding-bottom: 20px">{% t einnahmen.steuereinnahmen.title %}</div>
        <table class="einnahmen_table">
          <tbody>
            <tr>
              <td><strong>{% t einnahmen.steuereinnahmen.th1 %}</strong></td>
              <th></th>
              <th></th>
              <th></th>
              <th align="center"><strong>{% t einnahmen.steuereinnahmen.th2.title %}</strong></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td></td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.th2.th21 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.th2.th22 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.th2.th23 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.th2.th24 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.th2.th25 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.th2.th26 %}</td>
            </tr>
            <tr>
              <th></th><th></th><th></th>
              <th>{% t einnahmen.steuereinnahmen.th2.th0 %}</th>
              <th></th><th></th><th></th>
            </tr>
            <tr>
              <td>{% t einnahmen.steuereinnahmen.row1.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row1.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row1.td3 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row1.td4 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row1.td5 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row1.td6 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row1.td7 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.steuereinnahmen.row2.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row2.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row2.td3 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row2.td4 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row2.td5 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row2.td6 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row2.td7 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.steuereinnahmen.row3.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row3.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row3.td3 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row3.td4 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row3.td5 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row3.td6 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row3.td7 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.steuereinnahmen.row4.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row4.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row4.td3 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row4.td4 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row4.td5 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row4.td6 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row4.td7 %}</td>
            </tr>
            <tr>
              <td><strong>{% t einnahmen.steuereinnahmen.row5.td1 %}</strong></td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row5.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row5.td3 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row5.td4 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row5.td5 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row5.td6 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row5.td7 %}</td>
            </tr>
            <tr style="height: 25px">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>{% t einnahmen.steuereinnahmen.row6.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row6.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row6.td3 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row6.td4 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row6.td5 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row6.td6 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row6.td7 %}</td>
            </tr>
            <tr>
              <td><strong>{% t einnahmen.steuereinnahmen.row7.td1 %}</strong></td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row7.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row7.td3 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row7.td4 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row7.td5 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row7.td6 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row7.td7 %}</td>
            </tr>
            <tr style="height: 25px">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>{% t einnahmen.steuereinnahmen.row8 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.steuereinnahmen.row9.td1 %}</td>
              <td></td>
              <td></td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row9.td4 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row9.td5 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row9.td6 %}</td>
              <td class="text-align-right">{% t einnahmen.steuereinnahmen.row9.td7 %}</td>
            </tr>
          </tbody>
        </table>
        <p style="font-size: 0.75rem">
          {% t downloads.table_link.p1 %}
            <a href="{{site.baseurl}}/downloads/#steuern">
              <icon class="fa fa-file-text-o u-padding-right" style="padding-left: 5px"></icon>
              {% t downloads.table_link.link %}
            </a>
          {% t downloads.table_link.p2 %}
        </p>
      </section>
      <br/>
      <section id="förder_feldesabgaben" style="position: relative;">
        <h2 id="beschäftigte">
          {% t einnahmen.förder_feldesabgaben.title %}
        </h2>
        <p>{% t einnahmen.förder_feldesabgaben.p1 %}</p>
        <a target="_blank" href="{{site.baseurl}}/downloads/#förderabgaben">
          <icon class="fa fa-file-text-o u-padding-right"></icon>
          {% t einnahmen.förder_feldesabgaben.daten_einsehen %}
        </a>
        <br/><br/>
        <p>{% t einnahmen.förder_feldesabgaben.p2 %}</p><br/>
        <div class="chart-title-style" style="padding-bottom: 20px">{% t einnahmen.förder_feldesabgaben.table1.title %}</div>
        <table class="einnahmen_table_1" style="width: 100%">
          <tbody>
            <tr>
              <td><strong>{% t einnahmen.förder_feldesabgaben.table1.th1 %}</strong></td>
              <td><strong>{% t einnahmen.förder_feldesabgaben.table1.th2 %}</strong></td>
              <td><strong>{% t einnahmen.förder_feldesabgaben.table1.th3 %}</strong></td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row1.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row1.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row1.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row2.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row2.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row2.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row3.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row3.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row3.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row4.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row4.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row4.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row5.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row5.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row5.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row6.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row6.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row6.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row7.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row7.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row7.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row8.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row8.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row8.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row9.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row9.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row9.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row10.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row10.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row10.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row11.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row11.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row11.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row12.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row12.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row12.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row13.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row13.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row13.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row14.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row14.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row14.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row15.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row15.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row15.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row16.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row16.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row16.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row17.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row17.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row17.td3 %}</td>
            </tr>

            <tr style="height: 33px">
              <td> </td>
              <td> </td>
              <td> </td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row18.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row18.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row18.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row19.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row19.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row19.td3 %}</td>
            </tr>
            <tr>
              <td>{% t einnahmen.förder_feldesabgaben.table1.row20.td1 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row20.td2 %}</td>
              <td class="text-align-right">{% t einnahmen.förder_feldesabgaben.table1.row20.td3 %}</td>
            </tr>
          </tbody>
        </table>
        <p style="font-size: 0.75rem">
          {% t downloads.table_link.p1 %}
            <a href="{{site.baseurl}}/downloads/#steuern">
              <icon class="fa fa-file-text-o u-padding-right" style="padding-left: 5px"></icon>
              {% t downloads.table_link.link %}
            </a>
          {% t downloads.table_link.p2 %}</p>
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
          </tbody>
        </table>
        <p style="font-size: 0.75rem">
          {% t downloads.table_link.p1 %}
            <a href="{{site.baseurl}}/downloads/#steuern">
              <icon class="fa fa-file-text-o u-padding-right" style="padding-left: 5px"></icon>
              {% t downloads.table_link.link %}
            </a>
          {% t downloads.table_link.p2 %}
        </p>
      </section>
      <br/>
      
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

---
title: einnahmen
layout: default
permalink: /explore/einnahmen/
breadcrumb:
  - title: einnahmen
    permalink: /explore/
---

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="title">{% t einnahmen.title %}</h1>
    <div class="container-left-9">
      <p>{% t einnahmen.p1 %}</p>
      <section id="steuern" style="position: relative;">
        <h3 id="beschäftigte">
          {% t einnahmen.steuern.title %}
        </h3>
        <p>{% t einnahmen.steuern.p1 %}</p>
        <p>{% t einnahmen.steuern.p2 %}</p>
        <a href="{{site.baseurl}}/downloads/#daten-zur-exporte">
          <icon class="fa fa-file-text-o u-padding-right"></icon>
          {% t einnahmen.steuern.daten_einsehen %}
        </a>
        <br/>
      </section>
      <br/>
      <section id="steuereinnahmen" style="position: relative;">
          {% t einnahmen.steuereinnahmen.title %}
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
              <td>{% t einnahmen.steuereinnahmen.row9.td2 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row9.td3 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row9.td4 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row9.td5 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row9.td6 %}</td>
              <td>{% t einnahmen.steuereinnahmen.row9.td7 %}</td>
            </tr>
          </tbody>
        </table>
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

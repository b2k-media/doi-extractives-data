---
title: gesamtdeutsche_rohstoffproduktion
layout: default
permalink: /daten/gesamtdeutsche_rohstoffproduktion/
breadcrumb:
  - title: Daten
    title_en: Explore Data
    permalink: /daten/
---
<link rel="stylesheet" type="text/css" href="{{ site.baseurl_root }}/css/slick-theme.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="title">{% t gesamtdeutsche_rohstoffproduktion.title %}</h1>
    <div class="container-left-9">
      <section id="gesamtdeutsche_rohstoffproduktion" style="position: relative;">
        <p>{% t gesamtdeutsche_rohstoffproduktion.p1 %}</p>
        <p>{% t gesamtdeutsche_rohstoffproduktion.p2 %}</p>
        <a target="_blank" href="{{site.baseurl}}/downloads/#chart-title-1">
          <icon class="fa fa-file-text-o u-padding-right"></icon>
          {% t gesamtdeutsche_rohstoffproduktion.daten_einsehen %}
        </a>

        <br/><br/>
        <section style="position: relative;">
        <div class="chart-title-style" id="rohstoff-menge">{% t gesamtdeutsche_rohstoffproduktion.table1.h1 %}</div>
        <div class="explore-exploration slab-alpha">
          <div class="regions container">
            <div class="graph">
              <div class="container chart-container">
                <div id="chart1"></div>
              </div>
            </div>
          </div>
        </div>
        <br>

        <p style="font-size: 13px">{% t gesamtdeutsche_rohstoffproduktion.table1.star1 %}</p>
        <p style="font-size: 13px">{% t gesamtdeutsche_rohstoffproduktion.table1.star2 %}</p>
        </section>
        <br/>

        <section style="position: relative;">
        <div class="chart-title-style" id="rohstoff-wert">{% t gesamtdeutsche_rohstoffproduktion.table2.h1 %}</div>

        <div class="explore-exploration slab-alpha">
          <div class="regions container">
            <div class="graph">
              <div class="container chart-container">
                <div id="chart3"></div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <p style="font-size: 13px">{% t gesamtdeutsche_rohstoffproduktion.table2.note %}</p>
        <p style="font-size: 13px">{% t gesamtdeutsche_rohstoffproduktion.table2.star1 %}</p>
        <p style="font-size: 13px">{% t gesamtdeutsche_rohstoffproduktion.table2.star2 %}</p>
        </section>

    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t gesamtdeutsche_rohstoffproduktion.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['gesamtdeutsche_rohstoffproduktion'].nav_items %}
        {% include case-studies/_nav-list.html nav_items=nav_items %}
        {% include layout/share-buttons.html %}
      </nav>
    </div>
  </section>
</main>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqPlot/1.0.8/jquery.jqplot.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jqPlot/1.0.8/jquery.jqplot.min.css"/>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqPlot/1.0.8/plugins/jqplot.barRenderer.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqPlot/1.0.8/plugins/jqplot.pieRenderer.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqPlot/1.0.8/plugins/jqplot.categoryAxisRenderer.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqPlot/1.0.8/plugins/jqplot.pointLabels.min.js"></script>

<script type="text/javascript" src="{{ site.baseurl_root }}/js/pages/barGraph.js" charset="utf-8"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/explore.min.js" charset="utf-8"></script>

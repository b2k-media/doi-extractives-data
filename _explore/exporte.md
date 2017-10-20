---
title: exporte
layout: default
permalink: /daten/exporte/
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
    <h1 id="title">{% t exporte.title %}</h1>

    <div class="container-left-9">
        <p>{% t exporte.p %}</p>
        <br />

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
          {% t bip.daten_einsehen_pre %}
          <a href="{{site.baseurl}}/downloads/#exporte">
            <icon class="fa fa-file-text-o u-padding-right" style="padding-left: 5px"></icon>
            {% t bip.daten_einsehen %}
          </a>
          {% t bip.daten_einsehen_post %}

        </div>
        <br/><br/>
        <div class="explore-exploration slab-alpha">
          <div class="regions container">
            <div class="graph">
              <div class="container chart-container">
                <div id="chart2"></div>
              </div>
            </div>
          </div>
        </div>
        <div style="margin-top: 110px !important">
            {% t bip.daten_einsehen_pre %}
            <a href="{{site.baseurl}}/downloads/#daten-zur-exporte-nach-menge">
              <icon class="fa fa-file-text-o u-padding-right" style="padding-left: 5px"></icon>
              {% t bip.daten_einsehen %}
            </a>
            {% t bip.daten_einsehen_post %}

          </div>

    </div>
    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t exporte.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['exporte'].nav_items %}
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

<script type="text/javascript" src="{{ site.baseurl_root }}/js/pages/barGraph.js" charset="utf-8"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/pages/pieGraph.js" charset="utf-8"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/explore.min.js" charset="utf-8"></script>

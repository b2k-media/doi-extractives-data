---
title: BIP und Umsatz
layout: default
permalink: /explore/BIP/
breadcrumb:
  - title: Daten
    permalink: /explore/
---

<link rel="stylesheet" type="text/css" href="{{ site.baseurl_root }}/css/slick-theme.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="intro">{% t bip.title %}</h1>

    <div class="container-left-9">
      <section id="bip" style="position: relative;">
        <h3>{% t bip.bip.title %}</h3>
        <p>
          {% t bip.bip.p1_1 %}
          <span class="term term_end" data-term="Bruttoinlandsprodukt" title="Click to define" tabindex="0">
            {% t bip.bip.p1_2 %}
            <icon class="icon-book"></icon>
          </span>
            {% t bip.bip.p1_3 %}
           <span class="term term_end" data-term="Bruttowertschöpfung" title="Click to define" tabindex="0">
              {% t bip.bip.p1_4 %}
             <icon class="icon-book"></icon>
           </span>
            {% t bip.bip.p1_5 %}
              <b>{% t bip.bip.p1_6 %}</b>
            {% t bip.bip.p1_7 %}
        </p>

        <section id="umsatz" style="position: relative;">
          <h3>
            {% t bip.umsatz.title %}
          </h3>
          <p>{% t bip.umsatz.p1 %}</p>
          <div class="explore-exploration slab-alpha">
            <div class="regions container">
              <div class="graph">
                <div class="container chart-container">
                  <div id="chart1"></div>
                </div>
              </div>
            </div>
          </div>

          <br/>
        </section>
        <section id="explanation" style="position: relative; margin-top: 110px !important;">
          <p id="explanation-11">
            <sup style="font-size: 20px; font-weight: bold">{% t bip.umsatz.star1.title %}</sup>
            {% t bip.umsatz.star1.text %}
          </p>
          <div >
          <p>
            {% t bip.daten_einsehen_pre %}
            <a href="{{site.baseurl}}/downloads/#bip">
              <icon class="fa fa-file-text-o u-padding-right"></icon>
              {% t bip.daten_einsehen %}
            </a>
            {% t bip.daten_einsehen_post %}
          </p>
          </div>
        </section>
      </section>
    </div>
    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t bip.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['bip'].nav_items %}
        {% include case-studies/_nav-list.html nav_items=nav_items %}
      </nav>
    </div>
  </section>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/static.min.js" charset="utf-8"></script>
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

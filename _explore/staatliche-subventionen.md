---
title: Staatliche Subventionen
layout: default
permalink: /explore/staatliche-subventionen/
breadcrumb:
  - title: Deutscher Rohstoffsektor
    permalink: /explore/how-it-work/
---

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="title">{% t staatliche-subventionen.title %}</h1>

    <div class="container-left-9">
      <section id="intro" style="position: relative;">
        <p>
          {% t staatliche-subventionen.p1.p1 %}
          <span class="term term_end" data-term="subventionen" title="Click to define" tabindex="0">
            {% t staatliche-subventionen.p1.k1 %}
            <icon class="icon-book"></icon>
          </span>{% t staatliche-subventionen.p1.p2 %}
        </p>
      </section>

      <section>
      <br/>
      <div class="explore-exploration slab-alpha">
        <div class="regions container">
          <div class="graph">
            <div class="container chart-container">
              <div id="chart1"></div>
            </div>
          </div>
        </div>
      </div>
      <h2 id="zuschusse-fur-den-absatz-der-steinkohle" class="margin-class">{% t staatliche-subventionen.zuschusse.title %}</h2>
      <p>
        {% t staatliche-subventionen.zuschusse.p1 %}
      </p>
      <h3 id="1-entwicklung">{% t staatliche-subventionen.zuschusse.entwicklung.title %}</h3>
      <p>
        {% t staatliche-subventionen.zuschusse.entwicklung.p %}
      </p>
      <h3 id="1-kontrolle">{% t staatliche-subventionen.zuschusse.kontrolle.title %}</h3>
      <p>
        {% t staatliche-subventionen.zuschusse.kontrolle.p %}
      </p>
      <h3 id="1-vorsorge">{% t staatliche-subventionen.zuschusse.vorsorge.title %}</h3>
      <p>
        {% t staatliche-subventionen.zuschusse.vorsorge.p %}
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
      <h2 id="anpassungsgeld" class="margin-class">{% t staatliche-subventionen.anpassungsgeld.title %}</h2>
      <p>
        {% t staatliche-subventionen.anpassungsgeld.p %}
      </p>
      <h3 id="2-beschaftigte">{% t staatliche-subventionen.anpassungsgeld.beschaftigte.title %}</h3>
      <p>
        {% t staatliche-subventionen.anpassungsgeld.beschaftigte.p %}
      </p>
      </section>
      <h3 id="2-kontrolle">{% t staatliche-subventionen.anpassungsgeld.kontrolle.title %}</h3>
      <p>
        {% t staatliche-subventionen.anpassungsgeld.kontrolle.p %}
      </p>
      <br/>
      <div class="explore-exploration slab-alpha">
        <div class="regions container">
          <div class="graph">
            <div class="container chart-container">
              <div id="chart3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t staatliche-subventionen.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['staatliche-subventionen'].nav_items %}
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

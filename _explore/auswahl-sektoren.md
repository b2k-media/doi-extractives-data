---
title: auswahl-sektoren
layout: default
permalink: /daten/zahlungsabgleich/auswahl-sektoren/
breadcrumb:
  - title: Daten/Zahlungsabgleich
    permalink: /daten/zahlungsabgleich/
---

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="title">{% t auswahl-sektoren.title %}</h1>
    <div class="container-left-9">
        <p>{% t auswahl-sektoren.p1 %}</p>

        <ul>
          <li>{% t auswahl-sektoren.li1 %}</li>
          <li>{% t auswahl-sektoren.li2 %}</li>
          <li>{% t auswahl-sektoren.li3 %}</li>
          <li>{% t auswahl-sektoren.li4 %}</li>
        </ul>

        <p>
          {% t auswahl-sektoren.p2 %}
          <a href="{{site.baseurl}}/rohstoffgewinnung/kohle/">
            {% t auswahl-sektoren.link1 %}
          </a>
          {% t auswahl-sektoren.p3 %}
          <a  href="{{site.baseurl}}/rohstoffgewinnung/subventionen-und-steuerliche-begunstigungen/">
            {% t auswahl-sektoren.link2 %}
          </a>
        {% t auswahl-sektoren.p4 %}
        </p>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t auswahl-sektoren.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['auswahl-sektoren'].nav_items %}
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

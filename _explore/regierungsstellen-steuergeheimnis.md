---
title: regierungsstellen-steuergeheimnis
layout: default
permalink: /daten/zahlungsabgleich/regierungsstellen-steuergeheimnis/
breadcrumb:
  - title: Daten/Zahlungsabgleich
    permalink: /daten/zahlungsabgleich/
---

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="title">{% t regierungsstellen-steuergeheimnis.title %}</h1>
    <div class="container-left-9">
      <section class="container" style="position: relative;">
        <h2 id="regierungsstellen">{% t regierungsstellen-steuergeheimnis.regierungsstellen.h %}</h2>
        <p>{% t regierungsstellen-steuergeheimnis.regierungsstellen.p1 %}</p>
        <ul>
          <li>{% t regierungsstellen-steuergeheimnis.regierungsstellen.list1.li1 %}</li>
          <li>{% t regierungsstellen-steuergeheimnis.regierungsstellen.list1.li2 %}</li>
          <li>{% t regierungsstellen-steuergeheimnis.regierungsstellen.list1.li3 %}</li>
          <li>{% t regierungsstellen-steuergeheimnis.regierungsstellen.list1.li4 %}</li>
        </ul>
      </section>
      <section id="steuergeheimnis" class="container" style="position: relative;">
        <h2>{% t regierungsstellen-steuergeheimnis.steuergeheimnis.h %}</h2>
        <p>
          {% t regierungsstellen-steuergeheimnis.steuergeheimnis.p1 %}
          <a href="{{site.baseurl}}/rohstoffgewinnung/steuergeheimnis/">
            {% t regierungsstellen-steuergeheimnis.steuergeheimnis.link1 %}
          </a>
          {% t regierungsstellen-steuergeheimnis.steuergeheimnis.p1 %}
        </p>
        <ol>
          <li>{% t regierungsstellen-steuergeheimnis.steuergeheimnis.list1.li1 %}</li>
          <li>{% t regierungsstellen-steuergeheimnis.steuergeheimnis.list1.li2 %}</li>
        </ol>
        <p>{% t regierungsstellen-steuergeheimnis.steuergeheimnis.p3 %}</p>
      </section>


    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t regierungsstellen-steuergeheimnis.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['regierungsstellen-steuergeheimnis'].nav_items %}
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

---
title: zahlungsabgleich
layout: default
permalink: /explore/zahlungsabgleich/
breadcrumb:
  - title: Daten
    permalink: /explore/
---

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="title">{% t zahlungsabgleich.title %}</h1>
    <div class="container-left-9">
        <p>
          {% t zahlungsabgleich.p1.p1 %}
          <a href="{{site.baseurl}}/explore/how-it-work/anfallende-zahlungen/#gewerbesteuer/">
            {% t zahlungsabgleich.p1.link1 %}
          </a>
          {% t zahlungsabgleich.p1.p2 %}
          <a href="{{site.baseurl}}/explore/how-it-work/anfallende-zahlungen/#gewerbesteuer/">
            {% t zahlungsabgleich.p1.link2 %}
          </a>
          {% t zahlungsabgleich.p1.p3 %}
          <a href="{{site.baseurl}}/explore/how-it-work/anfallende-zahlungen/#gewerbesteuer/">
            {% t zahlungsabgleich.p1.link3 %}
          </a>
          {% t zahlungsabgleich.p1.p4 %}
          <a href="{{site.baseurl}}/explore/how-it-work/anfallende-zahlungen/#gewerbesteuer/">
            {% t zahlungsabgleich.p1.link4 %}
          </a>
          <a href="{{site.baseurl}}/explore/how-it-work/anfallende-zahlungen/#gewerbesteuer/">
            {% t zahlungsabgleich.p1.link5 %}
          </a>
          <a href="{{site.baseurl}}/explore/how-it-work/anfallende-zahlungen/#gewerbesteuer/">
            {% t zahlungsabgleich.p1.link6 %}
          </a>
          <a href="{{site.baseurl}}/explore/how-it-work/anfallende-zahlungen/#gewerbesteuer/">
            {% t zahlungsabgleich.p1.link7 %}
          </a>
          {% t zahlungsabgleich.p1.p5 %}
          <a href="{{site.baseurl}}/explore/how-it-work/anfallende-zahlungen/#gewerbesteuer/">
            {% t zahlungsabgleich.p1.link8 %}
          </a>
          {% t zahlungsabgleich.p1.p6 %}
        </p>
        <p>
          {% t zahlungsabgleich.p2.p7 %}
          <a href="{{site.baseurl}}/explore/how-it-work/anfallende-zahlungen/#gewerbesteuer/">
            {% t zahlungsabgleich.p2.link9 %}
          </a>
          {% t zahlungsabgleich.p2.p8 %}
        </p>
        <p>
          {% t zahlungsabgleich.p3.p9 %}
          <a href="{{site.baseurl}}/explore/how-it-work/anfallende-zahlungen/#gewerbesteuer/">
            {% t zahlungsabgleich.p3.link10 %}
          </a>
          {% t zahlungsabgleich.p3.p10 %}
        </p>
        <p>
          {% t zahlungsabgleich.p4.p11 %}
          <a href="{{site.baseurl}}/explore/how-it-work/anfallende-zahlungen/#gewerbesteuer/">
            {% t zahlungsabgleich.p4.link11 %}
          </a>
        </p>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t zahlungsabgleich.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['zahlungsabgleich'].nav_items %}
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

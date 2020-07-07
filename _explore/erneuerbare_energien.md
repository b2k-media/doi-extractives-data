---
title: Erneuerbare Energien
layout: default
permalink: /rohstoffgewinnung/erneuerbare_energien/
breadcrumb:
  - title: Deutscher Rohstoffsektor
    title_en: German Commodities Sector
    permalink: /rohstoffgewinnung/
---
<link rel="stylesheet" type="text/css" href="{{ site.baseurl_root }}/css/slick-theme.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">
    {% include breadcrumb.html %}
    <h1 id="title">{% t erneuerbare_energien.title %}</h1>
    <div class="container-left-9">
      <section id="erneuerbare_energienentnahme" style="position: relative;">
        <p>
          {% t erneuerbare_energien.p1_1 %}
          <sup class="padding-right">
            <a href="#explanation-1">
              {% t erneuerbare_energien.sup1.title %}
            </a>
          </sup>
          {% t erneuerbare_energien.p1_2 %}
        </p>
        <br/>
        <div>
          <img
            class="icon-tab-1"
            src="{{ site.baseurl_root }}{% t erneuerbare_energien.chart_src %}"
            style="width: 100%"
          />
        </div>
        <!-- <div id="chart-1" class="explore-exploration slab-alpha">
          <div class="regions container">
            <div class="graph">
              <div class="container chart-container">
                <div id="pieChart"></div>
              </div>
            </div>
          </div>
        </div> -->
        <p class="source">{% t erneuerbare_energien.source %}</p>
        <p>
          {% t erneuerbare_energien.p2_1 %}
          <sup>
            <a href="#explanation-2">
              {% t erneuerbare_energien.sup2.title %}
            </a>
          </sup><span class="padding-right">.</span>
          {% t erneuerbare_energien.p2_2 %}
        </p>
        <p>{% t erneuerbare_energien.p3 %}</p>
        <p>{% t erneuerbare_energien.p4 %}</p>
        <p>{% t erneuerbare_energien.p5 %}</p>
        <p>{% t erneuerbare_energien.p6 %}</p>
        <p>{% t erneuerbare_energien.p7 %}</p>
        <p>{% t erneuerbare_energien.p8 %}</p>
        <p>{% t erneuerbare_energien.p9 %}</p>
        <p>{% t erneuerbare_energien.p10 %}</p>
        <p>{% t erneuerbare_energien.p11 %}</p>
        <p>{% t erneuerbare_energien.p12 %}</p>
        <p>{% t erneuerbare_energien.p13 %}</p>
        <p>{% t erneuerbare_energien.p14 %}</p>
        <h2>{% t erneuerbare_energien.a %}</h2>
        <p>{% t erneuerbare_energien.p15 %}</p>
        <h3>{% t erneuerbare_energien.headline1 %}</h3>
        <h3>{% t erneuerbare_energien.headline2 %}</h3>
        <sup class="padding-right">
            <a href="#explanation-3">
              {% t erneuerbare_energien.sup3.title %}
            </a>
        </sup>
        <p>{% t erneuerbare_energien.p16 %}</p>
        <div style="background-color:#E7E6E6; padding: 15px;">
            <h3>{% t erneuerbare_energien.headline3 %}</h3>
            <p>{% t erneuerbare_energien.p17 %}</p>
            <sup class="padding-right">
                <a href="#explanation-4">
                  {% t erneuerbare_energien.sup4.title %}
                </a>
            </sup>
            <p>{% t erneuerbare_energien.p17_1 %}</p>
        </div>
        <div style="background-color:#E7E6E6; padding: 15px;">
            <h3>{% t erneuerbare_energien.headline4 %}</h3>
            <p>{% t erneuerbare_energien.p18 %}</p>
            <br/>
            <p>{% t erneuerbare_energien.quelle.text %}</p>
            <p> 
                <a target="_blank" href="{% t erneuerbare_energien.quelle.link %}"> {% t erneuerbare_energien.quelle.link_text %} </a>
            </p>
        </div>
      </section>
      <section id="explanation" style="position: relative;">
        <p id="explanation-1">
          <sup>{% t erneuerbare_energien.sup1.title %}</sup>
          {% t erneuerbare_energien.sup1.text1 %}
          <a target="_blank" href="https://www.bmwi.de/Redaktion/DE/Publikationen/Energie/erneuerbare-energien-in-zahlen-2017.pdf?__blob=publicationFile&v=27">
            {% t erneuerbare_energien.sup1.link %}
          </a>
          {% t erneuerbare_energien.sup1.text2 %}
        </p>
        <p id="explanation-2">
          <sup>{% t erneuerbare_energien.sup2.title %}</sup>
         <a target="_blank" href="https://www.umweltbundesamt.de/publikationen/erneuerbare-energien-in-deutschland-2017">{% t erneuerbare_energien.sup2.text %}</a>
        </p>
        <p id="explanation-3">
          <sup>{% t erneuerbare_energien.sup3.title %}</sup>
         <a target="_blank" href="https://www.bgr.bund.de/DE/Themen/Min_rohstoffe/Downloads/rohsit-2017.pdf?__blob=publicationFile">{% t erneuerbare_energien.sup3.text %}</a>
         <a target="_blank" href="https://www.bgr.bund.de/DE/Themen/Min_rohstoffe/Downloads/studie_mineralische_rohstoffe_2017.pdf?__blob=publicationFile">{% t erneuerbare_energien.sup3.text2 %}</a>
        </p>
        <p id="explanation-4">
          <sup>{% t erneuerbare_energien.sup4.title %}</sup>
         <a target="_blank" href="https://www.netzentwicklungsplan.de/de/netzentwicklungsplaene/netzentwicklungsplan-2030-2019">{% t erneuerbare_energien.sup4.text %}</a>
        </p>
      </section>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t erneuerbare_energien.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['erneuerbare_energien'].nav_items %}
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

<script type="text/javascript" src="{{ site.baseurl_root }}/js/pages/pieGraph.js" charset="utf-8"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/explore.min.js" charset="utf-8"></script>

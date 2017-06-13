---
title: Daten & Dokumentation Herunterladen
layout: content_wide
permalink: /downloads/
---
<section class="container" style="position: relative;">
  <div class="container-left-9">
    <h1 id="title">{% t downloads.title %}</h1>
    <div id="federal_production">
      <h2 id="production-title-1">{% t downloads.h1 %}</h2>
      <hr/>
      <p>{% t downloads.p1 %}</p>
      <p class="downloads-download_links-intro">
        {% t downloads.download_label %}
        <ul class="downloads-download_links">
          <li><a href="{{site.baseurl_root}}/downloads/Datenbeispiel_Kohlenwasserstoffe_d-eiti.xlsx"><icon class="icon-cloud icon-padded"></icon>{% t downloads.download_link %} (xlsx, 10 KB)</a></li>
        </ul>
      </p>
    </div>

    <div id="production_chart">
      <h2 id="chart-title-1">{% t downloads.h2 %}</h2>
      <hr/>
      <p>{% t downloads.p2 %}</p>
      <p class="downloads-download_links-intro">
        {% t downloads.download_label %}
        <ul class="downloads-download_links">
          <li><a href="{{site.baseurl_root}}/downloads/Datenbeispiel_Kohlenwasserstoffe_d-eiti.xlsx"><icon class="icon-cloud icon-padded"></icon>{% t downloads.download_link %} (xlsx, 10 KB)</a></li>
        </ul>
      </p>
    </div>

    <div id="bip">
      <h2 id="daten-zur-beitrag-zum-bip">{% t downloads.h3 %}</h2>
      <hr/>
      <p>
        {% t downloads.p3.p1 %}
        <a href="https://www.destatis.de/DE/Publikationen/Thematisch/VolkswirtschaftlicheGesamtrechnungen/Inlandsprodukt/InlandsproduktsberechnungEndgueltigPDF_2180140.pdf?__blob=publicationFile">PDF</a>
        {% t downloads.p3.p2 %}
        <a href="https://www.destatis.de/DE/Publikationen/Thematisch/VolkswirtschaftlicheGesamtrechnungen/Inlandsprodukt/InlandsproduktsberechnungEndgueltigXLS_2180140.xlsx?__blob=publicationFile">EXCEL</a>).
        {% t downloads.p3.p3 %}
        <a href="https://www.destatis.de/DE/Publikationen/Verzeichnis/KlassifikationWZ08_3100100089004.pdf;jsessionid=0CEA093B5E7B3662C7D0F71426EA900A.cae3?__blob=publicationFile">
          {% t downloads.p3.link %}
        </a>
        {% t downloads.p3.p4 %}
      </p>
       <p>
         {% t downloads.p4 %}
       </p>
       <p>
       <a href="https://www.destatis.de/DE/ZahlenFakten/GesamtwirtschaftUmwelt/VGR/Glossar/Bruttowertschoepfung.html">{% t downloads.link %}</a></p>
    </div>

    <div id="beschäftigten">
      <h2 id="daten-zur-beschaftigten">{% t downloads.h5 %}</h2>
      <hr/>
      <p>
        {% t downloads.p5.p1 %}
        <a href="http://www.bmwi.de/Redaktion/DE/Publikationen/Energie/Bergbaustatistiken/bergbau-in-der-brd-bergwirtschaft-statistik-2015.pdf?__blob=publicationFile&v=7">{% t downloads.p5.link %}</a>.
        {% t downloads.p5.p2 %}
        <a href="https://www.destatis.de/DE/Publikationen/StatistischesJahrbuch/Arbeitsmarkt.pdf?__blob=publicationFile">(PDF)</a>.
      </p>
    </div>

    <div id="exporte">
      <h2 id="daten-zur-exporte">{% t downloads.h6 %}</h2>
      <hr/>
      <p>
        {% t downloads.p6.p1 %}
        <a href="https://www-genesis.destatis.de/">{% t downloads.p6.link1 %}</a>
        {% t downloads.p6.p2 %}
        <a href="https://www.destatis.de/DE/ZahlenFakten/GesamtwirtschaftUmwelt/Aussenhandel/Tabellen/EinfuhrAusfuhrGueterabteilungen.html">
          {% t downloads.p6.link2 %}
        </a>
        {% t downloads.p6.p3 %}
      </p>
    </div>
  </div>
  <div class="sticky sticky_nav container-right-3">
    <h3 class="state-page-nav-title container">
      <div class="nav-title">{% t downloads.title %}</div>
    </h3>
    <nav>
    {% assign nav_items = site.translations[site.lang]['downloads'].nav_items %}
    {% include case-studies/_nav-list.html nav_items=nav_items %}
    </nav>
  </div>
</section>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/static.min.js" charset="utf-8"></script>

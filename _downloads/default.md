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
          <li>
            <a href="{{site.baseurl_root}}/downloads/production.tsv">
              <icon class="icon-cloud icon-padded"></icon>
              {% t downloads.download_link %} (tsv, 2 KB)
            </a>
          </li>
        </ul>
      </p>
    </div>

    <div id="production_chart">
      <h2 id="chart-title-1">{% t downloads.h2 %}</h2>
      <hr/>
      <p>{% t downloads.p2 %}</p>
      <p>{% t downloads.p3 %}</p>
      <p>{% t downloads.p4 %}</p>
      <p class="downloads-download_links-intro">
        {% t downloads.download_label %}
        <ul class="downloads-download_links">
          <li>
            <a href="{{site.baseurl_root}}/downloads/production.tsv">
              <icon class="icon-cloud icon-padded"></icon>
              {% t downloads.download_link %} (tsv, 2 KB)
            </a>
          </li>
        </ul>
      </p>
    </div>

    <div id="bip">
      <h2 id="daten-zur-beitrag-zum-bip">{% t downloads.h3 %}</h2>
      <hr/>
      <p>
        {% t downloads.p5.p1 %}
        <a href="https://www.destatis.de/DE/Publikationen/Thematisch/VolkswirtschaftlicheGesamtrechnungen/Inlandsprodukt/InlandsproduktsberechnungEndgueltigPDF_2180140.pdf?__blob=publicationFile">PDF</a>
        {% t downloads.p5.p2 %}
        <a href="https://www.destatis.de/DE/Publikationen/Thematisch/VolkswirtschaftlicheGesamtrechnungen/Inlandsprodukt/InlandsproduktsberechnungEndgueltigXLS_2180140.xlsx?__blob=publicationFile">EXCEL</a>).
        {% t downloads.p5.p3 %}
        <a href="https://www.destatis.de/DE/Publikationen/Verzeichnis/KlassifikationWZ08_3100100089004.pdf;jsessionid=0CEA093B5E7B3662C7D0F71426EA900A.cae3?__blob=publicationFile">
          {% t downloads.p5.link %}
        </a>
        {% t downloads.p5.p4 %}
      </p>
       <p>
         {% t downloads.p6 %}
       </p>
       <p>
       <a href="https://www.destatis.de/DE/ZahlenFakten/GesamtwirtschaftUmwelt/VGR/Glossar/Bruttowertschoepfung.html">{% t downloads.link %}</a></p>
    </div>

    <div id="beschäftigten">
      <h2 id="daten-zur-beschaftigten">{% t downloads.h5 %}</h2>
      <hr/>
      <p>
        {% t downloads.p7.p1 %}
        <a href="https://statistik.arbeitsagentur.de/Statistikdaten/Detail/201606/iiia6/beschaeftigung-sozbe-wz-heft/wz-heft-d-0-201606-xlsx.xlsx">{% t downloads.p7.link %}</a>.


      </p>
    </div>

    <div id="exporte">
      <h2 id="daten-zur-exporte">{% t downloads.h6 %}</h2>
      <hr/>
      <p>
        {% t downloads.p8.p1 %}
        <a href="https://www-genesis.destatis.de/">{% t downloads.p8.link1 %}</a>
        {% t downloads.p8.p2 %}
        <a href="https://www.destatis.de/DE/ZahlenFakten/GesamtwirtschaftUmwelt/Aussenhandel/Tabellen/EinfuhrAusfuhrGueterabteilungen.html">
          {% t downloads.p8.link2 %}
        </a>
        {% t downloads.p8.p3 %}
      </p>
    </div>

    <div id="einnahmen">
      <h2 id="steuern">{% t downloads.steuern.title %}</h2>
      <hr/>
      <p>{% t downloads.steuern.p1 %}</p>
      <p>{% t downloads.steuern.p2 %}</p>
      <p>{% t downloads.steuern.p3 %}</p>
      <p>{% t downloads.steuern.p4 %}</p>
      <p>{% t downloads.steuern.p5 %}</p>
      <a href="{% t downloads.steuern.link %}">
        {% t downloads.steuern.link %}
      </a>
    </div>
    <br/>
    <div id="förderabgaben">
      <h2 id="förderabgaben">{% t downloads.förderabgaben.title %}</h2>
      <hr/>
      <p>
        {% t downloads.förderabgaben.p1_1 %}
        <a href="{% t downloads.förderabgaben.link_data %}">
          {% t downloads.förderabgaben.link1 %}
        </a>
        {% t downloads.förderabgaben.p1_2 %}
      </p>
      <p>
        {% t downloads.förderabgaben.p1_1 %}
        <a href="{% t downloads.förderabgaben.link1_data %}">
          {% t downloads.förderabgaben.link1 %}
        </a>
        <a href="{% t downloads.förderabgaben.link2_data %}">
          {% t downloads.förderabgaben.link2 %}
        </a>
        <a href="{% t downloads.förderabgaben.link3_data %}">
          {% t downloads.förderabgaben.link3 %}
        </a>
        <a href="{% t downloads.förderabgaben.link4_data %}">
          {% t downloads.förderabgaben.link4 %}
        </a>
      </p>

      <p class="downloads-download_links-intro">
        {% t downloads.download_label_förderabgaben %}
        <ul class="downloads-download_links">
          <li>
            <a href="{{site.baseurl_root}}/downloads/Förder_Feldeseinnahmen.csv">
              <icon class="icon-cloud icon-padded"></icon>
              {% t downloads.download_link %} (csv, 1 KB)
            </a>
          </li>
        </ul>
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

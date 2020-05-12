---
title: Wasser
layout: default
permalink: /rohstoffgewinnung/wasser/
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
    <h1 id="title">{% t wasser.title %}</h1>
    <div class="container-left-9">
      <section id="wasserentnahme" style="position: relative;">
        <h2>{% t wasser.wasserentnahme.title %}</h2>
        <p>
          {% t wasser.wasserentnahme.p1_1 %}
          <sup class="padding-right">
            <a href="#sub-1">
              {% t wasser.wasserentnahme.sup1.title %}
            </a>
          </sup>
          {% t wasser.wasserentnahme.p1_2 %}
        </p>
        <p>
          {% t wasser.wasserentnahme.p2_1 %}
          <sup class="padding-right">
            <a href="#sub-2">
              {% t wasser.wasserentnahme.sup2.title %}
            </a>
          </sup>
          {% t wasser.wasserentnahme.p2_2 %}
        </p>

        <h3 id="verwendung_des_wasser">
          {% t wasser.wasserentnahme.verwendung_des_wasser.title %}
        </h3>
        <p>{% t wasser.wasserentnahme.verwendung_des_wasser.p1 %}</p>
        <p>{% t wasser.wasserentnahme.verwendung_des_wasser.p2 %}</p>

        <br/>
        <div class="chart-title-style">{% t wasser.chart-title %}</div>
        <div>
          <img style="width: 100%" src="{{ site.baseurl_root }}{% t wasser.chart-src %}" alt="KAchel Wasser_Bild">
        </div>
        <br/>

        <h3 id="beispiel">
          {% t wasser.wasserentnahme.beispiel.title %}
        </h3>
        <p>{% t wasser.wasserentnahme.beispiel.p1 %}</p>

        <!-- <div class="explore-exploration slab-alpha">
          <div class="regions container">
            <div class="graph">
              <div class="container chart-container">
                <div id="chart1"></div>
              </div>
            </div>
          </div>
        </div> -->
        <h3 id="rechtlicher">
          {% t wasser.wasserentnahme.rechtlicher.title %}
        </h3>
        <p>
          {% t wasser.wasserentnahme.rechtlicher.p1_1 %}
          <sup class="padding-right">
            <a href="#sub-3">
              {% t wasser.wasserentnahme.rechtlicher.sup3.title %}
            </a>
          </sup>
          {% t wasser.wasserentnahme.rechtlicher.p1_2 %}
        </p>
        <p>{% t wasser.wasserentnahme.rechtlicher.p2 %}</p>

        <h3 id="ausgestaltung">
          {% t wasser.wasserentnahme.ausgestaltung.title %}
        </h3>
        <p>
          {% t wasser.wasserentnahme.ausgestaltung.p1 %}
          <sup class="padding-right">
            <a href="#sub-4">
              {% t wasser.wasserentnahme.ausgestaltung.sup4.title %}
            </a>
          </sup>
          {% t point %}
        </p>
        <p>
          {% t wasser.wasserentnahme.ausgestaltung.p2 %}
          <sup class="padding-right">
            <a href="#sub-5">
              {% t wasser.wasserentnahme.ausgestaltung.sup5.title %}
            </a>
          </sup>
          {% t point %}
        </p>
        <p>{% t wasser.wasserentnahme.ausgestaltung.p3 %}
          <sup class="padding-right">
            <a href="#sub-6">
              {% t wasser.wasserentnahme.ausgestaltung.sup6.title %}
            </a>
          </sup>
        </p>
        <p>{% t wasser.wasserentnahme.ausgestaltung.p4 %}          
        </p>
      </section>
      <br/>
      <section id="wasserentnahmeentgelte" style="position: relative;">
        <h3>{% t wasser.wasserentnahmeentgelte.title %}</h3>
        <p>
          {% t wasser.wasserentnahmeentgelte.p1_1 %}
          <sup class="padding-right">
            <a href="#sub-7">
              {% t wasser.wasserentnahmeentgelte.sup7.title %}
            </a>
          </sup>
          {% t wasser.wasserentnahmeentgelte.p1_2 %}
          <sup class="padding-right">
            <a href="#sub-8">
              {% t wasser.wasserentnahmeentgelte.sup8.title %}
            </a>
          </sup>
          {% t wasser.wasserentnahmeentgelte.p1_3 %}
        </p>
        <p>{% t wasser.wasserentnahmeentgelte.p2 %}
        <a target="_blank" href="http://rohstofftransparenz.de/daten/zahlungsabgleich/">
          {% t wasser.wasserentnahmeentgelte.link2 %}</a>
          {% t wasser.wasserentnahmeentgelte.p3 %}</p>

      </section>
      <br/>
      <section id="explanation" style="position: relative;">
        <p id="sub-1">
          <sup>{% t wasser.wasserentnahme.sup1.title %}</sup>
          {% t wasser.wasserentnahme.sup1.text %}
          <a target="_blank" href="https://www.destatis.de/DE/ZahlenFakten/GesamtwirtschaftUmwelt/Umwelt/UmweltoekonomischeGesamtrechnungen/MaterialEnergiefluesse/Tabellen/EntnahmeWasser.html">
            {% t wasser.wasserentnahme.sup1.link %}
          </a>
        </p>
        <p id="sub-2">
          <sup>{% t wasser.wasserentnahme.sup2.title %}</sup>
          {% t wasser.wasserentnahme.sup2.text %}
          <a target="_blank" href="https://www.statistik.sachsen.de/download/100_Berichte-Q/Q_I_2_3j_13_SN.pdf">
            {% t wasser.wasserentnahme.sup2.link %}
          </a>
        </p>
        <p id="sub-3">
          <sup>{% t wasser.wasserentnahme.rechtlicher.sup3.title %}</sup>
          {% t wasser.wasserentnahme.rechtlicher.sup3.text %}
        </p>
        <p id="sub-4">
          <sup>{% t wasser.wasserentnahme.ausgestaltung.sup4.title %}</sup>
          {% t wasser.wasserentnahme.ausgestaltung.sup4.text %}
          <a target="_blank" href="https://www.ostwestfalen.ihk.de/fileadmin/_migrated/content_uploads/WEE_Wasserentnahmeentgelte_der_Laender_Broschure-1.pdf">
            {% t wasser.wasserentnahme.ausgestaltung.sup4.link %}
          </a>
        </p>
        <p id="sub-5">
          <sup>{% t wasser.wasserentnahme.ausgestaltung.sup5.title %}</sup>
          {% t wasser.wasserentnahme.ausgestaltung.sup5.text %}
          <a target="_blank"  href="https://um.baden-wuerttemberg.de/fileadmin/redaktion/m-um/intern/Dateien/Dokumente/3_Umwelt/Schutz_natuerlicher_Lebensgrundlagen/Wasser/Rechtsvorschriften/WEE/160630_Endbericht_WEE_UFZ.pdf">
            {% t wasser.wasserentnahme.ausgestaltung.sup5.link %}
          </a>
        </p>
        <p id="sub-6">
          <sup>{% t wasser.wasserentnahmeentgelte.sup6.title %}</sup>
          {% t wasser.wasserentnahmeentgelte.sup6.text %}
        </p>
        <p id="sub-7">
          <sup>{% t wasser.wasserentnahmeentgelte.sup7.title %}</sup>
          {% t wasser.wasserentnahmeentgelte.sup7.text %}
          <a target="_blank" href="https://www.umweltbundesamt.de/sites/default/files/medien/2466/dokumente/tabelle_wasserentnahmeentgelte_im_rohstoffsektor_uba_neu.docx">
            {% t wasser.wasserentnahmeentgelte.sup7.link %}
          </a>
        </p>
        <p id="sub-8">
          <sup>{% t wasser.wasserentnahmeentgelte.sup8.title %}</sup>
          {% t wasser.wasserentnahmeentgelte.sup8.text %}
          <a target="_blank" href="https://www.umweltbundesamt.de/themen/wasser/wasser-bewirtschaften/oekonomische-fragen#textpart-1">
            {% t wasser.wasserentnahmeentgelte.sup8.link %}
          </a>
        </p>
      </section>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t wasser.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['wasser'].nav_items %}
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
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/explore.min.js" charset="utf-8"></script>

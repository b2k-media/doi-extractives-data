---
title: Wasser
layout: default
permalink: /explore/how-it-work/wasser/
breadcrumb:
  - title: Wasser
    permalink: /explore/how-it-work/
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
          <sup>{% t wasser.wasserentnahme.sup4.title %}</sup>
          {% t wasser.wasserentnahme.p1_2 %}
        </p>
        <p>
          {% t wasser.wasserentnahme.p2_1 %}
          <sup>{% t wasser.wasserentnahme.sup5.title %}</sup>
          {% t wasser.wasserentnahme.p2_2 %}
        </p>

        <h3 id="verwendung_des_wasser">
          {% t wasser.wasserentnahme.verwendung_des_wasser.title %}
        </h3>
        <p>{% t wasser.wasserentnahme.verwendung_des_wasser.p1 %}</p>
        <p>{% t wasser.wasserentnahme.verwendung_des_wasser.p2 %}</p>

        <h3 id="beispiel">
          {% t wasser.wasserentnahme.beispiel.title %}
        </h3>
        <p>{% t wasser.wasserentnahme.beispiel.p1 %}</p>

        <h3 id="rechtlicher">
          {% t wasser.wasserentnahme.rechtlicher.title %}
        </h3>
        <p>
          {% t wasser.wasserentnahme.rechtlicher.p1_1 %}
          <sup>{% t wasser.wasserentnahme.rechtlicher.sup6.title %}</sup>
          {% t wasser.wasserentnahme.rechtlicher.p1_2 %}
        </p>
        <p>{% t wasser.wasserentnahme.rechtlicher.p2 %}</p>

        <h3 id="ausgestaltung">
          {% t wasser.wasserentnahme.ausgestaltung.title %}
        </h3>
        <p>
          {% t wasser.wasserentnahme.ausgestaltung.p1 %}
          <sup>{% t wasser.wasserentnahme.ausgestaltung.sup7.title %}</sup>
        </p>
        <p>
          {% t wasser.wasserentnahme.ausgestaltung.p2 %}
          <sup>{% t wasser.wasserentnahme.ausgestaltung.sup8.title %}</sup>
        </p>
        <p>{% t wasser.wasserentnahme.ausgestaltung.p3 %}</p>
      </section>
      <br/>
      <section id="wasserentnahmeentgelte" style="position: relative;">
        <h2>{% t wasser.wasserentnahmeentgelte.title %}</h2>
        <p>
          {% t wasser.wasserentnahmeentgelte.p1_1 %}
          <sup>{% t wasser.wasserentnahmeentgelte.sup9.title %}</sup>
          {% t wasser.wasserentnahmeentgelte.p1_2 %}
          <sup>{% t wasser.wasserentnahmeentgelte.sup10.title %}</sup>
          {% t wasser.wasserentnahmeentgelte.p1_3 %}
        </p>
        <p>{% t wasser.wasserentnahmeentgelte.p2 %}</p>
      </section>
      <br/>
      <section id="explanation" style="position: relative;">
        <p>
          <sup>{% t wasser.wasserentnahme.sup4.title %}</sup>
          {% t wasser.wasserentnahme.sup4.text %}
          <a href="https://www.destatis.de/DE/ZahlenFakten/GesamtwirtschaftUmwelt/Umwelt/UmweltoekonomischeGesamtrechnungen/MaterialEnergiefluesse/Tabellen/EntnahmeWasser.html">
            {% t wasser.wasserentnahme.sup4.link %}
          </a>
        </p>
        <p>
          <sup>{% t wasser.wasserentnahme.sup5.title %}</sup>
          {% t wasser.wasserentnahme.sup5.text %}
          <a href="https://www.statistik.sachsen.de/download/100_Berichte-Q/Q_I_2_3j_13_SN.pdf">
            {% t wasser.wasserentnahme.sup5.link %}
          </a>
        </p>
        <p>
          <sup>{% t wasser.wasserentnahme.rechtlicher.sup6.title %}</sup>
          {% t wasser.wasserentnahme.rechtlicher.sup6.text %}
        </p>
        <p>
          <sup>{% t wasser.wasserentnahme.ausgestaltung.sup7.title %}</sup>
          {% t wasser.wasserentnahme.ausgestaltung.sup7.text %}
          <a href="https://www.ostwestfalen.ihk.de/fileadmin/_migrated/content_uploads/WEE_Wasserentnahmeentgelte_der_Laender_Broschure-1.pdf">
            {% t wasser.wasserentnahme.ausgestaltung.sup7.link %}
          </a>
        </p>
        <p>
          <sup>{% t wasser.wasserentnahme.ausgestaltung.sup8.title %}</sup>
          {% t wasser.wasserentnahme.ausgestaltung.sup8.text %}
          <a href="https://um.baden-wuerttemberg.de/fileadmin/redaktion/m-um/intern/Dateien/Dokumente/3_Umwelt/Schutz_nat%25C3%25BCrlicher_Lebensgrundlagen/Wasser/Rechtsvorschriften/WEE/160630_Endbericht_WEE_UFZ.pdf">
            {% t wasser.wasserentnahme.ausgestaltung.sup8.link %}
          </a>
        </p>
        <p>
          <sup>{% t wasser.wasserentnahmeentgelte.sup9.title %}</sup>
          {% t wasser.wasserentnahmeentgelte.sup9.text %}
          <a href="https://www.umweltbundesamt.de/sites/default/files/medien/2466/dokumente/tabelle_wasserentnahmeentgelte_im_rohstoffsektor_uba_neu.docx">
            {% t wasser.wasserentnahmeentgelte.sup9.link %}
          </a>
        </p>
        <p>
          <sup>{% t wasser.wasserentnahmeentgelte.sup10.title %}</sup>
          {% t wasser.wasserentnahmeentgelte.sup10.text %}
          <a href="https://www.umweltbundesamt.de/themen/wasser/wasser-bewirtschaften/oekonomische-fragen#textpart-1">
            {% t wasser.wasserentnahmeentgelte.sup10.link %}
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
      </nav>
    </div>
  </section>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/static.min.js" charset="utf-8"></script>

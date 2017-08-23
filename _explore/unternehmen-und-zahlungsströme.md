---
title: Unternehmen und Zahlungsströme
layout: default
permalink: /explore/unternehmen-und-zahlungsströme/
breadcrumb:
  - title: Unternehmen und Zahlungsströme
    permalink: /explore/
---
<link rel="stylesheet" type="text/css" href="{{ site.baseurl_root }}/css/slick-theme.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="title">{% t unternehmen-und-zahlungsströme.title %}</h1>

    <div class="container-left-9">
      <section id="unternehmen-und-zahlungsströme" style="position: relative;">
        <section id="zahlungsabgleich" style="position: relative;">
          <h2>{% t unternehmen-und-zahlungsströme.zahlungsabgleich.title %}</h2>
          <a href="{{site.baseurl}}/downloads/#zahlungsabgleich">
            <icon class="fa fa-file-text-o u-padding-right"></icon>
            {% t unternehmen-und-zahlungsströme.daten_einsehen %}
          </a>
          <br/>
        </section>
      </section>
      <br/>
      <section id="zahlungen" style="position: relative;">
        <h2>{% t unternehmen-und-zahlungsströme.zahlungen.title %}</h2>
        <p>{% t unternehmen-und-zahlungsströme.zahlungen.p %}</p>
        <a href="{{site.baseurl}}/downloads/#zahlungsabgleich">
          <icon class="fa fa-file-text-o u-padding-right"></icon>
          {% t unternehmen-und-zahlungsströme.daten_einsehen %}
        </a>
        <br/>
      </section>
      <br/>
      <section id="differenzen" style="position: relative;">
        <h2>{% t unternehmen-und-zahlungsströme.differenzen.title %}</h2>
        <p>{% t unternehmen-und-zahlungsströme.differenzen.p %}</p>
        <a href="{{site.baseurl}}/downloads/#zahlungsabgleich">
          <icon class="fa fa-file-text-o u-padding-right"></icon>
          {% t unternehmen-und-zahlungsströme.daten_einsehen %}
        </a>
        <br/>
      </section>
      <br/>
      <section id="feldes" style="position: relative;">
        <h2>{% t unternehmen-und-zahlungsströme.feldes.title %}</h2>
        <p>{% t unternehmen-und-zahlungsströme.feldes.p %}</p>
        <a href="{{site.baseurl}}/downloads/#zahlungsabgleich">
          <icon class="fa fa-file-text-o u-padding-right"></icon>
          {% t unternehmen-und-zahlungsströme.daten_einsehen %}
        </a>
        <br/>
      </section>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t unternehmen-und-zahlungsströme.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['unternehmen-und-zahlungsströme'].nav_items %}
        {% include case-studies/_nav-list.html nav_items=nav_items %}
      </nav>
    </div>
  </section>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/static.min.js" charset="utf-8"></script>

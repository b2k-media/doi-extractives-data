---
title: Identifizierung der Unternehmen
layout: default
permalink: /daten/zahlungsabgleich/identifizierung-unternehmen/
breadcrumb:
  - title: Daten/Zahlungsabgleich
    permalink: /daten/zahlungsabgleich/
---
<link rel="stylesheet" type="text/css" href="{{ site.baseurl_root }}/css/slick-theme.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="title">{% t identifizierung-unternehmen.title %}</h1>

    <div class="container-left-9">
      <p>
        {% t identifizierung-unternehmen.p1 %}
        <sup>
          <a href="#sup1">
            {% t identifizierung-unternehmen.sup1.title %}
          </a>
        </sup>
        {% t identifizierung-unternehmen.p2 %}
        <a target="_blank" href="{{site.baseurl}}/downloads/Zahlungsabgleich_Empehlungen_Unabhangiger_Verwalter.pdf">
          {% t identifizierung-unternehmen.link1 %}
        </a>
        {% t identifizierung-unternehmen.p3 %}
      </p>

      <p>
        {% t identifizierung-unternehmen.p4 %}
        <a target="_blank" href="{{site.baseurl}}/downloads/Zahlungsabgleich_Empehlungen_Unabhangiger_Verwalter.pdf">
          {% t identifizierung-unternehmen.link2 %}
        </a>
        {% t identifizierung-unternehmen.p5 %}
      </p>
      <ul>
        <li>{% t identifizierung-unternehmen.li1 %}</li>
        <li>{% t identifizierung-unternehmen.li2 %}</li>
      </ul>

      <p>
        {% t identifizierung-unternehmen.p6 %}
      </p>

      <p>
        {% t identifizierung-unternehmen.p7 %}
        <a href="{{site.baseurl}}/daten/zahlungsabgleich/unternehmen-und-zahlungsstroeme/">
           {% t identifizierung-unternehmen.link3 %}
        </a>
        {% t identifizierung-unternehmen.p8 %}
        <a target="_blank" href="{{site.baseurl}}/downloads/Zahlungsabgleich_Empehlungen_Unabhangiger_Verwalter.pdf">
          {% t identifizierung-unternehmen.link4 %}
        </a>
        {% t identifizierung-unternehmen.p9 %}
      </p>

      <section id="explanation" style="position: relative;">
        <p id="sup1">
          <sup>{% t identifizierung-unternehmen.sup1.title %}</sup>
          {% t identifizierung-unternehmen.sup1.text1 %}
          <a target="_blank" href="http://www.bvdinfo.com/">
            {% t identifizierung-unternehmen.sup1.link %}
          </a>
          {% t identifizierung-unternehmen.sup1.text2 %}
        </p>

      </section>

    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t identifizierung-unternehmen.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['identifizierung-unternehmen'].nav_items %}
        {% include case-studies/_nav-list.html nav_items=nav_items %}
        {% include layout/share-buttons.html %}
      </nav>
    </div>

  </section>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/static.min.js" charset="utf-8"></script>

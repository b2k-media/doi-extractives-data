---
title: Auswahl der Zahlungsströme und Wesentlichkeit von Zahlungen
layout: default
permalink: /daten/zahlungsabgleich/zahlungsstroeme/
breadcrumb:
  - title: Daten/Zahlungsabgleich
    title_en: Explore Data/Reconciliation of payments and revenues
    permalink: /daten/Zahlungsabgleich
---
<link rel="stylesheet" type="text/css" href="{{ site.baseurl_root }}/css/slick-theme.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="title">{% t zahlungsströme.title %}</h1>

    <div class="container-left-9">
      <section id="zahlungsströme" style="position: relative;">
        <p>{% t zahlungsströme.p1 %}
          <a href="{{site.baseurl}}/rohstoffgewinnung/anfallende-zahlungen/">
            {% t zahlungsströme.link %}
          </a>
        </p>
        <section id="steuern" style="position: relative;">
          <h2>{% t zahlungsströme.steuern %}</h2>
          <h3 id="körperschaftsteuer">{% t zahlungsströme.körperschaftsteuer.title %}</h3>
          <p>
            {% t zahlungsströme.körperschaftsteuer.p1_1 %}
            <a href="{{site.baseurl}}/rohstoffgewinnung/anfallende-zahlungen/#körperschaftsteuer/">
              {% t zahlungsströme.körperschaftsteuer.link %}
            </a>
            {% t zahlungsströme.körperschaftsteuer.p1_2 %}
          </p>
          <p>
            {% t zahlungsströme.körperschaftsteuer.p2 %}
          </p>
        </section>
        <section id="gewerbesteuer" style="position: relative;">
          <h3>{% t zahlungsströme.gewerbesteuer.title %}</h3>
          <p>
            {% t zahlungsströme.gewerbesteuer.p1_1 %}
            <a href="{{site.baseurl}}/rohstoffgewinnung/anfallende-zahlungen/#gewerbesteuer/">
              {% t zahlungsströme.gewerbesteuer.link %}
            </a>
            {% t zahlungsströme.gewerbesteuer.p1_2 %}
            <sup>
              <a href="#sup-1">
                {% t zahlungsströme.sup1.title %}
              </a>
            </sup>
            {% t zahlungsströme.gewerbesteuer.p1_3 %}
          </p>
          <p>
            {% t zahlungsströme.gewerbesteuer.p2 %}
          </p>
          <p>
            {% t zahlungsströme.gewerbesteuer.p3 %}
          </p>
        </section>
        <section id="besonderheiten" style="position: relative;">
          <h3>{% t zahlungsströme.besonderheiten.title %}</h3>
          <p>{% t zahlungsströme.besonderheiten.p1 %}</p>
          <p>{% t zahlungsströme.besonderheiten.p2 %}</p>
          <p>{% t zahlungsströme.besonderheiten.p3 %}</p>
          <p>{% t zahlungsströme.besonderheiten.p4 %}</p>
        </section>
        <section id="organschaftsverhältnissen" style="position: relative;">
          <h3>{% t zahlungsströme.organschaftsverhältnissen.title %}</h3>
          <p>{% t zahlungsströme.organschaftsverhältnissen.p1 %}</p>
          <p>{% t zahlungsströme.organschaftsverhältnissen.p2 %}</p>
          <ul>
            <li>{% t zahlungsströme.organschaftsverhältnissen.item1 %}</li>
            <li>{% t zahlungsströme.organschaftsverhältnissen.item2 %}</li>
          </ul>
          <p>
            {% t zahlungsströme.organschaftsverhältnissen.p3 %}
            <a href="{{site.baseurl}}/daten/zahlungsabgleich/">
              {% t zahlungsströme.organschaftsverhältnissen.link1 %}
            </a>
          </p>
          <p>{% t zahlungsströme.organschaftsverhältnissen.p4 %}</p>
        </section>
      </section>
      <br/>
      <section id="feldes" style="position: relative;">
        <h2>{% t zahlungsströme.feldes.title %}</h2>
        <p>
          {% t zahlungsströme.feldes.p1_1 %}
          <a href="{{site.baseurl}}/rohstoffgewinnung/anfallende-zahlungen/#feldes-und-förderabgaben">
            {% t zahlungsströme.feldes.link1 %}
          </a>
          {% t zahlungsströme.feldes.p1_2 %}
        </p>
        <p>{% t zahlungsströme.feldes.p2 %}</p>
      </section>
      <br/>
      <section id="pachtzahlungen" style="position: relative;">
        <h2>{% t zahlungsströme.pachtzahlungen.title %}</h2>
        <p>{% t zahlungsströme.pachtzahlungen.p1 %}</p>
        <p>
          {% t zahlungsströme.pachtzahlungen.p2_1 %}
          <a href="{{site.baseurl}}/rohstoffgewinnung/anfallende-zahlungen/#zahlungen-industrie">
            {% t zahlungsströme.pachtzahlungen.link %}
          </a>
          {% t zahlungsströme.pachtzahlungen.p2_2 %}
        </p>
        <p>{% t zahlungsströme.pachtzahlungen.p3 %}</p>
        <p>{% t zahlungsströme.pachtzahlungen.p4 %}</p>
      </section>
      <br/>
      <section id="wesentlichkeit" style="position: relative;">
        <h2>{% t zahlungsströme.wesentlichkeit.title %}</h2>
        <p>{% t zahlungsströme.wesentlichkeit.p1 %}</p>
        <p>{% t zahlungsströme.wesentlichkeit.p2 %}</p>
      </section>
      <p>
        <sup id="sup-1">{% t zahlungsströme.sup1.title %}</sup>
        {% t zahlungsströme.sup1.text %}
      </p>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t zahlungsströme.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['zahlungsströme'].nav_items %}
        {% include case-studies/_nav-list.html nav_items=nav_items %}
        {% include layout/share-buttons.html %}
      </nav>
    </div>
  </section>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/static.min.js" charset="utf-8"></script>

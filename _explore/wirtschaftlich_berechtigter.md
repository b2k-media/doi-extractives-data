---
title: Wirtschaftlich Berechtigter
layout: default
permalink: /rohstoffgewinnung/wirtschaftlich_berechtigter/
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
    <h1 id="title">{% t wirtschaftlich_berechtigter.title %}</h1>

    <div class="container-left-9">
      <section id="wirtschaftlich_berechtigter" style="position: relative;">
        <section style="position: relative;">
          <h2>{% t wirtschaftlich_berechtigter.wirtschaftlich_berechtigter.title %}</h2>
          <p>
            {% t wirtschaftlich_berechtigter.wirtschaftlich_berechtigter.p1_1 %}
            <sup>
              <a href="#sup-1">
                {% t wirtschaftlich_berechtigter.sup1.title %}
              </a>
            </sup>
            {% t wirtschaftlich_berechtigter.wirtschaftlich_berechtigter.p1_2 %}
          </p>
        </section>
        <section id="deutsches_transparenzregister" style="position: relative;">
          <h3>{% t wirtschaftlich_berechtigter.deutsches_transparenzregister.title %}</h3>
          <p>
            {% t wirtschaftlich_berechtigter.deutsches_transparenzregister.p1_1 %}
            {% t wirtschaftlich_berechtigter.deutsches_transparenzregister.p1_2 %}
          </p>
          <p>{% t wirtschaftlich_berechtigter.deutsches_transparenzregister.p2 %}
          <a target="_blank" href="https://www.transparenzregister.de">{% t wirtschaftlich_berechtigter.deutsches_transparenzregister.link %}</a>
            {% t wirtschaftlich_berechtigter.deutsches_transparenzregister.p3 %}</p>
        </section>
        <section id="angaben" style="position: relative;">
          <h3>{% t wirtschaftlich_berechtigter.angaben.title %}</h3>
          <p>{% t wirtschaftlich_berechtigter.angaben.p %}</p>
        </section>
        <section id="betreuung" style="position: relative;">
          <h3>{% t wirtschaftlich_berechtigter.betreuung.title %}</h3>
          <p>{% t wirtschaftlich_berechtigter.betreuung.p %}</p>
        </section>
        <section id="einsicht" style="position: relative;">
          <h3>{% t wirtschaftlich_berechtigter.einsicht.title %}</h3>
          <p>{% t wirtschaftlich_berechtigter.einsicht.p %}</p>
        </section>
        <section id="einsichtNeu" style="position: relative;">
          <h3>{% t wirtschaftlich_berechtigter.einsichtNeu.title %}</h3>
          <p>{% t wirtschaftlich_berechtigter.einsichtNeu.p1_1 %}
          <sup>
            <a href="#sup-5">
              {% t wirtschaftlich_berechtigter.sup5.title %}
            </a>
          </sup>
          {% t wirtschaftlich_berechtigter.einsichtNeu.p1_2 %}
          {% t wirtschaftlich_berechtigter.einsichtNeu.p1_3 %}
          </p>
        </section>
      </section>
      <br/>
      <p style="font-size: 0.75rem" >
        <sup id="sup-1">{% t wirtschaftlich_berechtigter.sup1.title %}</sup>
        {% t wirtschaftlich_berechtigter.sup1.text %}
      </p>
      <p style="font-size: 0.75rem">
        <sup id="sup-5">{% t wirtschaftlich_berechtigter.sup5.title %}</sup>
        {% t wirtschaftlich_berechtigter.sup5.text %}
      </p>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t wirtschaftlich_berechtigter.title  %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['wirtschaftlich_berechtigter'].nav_items %}
        {% include case-studies/_nav-list.html nav_items=nav_items %}
        {% include layout/share-buttons.html %}
      </nav>
    </div>
  </section>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/static.min.js" charset="utf-8"></script>

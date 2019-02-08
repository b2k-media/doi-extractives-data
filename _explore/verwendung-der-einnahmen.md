---
title: Verwendung der Einnahmen
layout: default
permalink: /rohstoffgewinnung/verwendung-der-einnahmen/
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
    <h1 id="title">{% t verwendung-der-einnahmen.title %}</h1>

    <div class="container-left-9">
      <section id="verwendung-der-einnahmen" style="position: relative;">
        <section id="einnahmen_rohstoffsektor" style="position: relative;">
          <h2 id="title">{% t verwendung-der-einnahmen.einnahmen_rohstoffsektor.title %}</h2>
          <p>
            {% t verwendung-der-einnahmen.einnahmen_rohstoffsektor.p1 %}
          </p>
          <p>
            {% t verwendung-der-einnahmen.einnahmen_rohstoffsektor.p2 %}
          </p>
          <p>
            {% t verwendung-der-einnahmen.einnahmen_rohstoffsektor.p3 %}
          </p>
          <p>
            {% t verwendung-der-einnahmen.einnahmen_rohstoffsektor.p4 %}
            <a href= "{% t verwendung-der-einnahmen.einnahmen_rohstoffsektor.p4_link1 %}">
              {% t verwendung-der-einnahmen.einnahmen_rohstoffsektor.p4_link1text %}
            </a>
            {% t verwendung-der-einnahmen.einnahmen_rohstoffsektor.p4_2 %}
          </p>
          <p>
            {% t verwendung-der-einnahmen.einnahmen_rohstoffsektor.p5 %}
          </p>
          <p>
            {% t verwendung-der-einnahmen.einnahmen_rohstoffsektor.p6_1 %}

            <a href = "{% t verwendung-der-einnahmen.einnahmen_rohstoffsektor.link1 %}">
              {% t verwendung-der-einnahmen.einnahmen_rohstoffsektor.linktext1 %}
            </a>

            {% t verwendung-der-einnahmen.einnahmen_rohstoffsektor.p6_2 %}
            <a href="{% t verwendung-der-einnahmen.einnahmen_rohstoffsektor.link2 %}">
              {% t verwendung-der-einnahmen.einnahmen_rohstoffsektor.linktext2 %}
            </a>
            {% t verwendung-der-einnahmen.einnahmen_rohstoffsektor.p6_3 %}
          </p>

          <br/>
          <div>
            <a target="_blank" href="https://www.bundeshaushalt-info.de/#/2017/soll/einnahmen/einzelplan.html">
              <img style="width: 100%" src="{{ site.baseurl_root }}/img/verwendung-der-einnahmen/einzelplan.png" alt="Einzelplan">
            </a>
          </div>
          <br/>
        </section>
      </section>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t verwendung-der-einnahmen.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['verwendung-der-einnahmen'].nav_items %}
        {% include case-studies/_nav-list.html nav_items=nav_items %}
        {% include layout/share-buttons.html %}
      </nav>
    </div>
  </section>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/static.min.js" charset="utf-8"></script>

---
title: gesamtdeutsche_rohstoffproduktion
layout: default
permalink: /explore/how-it-work/gesamtdeutsche_rohstoffproduktion/
breadcrumb:
  - title: gesamtdeutsche_rohstoffproduktion
    permalink: /explore/how-it-work/
---
<link rel="stylesheet" type="text/css" href="{{ site.baseurl_root }}/css/slick-theme.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="title">{% t gesamtdeutsche_rohstoffproduktion.title %}</h1>
    <div class="container-left-9">
      <section id="gesamtdeutsche_rohstoffproduktion" style="position: relative;">
        <p>{% t gesamtdeutsche_rohstoffproduktion.p1 %}</p>
        <p>{% t gesamtdeutsche_rohstoffproduktion.p2 %}</p>
        <a href="{{site.baseurl}}/downloads/#chart-title-1">
          <icon class="fa fa-file-text-o u-padding-right"></icon>
          {% t gesamtdeutsche_rohstoffproduktion.daten_einsehen %}
        </a>
        <br/>
        <h3 id="steinkohle">
          {% t gesamtdeutsche_rohstoffproduktion.steinkohle.title %}
        </h3>
        <p>{% t gesamtdeutsche_rohstoffproduktion.steinkohle.p %}</p>

        <h3 id="braunkohle">
          {% t gesamtdeutsche_rohstoffproduktion.braunkohle.title %}
        </h3>
        <p>{% t gesamtdeutsche_rohstoffproduktion.braunkohle.p %}</p>

        <h3 id="erdöl">
          {% t gesamtdeutsche_rohstoffproduktion.erdöl.title %}
        </h3>
        <p>{% t gesamtdeutsche_rohstoffproduktion.erdöl.p %}</p>

        <h3 id="erdgas">
          {% t gesamtdeutsche_rohstoffproduktion.erdgas.title %}
        </h3>
        <p>{% t gesamtdeutsche_rohstoffproduktion.erdgas.p %}</p>

        <h3 id="kalisalz">
          {% t gesamtdeutsche_rohstoffproduktion.kalisalz.title %}
        </h3>
        <p>
          {% t gesamtdeutsche_rohstoffproduktion.kalisalz.p1_1 %}
          <a href="{{site.baseurl}}/downloads/#chart-title-1">
            {% t gesamtdeutsche_rohstoffproduktion.kalisalz.link1 %}
          </a>
          {% t gesamtdeutsche_rohstoffproduktion.kalisalz.p1_2 %}
          <a href="{{site.baseurl}}/downloads/#chart-title-1">
            {% t gesamtdeutsche_rohstoffproduktion.kalisalz.link2 %}
          </a>
          {% t gesamtdeutsche_rohstoffproduktion.kalisalz.p1_3 %}
        </p>

        <h3 id="spezialton">
          {% t gesamtdeutsche_rohstoffproduktion.spezialton.title %}
        </h3>
        <p>{% t gesamtdeutsche_rohstoffproduktion.spezialton.p %}</p>

        <h3 id="steinsalz">
          {% t gesamtdeutsche_rohstoffproduktion.steinsalz.title %}
        </h3>
        <p>{% t gesamtdeutsche_rohstoffproduktion.steinsalz.p %}</p>

        <h3 id="kaolin">
          {% t gesamtdeutsche_rohstoffproduktion.kaolin.title %}
        </h3>
        <p>
          {% t gesamtdeutsche_rohstoffproduktion.kaolin.p1_1 %}
          <a href="{{site.baseurl}}/downloads/#chart-title-1">
            {% t gesamtdeutsche_rohstoffproduktion.kaolin.link %}
          </a>
          {% t gesamtdeutsche_rohstoffproduktion.kaolin.p1_2 %}
        </p>

        <h3 id="quarzkies_und_sand">
          {% t gesamtdeutsche_rohstoffproduktion.quarzkies_und_sand.title %}
        </h3>
        <p>{% t gesamtdeutsche_rohstoffproduktion.quarzkies_und_sand.p %}</p>

        <h3 id="kies_und_sand">
          {% t gesamtdeutsche_rohstoffproduktion.kies_und_sand.title %}
        </h3>
        <p>{% t gesamtdeutsche_rohstoffproduktion.kies_und_sand.p %}</p>

        <h3 id="naturwerkstein">
          {% t gesamtdeutsche_rohstoffproduktion.naturwerkstein.title %}
        </h3>
        <p>{% t gesamtdeutsche_rohstoffproduktion.naturwerkstein.p %}</p>

        <h3 id="kalk_mergel">
          {% t gesamtdeutsche_rohstoffproduktion.kalk_mergel.title %}
        </h3>
        <p>{% t gesamtdeutsche_rohstoffproduktion.kalk_mergel.p %}</p>
        <p>
          {% t gesamtdeutsche_rohstoffproduktion.kalk_mergel.p2_1 %}
          <a href="{{site.baseurl}}/downloads/#chart-title-1">
            {% t gesamtdeutsche_rohstoffproduktion.kalk_mergel.link1 %}
          </a>
          {% t gesamtdeutsche_rohstoffproduktion.kalk_mergel.p2_2 %}
        </p>
        <p>
          {% t gesamtdeutsche_rohstoffproduktion.kalk_mergel.p3_1 %}
          <a href="{{site.baseurl}}/downloads/#chart-title-1">
            {% t gesamtdeutsche_rohstoffproduktion.kalk_mergel.link2 %}
          </a>
        </p>
        <p>{% t gesamtdeutsche_rohstoffproduktion.kalk_mergel.p4 %}</p>
        <p>{% t gesamtdeutsche_rohstoffproduktion.kalk_mergel.p5 %}</p>

      </section>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t gesamtdeutsche_rohstoffproduktion.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['gesamtdeutsche_rohstoffproduktion'].nav_items %}
        {% include case-studies/_nav-list.html nav_items=nav_items %}
      </nav>
    </div>
  </section>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/static.min.js" charset="utf-8"></script>

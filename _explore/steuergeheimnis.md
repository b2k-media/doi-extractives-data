---
title: Steuergeheimnis
layout: default
permalink: /rohstoffgewinnung/steuergeheimnis/
breadcrumb:
  - title: Deutscher Rohstoffsektor
    permalink: /rohstoffgewinnung/
---
<link rel="stylesheet" type="text/css" href="{{ site.baseurl_root }}/css/slick-theme.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="title">{% t steuergeheimnis.title %}</h1>

    <div class="container-left-9">
      <section id="seitenanfang" style="position: relative;">
        <h2>{% t steuergeheimnis.bedeutung.title %}</h2>
        <section id="bedeutung" style="position: relative;">
          <p>
            {% t steuergeheimnis.bedeutung.p1 %}
          </p>
          <p>
            {% t steuergeheimnis.bedeutung.p2 %}
          </p>
          <p>
            {% t steuergeheimnis.bedeutung.p3 %}
          </p>
        </section>
      </section>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t steuergeheimnis.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['steuergeheimnis'].nav_items %}
        {% include case-studies/_nav-list.html nav_items=nav_items %}
      </nav>
    </div>
  </section>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/static.min.js" charset="utf-8"></script>

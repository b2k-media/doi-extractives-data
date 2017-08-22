---
title: Beitrag zum BIP
layout: default
permalink: /explore/BIP/
breadcrumb:
  - title: Daten
    permalink: /explore/
---

<link rel="stylesheet" type="text/css" href="{{ site.baseurl_root }}/css/slick-theme.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="intro">{% t bip.title %}</h1>

    <div class="container-left-9">
      <section id="bip" style="position: relative;">
        <h3>{% t bip.bip.title %}</h3>
        <p>
          {% t bip.bip.p1_1 %}
          <span class="term term_end" data-term="Bruttoinlandsprodukt" title="Click to define" tabindex="0">
            {% t bip.bip.p1_2 %}
            <icon class="icon-book"></icon>
          </span>
            {% t bip.bip.p1_3 %}
           <span class="term term_end" data-term="Bruttowertschöpfung" title="Click to define" tabindex="0">
              {% t bip.bip.p1_4 %}
             <icon class="icon-book"></icon>
           </span>
            {% t bip.bip.p1_5 %}
              <b>{% t bip.bip.p1_6 %}</b>
            {% t bip.bip.p1_7 %}
        </p>
        <a target="_blank" href="{{site.baseurl}}/downloads/#bip">
          <icon class="fa fa-file-text-o u-padding-right"></icon>Daten Einsehen
        </a>
      </section>
    </div>
    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t bip.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['bip'].nav_items %}
        {% include case-studies/_nav-list.html nav_items=nav_items %}
      </nav>
    </div>
  </section>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/static.min.js" charset="utf-8"></script>

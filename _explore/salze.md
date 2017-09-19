---
title: Salze
layout: default
permalink: /rohstoffgewinnung/salze/
breadcrumb:
  - title: Deutscher Rohstoffsektor
    permalink: /rohstoffgewinnung/
---

<link rel="stylesheet" type="text/css" href="{{ site.baseurl_root }}/css/slick-theme.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1>{% t salze.title %}</h1>

    <div class="container-left-9">
    <section id="title" style="position: relative;">
      <h2 class="sub-headline">{% t salze.h2 %}</h2>


      <section id="fakten_zu_salze">
        <h3>{% t salze.slides_title %}</h3>
        <div class="fakten_salze">
          {% for item in site.translations[site.lang].salze.slides %}
            <div>
              <p>{{ item }}</p>
            </div>
          {% endfor %}
        </div>
      </section>
      <section id="geschichte" style="position: relative;">
        <h3>{% t salze.geschichte.title %}</h3>
        <p></p>
        <p>
          {% t salze.geschichte.p1 %}
        </p>
        <p>
          {% t salze.geschichte.p2 %}
        </p>
      </section>
      <section id="wirtschaftliche-bedeutung" style="position: relative;">
        <h3>{% t salze.wirtschaftliche-bedeutung.title %}</h3>
        <p>
          {% t salze.wirtschaftliche-bedeutung.p1_1 %}
          K<sub style="font-size: small">2</sub>O
          {% t salze.wirtschaftliche-bedeutung.p1_2 %}
        </p>
      </section>
      <section id="gewinnung" style="position: relative;">
        <h3>{% t salze.gewinnung.title %}</h3>
        <p>
          {% t salze.gewinnung.p %}
        </p>
      </section>
      <section id="verwendung" style="position: relative;">
        <h3>{% t salze.verwendung.title %}</h3>
        <p>
          {% t salze.verwendung.p1 %}
        </p>
        <p>
          {% t salze.verwendung.p2 %}
        </p>
      </section>
      </section>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t salze.title %}</div>
      </h3>
      <nav>
      {% assign nav_items = site.translations[site.lang]['salze'].nav_items %}
      {% include case-studies/_nav-list.html nav_items=nav_items %}
      </nav>
    </div>
  </section>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/static.min.js" charset="utf-8"></script>

<script type="text/javascript">
    $(document).ready(function(){
      $('.fakten_salze').slick({
        dots: true,
        speed: 500
      });
    });
</script>

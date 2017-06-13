---
title: Steine und Erden
layout: default
permalink: /explore/steine-und-erden/
breadcrumb:
  - title:  Deutscher Rohstoffsektor
    permalink: /explore/how-it-work/
---
<link rel="stylesheet" type="text/css" href="{{ site.baseurl_root }}/css/slick-theme.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">
    {% include breadcrumb.html %}

    <h1 id="title">{% t steine-und-erden.title %}</h1>

    <div class="container-left-9">
      <section id="fakten_zu_industriemineralen">
        <h3>{% t steine-und-erden.slides_title %}</h3>
        <div class="fakten_industriemineralen">
        {% for item in site.translations[site.lang].steine-und-erden.slides %}
          <div>
            <p>
              {{ item }}
            </p>
          </div>
        {% endfor %}
        </div>
      </section>
      <section id="intro" style="position: relative;">
        <p>
          {% t steine-und-erden.p1 %}
         </p>
       </section>
       <section id="geschichte" style="position: relative;">
         <h3>{% t steine-und-erden.geschichte.title %}</h3>
          <p>
            {% t steine-und-erden.geschichte.p %}
          </p>
        </section>
        <section id="gewinnung" style="position: relative;">
          <h3>{% t steine-und-erden.gewinnung.title %}</h3>
          <p>
            {% t steine-und-erden.gewinnung.p %}
          </p>
        </section>
        <section id="Industrieminerale-verwendung" style="position: relative;">
          <h3>{% t steine-und-erden.verwendung.title %}</h3>
          <p>
            {% t steine-und-erden.verwendung.p %}
          </p>
        </section>
      <section id="industrieminerale" style="position: relative;">
        <h2>{% t steine-und-erden.industrieminerale.title %}</h2>
        <section id="industrieminerale-geschichte" style="position: relative;">
          <h3>{% t steine-und-erden.industrieminerale.geschichte.title %}</h3>
          <p>
            {% t steine-und-erden.industrieminerale.geschichte.p1 %}
          </p>
          <p>
            {% t steine-und-erden.industrieminerale.geschichte.p2 %}
          </p>
        </section>
        <section id="industrieminerale-gewinnung" style="position: relative;">
          <h3>{% t steine-und-erden.industrieminerale.gewinnung.title %}</h3>
          <p>
            {% t steine-und-erden.industrieminerale.gewinnung.p %}
          </p>
        </section>
        <section id="industrieminerale-verwendung" style="position: relative;">
          <h3>{% t steine-und-erden.industrieminerale.verwendung.title %}</h3>
          <p>
            {% t steine-und-erden.industrieminerale.verwendung.p %}
          </p>
        </section>
      </section>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t steine-und-erden.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['steine-und-erden'].nav_items %}
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
      $('.fakten_industriemineralen').slick({
        dots: true,
        speed: 500
      });
    });
</script>

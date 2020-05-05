---
title: Steine und Erden
layout: default
permalink: /rohstoffgewinnung/steine-und-erden/
breadcrumb:
  - title:  Deutscher Rohstoffsektor
    title_en: German Commodities Sector
    permalink: /rohstoffgewinnung/
---
<link rel="stylesheet" type="text/css" href="{{ site.baseurl_root }}/css/slick-theme.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">
    {% include breadcrumb.html %}

    <h1 id="title">{% t steine-und-erden.title %}</h1>

    <div class="container-left-9">
      <section id="steine-und-erden" style="psition: relative;">
      <h2 class="sub-headline">{% t steine-und-erden.h2 %}</h2>
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
        <section id="verwendung" style="position: relative;">
          <h3>{% t steine-und-erden.verwendung.title %}</h3>
          <p>
            {% t steine-und-erden.verwendung.p %}
          </p>
        </section>
      </section>
      <br/>
      <section id="industrieminerale" style="position: relative;">
      <h2>{% t steine-und-erden.industrieminerale.title %}</h2>
        <section id="verwendung-geschichte" style="position: relative;">
          <h3>{% t steine-und-erden.industrieminerale.geschichte.title %}</h3>
          <p>
            {% t steine-und-erden.industrieminerale.geschichte.p1 %}
          </p>
          <p>
            {% t steine-und-erden.industrieminerale.geschichte.p2 %}
          </p>
        </section>
        <section id="verwendung-gewinnung" style="position: relative;">
          <h3>{% t steine-und-erden.industrieminerale.gewinnung.title %}</h3>
          <p>
            {% t steine-und-erden.industrieminerale.gewinnung.p1 %}
          </p>
          <p>
            {% t steine-und-erden.industrieminerale.gewinnung.p2 %}
          </p>
        </section>
        <section id="verwendung-eisenerze" style="position: relative;">
          <h3>{% t steine-und-erden.industrieminerale.verwendung.title %}</h3>
          <p>
            {% t steine-und-erden.industrieminerale.verwendung.p %}
          </p>
        </section>
      </section>
      <br/>
      <section id="eisenerze" style="position: relative;">
        <h2>{% t steine-und-erden.eisenerze.title %}</h2>
        <p>
          {% t steine-und-erden.eisenerze.p %}
        </p>

        <table class="steine-und-erden.eisenerze_table_1">
          <tbody>
            <tr>
              <td colspan="2"><strong>{% t steine-und-erden.infobox.title %}</strong></td>
            </tr>
            <tr>
              <td><strong>{% t steine-und-erden.eisenerze.infobox.table2.th1 %}</strong></td>
              <td><strong>{% t steine-und-erden.eisenerze.infobox.table2.th2 %}</strong></td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t steine-und-erden.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['steine-und-erden'].nav_items %}
        {% include case-studies/_nav-list.html nav_items=nav_items %}
        {% include layout/share-buttons.html %}
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

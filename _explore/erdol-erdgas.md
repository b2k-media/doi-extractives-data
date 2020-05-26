---
title: Erdöl und Erdgas
layout: default
permalink: /rohstoffgewinnung/erdol-erdgas/
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
    <h1 id="title">{% t erdol-erdgas.title %}</h1>

    <div class="container-left-9">
      <section id="erdol" style="position: relative;">
        <h2 class="sub-headline">{% t erdol-erdgas.erdöl.title %}</h2>
        <section id="fakten_zu_oil">
          <h3>{% t erdol-erdgas.erdöl.subtitle %}</h3>
          <div class="fakten_oil">
            {% for item in site.translations[site.lang]['erdol-erdgas']['erdöl'].slides %}
              <div>
                <p>
                  {{ item }}
                </p>
              </div>
            {% endfor %}
          </div>
        </section>
        <section id="erdol-geschichte" style="position: relative;">
          <h3>{% t erdol-erdgas.erdöl.geschichte.title %}</h3>
          <p>
            {% t erdol-erdgas.erdöl.geschichte.p %}
          </p>
        </section>
        <section id="erdol-wirtschaftliche-bedeutung" style="position: relative;">
          <h3>{% t erdol-erdgas.erdöl.wirtschaftliche-bedeutung.title %}</h3>
          <p>
            {% t erdol-erdgas.erdöl.wirtschaftliche-bedeutung.p %}
            <sup>
              <a href="#explanation-1">
                {% t erdol-erdgas.erdöl.wirtschaftliche-bedeutung.sup1.title %}</a>
            </sup>
            {% t point %}
          </p>
        </section>
        <section id="erdol-gewinnung" style="position: relative;">
          <h3>{% t erdol-erdgas.erdöl.gewinnung.title %}</h3>
          <p>
            {% t erdol-erdgas.erdöl.gewinnung.p1 %}
          </p>
        </section>
        <p>
          {% t erdol-erdgas.erdöl.gewinnung.p2 %}
        </p>
      </section>

      <section id="erdgas" style="position: relative;">
        <h2 class="sub-headline body-subheadline">{% t erdol-erdgas.erdgas.title %}</h2>
        <section id="fakten_zu_gas">
          <h3>{% t erdol-erdgas.erdgas.subtitle %}</h3>
          <div class="fakten_gas">
            {% for item in site.translations[site.lang]['erdol-erdgas']['erdgas'].slides %}
              <div>
                <p>
                  {{ item }}
                </p>
              </div>
            {% endfor %}
          </div>
        </section>
        <section id="erdgas-geschichte" style="position: relative;">
          <h3>{% t erdol-erdgas.erdgas.geschichte.title %}</h3>
          <p>
            {% t erdol-erdgas.erdgas.geschichte.p %}
          </p>
        </section>
        <section id="erdgas-wirtschaftliche-bedeutung" style="position: relative;">
          <h3>{% t erdol-erdgas.erdgas.wirtschaftliche-bedeutung.title %}</h3>
          <p>
            {% t erdol-erdgas.erdgas.wirtschaftliche-bedeutung.p %}
            <sup>
              <a href="#explanation-2">
                {% t erdol-erdgas.erdgas.wirtschaftliche-bedeutung.sup2.title %}</a>
            </sup>
              {% t point %}
          </p>
        </section>
        <section id="erdgas-gewinnung" style="position: relative;">
          <h3>{% t erdol-erdgas.erdgas.gewinnung.title %}</h3>
          <p>
          {% t erdol-erdgas.erdgas.gewinnung.p %}
          </p>
        </section>
        <section id="erdgas-verwendung" style="position: relative;">
          <h3>{% t erdol-erdgas.erdgas.verwendung.title %}</h3>
          <p>
            {% t erdol-erdgas.erdgas.verwendung.p %}
          </p>
        </section>
      </section>

      <section id="explanation" style="position: relative;">
        <p id="explanation-1">
          <sup>{% t erdol-erdgas.erdöl.wirtschaftliche-bedeutung.sup1.title %}, {% t erdol-erdgas.erdgas.wirtschaftliche-bedeutung.sup2.title %}</sup>
          {% t erdol-erdgas.erdöl.wirtschaftliche-bedeutung.sup1.text %}
        </p>
      </section>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t erdol-erdgas.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['erdol-erdgas'].nav_items %}
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
      $('.fakten_oil').slick({ dots: true, speed: 500 });
      $('.fakten_gas').slick({ dots: true, speed: 500 });
    });
</script>

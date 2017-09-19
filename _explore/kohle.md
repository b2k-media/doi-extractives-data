---
title: Kohle
layout: default
permalink: /rohstoffgewinnung/kohle/
breadcrumb:
  - title: Deutscher Rohstoffsektor
    permalink: /rohstoffgewinnung/
---
<link rel="stylesheet" type="text/css" href="{{ site.baseurl_root }}/css/slick-theme.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="title">{% t kohle.title %}</h1>

    <div class="container-left-9">
      <section id="steinkohle" style="position: relative;">
        <h2 class="sub-headline">{% t kohle.steinkohle.title %}</h2>
        <section id="fakten_zu_steinkohle">
          <h3>{% t kohle.steinkohle.subtitle %}</h3>
          <div class="fakten_steinkohle">
            {% for item in site.translations[site.lang].kohle.steinkohle.slides %}
              <div>
                <p>
                  {{ item }}
                </p>
              </div>
            {% endfor %}
          </div>
        </section>
        <section id="steinkohle-geschichte" style="position: relative;">
          <h3>{% t kohle.steinkohle.geschichte.title %}</h3>
          <p>
            {% t kohle.steinkohle.geschichte.p1 %}
          </p>
          <p>
            {% t kohle.steinkohle.geschichte.p2 %}
          </p>
        </section>
        <section id="steinkohle-ausblick" style="position: relative;">
          <h3>{% t kohle.steinkohle.ausblick.title %}</h3>
          <p>
            {% t kohle.steinkohle.ausblick.p1 %}

          <a href="{{ site.lang | url_lang_prefix  }}/rohstoffgewinnung/subventionen-und-steuerliche-begunstigungen/">
              {% t kohle.steinkohle.ausblick.k1 %}
          </a>

            {% t kohle.steinkohle.ausblick.p2 %}
          </p>

        </section>
        <section id="steinkohle-wirtschaftliche-bedeutung" style="position: relative;">
          <h3>{% t kohle.steinkohle.wirtschaftliche-bedeutung.title %}</h3>
          <p>
            {% t kohle.steinkohle.wirtschaftliche-bedeutung.p1 %}
          </p>
        </section>
      </section>

      <section id="braunkohle" style="position: relative;">
        <h2 class="sub-headline body-subheadline">{% t kohle.braunkohle.title %}</h2>
        <section id="fakten_zu_braunkohle">
          <h3>{% t kohle.braunkohle.slides_title %}</h3>
          <div class="fakten_braunkohle">
          {% for item in site.translations[site.lang].kohle.braunkohle.slides %}
            <div>
              <p>
                {{ item }}
              </p>
            </div>
          {% endfor %}
          </div>
        </section>
        <section id="braunkohle-geschichte" style="position: relative;">
          <h3>{% t kohle.braunkohle.geschichte.title %}</h3>
          <p>
            {% t kohle.braunkohle.geschichte.p %}
          </p>
        </section>
        <section id="braunkohle-gewinnung" style="position: relative;">
          <h3>{% t kohle.braunkohle.gewinnung.title %}</h3>
          <p>
            {% t kohle.braunkohle.gewinnung.p %}
          </p>
        </section>
        <section id="braunkohle-verwendung" style="position: relative;">
          <h3>{% t kohle.braunkohle.verwendung.title %}</h3>
          <p>
            {% t kohle.braunkohle.verwendung.p %}
          </p>
        </section>
      </section>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t kohle.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['kohle'].nav_items %}
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
      $('.fakten_steinkohle').slick({
        dots: true,
        speed: 500
      });
      $('.fakten_braunkohle').slick({
        dots: true,
        speed: 500
      });
    });
</script>

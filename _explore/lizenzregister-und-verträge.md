---
title: Lizenzregister und Verträge
layout: default
permalink: /rohstoffgewinnung/lizenzregister-und-vertraege/
breadcrumb:
  - title: Deutscher Rohstoffsektor
    permalink: /rohstoffgewinnung/
---
<link rel="stylesheet" type="text/css" href="{{ site.baseurl_root }}/css/slick-theme.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="title">{% t lizenzregister_und_verträge.title %}</h1>

    <div class="container-left-9">
      <section id="lizenzregister" style="position: relative;">
        <section id="rechtliche_grundlage" style="position: relative;">
        <h2>{% t lizenzregister_und_verträge.lizenzregister.title %}</h2>
          <h3>{% t lizenzregister_und_verträge.rechtliche_grundlage.title %}</h3>
          <p>
            {% t lizenzregister_und_verträge.rechtliche_grundlage.p1 %}
            <a href="{{site.baseurl}}/rohstoffgewinnung/genehmigung-von-bergbauprojekten/">
              {% t lizenzregister_und_verträge.rechtliche_grundlage.link1 %}
            </a>
          </p>
          <p>{% t lizenzregister_und_verträge.rechtliche_grundlage.p2 %}</p>
          <p>{% t lizenzregister_und_verträge.rechtliche_grundlage.p3 %}</p>
          <ul>
            <li>{% t lizenzregister_und_verträge.rechtliche_grundlage.item1 %}</li>
            <li>{% t lizenzregister_und_verträge.rechtliche_grundlage.item2 %}</li>
            <li>{% t lizenzregister_und_verträge.rechtliche_grundlage.item3 %}</li>
            <li>{% t lizenzregister_und_verträge.rechtliche_grundlage.item4 %}</li>
            <li>{% t lizenzregister_und_verträge.rechtliche_grundlage.item5 %}</li>
          </ul>
          <p>{% t lizenzregister_und_verträge.rechtliche_grundlage.p4 %}</p>
          <p>
            {% t lizenzregister_und_verträge.rechtliche_grundlage.p5_1 %}
            <a target="_blank" href="https://www.lbeg.niedersachsen.de/erdoel-erdgas-jahresbericht/jahresbericht-erdoel-und-erdgas-in-der-bundesrepublik-deutschland-936.html">
              {% t lizenzregister_und_verträge.rechtliche_grundlage.linkp %}
            </a>
            {% t lizenzregister_und_verträge.rechtliche_grundlage.p5_2 %}
          </p>
        </section>
        <br />
        <section id="beispiel" style="position: relative;">
          <h3>{% t lizenzregister_und_verträge.beispiel.title %}</h3>
          <p>
            {% t lizenzregister_und_verträge.beispiel.p1_1 %}
            <a target="_blank" href="{% t lizenzregister_und_verträge.beispiel.link_data %}">
              {% t lizenzregister_und_verträge.beispiel.link1 %}
            </a>
            {% t lizenzregister_und_verträge.beispiel.p1_2 %}
          </p>
          <ul>
            <li>{% t lizenzregister_und_verträge.beispiel.item1 %}</li>
            <li>{% t lizenzregister_und_verträge.beispiel.item2 %}</li>
            <li>{% t lizenzregister_und_verträge.beispiel.item3 %}</li>
            <li>{% t lizenzregister_und_verträge.beispiel.item4 %}</li>
          </ul>
          <br/>
          <p style="font-size: 0.75rem;">{% t lizenzregister_und_verträge.beispiel.image_source %}</p>
          <div>
            <img class="icon-tab-1" src="{{ site.baseurl_root }}/img/lizenzregister-und-vertrage/Picture1.png"/>
          </div>
          <br/>
        </section>
        <section id="handhabung" style="position: relative;">
          <h3>{% t lizenzregister_und_verträge.handhabung.title %}</h3>
          <p>
            {% t lizenzregister_und_verträge.handhabung.p1_1 %}
            <a target="_blank" href="http://www.maps.lgrb-bw.de">
              {% t lizenzregister_und_verträge.handhabung.link1 %}
            </a>
            {% t lizenzregister_und_verträge.handhabung.p1_2 %}
            <a target="_blank" href="http://www.geo.brandenburg.de/lbgr/bergbau">
              {% t lizenzregister_und_verträge.handhabung.link2 %}
            </a>
            {% t lizenzregister_und_verträge.handhabung.p1_3 %}
            <a target="_blank" href="http://www.geoportal.saarland.de">
              {% t lizenzregister_und_verträge.handhabung.link3 %}
            </a>
          </p>
        </section>
        <br/>
      </section>
      <section id="verträge" style="position: relative;">
        <h2>{% t lizenzregister_und_verträge.verträge.title %}</h2>
        <p>{% t lizenzregister_und_verträge.verträge.p1 %}</p>
        <p>{% t lizenzregister_und_verträge.verträge.p2 %}</p>
        <p>{% t lizenzregister_und_verträge.verträge.p3 %}</p>
        <p>{% t lizenzregister_und_verträge.verträge.p4 %}</p>
        <p>{% t lizenzregister_und_verträge.verträge.p5 %}</p>
        <p>{% t lizenzregister_und_verträge.verträge.p6 %}</p>
      </section>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t lizenzregister_und_verträge.lizenzregister.title  %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['lizenzregister_und_verträge'].nav_items %}
        {% include case-studies/_nav-list.html nav_items=nav_items %}
        {% include layout/share-buttons.html %}
      </nav>
    </div>
  </section>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/static.min.js" charset="utf-8"></script>

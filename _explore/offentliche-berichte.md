---
title: Öffentliche Berichte
layout: default
permalink: /rohstoffgewinnung/offentliche-berichte/
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
    <h1 id="title">{% t offentliche-berichte.title %}</h1>

    <div class="container-left-9">
      <section id="offentliche-berichte" style="position: relative;">
        <section id="gesetzliche-berichtspflicht" style="position: relative;">
          <h2 id="title">{% t offentliche-berichte.gesetzliche-berichtspflicht.title %}</h2>
          <p>
            {% t offentliche-berichte.gesetzliche-berichtspflicht.p1 %}
          </p>
          <br/>
          <ol>
            <li>{% t offentliche-berichte.gesetzliche-berichtspflicht.l1 %}</li>
            <li>{% t offentliche-berichte.gesetzliche-berichtspflicht.l2 %}</li>
            <li>{% t offentliche-berichte.gesetzliche-berichtspflicht.l3 %}</li>
          </ol>
          <p>
            {% t offentliche-berichte.gesetzliche-berichtspflicht.p2 %}
          </p>
          <p>
            {% t offentliche-berichte.gesetzliche-berichtspflicht.p3 %}
          </p>
          <p>
            {% t offentliche-berichte.gesetzliche-berichtspflicht.p4 %}
            <a href = "{% t offentliche-berichte.gesetzliche-berichtspflicht.p4_link1 %}">
              {% t offentliche-berichte.gesetzliche-berichtspflicht.p4_link1text %}
            </a> {% t offentliche-berichte.gesetzliche-berichtspflicht.p4_2 %}
          </p>          
          <p>
            {% t offentliche-berichte.gesetzliche-berichtspflicht.p4_3 %}
            <a href = "{% t downloads.uebersicht_zahlungsberichte_XLSX %}">
              {% t offentliche-berichte.gesetzliche-berichtspflicht.p4_link2text %}
            </a>
          </p>
        </section>
        <br/>
        <section id="gemeinsamkeiten" style="position: relative;">
          <h2 id="title">{% t offentliche-berichte.gemeinsamkeiten.title %}</h2>
          <p>
            {% t offentliche-berichte.gemeinsamkeiten.p1_1 %}
            <a href="{{site.baseurl}}/daten/zahlungsabgleich/">
            {% t offentliche-berichte.gemeinsamkeiten.link1 %}
            </a>
            {% t offentliche-berichte.gemeinsamkeiten.p1_2 %}
          </p>
          <p>
            {% t offentliche-berichte.gemeinsamkeiten.p2_1 %}
            <a href="{{site.baseurl}}/daten/zahlungsabgleich/">
            {% t offentliche-berichte.gemeinsamkeiten.link2 %}
            </a>
            {% t offentliche-berichte.gemeinsamkeiten.p2_2 %}
          </p>
          <p>
            {% t offentliche-berichte.gemeinsamkeiten.p3 %}
          </p>
          <table>
          <tbody>
          <tr>
            <td><strong>{% t offentliche-berichte.gemeinsamkeiten.table.head.h1 %}</strong></td>
            <td><strong>{% t offentliche-berichte.gemeinsamkeiten.table.head.h2 %}</strong></td>
            <td><strong>{% t offentliche-berichte.gemeinsamkeiten.table.head.h3 %}</strong></td>
          </tr>
          <tr>
            <td>{% t offentliche-berichte.gemeinsamkeiten.table.row1.p1 %}</td>
            <td>{% t offentliche-berichte.gemeinsamkeiten.table.row1.p2 %}</td>
            <td>{% t offentliche-berichte.gemeinsamkeiten.table.row1.p3 %}</td>
          </tr>
          <tr>
            <td>{% t offentliche-berichte.gemeinsamkeiten.table.row2.p1 %}<sup id="sup-1">{% t offentliche-berichte.gemeinsamkeiten.table.row2.sup1.title  %}</sup></td>
            <td>{% t offentliche-berichte.gemeinsamkeiten.table.row2.p2 %}</td>
            <td>{% t offentliche-berichte.gemeinsamkeiten.table.row2.p3 %}</td>
          </tr>
          <tr>
            <td>{% t offentliche-berichte.gemeinsamkeiten.table.row3.p1 %}</td>
            <td>{% t offentliche-berichte.gemeinsamkeiten.table.row3.p2 %}</td>
            <td>{% t offentliche-berichte.gemeinsamkeiten.table.row3.p3 %}</td>
          </tr>
          <tr>
            <td>{% t offentliche-berichte.gemeinsamkeiten.table.row4.p1 %}</td>
            <td>{% t offentliche-berichte.gemeinsamkeiten.table.row4.p2 %}</td>
            <td>{% t offentliche-berichte.gemeinsamkeiten.table.row4.p3 %}</td>
          </tr>
          <tr>
            <td>{% t offentliche-berichte.gemeinsamkeiten.table.row5.p1 %}</td>
            <td>{% t offentliche-berichte.gemeinsamkeiten.table.row5.p2 %}</td>
            <td>{% t offentliche-berichte.gemeinsamkeiten.table.row5.p3 %}</td>
          </tr>
          </tbody>
        </table>
          
        </section>
        <p style="font-size: 0.75rem" >
            <sup id="sup-1">{% t offentliche-berichte.gemeinsamkeiten.table.row2.sup1.title %}</sup>
            {% t offentliche-berichte.gemeinsamkeiten.table.row2.sup1.text %}
        </p>        
      </section>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t offentliche-berichte.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['offentliche-berichte'].nav_items %}
        {% include case-studies/_nav-list.html nav_items=nav_items %}
        {% include layout/share-buttons.html %}
      </nav>
    </div>
  </section>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/static.min.js" charset="utf-8"></script>

---
title: Anpassungsgeld
layout: default
permalink: /explore/how-it-work/anpassungsgeld/
breadcrumb:
  - title: anpassungsgeld
    permalink: /explore/how-it-work/
---
<link rel="stylesheet" type="text/css" href="{{ site.baseurl_root }}/css/slick-theme.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="title">{% t anpassungsgeld.title %}</h1>
    <div class="container-left-9">
      <section id="anpassungsgeldentnahme" style="position: relative;">
        <p>{% t anpassungsgeld.p %}</p>

        <h3 id="beschäftigte">
          {% t anpassungsgeld.beschäftigte.title %}
        </h3>
        <p>{% t anpassungsgeld.beschäftigte.p %}</p>

        <h3 id="kontrolle">
          {% t anpassungsgeld.kontrolle.title %}
        </h3>
        <p>{% t anpassungsgeld.kontrolle.p %}</p>

        <h3 id="begünstigungen">
          {% t anpassungsgeld.begünstigungen.title %}
        </h3>
        <p>{% t anpassungsgeld.begünstigungen.p1 %}</p>
        <p>{% t anpassungsgeld.begünstigungen.p2 %}</p>
        <p>{% t anpassungsgeld.begünstigungen.p3 %}
          <ul>
            <li>{% t anpassungsgeld.begünstigungen.list.item1 %}</li>
            <li>{% t anpassungsgeld.begünstigungen.list.item2 %}</li>
            <li>{% t anpassungsgeld.begünstigungen.list.item3 %}</li>
          </ul>
        </p>
        <p>{% t anpassungsgeld.begünstigungen.p4 %}</p>

        <h3 id="table">
          {% t anpassungsgeld.begünstigungen.table.title1_1 %}
          <sup>
            <a href="#explanation-11">
            {% t anpassungsgeld.begünstigungen.table.sup11.title %}
            </a>
          </sup>
          {% t anpassungsgeld.begünstigungen.table.title1_2 %}
          <sup>
            <a href="#explanation-12">
            {% t anpassungsgeld.begünstigungen.table.sup12.title %}
            </a>
          </sup>
        </h3>

        <table class="anpassungsgeld_table">
          <tbody>
            <tr>
              <th><strong>{% t anpassungsgeld.begünstigungen.table.th1 %}</strong></th>
              <th></th>
              <th align="center"><strong>{% t anpassungsgeld.begünstigungen.table.th2.title %}</strong></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <td></td>
              <td>{% t anpassungsgeld.begünstigungen.table.th2.th2_1 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.th2.th2_2 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.th2.th2_3 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.th2.th2_4 %}</td>
            </tr>
            <tr>
              <td>{% t anpassungsgeld.begünstigungen.table.row1.td1 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row1.td2 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row1.td3 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row1.td4 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row1.td5 %}</td>
            </tr>
            <tr>
              <td>{% t anpassungsgeld.begünstigungen.table.row2.td1 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row2.td2 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row2.td3 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row2.td4 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row2.td5 %}</td>
            </tr>
            <tr>
              <td>{% t anpassungsgeld.begünstigungen.table.row3.td1 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row3.td2 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row3.td3 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row3.td4 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row3.td5 %}</td>
            </tr>
            <tr>
              <td>{% t anpassungsgeld.begünstigungen.table.row4.td1 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row4.td2 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row4.td3 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row4.td4 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row4.td5 %}</td>
            </tr>
            <tr>
              <td>{% t anpassungsgeld.begünstigungen.table.row5.td1 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row5.td2 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row5.td3 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row5.td4 %}</td>
              <td>{% t anpassungsgeld.begünstigungen.table.row5.td5 %}</td>
            </tr>
          </tbody>
        </table>
        <p>
          {% t anpassungsgeld.begünstigungen.table.source %}
          <sup>
            <a href="#explanation-13">
            {% t anpassungsgeld.begünstigungen.table.sup13.title %}
            </a>
          </sup>
        </p>
        <br/>
        <p>
          {% t anpassungsgeld.begünstigungen.p5_1 %}
          <a href="https://webgate.ec.europa.eu/competition/transparency/public/search/home">
            {% t anpassungsgeld.begünstigungen.link %}
          </a>
          {% t anpassungsgeld.begünstigungen.p5_2 %}
        </p>
      </section>
      <br/>
      <section id="explanation" style="position: relative;">
        <p id="explanation-11">
          <sup>{% t anpassungsgeld.begünstigungen.table.sup11.title %}</sup>
          {% t anpassungsgeld.begünstigungen.table.sup11.text %}
        </p>
        <p id="explanation-12">
          <sup>{% t anpassungsgeld.begünstigungen.table.sup12.title %}</sup>
          {% t anpassungsgeld.begünstigungen.table.sup12.text1 %}
          <a href="https://www.destatis.de/DE/ZahlenFakten/GesamtwirtschaftUmwelt/VGR/Inlandsprodukt/Tabellen/BWSBereichen.html">
            {% t anpassungsgeld.begünstigungen.table.sup12.link %}
          </a>
          {% t anpassungsgeld.begünstigungen.table.sup12.text2 %}
        </p>
        <p id="explanation-13">
          <sup>{% t anpassungsgeld.begünstigungen.table.sup13.title %}</sup>
          {% t anpassungsgeld.begünstigungen.table.sup13.text %}
        </p>
      </section>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t anpassungsgeld.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['anpassungsgeld'].nav_items %}
        {% include case-studies/_nav-list.html nav_items=nav_items %}
      </nav>
    </div>
  </section>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/static.min.js" charset="utf-8"></script>

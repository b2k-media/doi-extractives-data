---
title: Bergbauberechtigungen
layout: default
permalink: /rohstoffgewinnung/genehmigung-von-bergbauprojekten/bergbauberechtigungen/
breadcrumb:
  - title: Deutscher Rohstoffsektor/Bergbauberechtigungen
    title_en: German Commodities Sector/Bergbauberechtigungen
    permalink: /rohstoffgewinnung/genehmigung-von-bergbauprojekten/
---

<link rel="stylesheet" type="text/css" href="{{ site.baseurl_root }}/css/slick-theme.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="title">{% t bergbauberechtigungen.title %}</h1>

    <div class="container-left-9">
      <section>
        <p>{% t bergbauberechtigungen.p1 %}</p>
        <p>{% t bergbauberechtigungen.p2 %}</p>
        <h3 id="erlaubnis">{% t bergbauberechtigungen.erlaubnis.title %}</h3>
        <p>{% t bergbauberechtigungen.erlaubnis.p1 %}</p>
        <p>{% t bergbauberechtigungen.erlaubnis.p2 %}</p>
        <h3 id="bewilligung">{% t bergbauberechtigungen.bewilligung.title %}</h3>
        <p>{% t bergbauberechtigungen.bewilligung.p1 %}</p>
        <p>{% t bergbauberechtigungen.bewilligung.p2 %}</p>
        <h3 id="bergwerkseigentum">{% t bergbauberechtigungen.bergwerkseigentum.title %}</h3>
        <p>{% t bergbauberechtigungen.bergwerkseigentum.p1 %}</p>
        <p>{% t bergbauberechtigungen.bergwerkseigentum.p2 %}</p>
        <h3 id="sonderfall1">{% t bergbauberechtigungen.sonderfall1.title %}</h3>
        <p>{% t bergbauberechtigungen.sonderfall1.p %}</p>
        <h3 id="sonderfall2">{% t bergbauberechtigungen.sonderfall2.title %}</h3>
        <p>{% t bergbauberechtigungen.sonderfall2.p %}</p>

        <div class="chart-title-style">{% t bergbauberechtigungen.tableHead %}</div>
        <br />
        <table>
          <tbody>
            <tr>
              <th></th>
              <td>{% t bergbauberechtigungen.table.th1 %}</td>
              <td>{% t bergbauberechtigungen.table.th2 %}</td>
              <td>{% t bergbauberechtigungen.table.th3 %}</td>
            </tr>
            <tr>
              <td><strong>{% t bergbauberechtigungen.table.row1.td1 %}</strong></td>
              <td>{% t bergbauberechtigungen.table.row1.td2 %}</td>
              <td>{% t bergbauberechtigungen.table.row1.td3 %}</td>
              <td>{% t bergbauberechtigungen.table.row1.td4 %}</td>
            </tr>
            <tr>
              <td><strong>{% t bergbauberechtigungen.table.row2.td1 %}</strong></td>
              <td>{% t bergbauberechtigungen.table.row2.td2 %}</td>
              <td>{% t bergbauberechtigungen.table.row2.td3 %}</td>
              <td>{% t bergbauberechtigungen.table.row2.td4 %}</td>
            </tr>
            <tr>
              <td><strong>{% t bergbauberechtigungen.table.row3.td1 %}</strong></td>
              <td>{% t bergbauberechtigungen.table.row3.td2 %}</td>
              <td>{% t bergbauberechtigungen.table.row3.td3 %}</td>
              <td>
              {% t bergbauberechtigungen.table.row3.td4 %}<br/><br/>
              {% t bergbauberechtigungen.table.row3.text %}
                <a href="{{site.baseurl}}/rohstoffgewinnung/genehmigung-von-bergbauprojekten/bergbauberechtigungen/">
                  {% t bergbauberechtigungen.table.row3.link %}
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t bergbauberechtigungen.title  %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['bergbauberechtigungen'].nav_items %}
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
      $('.fakten_salze').slick({
        dots: true,
        speed: 500
      });
    });
</script>

---
title: "Besch&auml;ftigung"
layout: default
permalink: /explore/employment/
breadcrumb:
  - title: Daten
    permalink: /explore/
---

<link rel="stylesheet" type="text/css" href="{{ site.baseurl_root }}/css/slick-theme.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="title">{% t beschäftigung.title %}</h1>

    <div class="container-left-9">
      <section>
        <p>{% t beschäftigung.p1 %}</p>
        <p>{% t beschäftigung.p2 %}</p>
        <p>{% t beschäftigung.p3 %}</p>

        <br/>
        <section id="tabelle-1" style="position: relative;">
        <p><strong>{% t beschäftigung.table.title %}</strong></p>

          <table>
            <tbody>
              <tr>
                <th></th>
                <td>
                  <strong>{% t beschäftigung.table.th2 %}</strong>
                </td>
                <td class="text-align-right">
                  <strong>{% t beschäftigung.table.th3 %}</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>{% t beschäftigung.table.row1.td1 %}</strong>
                </td>
                <td><strong>{% t beschäftigung.table.row1.td2 %}</strong></td>
                <td class="text-align-right"><strong>{% t beschäftigung.table.row1.td3 %}</strong></td>
              </tr>
              <tr>
                <td>
                  <u>{% t beschäftigung.table.row2.td1 %}</u>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  {% t beschäftigung.table.row3.td1 %}
                </td>
                <td>{% t beschäftigung.table.row3.td2 %}</td>
                <td class="text-align-right">{% t beschäftigung.table.row3.td3 %}</td>
              </tr>
              <tr>
                <td>
                  {% t beschäftigung.table.row4.td1 %}
                </td>
                <td>{% t beschäftigung.table.row4.td2 %}</td>
                <td class="text-align-right">{% t beschäftigung.table.row4.td3 %}</td>
              </tr>
              <tr>
                <td>
                  {% t beschäftigung.table.row5.td1 %}
                </td>
                <td>{% t beschäftigung.table.row5.td2 %}</td>
                <td class="text-align-right"><a href="#star">{% t beschäftigung.table.row5.td3 %}</a></td>
              </tr>
              <tr>
                <td>
                  {% t beschäftigung.table.row6.td1 %}
                </td>
                <td>{% t beschäftigung.table.row6.td2 %}</td>
                <td class="text-align-right">{% t beschäftigung.table.row6.td3 %}</td>
              </tr>
              <tr>
                <td>
                  {% t beschäftigung.table.row7.td1 %}
                </td>
                <td>{% t beschäftigung.table.row7.td2 %}</td>
                <td class="text-align-right">{% t beschäftigung.table.row7.td3 %}</td>
              </tr>
            </tbody>
          </table>
          <p style="font-size: 0.75rem">{% t downloads.table_link.p1 %} <a href="{{site.baseurl}}/downloads/#beschäftigten">{% t downloads.table_link.link %}</a> {% t downloads.table_link.p2 %}</p>

          <section id="explanation" style="position: relative;">
            <p id="star"><small>
              {% t beschäftigung.table.star %}
            </small></p>
          </section>
          <br /><br />
          <a href="{{site.baseurl}}/downloads/#beschäftigten">
            <icon class="fa fa-file-text-o u-padding-right"></icon>
            {% t beschäftigung.daten_einsehen %}
          </a>

        </section>
      </section>

    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t beschäftigung.title %}</div>
      </h3>
      <nav>
        {% assign nav_items = site.translations[site.lang]['beschäftigung'].nav_items %}
        {% include case-studies/_nav-list.html nav_items=nav_items %}
      </nav>
    </div>
  </section>
</main>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/static.min.js" charset="utf-8"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqPlot/1.0.8/jquery.jqplot.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jqPlot/1.0.8/jquery.jqplot.min.css"/>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqPlot/1.0.8/plugins/jqplot.barRenderer.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqPlot/1.0.8/plugins/jqplot.pieRenderer.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqPlot/1.0.8/plugins/jqplot.categoryAxisRenderer.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jqPlot/1.0.8/plugins/jqplot.pointLabels.min.js"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/pages/pieGraph.js" charset="utf-8"></script>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/explore.min.js" charset="utf-8"></script>

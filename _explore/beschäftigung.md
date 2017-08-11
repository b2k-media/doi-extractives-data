---
title: "Besch&auml;ftigung"
layout: default
permalink: /explore/employment/
breadcrumb:
  - title: Daten
    permalink: /explore/
nav_items:
  - name: intro
    title: Seitenanfang
  - name: tabelle-1
    title: "Tabelle: Besch&auml;ftigung"
  - name: daten-einsehen
    title: "Daten einsehen"
---

<link rel="stylesheet" type="text/css" href="{{ site.baseurl_root }}/css/slick-theme.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="intro">Besch&auml;ftigung</h1>

    <div class="container-left-9">
      <section>
        <p>
          Die Beschäftigten in der rohstoffgewinnenden Industrie gehen einer Vielzahl von unterschiedlichen Berufen nach. So arbeiten beispielsweise Ingenieure im Marktscheidewesen an der Erkundung und Vermessung von Vorkommen, Rohstoffingenieure und Geotechniker am Aufbau und Betrieb der technischen Anlagen und Bergbautechnologen führen den Abbau im Tage- und Untertagebau durch. Die Branche bietet auch qualifizierte Ausbildungsberufe wie z.B. Industrie- und Verfahrensmechaniker oder Elektroniker.
        </p>
        <p>
          Insgesamt waren in den Unternehmen der rohstoffgewinnenden Industrie zum Stichtag 30.06.2016 in Deutschland 71.074 Mitarbeiter/innen sozialversicherungspflichtig beschäftigt, wobei über die Hälfte aller Angestellten auf den Bereich „Gewinnung von Steinen und Erden, sonstiger Bergbau“ (Anteil: rund 53%) und gut ein Fünftel auf den Kohlenbergbau (Anteil: etwa 22%) entfiel. Diese Zahlen schließen für den gleichen Stichtag insgesamt 2.373 Auszubildende in den rohstoffgewinnenden Betrieben ein. Bezogen auf die insgesamt sozialversicherungspflichtig Beschäftigten in Deutschland entfiel damit ein Anteil von rund 0,23% auf die rohstoffgewinnende Industrie.
        </p>
        <p>
          Ein weiterer wichtiger Beschäftigungsfaktor sind die Sekundäreffekte des rohstoffgewinnenden Sektors, durch die zusätzliche Arbeits- und Ausbildungsplätze geschaffen werden. Hierzu gehören insbesondere die Dienstleistungen der Zulieferer und Subunternehmer, welche beispielweise mit der Übernahme von logistischen und gastronomischen Aufgaben oder dem Bau und Betrieb von Förderstätten beauftragt werden.
        </p>
        <br/>

        <section id="tabelle-1" style="position: relative;">
        <p><strong>Tabelle:</strong> Beschäftigte</p>
          <table class="article_table">
            <tbody>
              <tr>
                <th></th>
                <th>
                  <strong>Sozialversicherungspflichtig Beschäftigte am Stichtag 30.06.2016</strong>
                </th>
                <th>
                  <strong>darunter Auszubildende</strong>
                </th>
              </tr>
              <tr>
                <td>
                  <strong>Bergbau und Gewinnung von Steinen und Erden insgesamt</strong>
                </td>
                <td><strong>71074</strong></td>
                <td><strong>2373</strong></td>
              </tr>
              <tr>
                <td>
                  <u>darunter:</u>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  Kohlenbergbau
                </td>
                <td>15881</td>
                <td>860</td>
              </tr>
              <tr>
                <td>Gewinnung von Erdöl und Erdgas</td>
                <td>3045</td>
                <td>105</td>
              </tr>
              <tr>
                <td>Erzbergbau</td>
                <td>860</td>
                <td> * </td>
              </tr>
              <tr>
                <td>Gewinnung von Steinen und Erden, sonstiger Bergbau</td>
                <td>37982</td>
                <td>1068</td>
              </tr>
              <tr>
                <td>Erbringung von Dienstleistungen für den Bergbau und für die Gewinnung von Steinen und Erden</td>
                <td>13306</td>
                <td>340</td>
              </tr>
            </tbody>
          </table>
          <p><small>
            * Aus Datenschutzgründen und Gründen der statistischen Geheimhaltung werden Zahlenwerte von 1 oder 2 und Daten, aus denen rechnerisch auf einen solchen Zahlenwert geschlossen werden kann, anonymisiert.
          </small></p>
          <br /><br />
          <a href="{{site.baseurl}}/downloads/#beschäftigten">
            <icon class="fa fa-file-text-o u-padding-right"></icon>Daten Einsehen
          </a>

        </section>
      </section>

    </div>      
    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{{ page.title }}</div>
      </h3>
      <nav>
        {% include case-studies/_nav-list.html %}
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

---
title: Zulassung eines Betriebsplans
layout: default
permalink: /rohstoffgewinnung/genehmigung-von-bergbauprojekten/zulassung/
breadcrumb:
  - title: Deutscher Rohstoffsektor/Zulassung
    permalink: /rohstoffgewinnung/genehmigung-von-bergbauprojekten/
---

<link rel="stylesheet" type="text/css" href="{{ site.baseurl_root }}/css/slick-theme.css"/>
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/jquery.slick/1.6.0/slick.css"/>

<main class="container-page-wrapper layout-state-pages">
  <section class="container" style="position: relative;">

    {% include breadcrumb.html %}
    <h1 id="title">{% t genehmigung-zulassung.title %}</h1>

    <div class="container-left-9">
      <section>
        <p>{% t genehmigung-zulassung.betriebsplans.p1 %}
        <a href="{{site.baseurl}}/rohstoffgewinnung/umgang-mit-der-natur/">
          {% t genehmigung-zulassung.betriebsplans.link1 %}
        </a>
        </p>

        <p>{% t genehmigung-zulassung.betriebsplans.p2 %}</p>
        <ul>
          <li>
            {% t genehmigung-zulassung.betriebsplans.item1 %}
          </li>
          <li>
            {% t genehmigung-zulassung.betriebsplans.item2 %}
          </li>
          <li>
            {% t genehmigung-zulassung.betriebsplans.item3 %}
          </li>
          <li>
            {% t genehmigung-zulassung.betriebsplans.item4 %}
          </li>
        </ul>
        <p>{% t genehmigung-zulassung.betriebsplans.p3 %}</p>
        <br/>
        <h1 id="umweltverträglichkeitsprüfung">
          {% t genehmigung-zulassung.umweltverträglichkeitsprüfung.title %}
        </h1>
        <p>
          {% t genehmigung-zulassung.umweltverträglichkeitsprüfung.p1_1 %}
        <a target="_blank" href="http://www.gesetze-im-internet.de/bundesrecht/uvpbergbv/gesamt.pdf">
          {% t genehmigung-zulassung.umweltverträglichkeitsprüfung.link1 %}
        </a>
          {% t genehmigung-zulassung.umweltverträglichkeitsprüfung.p1_2 %}
          <a target="_blank" href="http://www.gesetze-im-internet.de/bundesrecht/uvpg/gesamt.pdf">
            {% t genehmigung-zulassung.umweltverträglichkeitsprüfung.link2 %}
          </a>
          {% t genehmigung-zulassung.umweltverträglichkeitsprüfung.p1_3 %}
          <a target="_blank" href="http://www.gesetze-im-internet.de/bundesrecht/uvpbergbv/gesamt.pdf">
            {% t genehmigung-zulassung.umweltverträglichkeitsprüfung.link3 %}
          </a>
          {% t genehmigung-zulassung.umweltverträglichkeitsprüfung.p1_4 %}
          <a target="_blank" href="http://www.gesetze-im-internet.de/bundesrecht/uvpg/gesamt.pdf">
            {% t genehmigung-zulassung.umweltverträglichkeitsprüfung.link4 %}
          </a>
            {% t genehmigung-zulassung.umweltverträglichkeitsprüfung.p1_5 %}
        </p>
        <p>
          {% t genehmigung-zulassung.umweltverträglichkeitsprüfung.p2_1 %}
          <span class="term term_end" data-term="{% t glossary_data-term.planfeststellungsverfahren %}" title="Click to define" tabindex="0">
            {% t genehmigung-zulassung.umweltverträglichkeitsprüfung.link1 %}
            <icon class="icon-book"></icon>
          </span>
          {% t genehmigung-zulassung.umweltverträglichkeitsprüfung.p2_2 %}
        </p>
      </section>
    </div>

    <div class="sticky sticky_nav container-right-3">
      <h3 class="state-page-nav-title container">
        <div class="nav-title">{% t genehmigung-zulassung.title %}</div>
      </h3>
      <nav>
      {% assign nav_items = site.translations[site.lang]['genehmigung-zulassung'].nav_items %}
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

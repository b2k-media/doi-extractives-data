---
title: Datenschutz
layout: default
permalink: /datenschutz/
---

<section accordion="explore-landing" accordion-desktop="false" class="container-outer landing-wrapper">
  <section class="container">
    <div class="container-outer landing-section_top">
      <div class="container-left-8 hero-left">
        <h1>{% t 'datenschutz.title' %}</h1>
        <hr/>
        <h2>{% t 'datenschutz.datenschutzerklaerung.title' %}</h2>
        <p class="hero-description">{% t 'datenschutz.datenschutzerklaerung.description-1' %}</p>
        <p class="hero-description">{% t 'datenschutz.datenschutzerklaerung.description-2' %}</p>
        <p class="hero-description">{% t 'datenschutz.datenschutzerklaerung.description-3' %}</p>
        <ul>
          <li>{% t 'datenschutz.datenschutzerklaerung.list.li1' %}</li>
          <li>{% t 'datenschutz.datenschutzerklaerung.list.li2' %}</li>
          <li>{% t 'datenschutz.datenschutzerklaerung.list.li3' %}</li>
          <li>{% t 'datenschutz.datenschutzerklaerung.list.li4' %}</li>
          <li>{% t 'datenschutz.datenschutzerklaerung.list.li5' %}</li>
          <li>{% t 'datenschutz.datenschutzerklaerung.list.li6' %}</li>
          <li>{% t 'datenschutz.datenschutzerklaerung.list.li7' %}</li>
        </ul>
        <p class="hero-description">{% t 'datenschutz.datenschutzerklaerung.description-4' %}</p>
        <p class="hero-description">{% t 'datenschutz.datenschutzerklaerung.description-5' %}</p>
        <p class="hero-description">{% t 'datenschutz.datenschutzerklaerung.description-6' %}</p>
        <h2>{% t 'datenschutz.analyse.title' %}</h2>
        <p class="hero-description">{% t 'datenschutz.analyse.description-1' %}</p>
        <p class="hero-description">{% t 'datenschutz.analyse.description-2' %}</p>
        <p class="hero-description">{% t 'datenschutz.analyse.description-3' %}</p>
        <p class="hero-description">{% t 'datenschutz.analyse.description-4' %}</p>
        <p class="hero-description">{% t 'datenschutz.analyse.description-5' %}</p>

        <iframe style="border: 0; height: 200px; width: 600px;"
         {% if site.lang == "en" %}
           src="https://www.d-eiti.de/Piwik_02/index.php?module=CoreAdminHome&action=optOut&language=en">
         {% else %}
           src="https://www.d-eiti.de/Piwik_02/index.php?module=CoreAdminHome&action=optOut&language=de">
         {% endif %}
        </iframe>

        <h2>{% t 'datenschutz.aufrufbarkeit.title' %}</h2>
        <p class="hero-description">{% t 'datenschutz.aufrufbarkeit.description-1' %}</p>

        <h2>{% t 'datenschutz.fragen.title' %}</h2>
        <p class="hero-description">
          {% t 'datenschutz.fragen.description-1' %}
          <a target="_blank" href="
            {% if site.lang == "en" %}
              https://www.d-eiti.de/en/kontakt-kontakformular/  
            {% else %}
              https://www.d-eiti.de/kontakt-kontakformular/
            {% endif %}
            ">{% t 'datenschutz.fragen.link' %}</a>
        </p>

        <h2>{% t 'datenschutz.haftung.title' %}</h2>
        <p class="hero-description">{% t 'datenschutz.haftung.description-1' %}</p>
        <p class="hero-description">{% t 'datenschutz.haftung.description-2' %}</p>
        <p class="hero-description">{% t 'datenschutz.haftung.description-3' %}</p>
        <p class="hero-description">{% t 'datenschutz.haftung.description-4' %}</p>
        <p class="hero-description">{% t 'datenschutz.haftung.description-5' %}</p>

        <h2>{% t 'datenschutz.haftung-links.title' %}</h2>
        <p class="hero-description">{% t 'datenschutz.haftung-links.description-1' %}</p>
      </div>
    </div>  
  </section>
</section>
<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/homepage.min.js" charset="utf-8"></script>

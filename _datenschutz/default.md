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

        <p class="hero-description">{% t 'datenschutz.datenschutzerklaerung.description-1' %}</p>
        <p class="hero-description">{% t 'datenschutz.datenschutzerklaerung.description-2' %}</p>
        
        <p class="hero-description">{% t 'datenschutz.datenschutzerklaerung.description-3' %}<br>
		{% t 'datenschutz.datenschutzerklaerung.description-4' %}<br>
		{% t 'datenschutz.datenschutzerklaerung.description-5' %}</p>
        
        <p class="hero-description">
        {% t 'datenschutz.datenschutzerklaerung.description-6' %}<br>
        <a href="mailto:{% t 'datenschutz.datenschutzerklaerung.link-1' %}">{% t 'datenschutz.datenschutzerklaerung.link-1' %}</a>        
		</p>
		
        <p class="hero-description">
        {% t 'datenschutz.datenschutzerklaerung.description-7' %}<br>
        <a target="_blank" href="mailto:{% t 'datenschutz.datenschutzerklaerung.link-2' %}">{% t 'datenschutz.datenschutzerklaerung.link-2' %}</a>  
        </p>
             
        <p class="hero-description">{% t 'datenschutz.datenschutzerklaerung.description-8' %}</p>
            
        <h2>{% t 'datenschutz.analyse.title' %}</h2>    
        <p class="hero-description">{% t 'datenschutz.analyse.description-1' %}</p>    
        <p class="hero-description">{% t 'datenschutz.analyse.description-2' %}</p>                
        <ul>
          <li>{% t 'datenschutz.analyse.list.li1' %}</li>
          <li>{% t 'datenschutz.analyse.list.li2' %}</li>
          <li>{% t 'datenschutz.analyse.list.li3' %}</li>
          <li>{% t 'datenschutz.analyse.list.li4' %}</li>
          <li>{% t 'datenschutz.analyse.list.li5' %}</li>
          <li>{% t 'datenschutz.analyse.list.li6' %}</li>
          <li>{% t 'datenschutz.analyse.list.li7' %}</li>
        </ul>
        <p class="hero-description">{% t 'datenschutz.analyse.description-3' %}</p>
        <p class="hero-description">{% t 'datenschutz.analyse.description-4' %}</p>

        <iframe style="border: 0; height: 200px; width: 600px;"
         {% if site.lang == "en" %}
           src="https://www.d-eiti.de/Piwik_02/index.php?module=CoreAdminHome&action=optOut&language=en">
         {% else %}
           src="https://www.d-eiti.de/Piwik_02/index.php?module=CoreAdminHome&action=optOut&language=de">
         {% endif %}
        </iframe>
        
        <p class="hero-description">{% t 'datenschutz.analyse.description-5' %}</p>
        <p class="hero-description">{% t 'datenschutz.analyse.description-6' %}</p>

        <h2>{% t 'datenschutz.newsletter.title' %}</h2>
        <p class="hero-description">{% t 'datenschutz.newsletter.description-1' %}</p>
        <p class="hero-description">{% t 'datenschutz.newsletter.description-1' %}</p>
        
        <h2>{% t 'datenschutz.kontaktformular.title' %}</h2>
        <p class="hero-description">{% t 'datenschutz.kontaktformular.description-1' %}</p>
        
        <h2>{% t 'datenschutz.dauer.title' %}</h2>
        <p class="hero-description">{% t 'datenschutz.dauer.description-1' %}</p>
        
        <h2>{% t 'datenschutz.nutzerrechte.title' %}</h2>
		<p>
		<p class="hero-description">{% t 'datenschutz.nutzerrechte.description-1' %}</p>
		<p class="hero-description">{% t 'datenschutz.nutzerrechte.description-2' %}</p>
		<a target="_blank" href="https://www.bfdi.bund.de/DE/Home/home_node.html">{% t 'datenschutz.nutzerrechte.link' %}</a> 
		</p>
		
        <h2>{% t 'datenschutz.abrufbarkeit.title' %}</h2>
        <p class="hero-description">{% t 'datenschutz.abrufbarkeit.description-1' %}</p>

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

---
title: Impressum
layout: default
permalink: /impressum/
---

<section accordion="explore-landing" accordion-desktop="false" class="container-outer landing-wrapper">
  <section class="container">
    <div class="container-outer landing-section_top">
      <div class="container-left-9 hero-left">
        <h1>{% t 'impressum.title' %}</h1>
        <hr/>
        <div>
          <h3>{% t 'impressum.secretary.title' %}</h3>
          <p class="hero-description">
          {% t 'impressum.secretary.address' %}<br>
          {% t 'impressum.secretary.strasee' %}<br>
          {% t 'impressum.secretary.city' %}<br>
          {% t 'impressum.secretary.tel' %}<br>
          {% t 'impressum.secretary.fax' %}</p>
          <p class="hero-description">
            {% t 'impressum.secretary.email' %}
            <a target="_blank" href="
            {% if site.lang == "en" %}
            https://www.d-eiti.de/en/kontakt-kontakformular/  
            {% else %}
            https://www.d-eiti.de/kontakt-kontakformular/
            {% endif %}
            " class="blue_link">
            <font class="">{% t 'impressum.secretary.link' %}</font></a>
          </p>

          <p class="hero-description">
            <a target="_blank" href="
            {% if site.lang == "en" %}
            https://www.d-eiti.de/en/  
            {% else %}
            https://www.d-eiti.de/
            {% endif %}
            " class="blue_link">
            <font class="">{% t 'impressum.secretary.web' %}</font></a>
          </p>

		  <br>
		  {% t 'impressum.secretary.p1' %}
          <p class="hero-description">{% t 'impressum.secretary.p1_2' %} </p>
          <br>
		  {% t 'impressum.secretary.p2' %}<br><br>

		  {% t 'impressum.giz.text1_1' %}<br>

		  <p class="hero-description">
		  {% t 'impressum.giz.text1_2' %}<br><br>
          {% t 'impressum.giz.text2_1' %}<br>
          {% t 'impressum.giz.text2_2' %}<br>
          {% t 'impressum.giz.text2_3' %}<br>
          {% t 'impressum.giz.text2_4' %}</p>
          <br/>
          <p class="hero-description">
          {% t 'impressum.giz.text3_1' %}<br>
          {% t 'impressum.giz.text3_2' %}<br>
          {% t 'impressum.giz.text3_3' %}<br>
          {% t 'impressum.giz.text3_4' %}</p>

          <p class="hero-description">
            {% t 'impressum.giz.text4_1' %}
            <a href="mailto:info@giz.de" class="blue_link">
            <font class="">{% t 'impressum.giz.link1' %}</font></a>
			<br>
            {% t 'impressum.giz.text4_2' %}
            <a target="_blank" href="http://www.giz.de" class="blue_link">
            <font class="">{% t 'impressum.giz.link2' %}</font></a>
          </p><br>
          {% t 'impressum.giz.text5' %}
          <p class="hero-description">{% t 'impressum.giz.text5_1' %}</p>
          <p class="hero-description">{% t 'impressum.giz.text5_2' %}</p>

          {% t 'impressum.giz.text6' %}
          <p class="hero-description">{% t 'impressum.giz.text6_1' %}</p>

          {% t 'impressum.giz.text7' %}
          <p class="hero-description">{% t 'impressum.giz.text7_1' %}</p>
          <p class="hero-description">{% t 'impressum.giz.text7_2' %}</p>

          {% t 'impressum.giz.text8' %}
          <p class="hero-description">{% t 'impressum.giz.text8_1' %}</p>
          <p class="hero-description">{% t 'impressum.giz.text8_3' %}</p>

          {% t 'impressum.giz.text9' %}
          <p class="hero-description">
            {% t 'impressum.giz.text9_1' %}
            <a target="_blank" href="
            {% if site.lang == "en" %}
            https://www.d-eiti.de/en/kontakt-kontakformular/  
            {% else %}
            https://www.d-eiti.de/kontakt-kontakformular/
            {% endif %}
            " class="blue_link">
            <font class="">{% t 'impressum.giz.link3' %}</font></a>
          </p>


        </div>
      </div>
    </div>
  </section>
</section>


<script type="text/javascript" src="{{ site.baseurl_root }}/js/lib/homepage.min.js" charset="utf-8"></script>

---
layout: page
permalink: /publications/
title: Publications
description: The publications listed here are those affiliated with CompBioClub. For complete lists, see the members' scholar pages.

nav: false
---

<!-- _pages/publications.md -->


<div>
    A<sup>*</sup>: A is (co-)corresponding author. 
    B<sup>†</sup>: B is (co-)first author. 
    <span style="text-decoration: underline; text-decoration-thickness: 1px; text-underline-offset: 4px;">C</span>: C was a lab member during paper preparation.   
</div>
<br>


<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">
{% bibliography --group_by none --query @*[peerreviewed=true]* %}
</div>

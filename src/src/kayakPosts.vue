<script setup>
// example components
import TransparentBlogCard from "./TransparentBlogCard.vue";
import BackgroundBlogCard from "./BackgroundBlogCard.vue";

//Vue Material Kit 2 components
import kayaksortie from "@/assets/kayak-sortie.jpg";
import kayaksoir from "@/assets/kayak-soir.jpg";
import post2 from "@/assets/img/examples/testimonial-6-3.jpg";
import post3 from "@/assets/img/examples/blog-9-4.jpg";
import post4 from "@/assets/img/examples/blog2.jpg";
</script>

<template>
  <section class="py-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-sm-6">
          <TransparentBlogCard
            :image="kayaksortie"
            title="Sortie découverte"
            description="Pêche à la demi-journée 4h avec un professionnel diplômé : 125€/pers.
Prêt du matériel inclus. Possibilité de prendre votre propre matériel.
Maximum 4 personnes.

Si vous ne voulez pas être mélangé à d'autres personnes et que vous êtes :
- seul 250€ 
- deux 375€
- trois 500€"
          />
        </div>
        <div class="col-lg-6 col-sm-6">
          <TransparentBlogCard
            :image="kayaksoir"
            title="coup du soir"
            description="3h avec un professionnel diplômé 95€ par personnes.

Si vous ne voulez pas être mélangé à d'autres personnes et que vous êtes :
- seul 190€
- deux 285€
- trois 380€"
          />
        </div>
        
      </div>
    </div>
  </section>
</template>

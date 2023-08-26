<script setup>

import vueMkHeader from "@/assets/landingkayak.jpg";
import Posts from "./kayakPosts.vue";

</script>
<template>
  <div class="container mt-sm-5">
    <div class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl" :style="{
      backgroundImage: `url(${vueMkHeader})`
    }" loading="lazy">
      <span class="mask bg-gradient-dark"></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 ms-lg-5">
            <h1 class="text-white">KAYAK à pédales</h1>
            <p class="lead text-white opacity-8">
              Au départ de La Tremblade, l'île d'Oléron, La Rochelle ou l'île de Ré, venez découvrir le kayak à pédales
              lors d'une sortie pêche à la demi-journée. Venez goûter au plaisir de vous balader en glissant sur l'eau en
              silence, confortablement assis dans votre siège grand confort. Vous vous déplacerez à la force des jambes,
              et vous dirigerez en tournant la manette qui pilote le gouvernail. Dépaysement et détente garantis, comme
              pour cette sortie avec le Fort Boyard à l'horizon !
            </p>
            <a href="https://"
              class="text-white icon-move-right">
              Contact
              <i class="fas fa-arrow-right text-sm ms-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>


    <Posts />
  </div>

</template>

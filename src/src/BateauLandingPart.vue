<script setup>

import vueMkHeader from "@/assets/bateauHeaderPart.jpg";
import Posts from "./kayakPosts.vue";
import constant from "./constant"

</script>
<template>
  <div class="container mt-sm-5">
    <div class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl" :style="{
      backgroundImage: `url(${vueMkHeader})`
    }" loading="lazy">
      <span class="mask bg-gradient-dark "></span>
      <div class="container">
        <div class="row">
          <div class="col-lg-6 ms-lg-5 ">
            <h1 class="text-white">Bateau</h1>
            <p class="lead text-white opacity-8">
              Embarquez au port des minimes de La Rochelle et venez découvrir des paysages magnifiques lors d'une sortie
              pêche : les trois tours de La Rochelle, vestiges des fortifications maritimes médiévales, îles de Ré et
              d'Oleron, Fort Boyard, île d'Aix...
            </p>
            <a :href=constant.formularurl class="text-white icon-move-right">
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

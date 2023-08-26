<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import Posts from "./kayakPosts.vue";


// images
import vueMkHeader from "@/assets/landingkayak.jpg";
import kayak from "@/assets/landingkayak.jpg";
import bateau from "@/assets/landingbateau.jpg";
import bord from "@/assets/anguille.png";
import stage from "@/assets/landingstage.jpg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <Navbar :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div class="page-header min-vh-75" :style="{
      backgroundImage: `linear-gradient(rgba(95,121,145,0.45) 0%, rgba(95,121,145,0.45) 100%), url(${vueMkHeader})`
    }" loading="lazy">

      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
            <h1 class="text-white mb-4">KAYAK à pédales</h1>
            <p class="text-white opacity-8 lead pe-5 me-5">
              Au départ de La Tremblade, l'île d'Oléron, La Rochelle ou l'île de Ré, venez découvrir le kayak à pédales lors d'une sortie pêche à la demi-journée. Venez goûter au plaisir de vous balader en glissant sur l'eau en silence, confortablement assis dans votre siège grand confort. Vous vous déplacerez à la force des jambes, et vous dirigerez en tournant la manette qui pilote le gouvernail. Dépaysement et détente garantis, comme pour cette sortie avec le Fort Boyard à l'horizon !
            </p>
          </div>
        </div>
      </div>


    </div>
  </Header>

  

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">


    <section class="py-5">
      
      
      <Posts />


    </section>


  </div>
  <Footer />
</template>

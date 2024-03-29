<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
import Header from "./Header.vue";
import ExampleCard from "./views/Presentation/Components/ExampleCard.vue";
import KayakLandingPart from "./KayakLandingPart.vue";
import BateauLandingPart from "./BateauLandingPart.vue";

// images
import vueMkHeader from "@/assets/Banniere.jpg";
import kayak from "@/assets/landingkayak.jpg";
import bateau from "@/assets/landingbateau.jpg";
import bord from "@/assets/bords.jpg";
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

function scrollToAnchorPoint(refName) {
  const el = this.$refs[refName]
  el.scrollIntoView({ behavior: 'smooth' })
}

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
          <div class="col-lg-7 col-md-9 col-sm-12 d-flex justify-content-center flex-column">
            <!-- <h1 class="text-white mb-4">Canalo</h1>  -->
            <h1 class="text-white mb-3 mt-5">Charente maritime - Bretagne - Pays-Bas</h1>
            <p class="text-white opacity-8 lead pe-5 me-3">
              La Société CANALO est spécialisée dans le loisir nautique : enseignement de la pêche, pour tout public et
              sur différents types de supports.
              Nos partenaires peuvent également vous permettre d'agrémenter vos séjours par des dégustations et des
              visites guidées..
            </p>
          </div>
        </div>
      </div>


    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">


    <section class="py-5">

      <div class="container mt-5">
        <div class="row">
          <div class="col-md-8">
            <div class="row mt-4 display-flex">
              <div class="col-md-6 mt-md-0 mt-5 ">

                <ExampleCard class="shadow-lg" title="Kayak à pédales" :image="kayak" route="/#kayak"
                  subtitle="demi journée (4h) ou journée (6h, eau douce uniquement) avec un professionnel diplômé : à partir de 125€. Prêt du matériel inclus. Maximum 4 personnes." />

              </div>
              <div class="col-md-6 mt-md-0 mt-5 ">

                <ExampleCard class="shadow-lg" title="Bateau" route="/#bateau" :image="bateau"
                  subtitle="Bass boat alu 4m50
Journée 6h eau douce ou bord de mer : à partir de 155€. Prêt du matériel inclus. Maximum 3 pêcheurs.
                  
Semi rigide 6m 150cv
Journée en mer 6h : à partir de 155€. Prêt du matériel inclus. Maximum 5 pêcheurs. Accompagnants possible." />

              </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-6 mt-md-0 mt-5">

                <ExampleCard classes="mt-5" title="Bord" :image="bord" route="landing"
                  subtitle="Venez découvrir la pêche en famille durant 2h ! Découverte des petits poissons et des écrevisses:  à partir de 85€ par famille." />

              </div>
              <div class="col-md-6 mt-md-0 mt-5">

                <ExampleCard classes="shadow-lg" title="Mini stages" :image="stage" route="landing"
                  subtitle="Possibilité de mini stages sur l'année à destination des AAPPMA, EPHAD ou autres structures : découverte de la pêche au coup, pêche en float tube, découverte de la pêche en kayak, sorties en bateau... Certaines de ces activités peuvent être pratiquées par les personnes à mobilité réduite, ou porteuses d'un handicap. Nous consulter." />

              </div>
            </div>
          </div>
          <div class="col-md-3 mx-auto mt-md-0 mt-3">
            <div class="position-sticky" style="top: 100px !important">
              <h3>
                "J'ai passé un BPJEPS pêche de loisir, pour pouvoir allier mon métier d'enseignant à ma passion pour la
                pêche."
              </h3>
              
              <h6 class="text-secondary font-weight-normal">
                Guillaume sera votre guide.
                Ancien professeur d'éducation physique et sportive, il aura à coeur de vous conseiller.
              </h6>


              <iframe src="https://www.youtube.com/embed/XYoW1P-F7YY?si=KJmeD7f-7CHeLr0P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

            </div>
          </div>
        </div>
      </div>
    </section>

    <KayakLandingPart id="kayak"></KayakLandingPart>

    <BateauLandingPart id="bateau"></BateauLandingPart>

  </div>
  <Footer />
</template>

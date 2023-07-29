<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "./assets/js/useWindowsWidth";

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import downArrow from "@/assets/img/down-arrow.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

import canalogo from "@/assets/logo.png";

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "https://docs.google.com/forms/d/e/1FAIpQLScFN204YeZbe4JlyrbGlnT4TNA1l9xtjiCA0_efXdw0bNbJzg/viewform?usp=pp_url",
      color: "bg-gradient-success",
      label: "Contact"
    })
  },
  transparent: {
    type: Boolean,
    default: false
  },
  light: {
    type: Boolean,
    default: false
  },
  dark: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  darkText: {
    type: Boolean,
    default: false
  }
});

function getLogo() {
  return canalogo;
}

// set arrow  color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark;
  } else if (props.transparent) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

// set text color
const getTextColor = () => {
  let color;
  if (props.transparent && textDark.value) {
    color = "text-dark";
  } else if (props.transparent) {
    color = "text-white";
  } else {
    color = "text-dark";
  }

  return color;
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>
<template>
  <nav class="navbar navbar-expand-lg top-0" :class="{
    'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
      props.transparent,
    'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
      props.sticky,
    'navbar-light bg-white py-3': props.light,
    ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark
  }">
    <div :class="props.transparent || props.light || props.dark
        ? 'container'
        : 'container-fluid px-0'
      ">
      <!-- Version desktop -->
      <RouterLink class="navbar-brand d-none d-md-block" :class="[
        (props.transparent && textDark.value) || !props.transparent
          ? 'text-dark font-weight-bolder ms-sm-3'
          : 'text-white font-weight-bolder ms-sm-3'
      ]" :to="{ name: 'landing' }">
        Canalo
      </RouterLink>

      <!-- Version  mobile -->
      <RouterLink class="navbar-brand d-block d-md-none" :class="props.transparent || props.dark
          ? 'text-white'
          : 'font-weight-bolder ms-sm-3'
        " to="/">
        Canalo
      </RouterLink>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLScFN204YeZbe4JlyrbGlnT4TNA1l9xtjiCA0_efXdw0bNbJzg/viewform?usp=pp_url"
        class="btn btn-sm bg-gradient-success mb-0 ms-auto d-lg-none d-block">Contact</a>
      <button class="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation"
        aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div class="collapse navbar-collapse w-150 pt-3 pb-2 py-lg-0" id="navigation">
        <ul class="navbar-nav navbar-nav-hover ms-auto">


            <RouterLink class="nav-link cursor-pointer" :to="{ name: 'landing' }">
              Kayak à pédales
            </RouterLink>

            <RouterLink class="nav-link cursor-pointer ms-1" :to="{ name: 'landing' }">
              Bateau
            </RouterLink>
            <RouterLink class="nav-link cursor-pointer ms-1" :to="{ name: 'landing' }">
              Bord
            </RouterLink>
            <RouterLink class="nav-link cursor-pointer ms-1" :to="{ name: 'landing' }">
              Mini stages
            </RouterLink>
            <RouterLink class="nav-link cursor-pointer ms-1" :to="{ name: 'landing' }">
              Séjours
            </RouterLink>
            <RouterLink class="nav-link cursor-pointer ms-1" :to="{ name: 'landing' }">
              Matériel - Partenaires
            </RouterLink>
            <RouterLink class="nav-link cursor-pointer ms-1" :to="{ name: 'landing' }">
              Infos - CGV
            </RouterLink>

        </ul>

        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <a :href="action.route" class="btn btn-sm mb-0" :class="action.color">{{ action.label }}</a>
          </li>
        </ul>

      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

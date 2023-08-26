<script setup>
defineProps({
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  route: {
    type: String,
  },
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "javascript:;",
      color: "success",
      label: "Read more",
    }),
  },
});
</script>
<template>
  <div class="card card-plain">
    <div class="card-header p-0 position-relative">
      <a class="d-block blur-shadow-image">
        <img
          :src="image"
          :alt="title"
          class="img-fluid shadow border-radius-lg"
          loading="lazy"
        />
      </a>
    </div>
    <div class="card-body px-0">
      <h5>
        <a :href="route" class="text-dark font-weight-bold">{{
          title
        }}</a>
      </h5>
      <p :style="`white-space: pre-wrap;`">
        {{ description }}
      </p>
      <a
        :href="route"
        class="text-sm icon-move-right"
        :class="`text-${action.color}`"
        >Contact
        <i class="fas fa-arrow-right text-xs ms-1"></i>
      </a>
    </div>
  </div>
</template>

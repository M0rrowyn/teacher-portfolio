<script setup>
import Button from 'primevue/button';

import { ref } from 'vue';

const props = defineProps(['customClass']);

const customClass = ref(props.customClass);
</script>

<template>
  <Button type="button" :class="customClass" icon="pi pi-check" enter>
    <slot></slot>
  </Button>
</template>

<style lang="scss" scoped></style>

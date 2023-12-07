<script setup>
const pdfFilePath = '../../public/files/dummy.pdf';
const pdfFileUrl = new URL(pdfFilePath, import.meta.url).href;

const downloadPdf = () => {
  const link = document.createElement('a');
  link.href = pdfFileUrl;
  link.target = '_blank';
  link.download = 'downloaded_file.pdf';

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};
</script>

<template>
  <div class="download-link__container">
    <a
      class="download-link__container__item"
      :href="pdfFileUrl"
      target="_blank"
      download="downloaded_file.pdf"
      @click.prevent="downloadPdf"
      >Download PDF</a
    >
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.download-link__container {
  &__item {
    display: inline-block;
    color: $text;
    text-decoration: none;
    transition: all 0.35s ease;
    padding: 12px 0;

    &:hover {
      color: $accent-color;
      border-bottom: 2px solid $accent-color;
      opacity: 0.7;
    }

    &:active {
      color: $red-color;
    }
  }
}
</style>

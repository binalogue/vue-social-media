<template>
  <span @click="whatsappLink(url, text)">
    <slot />
  </span>
</template>

<script>
/* Helpers */
import { objectToGetParams } from 'helpers';

export default {
  props: {
    text: {
      type: String,
      default: '',
    },

    url: {
      type: String,
      required: true,
    },
  },

  methods: {
    whatsappLink(url, text) {
      window.open(
        `https://api.whatsapp.com/send${objectToGetParams({
          text: text ? `${text} ${url}` : url,
        })}`,
        '__blank'
      );
    },
  },
};
</script>

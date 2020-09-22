<template>
  <span @click="facebookLink(url)">
    <slot />
  </span>
</template>

<script>
/* Helpers */
import { objectToGetParams } from 'helpers';

export default {
  props: {
    url: {
      type: String,
      required: true,
    },
  },

  methods: {
    facebookLink(url) {
      window.open(
        `https://www.facebook.com/sharer/sharer.php${objectToGetParams({
          u: url,
        })}`,
        '__blank'
      );
    },
  },
};
</script>

<template>
  <span @click="twitterLink(url, { text })">
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
    twitterLink(url, { text }) {
      window.open(
        `https://www.twitter.com/share${objectToGetParams({
          url,
          text,
        })}`,
        '__blank'
      );
    },
  },
};
</script>

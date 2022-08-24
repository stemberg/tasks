<template>
  <section>
    <strong class="cronometro">{{ timeElapsed }}</strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cronometro",
  props: {
    timer: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    timeElapsed(): string {
      return new Date(this.timer * 1000).toISOString().substr(11, 8);
    },
  },
});
</script>

<style>

.cronometro {
    color: var(--texto-primario);
}

</style>

<template>

    <header>
        <h1>
            <img src="../assets/logo.png" alt="">
        </h1>

        <button @click="alterarTema" class="button">
          <span class="icon">
                <i class="fas fa-sun"></i>
            </span>
        </button>
    </header>
    
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
    name: 'BarraLateral',
    emits: ['aoTemaAlterado'],
    data () {
      return {
        modoEscuro: false
      }
    },
    methods: {
      alterarTema() {
        this.modoEscuro = !this.modoEscuro;
        this.$emit('aoTemaAlterado', this.modoEscuro);
      }
    },

})

</script>

<style scoped>

button {
  background-color: transparent;
}


img {
    height: 100px;
}

header {
  padding: 1rem;
  background: var(--bg-lateral);
  width: 100%;
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}

</style>


<template>
<body>
  <main class="columns is-gapless is-multiline" :class="{'modo-escuro': modoEscuro}">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>

    <div class="column is-three-quarter conteudo">
      <router-view></router-view>
    </div>
  </main>
</body>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      modoEscuro: false
    };
  },
  components: {
    BarraLateral
  },
  methods: {
    trocarTema(modoEscuro: boolean) {
      this.modoEscuro = modoEscuro
    }
  },
});
</script>

<style>
main {
  --bg-primario: #fff;
  --texto-primario: #4e4b4b;
  --fundo-primario: #b1a9a9;
  --bg-lateral: #b1a9a9;
  --border: #dbdbdb;
  --bg-tarefa: #b1a9a9;
  --texto-input: #4a4a4a;
  --borda-primario: var(--bg-primario);
}

main.modo-escuro {
  --bg-primario: #292828;
  --texto-primario: #535252;
  --borda-primario: var(--texto-primario);
  --texto-input: #4a4a4a;
  --fundo-primario: #b1a9a9;
  --bg-lateral: #b1a9a9;
  --border: transparent;
  --bg-tarefa: #b1a9a9;
}

.conteudo {
  background-color: var(--bg-primario);
}


</style>

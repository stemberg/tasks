<template>
  <main class="columns is-gapless is-multiline" :class="{'modo-escuro': modoEscuro}">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>

    <div class="column is-three-quarter conteudo">
      <Formulario @aoSalvarTarefa="salvarTarefa" />

      <div class="lista">
        <Tarefa
          v-for="(tarefa, index) in tarefas"
          :key="index"
          :tarefa="tarefa"
        />

        <Box v-if="listaVazia"> Você não possui nenhuma tarefa! </Box>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import Formulario from "./components/Formulario.vue";
import Tarefa from "./components/Tarefa.vue";
import ITarefa from "./interface/ITarefa";
import Box from "./components/Box.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuro: false
    };
  },
  components: {
    BarraLateral,
    Formulario,
    Tarefa,
    Box,
  },
  computed: {
    listaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
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
  --fundo-primario: rgb(182, 180, 180);
  --bg-lateral: rgb(138, 136, 136);
  --border: #dbdbdb;
  --bg-tarefa: rgb(138, 136, 136);
  --texto-input: #4a4a4a;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #696767;
  --texto-input: #4a4a4a;
  --fundo-primario: #b1a9a9;
  --bg-lateral: #b1a9a9;
  --border: transparent;
  --bg-tarefa: #b1a9a9;
}

.conteudo {
  background-color: var(--bg-primario);
}

.lista {
  padding: 1.5rem;
}
</style>

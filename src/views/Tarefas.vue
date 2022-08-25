<template>
  <div>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tarefa from "../components/Tarefa.vue";
import Box from "../components/Box.vue";
import Formulario from "../components/Formulario.vue";
import ITarefa from "../interface/ITarefa";

export default defineComponent({
  name: "Tarefas",
  components: {
    Tarefa,
    Box,
    Formulario,
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
    };
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
  },
  computed: {
    listaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
});
</script>

<style>
.lista {
  padding: 1.5rem;
}
</style>

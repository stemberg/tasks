<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-5"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          autocomplete="off"
          v-model="descricao"
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
        />
      </div>
      <div class="column is-3">
        <div class="select">
          <select class="selectP" @change="algumaFuncao($event)">
            <option class="teste" value="" disabled selected>
              Selecione o projeto
            </option>
            <option
              class="teste"
              :value="projeto.id"
              v-for="projeto in projetos"
              :key="projeto.id"
            >
              {{ projeto.nomeDoProjeto }}
            </option>
          </select>
        </div>
      </div>
      <div class="column">
        <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { key } from "../store";
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import Temporizador from "./Temporizador.vue";

export default defineComponent({
  name: "Formulario",
  emits: ["aoSalvarTarefa"],
  data() {
    return {
      descricao: "",
      idProjeto: 0,
    };
  },
  components: { Temporizador },
  methods: {
    algumaFuncao(event: Event): void {
      let id = event.target as HTMLSelectElement;
      this.idProjeto = Number(id.value);
      console.log(this.idProjeto);
    },
    finalizarTarefa(tempoDecorrido: number): void {
      this.$emit("aoSalvarTarefa", {
        duracaoEmSegundos: tempoDecorrido,
        descricao: this.descricao,
        projeto: this.projetos.find((proj) => proj.id == this.idProjeto),
      });
      this.descricao = "";
    },
  },
  setup() {
    const store = useStore(key);
    return {
      projetos: computed(() => store.state.projetos),
    };
  },
});
</script>

<style scoped>
 
option {
  font-weight: bold;
}

textarea:focus,
.formulario input:focus,
select:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}

.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}

.formulario input::placeholder,
.input {
  color: var(--texto-input);
  font-weight: bold;
}

.select:not(.is-multiple):not(.is-loading)::after {
  border-color: var(--texto-primario);
}

.formulario input,
.selectP {
  border: none;
  background-color: var(--fundo-primario);
  color: var(--texto-input);
  font-weight: bold;
}
</style>

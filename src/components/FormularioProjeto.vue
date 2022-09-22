<template>
  <div class="box formulario-projeto">
    <form class="columns field" @submit.prevent="salvarProjeto">
      <div class="column is-8">
        <input
          autocomplete="off"
          v-model="nomeDoProjeto"
          type="text"
          class="input"
          id="nomeDoProjeto"
          placeholder="Qual o nome do projeto?"
        />
      </div>
      <div class="column">
        <button class="button" type="submit">SALVAR</button>
      </div>
    </form>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { key } from "../store";
import { addProject } from "../store/mutations";

export default defineComponent({
  name: "FormularioProjeto",
  emits: ["aoSalvarProjeto"],
  data() {
    return {
      nomeDoProjeto: "",
      id: 0,
    };
  },
  methods: {
    gerarId() {
      return (this.id = this.id += 1);
    },
    salvarProjeto(): void {
      this.store.commit(addProject, {nomeDoProjeto: this.nomeDoProjeto, id: this.gerarId()})
      this.nomeDoProjeto = "";
    },
  },
  setup() {
    const store = useStore(key);
    return {
      store
    };
  }
});
</script>

<style scoped>
.formulario-projeto {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}

textarea:focus,
input:focus {
  box-shadow: 0 0 0 0;
  outline: 0;
}
.formulario-projeto input::placeholder,
.input {
  color: var(--texto-input);
  font-weight: bold;
}

.formulario-projeto input {
  border: none;
  background-color: var(--fundo-primario);
  color: var(--texto-input);
}

.button {
  background-color: var(--fundo-primario);
  border: var(--border);
  font-weight: bold;
}
</style>

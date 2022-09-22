<template>
  <table class="table is-fullwidth is-align-items-center">
    <thead>
      <tr class="titulo">
        <th>ID</th>
        <th class="nome">Nome</th>
        <th class="acoes">Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr class="lista" v-for="projeto in projetos" :key="projeto.id">
        <td>{{ projeto.id }}</td>
        <td class="nomeDoProjeto">
          <input
            autocomplete="off"
            class="inputTd"
            v-model="projeto.nomeDoProjeto"
            type="text"
            :id="projeto.id"
            @keyup.enter="atualizarProjeto(projeto)"
            disabled
          />
          <button class="button" @click="atualizarProjeto(projeto)" v-if="!inputEditar">SALVAR</button>
        </td>
        <td>
          <div class="is-flex divTdButtons">
            <button class="botao" @click="ativarInput(projeto)">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </button>
            <button class="botao" @click="excluirProjeto(projeto.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import IProjeto from "../interface/IProjeto";
import { defineComponent, PropType } from "vue";
import { useStore } from "vuex";
import { key } from "../store";
import { deleteProject, editProject } from "../store/mutations";

export default defineComponent({
  name: "Projeto",
  data() {
    return {
      inputEditar: true,
      nomeDoProjeto: ""
    };
  },
  props: {
    projetos: {
      type: Object as PropType<IProjeto>,
      required: true,
    },
  },
  methods: {
    ativarInput(value: any) {
      this.inputEditar = !this.inputEditar;
      (document.getElementById(value.id) as HTMLFormElement).disabled = this.inputEditar;
    },
    atualizarProjeto(value: any) {
      this.nomeDoProjeto = value.nomeDoProjeto;
      this.store.commit(editProject, {nomeDoProjeto: this.nomeDoProjeto, id: value.id})
      this.inputEditar = !this.inputEditar;
      (document.getElementById(value.id) as HTMLFormElement).disabled = this.inputEditar;
    },
    excluirProjeto(id: number) {
      this.store.commit(deleteProject, id)
    }
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
.button {
  /* border: 2px solid var(--texto-input); */
  background-color: var(--fundo-primario);
  border: var(--border);
  font-weight: bold;
}

input:focus-visible {
  outline: none;
}

.divTdButtons {
  gap: 20px;
  place-items: center;
}

.inputTd {
  background-color: inherit;
  color: inherit;
  font-size: inherit;
  font-weight: inherit;
  border: 0px solid transparent;
  width: 37%;
}

.inputTd:not(:disabled) {
  border-bottom: 2px solid var(--texto-input);
  padding: 1px;
}

.botao {
  background-color: inherit;
  color: inherit;
  border: var(--border);
  cursor: pointer;
}

.table td {
  border-top: 2px solid var(--borda-primario);
}

.table thead th {
  border-width: 0;
}

.nome {
  width: 90%;
}

.acoes {
  width: 10%;
}

.titulo,
.lista {
  font-weight: bold;
}

.lista {
  height: 60px;
}

.teste{
  display: table-cell; 
  vertical-align: middle
}

.nomeDoProjeto {
  width: 80%;
  word-break: break-all;
}

.table {
  background-color: var(--fundo-primario);
  color: var(--texto-input);
  border-radius: 4px;
}
</style>

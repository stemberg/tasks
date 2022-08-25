<template>
  <div class="box projetos">
    <form @submit.prevent="salvarProjeto">
      <div class="fild">
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
          placeholder="Qual o nome do projeto?"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">SALVAR</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormularioProjeto",
  emits: ['aoSalvarProjeto'],
  data() {
    return {
      nomeDoProjeto: "",
      id: 0
    };
  },
  methods: {
    salvarProjeto(): void {
        this.$emit('aoSalvarProjeto', {nomeDoProjeto: this.nomeDoProjeto, id: this.id +=1 })
        this.nomeDoProjeto = "";
    },
  }
});
</script>

<style scoped>
.projetos {
  padding: 1.3rem;
  display: flex;
}
</style>

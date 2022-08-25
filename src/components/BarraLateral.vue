<template>
  <header>
    <nav class="panel mt-2 navteste">
      <span>
        <router-link class="link" to="/">Tarefas</router-link>
      </span>

      <span class="barra">|</span>
      
      <span>
        <router-link class="link" to="/projetos">Projetos</router-link>
      </span>
    </nav>

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
  name: "BarraLateral",
  emits: ["aoTemaAlterado"],
  data() {
    return {
      modoEscuro: false,
    };
  },
  methods: {
    alterarTema() {
      this.modoEscuro = !this.modoEscuro;
      this.$emit("aoTemaAlterado", this.modoEscuro);
    },
  },
});
</script>

<style>

button {
  margin-left: -10px;
  background-color: transparent;
}

.navteste {
  display: flex;
  justify-content: center;
  gap: 45px;
}

.link {
  color: var(--texto-primario);
  font-weight: bold;
}

.link.router-link-active {
  color: #292828;
}

.link:hover  {
  color: rgb(54, 49, 49);
}

.barra {
  color: var(--texto-primario);
  font-weight: bold;
}

.barra:hover {
  cursor: default;
}

.button:focus:not(:active) {
    box-shadow: none;
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

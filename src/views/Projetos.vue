<template>
  <div>
    <FormularioProjeto/>
    <div class="projetos">
      <Projeto
        :projetos="projetos"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "vuex";
import FormularioProjeto from "../components/FormularioProjeto.vue";
import Projeto from "../components/Projeto.vue";
import { key } from "../store";

export default defineComponent({
  name: "Projetos",
  components: { FormularioProjeto, Projeto },
  setup() {
    const store = useStore(key);
    return {
      projetos: computed(() => store.state.projetos)
    };
  }
});
</script>

<style>

.projetos {
  margin: 20px;
}


</style>

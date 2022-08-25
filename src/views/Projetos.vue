<template>
 <div>
  <FormularioProjeto @aoSalvarProjeto="salvar" />
 </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IProjeto from "../interface/IProjeto";
import FormularioProjeto from "../components/FormularioProjeto.vue";

export default defineComponent({
    name: "Projetos",
    data() {
        return {
            projetos: [] as IProjeto[]
        };
    },
    methods: {
        salvar(projeto: IProjeto) {
          this.projetos.push(projeto);
          console.log(this.projetos);
        }
    },
    components: { FormularioProjeto }
});
</script>

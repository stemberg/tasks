import IProjeto from "@/interface/IProjeto";
import ITarefa from "@/interface/ITarefa";
import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";
import { addProject, deleteProject, editProject } from "./mutations";

interface Estado {
  projetos: IProjeto[];
  tarefas: ITarefa[];
}

export const key: InjectionKey<Store<Estado>> = Symbol()

export const store = createStore<Estado>({
    state: {
        projetos: [],
        tarefas: []
    },
    mutations: {
        [addProject](state, payload){
            const projeto = {
                id: payload.id,
                nomeDoProjeto: payload.nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
        },
        [editProject](state, projeto: IProjeto) {
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto
        },
        [deleteProject](state, id: number) {
            state.projetos = state.projetos.filter(proj => proj.id != id)
        }
    }
});

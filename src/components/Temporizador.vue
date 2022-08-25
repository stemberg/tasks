<template>

    <div class="is-flex is-align-items-center is-justify-content-space-between">

        <Cronometro :timer="timer" />

        <button class="button timer" @click="iniciar" :disabled="cronometroRodando">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>PLAY</span>
        </button>

        <button class="button timer" @click="finalizar" :disabled="!cronometroRodando">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>STOP</span>
        </button>

    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue'
import Cronometro from './Cronometro.vue'

export default defineComponent({
    name: "Botoes",
    emits: ['aoTemporizadorFinalizado'],
    data() {
        return {
            timer: 0,
            cronometro: 0,
            cronometroRodando: false
        };
    },
    methods: {
        iniciar() {
            this.cronometroRodando = true
            this.cronometro = setInterval(() => {
                this.timer += 1;
            }, 1000);
            console.log(this.cronometro)
        },
        finalizar() {
            this.cronometroRodando = false
            clearInterval(this.cronometro)
            this.$emit('aoTemporizadorFinalizado', this.timer)
            this.timer = 0
        }
    },
    components: { Cronometro }
})

</script>

<style>

.button {
    background-color: var(--fundo-primario);
    border: var(--border);
}

.timer {
    font-weight: bold;
}

</style>
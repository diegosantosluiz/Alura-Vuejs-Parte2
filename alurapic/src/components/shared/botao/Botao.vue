<template>
  <button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo">{{ rotulo }}</button>
</template>

<script>
export default {
  props: {
    tipo: {
      type: String, 
      required: true
    },
    rotulo: {
      type: String, 
      required: true
    },
    confirmacao: Boolean,
    estilo: String
  },

  methods: {
    disparaAcao() {
      if (this.confirmacao) {
        if (confirm('Confirma operacao?')) {
          this.$emit('botaoAtivado');
        }
        return;
      }     
      this.$emit('botaoAtivado');
    }
  },

  computed: {
    estiloDoBotao() {
      if (this.estilo == 'padrao' || !this.estilo) return "botao-padrao";
      if (this.estilo == 'perigo') return "botao-perigo";
    }
  }
}
</script>

<style lang="sass">
  @import './Botao.scss';
</style>
<template>
  <div :class="`${cn} ${setModifiers}`">
    {{ msg }}
  </div>
</template>

<script>
  export default {
    name: 'Sample',
    props: {
      modifiers: {
        type: Array,
        default: () => []
      },
    },
    data () {
      return {
        cn: 'fr-sample',
        msg: 'I\'m a Sample Component'
      }
    },
    computed: {
      setModifiers() {
        return this.modifiers.map(mod => this.cn + "--" + mod).join("  ");
      }
    },
    methods: {},
    watch: {},
    mounted() {},
    created() {},
    components: {},
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>

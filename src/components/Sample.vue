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
        msg: 'I\'m a Sample Component',
        endpoint: null
      }
    },
    computed: {
      setModifiers() {
        return this.modifiers.map(mod => this.cn + "--" + mod).join("  ");
      }
    },
    methods: {      
      // Get Data from Endpoint
      getData(url) {
        axios.get(url)
          .then((response) => {
            // handle success
            console.log(response);
          })
          .catch((error) => {
            // handle error
            console.log(error);
          });
      },
    },
    watch: {},
    mounted() {
      if (this.endpoint) {
        this.getData(this.endpoint);
      }
    },
    created() {},
    components: {},
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>

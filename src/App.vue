<template>
  <div id="app" :class="cn">
    <Fredmansky/>
    <Icon :icon="`arrow-up`"/>

    <template v-if="contentIsReady">
      Content Here
    </template>

    <div v-else>
      <Loading/>
    </div>

    <Grid v-if="$myConfig.showGrid"/>
    <GridExample v-if="$myConfig.showGrid"/>
  </div>
</template>

<script>
  import {mapState, mapMutations} from 'vuex';
  import axios from 'axios';
  import Fredmansky from './components/Fredmansky'
  import Loading from './components/Loading'
  import Grid from './components/Grid'
  import GridExample from "./components/GridExample";
  import Icon from "./components/Icon";

  export default {
    name: 'App',
    data() {
      return {
        cn: 'fr-component',
        showContent: false,
        timer: null,
        endpoints: {
          sample: null
        },
      }
    },
    props: {
      options: {
        type: [Object, String, Array],
        default: () => ({})
      }
    },
    computed: {
      ...mapState([
        'endpointData'
      ]),
      contentIsReady() {
        return this.showContent;
      }
    },
    methods: {
      ...mapMutations([
        'setEndpointData',
      ]),

      getApiContent(endpoint, storeTarget) {
        axios.get(endpoint)
          .then((response) => {
            this.$store.commit(storeTarget, response.data);

            this.showContent = true;
          })
          .catch((error) => {
            console.log(error);
          });

        // Refresh Data
        this.timer = setTimeout(() => {
          clearTimeout(this.timer);
          this.getApiContent(this.endpoints.sample, 'setEndpointData');
        }, 10000);
      },
    },
    components: {
      GridExample,
      Fredmansky,
      Grid,
      Loading,
      Icon
    },
    mounted() {
      console.log('FR Component mounted');
      this.getApiContent(this.endpoints.sample, 'setEndpointData');
    },
    beforeDestroy() {
      clearTimeout(this.timer);
    },
  }
</script>

<style scoped lang="scss">
  @import "./assets/css/framework.scss";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: c('gray', 'dark');
    margin-top: 60px;
  }
</style>

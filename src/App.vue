<template>
  <div id="app" :class="cn">
    <div class="fr-section">
      <div class="fr-row  fr-items-x-center">
        <div class="fr-col-m-2  fr-col-t-2  fr-col-sd-2  fr-col-ld-2  fr-dp-flex  fr-items-x-center">
          <Fredmansky/>
        </div>
      </div>

      <div class="fr-row  fr-items-x-center">
        <div class="fr-col-m-2  fr-col-t-2  fr-col-sd-2  fr-col-ld-2  fr-mt-m-4  fr-dp-flex  fr-items-x-center">
          <Icon :icon="`person-profile`"
                :background="`#22346F`"
                :radius="`100%`"
                :color="`white`"
                :padding="`10px`"
                :size="3" />
        </div>
      </div>
      <div class="fr-row  fr-items-x-center">
        <div class="fr-col-m-2  fr-col-t-2  fr-col-sd-2  fr-col-ld-2  fr-mt-m-4  fr-dp-flex  fr-items-x-center">
          <Flag :flag="`at`" :size="1" />
        </div>
      </div>
    </div>

    <template v-if="contentIsReady">
      <div class="fr-section">
        <div class="fr-row  fr-items-x-center">
          <div class="fr-col-m-6 fr-mt-m-4  fr-ta-center">
            {{ data.sample.data[0].id }}
          </div>
        </div>
      </div>
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
  import Flag from "./components/Flag";

  export default {
    name: 'App',
    data() {
      return {
        cn: 'fr-component',
        showContent: false,
        timer: null,
        endpoints: {
          sample: 'sample'
        },
        data: {
          sample: null
        }
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
            // this.$store.commit(storeTarget, response.data);
            this.data.sample = response.data;
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
      Icon,
      Flag
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

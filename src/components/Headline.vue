<!--
 Headline
-->
<template>
  <component :is="size" :class="rootClass">
    {{ text }}
  </component>
</template>

<script>
  export default {
    name: 'Headline',
    props: {
      modifiers: {
        type: Array,
        default: () => []
      },
      size: {
        size: String,
        default: 'h2'
      },
      text: {
        size: String,
        required: true
      },
    },
    data() {
      return {
        cn: 'fr-Headline'
      };
    },
    computed: {
      rootClass() {
        const modifiers = this.modifiers
          .map(mod => this.cn + "--" + mod)
          .join("  ");
        return [this.cn, modifiers];
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
<style scoped lang="scss">
  @import "../assets/css/framework";

  .fr-Headline {
    $root: &;
    width: 100%;
    color: c('white');
    font-size: 26px;
    line-height: 40px;
    text-transform: none;
    font-weight: 400;
    margin-top: 40px;
    font-family: 'Bull', 'Avenir', Helvetica, Arial, sans-serif;

    @media screen and (min-width: 650px) {
      margin-top: 80px;
      font-size: 32px;
    }

    @media screen and (min-width: 1000px) {
      font-size: 44px;
      line-height: 52px;
    }
  }

  // Modul Modifiers Example
  .fr-Headline--modifier {
    .fr-Headline__block {
      // Styles here
    }

    @at-root {
      // Use this for nesting with root selector
    }
  }
</style>


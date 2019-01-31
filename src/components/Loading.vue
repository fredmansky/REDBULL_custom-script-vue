<!--
 Loading
-->
<template>
  <div :class="rootClass">
    <div :class="`${cn}__spinner`">
      <div :class="`${cn}__bounce  ${cn}__bounce--1`"></div>
      <div :class="`${cn}__bounce  ${cn}__bounce--2`"></div>
      <div :class="`${cn}__bounce  ${cn}__bounce--3`"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Loading',
    props: {
      modifiers: {
        type: Array,
        default: () => []
      },
    },
    data() {
      return {
        cn: 'fr-Loading'
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
  .fr-Loading {
    $root: &;
    width: 100%;
    text-align: center;
    color: #111;
    padding: 64px 32px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;

    &__spinner {
      width: 70px;
      text-align: center;
    }

    &__bounce {
      width: 12px;
      height: 12px;
      background-color: rgba(128,128,128, 0.5);

      border-radius: 100%;
      display: inline-block;
      animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    }

    &__bounce--1 {
      animation-delay: -0.16s;
    }

    &__bounce--2 {
      animation-delay: -0.16s;
    }

    @keyframes sk-bouncedelay {
      0%, 80%, 100% {
        -webkit-transform: scale(0);
        transform: scale(0);
      } 40% {
          -webkit-transform: scale(1.0);
          transform: scale(1.0);
        }
    }
  }
</style>


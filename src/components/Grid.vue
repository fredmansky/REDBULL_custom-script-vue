<!--
 Grid
-->
<template>
  <div :class="rootClass">
    <div :class="`${cn}__holder`">
      <template v-for="i in 12">
        <div :class="`${cn}__col`" :key="i"/>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Grid',
    props: {
      modifiers: {
        type: Array,
        default: () => []
      },
    },
    data() {
      return {
        cn: 'fr-Grid'
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
    mounted() {
    },
    created() {
    },
    components: {},
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../assets/css/framework";

  .fr-Grid {
    $root: &;
    width: 100%;

    &__holder {
      position: fixed !important;
      left: 50%;
      top: 0;
      z-index: 1111111;
      transform: translateX(-50%);
      height: 100vh;
      border-left: 1px dotted rgba(red, 0.2);
      border-right: 1px dotted rgba(red, 0.2);
      pointer-events: none;
      width: 100%;
      max-width: 1350px;
      display: flex;
      padding-left: 16px;
      padding-right: 16px;

      @include media('>=t') {
        padding-left: 40px;
        padding-right: 40px;
      }

      @include media('>=sd') {
        padding-left: 64px;
        padding-right: 64px;
      }
      // display: none;

      &.is-visible {
        display: block;
      }
    }

    &__col {
      box-shadow: 1px 0 0 rgba(red, 0.3);
      height: 100vh;
      margin: 0;
      flex: 1 1 auto;
      position: relative;

      &::before,
      &::after {
        content: '';
        position: absolute;
        height: 100vh;
      }

      &::before {
        border-right: 1px dotted rgba(red, 0.2);
        left: 6px;

        @include media('>=t') {
          left: 10px;
        }

        @include media('>=sd') {
          left: 12px;
        }
      }

      &::after {
        border-left: 1px dotted rgba(red, 0.2);
        right: 6px;

        @include media('>=t') {
          right: 10px;
        }

        @include media('>=sd') {
          right: 12px;
        }
      }

      &:first-child {
        box-shadow: 1px 0 0 rgba(red, 0.3), -1px 0 0 rgba(red, 0.3),;
      }

      &:nth-child(6n) ~ .fr-Grid__col {
        display: none;

        @include media('>=t') {
          display: block;
        }
      }

      &:nth-child(8n) ~ .fr-Grid__col {
        display: none;

        @include media('>=sd') {
          display: block;
        }
      }
    }
  }
</style>


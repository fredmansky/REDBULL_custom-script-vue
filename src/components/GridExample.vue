<!--
 GridExample
-->
<template>
  <div :class="rootClass">
    <div :class="`${cn}__section`">
      <div :class="`${cn}__row`">
        <template v-for="i in 24">
          <div :class="`${cn}__col`" :key="i" v-html="i"/>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GridExample',
    props: {
      modifiers: {
        type: Array,
        default: () => []
      },
    },
    data() {
      return {
        cn: 'fr-GridExample'
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

  .fr-GridExample {
    $root: &;
    width: 100%;

    &__section {
      @include section($testing: true);
    }

    &__row {
      @include row($testing: true);
    }

    &__col {
      @include col(1, 6, $testing: true);
      @include col-padding($testing: true);
      text-align: center;
      font-size: 14px;
      font-weight: 700;

      @include media('>=t') {
        @include col(1, 8, $testing: true);
      }

      @include media('>=sd') {
        @include col(1, 12, $testing: true);
      }

      @include media('>=ld') {
        @include col(1, 24, $testing: true);
      }
    }
  }

  // Modul Modifiers Example
  .fr-GridExample--modifier {
    .fr-GridExample__block {
      // Styles here
    }

    @at-root {
      // Use this for nesting with root selector
    }
  }
</style>


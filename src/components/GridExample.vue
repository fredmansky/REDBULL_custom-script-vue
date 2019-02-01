<!--
 GridExample
-->
<template>
  <div :class="rootClass">
    <div :class="`${cn}__section`">
      <div :class="`${cn}__row`">
        <h1 :class="`${cn}__headline`">Grid Example</h1>
      </div>

      <div :class="`${cn}__row`">
        <h4 :class="`${cn}__subline`">Just a little sampe to see how the grid works in the wild</h4>
      </div>

      <div :class="`${cn}__row`">
        <template v-for="i in 24">
          <div :class="`${cn}__col`" :key="i" v-html="i"/>
        </template>
      </div>

      <div :class="`${cn}__row  ${cn}__row--offset`">
        <div :class="`${cn}__col`">1</div>
        <div :class="`${cn}__col`">2</div>
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

      &--offset {
        #{$root}__col {
          @include col(3, 6, $testing: true);

          @include media('>=t') {
            @include col(3, 8, $testing: true);

            &:first-child {
              @include offset(2, 8);
            }
          }

          @include media('>=sd') {
            @include col(5, 12, $testing: true);

            &:first-child {
              @include offset(2, 12);
            }
          }

          @include media('>=ld') {
            @include col(8, 24, $testing: true);

            &:first-child {
              @include offset(4, 24);
            }
          }
        }
      }
    }

    &__col {
      @include col(1, 6, $testing: true);
      @include col-padding($testing: true);
      @include ms-respond(font-size, -1);
      text-align: center;
      font-weight: 500;

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

    &__headline {
      @include col();
      @include col-padding();
    }

    &__subline {
      @include col();
      @include col-padding();
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


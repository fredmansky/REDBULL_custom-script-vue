<!--
 Icon
-->
<template>
  <div :class="rootClass">
    <component :is="svg" />
  </div>
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      modifiers: {
        type: Array,
        default: () => []
      },
      icon: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        cn: 'fr-Icon',
        svg: null,
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
    created() {
      const svg = () => import(`../assets/images/icons/${
        this.icon
        }.svg`);

      svg.then((default) => {
        this.svg = default;
      })
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../assets/css/framework";

  .fr-Icon {
    $root: &;
    width: 100%;
  }

  // Modul Modifiers Example
  .fr-Icon--modifier {
    .fr-Icon__block {
      // Styles here
    }

    @at-root {
      // Use this for nesting with root selector
    }
  }
</style>


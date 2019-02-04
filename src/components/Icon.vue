<!--
 Icon
-->
<template>
  <div :class="rootClass">
    <component :is="svg" />
    {{ icon }}
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
    methods: {},
    watch: {},
    mounted() {},
    created() {
      console.log('YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
      console.log(this.svg)
      const loaded = import(`../assets/images/icons/${
        this.icon
        }.svg`);
      this.svg = loaded.default;
      console.log('NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
    },
    components: {},
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


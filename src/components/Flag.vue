<!--
 Icon
-->
<template>
  <div :class="rootClass"
       :style="`
         width: ${width * size}px;
         height: ${height * size}px;
       `">
    <img :src="require(`../assets/images/flags/${transformFlagName(flag)}.svg`)"
         :alt="`${transformFlagName(flag)}`">
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
      flag: {
        type: String,
        required: true
      },
      color: {
        type: String,
        default: 'black'
      },
      size: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        cn: 'fr-Icon',
        svg: null,
        width: 21,
        height: 15
      };
    },
    computed: {
      rootClass() {
        const modifiers = this.modifiers
          .map(mod => this.cn + "--" + mod)
          .join("  ");
        return [this.cn, modifiers];
      },
    },
    methods: {
      transformFlagName(el) {
        return el.toUpperCase()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../assets/css/framework";

  .fr-Icon {
    $root: &;

    img {
      width: 100%;
      height: 100%;
    }
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


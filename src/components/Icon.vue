<!--
 Icon
-->
<template>
  <div :class="rootClass"
       :style="`
         width: ${width * size}px;
         height: ${height * size}px;
         padding: ${padding};
         background-color: ${background};
         border-radius: ${radius};
       `">
    <img :src="require(`../assets/images/icons/${color}/${icon}.svg`)" :alt="icon">
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
      },
      color: {
        type: String,
        default: 'black'
      },
      background: {
        type: String,
        default: 'transparent'
      },
      radius: {
        type: String,
        default: '0px'
      },
      padding: {
        type: String,
        default: '0px'
      },
      size: {
        type: Number,
        default: 1
      }
    },
    data() {
      return {
        cn: 'fr-Icon',
        width: 24,
        height: 24
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


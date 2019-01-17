<!--
 <%= moduleName.replace('-', '_') %>
-->
<template>
  <div :class="rootClass">
    <%= moduleName %>
  </div>
</template>

<script>
  export default {
    name: '<%= moduleName.replace('-', '_') %>',
    props: {
      modifiers: {
        type: Array,
        default: () => []
      },
    },
    data() {
      return {
        cn: 'fr-<%= moduleName.replace('-', '_') %>'
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
  .fr-<%= moduleName.replace('-', '_') %> {
    $root: &;
    @include make-vr();
    width: 100%;
  }

  // Modul Modifiers Example
  .fr-<%= moduleName.replace('-', '_') %>--modifier {
    .fr-<%= moduleName.replace('-', '_') %>__block {
      // Styles here
    }

    @at-root {
      // Use this for nesting with root selector
    }
  }
</style>


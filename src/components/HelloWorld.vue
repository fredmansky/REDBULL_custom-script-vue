<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Vue.js Docs
        </a>
      </li>
      <li>
        <a
          href="http://d14l6yfgs5krx8.cloudfront.net/08-customcomponents.html"
          target="_blank"
        >
          Custom Script Docs
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your redbull.com Custom Script'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: 500;
  margin: 8px 0;
}
h2 {
  margin: 8px 0 4px;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #db0a40;
}
a:hover {
  color: #f61a4f;
}
a:active {
  color: #9a1235;
}
</style>

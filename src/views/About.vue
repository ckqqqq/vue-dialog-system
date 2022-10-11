<template>
<Layout>
  <template v-slot:main>
    <h1>这里可以放上对团队的介绍!</h1>
  </template>

</Layout>
</template>

<script>
// @ is an alias to /src

import Layout from "../views/Layout.vue";

export default {
  name: 'Home',
  components: {
    Layout
  }
}
</script>

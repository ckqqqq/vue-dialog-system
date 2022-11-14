<template>
<Layout>
  <template v-slot:main>
    <h1>欢迎来到中文开放域训练模型试用网站</h1>
    <h3>
      目前可以使用的模型为wudao-api wudao_EVA2.0
    </h3>
    <h4>
      对实验室的介绍
    </h4>
    <h4>
      对团队的介绍
    </h4>
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

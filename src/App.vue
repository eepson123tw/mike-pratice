<script>
import { defineComponent, provide } from 'vue'
import ListVue from './components/List.vue'
import TitleBarVue from './components/TitleBar.vue'
import store from './composition-api/store'
export default defineComponent({
  // 使用套件或ts強行別時會有提示的部分 vue3.0
  name: 'App',
  components: {
    TitleBarVue,
    ListVue
  },
  setup () {
    provide('mapStore', store)
    return {}
  }
})
</script>
<template>
  <div class="index">
    <TitleBarVue />
    <ListVue />
  </div>
</template>
<style lang="scss">

  *{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
  }
  body{
    background: #00e3;
  }

  .index{
    max-width: 1200px;
    margin:100px auto;
  }

</style>

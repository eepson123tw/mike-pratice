
<script>
import { defineComponent, onMounted, watch, inject } from 'vue'
import { ScrollDown } from '../composition-api/useScrollDown.js'
import { useFetchReposData } from '../composition-api/useFetchData.js'

export default defineComponent({
  setup () {
    const { isDown } = ScrollDown()
    const { init, isLoad, next, restData } = useFetchReposData()

    const useStore = inject('mapStore')
    const { store, reSetRepoList } = useStore

    onMounted(() => {
      init()
    })

    watch(isDown, (newVal) => {
      if (!newVal) return
      next()
    })

    // console.log(store.user.name)

    watch(() => store.user.name, (old, newVal) => {
      reSetRepoList()
      restData()
      init()
    })

    return {
      scroll,
      isDown,
      isLoad,
      store
    }
  }
})
</script>

<template>
  <div class="repo">
    <div
      v-for="i in store.repoList"
      :key="i"
      class="card"
    >
      <h2>{{ i.name }}</h2>
      <a
        :href="i.html_url"
        target="_blank"
      >{{ i.html_url }}</a>
      <div class="star">
        <img
          src="../assets/logo.png"
          alt="star"
        >
        <span>{{ i.stargazers_count }}</span>
      </div>
    </div>
    <h1 v-show="!isLoad">
      loading....
    </h1>
  </div>
</template>
<style lang="scss" scoped>
  .repo{
    .card{
      margin: 0 auto;
      width: 500px;
      padding: 20px;
      background: #fff;
      margin-bottom: 20px;
      h2{
        font-size: 30px;
        margin-bottom: 20px;
      }
      a{
        text-decoration: none;
        color: #000;
        font-size: 20px;
        display: block;
        margin-bottom: 20px;
      }
    }
    .star{
      display: flex;
      align-items: center;
      img{
        width: 30px;
      }
    }
  }
</style>


<script>
import { defineComponent, inject, onMounted } from 'vue'
import { useFetchUserData } from '../composition-api/userData'

export default defineComponent({
  setup () {
    const useStore = inject('mapStore')
    const { init, next } = useFetchUserData()

    onMounted(() => {
      init()
    })

    const { store } = useStore
    const changeName = (e) => {
      store.user.name = e.target.value
      next()
    }
    return {
      store,
      changeName
    }
  }
})
</script>

<template>
  <div>
    <div class="img">
      <img
        :src="store.user.photo"
        alt="userPhto"
      >
    </div>
    <div class="text">
      <p>{{ store.user.name }}</p>
      <input
        v-model="store.user.name "
        type="text"
        @change="changeName"
      >
    </div>
  </div>
</template>
<style lang="scss" scoped>

  div{
    text-align: center;
    margin-bottom: 20px;
  }

  .img{
    width: 100px;
    height: 100px;
    border-radius:50% ;
    overflow: hidden;
    border: 5px solid #555;
    margin: 0 auto;
    margin-bottom: 20px;
    background: #fff;
    img{
      width: 100%;
      display: block;
    }
  }
  .text{
    font-size: 32px;
  }

</style>

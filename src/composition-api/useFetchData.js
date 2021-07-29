import { apiGetUserRepo } from '../api'
import { ref } from 'vue'
import storeData from './store.js'
export function useFetchReposData () {
  const { store, setRepoList } = storeData
  const isLoad = ref(false)
  const countIdx = ref(0)
  const keyAry = ref([])
  const init = async () => {
    countIdx.value += 1
    const data = {
      name: store.user.name,
      page: countIdx.value
    }
    try {
      const res = await apiGetUserRepo(data)
      isLoad.value = true
      setRepoList(res.data)
      keyAry.value = res.data
    } catch (error) {
      console.error('錯誤', error)
    }
  }
  const next = () => {
    if (keyAry.value.length === 0) return
    isLoad.value = false
    init()
  }

  const restData = () => {
    isLoad.value = false
    countIdx.value = 0
    keyAry.value = []
  }

  return { init, isLoad, next, restData }
}

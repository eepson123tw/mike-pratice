import storeData from './store.js'
import { apiGetUserData } from '../api'
import { ref } from 'vue'
export function useFetchUserData () {
  const { store, setUserTitle } = storeData
  const isChange = ref(false)
  const init = async () => {
    try {
      const res = await apiGetUserData(store.user.name)
      setUserTitle(res.data)
    } catch (error) {
      console.error('錯誤', error)
    }
  }

  const next = () => {
    isChange.value = true
    init()
  }

  return { init, next, isChange }
}

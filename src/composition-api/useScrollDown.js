
import { onMounted, onUnmounted, ref } from 'vue'

export const ScrollDown = () => {
  const isDown = ref(false)
  const scrollHandler = (e) => {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement
    if (scrollTop + clientHeight + 100 > scrollHeight) {
      isDown.value = true
    } else {
      isDown.value = false
    }
  }

  const diBounce = (fn) => {
    let reTimes = null
    // 傳入callback
    return () => {
      if (reTimes) {
        clearTimeout(reTimes)
      }
      reTimes = setTimeout(() => {
        fn() // 若不在滾動則等待3秒
      }, 500)
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', diBounce(scrollHandler))
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', diBounce(scrollHandler))
  })

  return { isDown }
}

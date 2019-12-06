const scrollContentDirective = {}

const scrollContent = {
  defaultOpts: {
    speed: 2,
    dir: 'y',
    timeout: 100
  },

  startInterval: (el, option) => {
    el.timer = setInterval(() => {
      if (option.dir === 'y') {
        let top = el.scrollTop
        if (el.scrollTopOld != top || top == 0) {
          el.scrollTopOld = el.scrollTop
          el.scrollTop += option.speed
        } else {
          el.scrollTop = 0
        }
      } else {
        let left = el.scrollLeft
        if (el.scrollLeftOld != left || left == 0) {
          el.scrollLeftOld = el.scrollLeft
          el.scrollLeft += option.speed
        } else {
          el.scrollLeft = 0
        }
      }
    }, option.timeout)
  },

  stopInterval: (el) => {
    if (el.timer) {
      clearInterval(el.timer)
    }
  },

  bind: (el, binding) => {

    let option = Object.assign({},scrollContent.defaultOpts, binding.value)

    scrollContent.startInterval(el, option)

    el.addEventListener('mouseenter', (event) => {
      scrollContent.stopInterval(el)
    })

    el.addEventListener('mouseleave', (event) => {
      scrollContent.startInterval(el, option)
    })

  },
  unbind: (el) => {
    scrollContent.stopInterval(el)
  }
}

scrollContentDirective.install = Vue => {
  if (Vue.prototype.$isServer) return

  Vue.directive('scrollContent', scrollContent)

}

export default scrollContentDirective

export {
  scrollContent
}

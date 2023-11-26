(() => {
  const isIncludeEN = item => {
    const key = '/en/'
    return item.includes(key)
  }

  window.loadFullPage = (url) => {
    window.location.href = url
  }

  const eventFn = (elements, includeEN) => {
    elements.forEach(item => {
      console.log(`!includeEN || !isIncludeEN(item.href) = ${!includeEN || !isIncludeEN(item.href)}`)
      if (!includeEN || !isIncludeEN(item.href)) {
        console.log(item.href)
        item.href = `javascript:loadFullPage('${item.href}');`
      }
    })
  }

  const nowIncludeEN = isIncludeEN(window.location.href)
  const selector = nowIncludeEN
    ? document.querySelectorAll('a[href^="https://ShannonHung.github.io"]')
    : document.querySelectorAll('a[href^="/en/"]')

  eventFn(selector, nowIncludeEN)
})()
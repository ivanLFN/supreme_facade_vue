export default {
  methods: {
    getFileName (fullFileName) {
      const parts = fullFileName.split('.')
      parts.pop()
      const withoutExtension = parts.join('.')
      const fileName = withoutExtension.replace(/^\d+\./, '')
      return `${fileName}`
    }
  }
}

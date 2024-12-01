/* Main */
export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "_includes/style.css": "style.css",
    "_includes/pgp.asc": "pgp.asc"
  })

  eleventyConfig.addFilter("readingTime", (value) => {
    const htmlContent = typeof(value) === "string" ? value : value.templateContent
    if (!htmlContent)
      return "0"

    const content = htmlContent
      .replace(/(<([^>]+)>)/gi, '')
      .match(/[\u0400-\u04FF]+|\S+\s*/g)
    if (!content)
      return "0"

    return String(Math.ceil(content.length / 200))
  })
}

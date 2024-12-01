/* Main */
export default function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "root/style.css": "style.css",
    "root/pgp.asc": "pgp.asc"
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

export const config = {
  dir: {
    input: "root",
    includes: "../layouts",
    output: "output"
  }
}

/* eslint-disable valid-jsdoc */
/**
 * Converts from kebab-case to capital letter with spaces
 * example 'outline-button' => 'Outline Button'
 * @param {string} str
 * @returns {string} str
 */
export const kebabCaseToTitleSpaceCase = (str: string): string => {
  const arr = str.split('-')
  return arr.map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(' ')
}

/**
 * Converts from kebab-case to capital letter with no spaces
 * example 'outline-button' => 'OutlineButton'
 * @param {string} str
 */
export const kebabCaseToTitleCase = (str: string): string => {
  const arr = str.split('-')
  return arr.map(el => el.charAt(0).toUpperCase() + el.slice(1)).join('')
}

/**
 * Converts string from kebab-case to camelCase
 * example 'outline-button' => 'outlineButton'
 */
export const kebabCaseToLowerCamelCase = (str: string): string => {
  const arr = str.split('-')
  const formattedArr = arr.map((el, i) => {
    if (i === 0) {
      return el
    }

    return el.charAt(0).toUpperCase() + el.slice(1)
  })
  return formattedArr.join('')
}

/**
 * Converts string from camelCase to kebab-case
 * example 'outline-button' => 'outlineButton'
 * @param str
 * @returns string
 */
export const camelCaseToKebabCase = (str: string): string => {
  if (str !== str.toLowerCase()) {
    str = str.replace(/[A-Z]/g, m => '-' + m.toLowerCase())
  }

  return str
}

/**
 * Converts string from css variable to lowerCamelCase
 * example '--outline-button' => 'outlineButton'
 * @param str
 * @returns string
 */
export const cssVarCaseToLowerCamelCase = (str: string): string => {
  const arr = str.split('-').filter(n => n)
  const formattedArr = arr.map((el, i) => {
    if (i === 0) {
      return el
    }

    return el.charAt(0).toUpperCase() + el.slice(1)
  })
  return formattedArr.join('')
}

/**
 * Returns the content in between two strings within a string
 * @param start - the first string to start the search
 * @param end - the last string to end the search
 * @param str - the string to search in
 * @returns string
*/
export const getContentBetween = (start: string, end: string, str: string): string => {
  return str.slice(
    str.indexOf(start) + start.length,
    str.lastIndexOf(end),
  )
}

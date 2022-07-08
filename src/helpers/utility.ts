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
    str = str.replace(/[A-Z]/g, m => '-' + m.toLowerCase());
  }

  return str
}

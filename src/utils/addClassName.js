/**
 * Created by LLGZONE on 2017/11/4.
 */
export const addClassName = (className, ...classNames) => {
  if (classNames.length === 0) return className
  return `${className} ${classNames.join(' ')}`
}

export const removeClassName = (className, ...classNames) => {
  return className.split(' ').filter(cls => !classNames.includes(cls)).join(' ')
}
/**
 * Created by LLGZONE on 2017/10/20.
 */
import React from 'react'

//React element's props is immutable
export const addClassNames = (ele, ...classNames) => {
  if (classNames.length === 0) return ele
  const className = ele.props.className
  return React.cloneElement(ele, {
    className: `${className} ${classNames.join(' ')}`
  })
}

export const removeClassNames = (ele, ...classNames) => {
  if (classNames.length === 0) return ele
  const className = ele.props.className
    .split(' ')
    .filter(cls => !classNames.includes(cls))
    .join(' ')
  return React.cloneElement(ele, {
    className
  })
}
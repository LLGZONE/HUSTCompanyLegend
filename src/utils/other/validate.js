/**
 * Created by LLGZONE on 2017/11/8.
 */
export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    '输入正确的邮箱' : undefined

export const required = value => value ? undefined : '必填项'
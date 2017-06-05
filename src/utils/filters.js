
// 格式化日期时间
export function formatDateTime (date) {
  if (!date) {
    return
  }
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  let h = date.getHours()
  let minute = date.getMinutes()
  minute = minute < 10 ? ('0' + minute) : minute
  return y + '-' + m + '-' + d + ' ' + h + ':' + minute
}

// 格式化日期
export function formatDate (date) {
  if (!date) {
    return
  }
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  return y + '-' + m + '-' + d
}

// 后端传入日期格式化
export function formatServerDate (date) {
  if (!date) {
    return
  }
  date = date.replace(/\D+/g, '').substring(0, 13)
  date = new Date(Number(date))
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  const formatDate = y + '-' + m + '-' + d
  return formatDate
}
export function formatServerDateTime (date) {
  if (!date) {
    return
  }
  date = date.replace(/\D+/g, '').substring(0, 13)
  date = new Date(Number(date))
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m = m < 10 ? ('0' + m) : m
  let d = date.getDate()
  d = d < 10 ? ('0' + d) : d
  let h = date.getHours()
  let minute = date.getMinutes()
  minute = minute < 10 ? ('0' + minute) : minute
  let s = date.getSeconds()
  s = s < 10 ? ('0' + s) : s
  const formatDate = y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + s
  return formatDate
}

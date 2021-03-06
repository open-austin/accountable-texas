import queryString from 'query-string'

export function dashesToSpaces(str) {
  if (!str) return ''
  return capitalize(str.split('-').join(' '))
}

export function capitalize(str) {
  if (!str) return ''
  str = str.toLowerCase().split(' ')

  for (let i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1)
  }

  return str.join(' ')
}

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function formatMoney(money) {
  return '$' + numberWithCommas(Math.round(money))
}

const QUERY_OPTS = {
  // important that parse and stringify always share same options
  parseBooleans: true,
  arrayFormat: 'bracket',
  parseNumbers: true,
}
export function getQueryString(history) {
  return queryString.parse(history.location.search, QUERY_OPTS)
}
export function setQueryString(queryObj, history, add = false) {
  if (add) {
    const oldQueryObj = getQueryString(history)
    queryObj = { ...oldQueryObj, ...queryObj }
  }
  history.push('?' + queryString.stringify(queryObj, QUERY_OPTS))
}

export function getDebugQuery() {
  if (process.env.NODE_ENV === 'production') return ''
  return `
    _debug {
      sql {
        duration
        sql
      }
    }
  `
}

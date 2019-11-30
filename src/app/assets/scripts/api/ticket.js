let mockedTicket = require('mocks/ticket.json')

export const getTicket = async uid => {
  return JSON.parse(JSON.stringify(mockedTicket))
}

export const saveTicket = async data => {
  mockedTicket = JSON.parse(JSON.stringify(data))
  return true
}

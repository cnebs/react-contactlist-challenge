const formattedPhone = (str) => { // Converts wrongly formatted phone numbers
  var cleaned = ('' + str).replace(/\D/g, '')
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3] 
  }
  return null
}

export default formattedPhone;
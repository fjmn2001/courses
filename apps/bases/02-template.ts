const companyName: string = 'Amazon'
const companyCode: string = 'AMZ'

//backtick is the character name
const companyCompleteName = () => `${companyCode} - ${companyName}`

console.log(`Hello ${companyCompleteName()}`)
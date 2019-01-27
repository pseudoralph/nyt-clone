export function dateBuilder():string {
  // Expected output: Friday, January 25, 2019

  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

  return `${days[(new Date()).getDay()]}, ${months[(new Date()).getMonth()]} ${(new Date()).getDate()}, ${(new Date()).getFullYear()}`
}

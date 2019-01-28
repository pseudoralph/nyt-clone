export function dateBuilder():string {
  const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
  const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

  return `${days[(new Date()).getDay()]}, ${months[(new Date()).getMonth()]} ${(new Date()).getDate()}, ${(new Date()).getFullYear()}`
}

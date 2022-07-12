import html from './core.js'

const cars = ['Mer','Cadi','Morning']

const isSuccess = null

const output =  html`
    <h1>${isSuccess}</h1>
    <ul>
        ${cars.map(car => `<li>${car}</li>`).join('\n')}
    </ul>
`

console.log(output)
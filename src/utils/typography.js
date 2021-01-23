import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '16px',
  headerFontFamily: [
    'Avenir Next',
    'Helvetica Neue',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
  ],
  bodyFontFamily: ['Roboto', 'sans-serif'],
})

export const { scale, rhythm, options } = typography

export default typography

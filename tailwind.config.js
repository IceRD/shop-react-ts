/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
    content: {
        relative: true,
        files: ['./index.html', './src/**/*.{js,ts,jsx,tsx,scss}'],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Roboto'],
            },

            colors: {
                primary: {
                    light: '#a5b4fc',
                    DEFAULT: '#6366f1',
                    dark: '#4f46e5',
                    'deep-dark': '#4338ca',
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        plugin(function ({ addBase, theme }) {
            addBase({
                html: { fontSize: '14px', color: '#3d3d3d' },
                h1: { fontSize: theme('fontSize.3xl'), fontWeight: 500 },
                h2: { fontSize: theme('fontSize.2xl'), fontWeight: 500 },
                h3: { fontSize: theme('fontSize.xl') },
                h4: { fontSize: theme('fontSize.lg') },
                h5: { fontSize: theme('fontSize.base') },
                h6: { fontSize: theme('fontSize.md') },
            })
        }),
    ],
}

module.exports = {
    plugins: {
        'cssnano': {
            preset: 'default',
        },
        '@fullhuman/postcss-purgecss': {
            content: ['./src/**/*.{js,ts,jsx,tsx}'],
            safelist: {
                standard: [/^mantine-/],
            },
        },
        'postcss-preset-mantine': {},
        'postcss-simple-vars': {
            variables: {
                'mantine-breakpoint-xs': '36em',
                'mantine-breakpoint-sm': '48em',
                'mantine-breakpoint-md': '62em',
                'mantine-breakpoint-lg': '75em',
                'mantine-breakpoint-xl': '88em',
            },
        },
    },
};
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                luxury: {
                    cream: "#FDFCF0",
                    beige: "#F5F5DC",
                    charcoal: "#1A1A1A",
                    gold: "#D4AF37",
                    silver: "#C0C0C0",
                }
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Inter"', 'sans-serif'],
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
            },
            animation: {
                'fade-in': 'fadeIn 1s ease-out forwards',
                'slide-up': 'slideUp 0.8s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      colors: {
        navy: '#081C3A',
        deep: '#0B1224',
        bluebrand: '#2563EB',
        skybrand: '#38BDF8',
        mist: '#F5F8FC',
        steel: '#5B6B82',
        line: '#DDE7F3'
      },
      boxShadow: {
        blueglow: '0 30px 90px rgba(37, 99, 235, 0.26)',
        elegant: '0 22px 70px rgba(8, 28, 58, 0.12)',
        lift: '0 16px 48px rgba(15, 23, 42, 0.10)'
      },
      backgroundImage: {
        'blue-mesh': 'radial-gradient(circle at 16% 18%, rgba(56,189,248,.28), transparent 28%), radial-gradient(circle at 76% 12%, rgba(37,99,235,.24), transparent 30%), linear-gradient(135deg, #081C3A 0%, #0B1224 60%, #102E62 100%)',
        'soft-grid': 'linear-gradient(rgba(15, 23, 42, .055) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, .055) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
}

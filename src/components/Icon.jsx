const paths = {
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  chart: 'M4 19V5m0 14h16M8 16V9m4 7V6m4 10v-4',
  learning: 'M4 6.5 12 3l8 3.5-8 3.5L4 6.5Zm3 4v4.2c0 1.9 2.2 3.3 5 3.3s5-1.4 5-3.3V10.5',
  tech: 'M8 9h8M8 15h8M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z',
  experience: 'M12 21s-7-4.35-7-10a7 7 0 0 1 14 0c0 5.65-7 10-7 10Zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  spark: 'M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z',
  check: 'm5 12 4 4L19 6',
  close: 'M6 6l12 12M18 6 6 18',
  menu: 'M4 7h16M4 12h16M4 17h16',
  layer: 'M12 3 3 8l9 5 9-5-9-5Zm-7 9 7 4 7-4M5 16l7 4 7-4',
  briefcase: 'M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1m-9 0h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z',
}

export default function Icon({ name = 'spark', className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={paths[name] || paths.spark} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

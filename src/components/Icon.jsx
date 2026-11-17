// Íconos de línea. Cada entrada es un path o una lista de paths.
const paths = {
  file: 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8zM14 3v5h5M9 13h6M9 17h4',
  linkedin: ['M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z', 'M2 9h4v12H2z', 'M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z'],
  mail: ['M3 5h18v14H3z', 'M3 7l9 6 9-6'],
  chat: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM8 9h8M8 13h5',
  compass: ['M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z', 'M16.2 7.8l-2.1 6.3-6.3 2.1 2.1-6.3z'],
  check: 'M20 6L9 17l-5-5',
  whatsapp: 'M21 11.5a8.4 8.4 0 0 1-12.5 7.4L3 20.5l1.6-5.3A8.5 8.5 0 1 1 21 11.5z',
  instagram: ['M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5z', 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z', 'M17.5 6.5h.01'],
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18',
  building: ['M4 21V4h10v17', 'M14 9h6v12', 'M2 21h20', 'M7 7h1M10 7h1M7 10h1M10 10h1M7 13h1M10 13h1M7 16h1M10 16h1M17 12h0.5M17 15h0.5M17 18h0.5'],
  users: ['M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M2 21a7 7 0 0 1 14 0', 'M16 3.5a4 4 0 0 1 0 7', 'M22 21a7 7 0 0 0-4-6.3'],
  users3: ['M12 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z', 'M5 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z', 'M19 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z', 'M7 20v-2a5 5 0 0 1 10 0v2', 'M1.5 19v-1.5A3.5 3.5 0 0 1 5 14h1', 'M22.5 19v-1.5A3.5 3.5 0 0 0 19 14h-1'],
  clipboard: ['M9 3h6v3H9z', 'M9 4.5H6a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5.5a1 1 0 0 0-1-1h-3', 'M9 13l2 2 4-4'],
  briefcase: ['M3 8h18v12H3z', 'M8 8V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3', 'M3 13h18'],
  book: ['M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z', 'M4 21a2 2 0 0 1 2-2h13'],
  arrow: 'M5 12h14M13 6l6 6-6 6',
  handshake: [
    'm11 17 2 2a1 1 0 1 0 3-3',
    'm14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4',
    'm21 3 1 11h-2',
    'M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3',
    'M3 4h8',
  ],
  chart: ['M4 21V15', 'M10 21V11', 'M16 21V13', 'M2 21h20', 'M3 10l6-5 4 3 7-5', 'M16 3h4v4'],
  heart: 'M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7z',
  star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z',
}

export default function Icon({ name, size = 24, strokeWidth = 1.6, className }) {
  const d = paths[name]
  const list = Array.isArray(d) ? d : [d]
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {list.map((p) => (
        <path key={p} d={p} />
      ))}
    </svg>
  )
}

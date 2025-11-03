export default function ChartIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      {/* Database container */}
      <ellipse cx="12" cy="5" rx="7" ry="2" />
      <path d="M5 5v14" />
      <path d="M19 5v14" />
      <ellipse cx="12" cy="19" rx="7" ry="2" />
      {/* Data storage lines */}
      <path d="M6 9h12M6 12h10M6 15h8" />
      {/* Plus sign for tools */}
      <path d="M16 3.5l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.5 6h2v2h-2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}


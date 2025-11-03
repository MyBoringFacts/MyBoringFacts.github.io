export default function CodeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      {/* Code brackets */}
      <path d="M8 8L5 12l3 4M16 8l3 4-3 4M14 6l-4 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}


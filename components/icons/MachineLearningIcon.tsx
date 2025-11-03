export default function MachineLearningIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      {/* Neural network visualization */}
      <circle cx="7" cy="9" r="1.5" fill="currentColor" />
      <circle cx="12" cy="7" r="1.5" fill="currentColor" />
      <circle cx="17" cy="9" r="1.5" fill="currentColor" />
      <circle cx="7" cy="15" r="1.5" fill="currentColor" />
      <circle cx="12" cy="13" r="1.5" fill="currentColor" />
      <circle cx="17" cy="15" r="1.5" fill="currentColor" />
      <circle cx="12" cy="18" r="1.5" fill="currentColor" />
      <path d="M8.5 9L10.8 7.5M14.2 7.5L15.5 9M8.5 15L10.8 13.5M14.2 13.5L15.5 15M7 10.5v3.5M17 10.5v3.5" strokeLinecap="round" />
    </svg>
  )
}


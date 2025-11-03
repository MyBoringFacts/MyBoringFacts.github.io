export default function DeepLearningIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      {/* Deep learning - stacked layers with connections */}
      {/* Top layer */}
      <circle cx="6" cy="5" r="1.5" fill="currentColor" />
      <circle cx="12" cy="5" r="1.5" fill="currentColor" />
      <circle cx="18" cy="5" r="1.5" fill="currentColor" />
      {/* Middle layer */}
      <circle cx="8" cy="12" r="1.5" fill="currentColor" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <circle cx="16" cy="12" r="1.5" fill="currentColor" />
      {/* Bottom layer */}
      <circle cx="12" cy="19" r="1.5" fill="currentColor" />
      {/* Connections */}
      <path d="M6 6.5L8 11.5M8 11.5L12 17.5M12 6.5L12 17.5M18 6.5L16 11.5M16 11.5L12 17.5" strokeLinecap="round" />
    </svg>
  )
}


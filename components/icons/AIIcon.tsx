export default function AIIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      {/* Chat bubble for NLP */}
      <path d="M7 9h10M7 13h8M4.5 20.5l2.5-2.5H18a1.5 1.5 0 001.5-1.5v-10A1.5 1.5 0 0018 5.5H6a1.5 1.5 0 00-1.5 1.5v10c0 .83.67 1.5 1.5 1.5h1.5l2.5 2.5z" strokeLinecap="round" strokeLinejoin="round" />
      {/* AI sparkle */}
      <circle cx="19" cy="4.5" r="1" fill="currentColor" />
      <path d="M18.5 4l1 1M19.5 4l-1 1M19 5.5v-2M20.5 5h-2" strokeLinecap="round" />
    </svg>
  )
}


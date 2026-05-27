'use client'

export default function ScrollToContact({
  label,
  className,
  arrow,
}: {
  label: string
  className: string
  arrow?: boolean
}) {
  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <button className={className} onClick={handleClick} type="button">
      {label}
      {arrow && (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  )
}
import { useRef, useState, useEffect } from 'react'

function TooltipOnOverflow({
  text,
  direction = 'below',
}: {
  text: string
  direction?: 'above' | 'below'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [doesOverflow, setDoesOverflow] = useState(false)

  const reset = () =>
    setDoesOverflow(
      Boolean(
        ref.current && ref.current.offsetWidth < ref.current.scrollWidth,
      ),
    )

  useEffect(reset)
  useEffect(() => {
    window.addEventListener('resize', reset)
    return () => window.removeEventListener('resize', reset)
  }, [])

  return (
    <div className="relative group">
      <div
        ref={ref}
        className={
          doesOverflow
            ? 'truncate opacity-100 transition-all group-hover:opacity-50'
            : 'truncate'
        }
      >
        {text}
      </div>
      {doesOverflow ? (
        <span
          className={
            direction === 'below'
              ? 'absolute left-0 z-30 p-2 text-xs text-white bg-gray-800 rounded top-[1.4rem] last: max-w-[20rem] opacity-50 scale-0 transition-all group-hover:scale-100 group-hover:opacity-100 break-words'
              : 'absolute left-0 z-30 p-2 text-xs text-white bg-gray-800 rounded bottom-[1.4rem] last: max-w-[20rem] opacity-50 scale-0 transition-all group-hover:scale-100 group-hover:opacity-100 break-words'
          }
        >
          {text}
        </span>
      ) : null}
    </div>
  )
}

export default TooltipOnOverflow

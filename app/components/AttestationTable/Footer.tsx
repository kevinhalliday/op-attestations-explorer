import { usePage } from '~/utils/nav'
import { BiChevronRight, BiChevronLeft } from 'react-icons/bi'

function AttestationFooter({ count, rows }: { count: number; rows: number }) {
  const { next, prev, page, first, last, max } = usePage({
    rows,
    count,
  })

  return (
    <div className="flex justify-center border-t border-gray-30">
      <div className="flex justify-between px-6 py-4 text-sm text-gray-900">
        <button
          onClick={first}
          disabled={page === 0}
          className="px-2 py-1 mr-2 text-gray-500 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent"
        >
          First
        </button>
        <button
          disabled={page === 0}
          onClick={prev}
          className="px-2 py-1 mr-2 text-gray-500 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent"
        >
          <BiChevronLeft />
        </button>
        <span className="px-2 py-1 mr-2 text-gray-500">
          <span className="font-bold">{page}</span> of {max}
        </span>
        <button
          onClick={next}
          disabled={page === max}
          className="px-2 py-1 mr-2 text-gray-500 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent"
        >
          <BiChevronRight />
        </button>
        <button
          onClick={last}
          disabled={page === max}
          className="px-2 py-1 mr-2 text-gray-500 border border-gray-300 rounded hover:bg-gray-100 disabled:opacity-40 disabled:hover:bg-transparent"
        >
          Last
        </button>
      </div>
    </div>
  )
}

export default AttestationFooter

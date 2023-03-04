import { useSearchParams } from '@remix-run/react'

export function parseUrlParams(u: string) {
  const url = new URL(u)

  // min 10, max 100
  const rows = Math.min(
    Math.max(parseInt(url.searchParams.get('rows') ?? '10') || 10, 10),
    100,
  )

  // min 0
  const page = Math.max(parseInt(url.searchParams.get('page') ?? '0') || 0, 0)

  const address = url.searchParams.get('address')
  const key = url.searchParams.get('key')

  return {
    rows,
    page,
    address,
    key,
  }
}

export function usePage({
  rows,
  count,
}: {
  rows: number
  count: number
}) {
  const [params, setParams] = useSearchParams()
  const page = parseInt(params.get('page') ?? '0')
  const max = Math.floor(count / rows)

  const first = () => {
    params.set('page', '0')
    setParams(params)
  }

  const last = () => {
    params.set('page', max.toString())
    setParams(params)
  }

  const next =
    page < max / rows
      ? () => {
          params.set('page', (page + 1).toString())
          setParams(params)
        }
      : undefined

  const prev =
    page > 0
      ? () => {
          params.set('page', (page - 1).toString())
          setParams(params)
        }
      : undefined

  const setPage = (page: number) => {
    params.set('page', page.toString())
    setParams(params)
  }

  return { page, next, prev, max, first, last, setPage }
}

export function useAddress() {
  const [params, setParams] = useSearchParams()
  const address = params.get('address')

  const setAddress = (address: string) => {
    params.delete('page')
    params.set('address', address)
    setParams(params)
  }

  const clearAddress = () => {
    params.delete('page')
    params.delete('address')
    setParams(params)
  }

  return { address, setAddress, clearAddress }
}

export function useKey() {
  const [params, setParams] = useSearchParams()
  const key = params.get('key')

  const setKey = (key: string) => {
    params.delete('page')
    params.set('key', key)
    setParams(params)
  }

  const clearKey = () => {
    params.delete('page')
    params.delete('key')
    setParams(params)
  }

  return { key, setKey, clearKey }
}

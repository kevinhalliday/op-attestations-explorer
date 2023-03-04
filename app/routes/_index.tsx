import type { LoaderArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import AttestationTable from '~/components/AttestationTable'
import { parseUrlParams } from '~/utils/nav'
import { queryCount, queryAttestations } from '~/graphql/queries'
import { KeyDisplayProvider } from '~/contexts/key-display'

export async function loader(args: LoaderArgs) {
  const { rows, page, address, key } = parseUrlParams(args.request.url)

  let qCount = await queryCount({ address, key })

  // TODO: handle errors
  const count = parseInt(qCount.data.count?.count ?? '0')
  if (count === 0) {
    return {
      attestations: [],
      count: 0,
    }
  }

  let qAttestations = await queryAttestations({
    rows,
    page,
    address,
    key,
    count,
  })

  // TODO: handle errors
  const result = {
    attestations: qAttestations.data.attestations,
    count,
  }

  return result
}

export default function Index() {
  const data = useLoaderData<typeof loader>()
  return (
    <KeyDisplayProvider>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 gap-4">
        <AttestationTable
          attestations={data?.attestations ?? []}
          count={data?.count ?? 0}
        />
      </div>
    </KeyDisplayProvider>
  )
}

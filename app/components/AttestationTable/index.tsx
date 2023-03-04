import type { Attestation } from '~/graphql/generated'
import SearchBar from '~/components/SearchBar'
import Row from './Row'
import Header from './Header'
import Footer from './Footer'
import EmptyRow from './EmptyRow'
import Tags from './Tags'

function AttestationTable({
  attestations,
  count,
}: {
  attestations: Attestation[]
  count: number
}) {
  const rows = 10
  return (
    <div className="relative flex flex-col w-screen p-4 my-2 x-auto 2xl:max-w-screen-2xl 2xl:w-xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm">
      <SearchBar />
      <Tags />
      <div className="overflow-hidden border border-gray-200 shadow-md rounded-md">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <Header />
            <tbody className="bg-white divide-y divide-gray-200">
              {attestations.map((attestation, i) => (
                <Row
                  key={attestation.id}
                  attestation={attestation}
                  last={i === rows - 1}
                />
              ))}
              {attestations.length < rows
                ? Array.from({ length: rows - attestations.length }).map(
                    (_, i) => <EmptyRow key={i} />,
                  )
                : null}
            </tbody>
          </table>
        </div>
        <Footer count={count} rows={rows} />
      </div>
    </div>
  )
}

export default AttestationTable

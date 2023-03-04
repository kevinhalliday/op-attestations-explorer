import { formatAddress, formatAttestationKey } from '~/utils/format'
import { useKey, useAddress } from '~/utils/nav'
import { BiX } from 'react-icons/bi'

function AttestationTags() {
  const { address, clearAddress } = useAddress()
  const { key, clearKey } = useKey()

  return (
    <div className="flex flex-wrap items-center my-2 text-sm absolute top-[-2rem]">
      {address ? (
        <div className="flex items-center px-2 py-1 mr-2 text-gray-700 bg-gray-200 rounded">
          <span className="mr-1">address = </span>
          <span className="font-medium">{formatAddress(address)}</span>
          <button
            onClick={clearAddress}
            className="ml-1 text-gray-500 hover:text-gray-700"
          >
            <BiX />
          </button>
        </div>
      ) : null}
      {key ? (
        <button className="flex items-center px-2 py-1 mr-2 text-gray-700 bg-gray-200 rounded">
          <span className="mr-1">key = </span>
          <span className="font-medium">{formatAttestationKey(key)}</span>
          <button
            onClick={clearKey}
            className="ml-1 text-gray-500 hover:text-gray-700"
          >
            <BiX />
          </button>
        </button>
      ) : null}
    </div>
  )
}

export default AttestationTags

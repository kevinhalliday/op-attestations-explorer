import type { Attestation } from '~/graphql/generated'
import {
  formatTimestamp,
  formatAddress,
  formatAttestationKey,
  attestationValueAsStr,
  attestationValueAsNum,
} from '~/utils/format'
import { useKey, useAddress } from '~/utils/nav'
import { useKeyDisplay } from '~/contexts/key-display'
import { BiLinkExternal } from 'react-icons/bi'
import TooltipOnOverflow from '~/components/TooltipOnOverflow'

function AttestationKey({ attestation: a }: { attestation: Attestation }) {
  const selected = useKey()

  return selected.key === a.key ? (
    <span className="text-gray-500">{formatAttestationKey(a.key)}</span>
  ) : (
    <button
      onClick={() => selected.setKey(a.key)}
      className="text-blue-600 hover:text-blue-900"
    >
      {formatAttestationKey(a.key)}
    </button>
  )
}

function AttestationValue({
  attestation: a,
  tooltipDirection = 'below',
}: {
  attestation: Attestation,
  tooltipDirection?: 'above' | 'below'
}) {
  const display = useKeyDisplay()
  const as = display.of(a.key)

  return (
    <TooltipOnOverflow
      text={
        as === 'num'
          ? attestationValueAsNum(a.val)
          : as === 'str'
          ? attestationValueAsStr(a.val)
          : a.val
      }
      direction={tooltipDirection}
    />
  )
}

function AttestationAsControl({ attestation: a }: { attestation: Attestation }) {
  const display = useKeyDisplay()
  const as = display.of(a.key)

  return (
    <div className="flex">
      <button
        onClick={() => display.as(a.key, 'raw')}
        className={
          as === 'raw'
            ? 'bg-blue-500 text-white rounded-l-md px-2 py-1'
            : 'bg-gray-200 rounded-l-md px-2 py-1'
        }
      >
        raw
      </button>
      <button
        onClick={() => display.as(a.key, 'str')}
        className={
          as === 'str'
            ? 'bg-blue-500 text-white px-2 py-1'
            : 'bg-gray-200 px-2 py-1'
        }
      >
        str
      </button>
      <button
        onClick={() => display.as(a.key, 'num')}
        className={
          as === 'num'
            ? 'bg-blue-500 text-white rounded-r-md px-2 py-1'
            : 'bg-gray-200 rounded-r-md px-2 py-1'
        }
      >
        num
      </button>
    </div>
  )
}

function AttestationAddress({ address }: { address: string }) {
  const selected = useAddress()
  return selected.address === address ? (
    <span className="text-gray-500 ">{formatAddress(address)}</span>
  ) : (
    <button
      onClick={() => selected.setAddress(address)}
      className="text-blue-600 hover:text-blue-900"
    >
      {formatAddress(address)}
    </button>
  )
}

function AttestationRow({
  attestation: a,
  last,
}: {
  attestation: Attestation
  last?: boolean
}) {
  return (
    <tr>
      <td className="px-6 py-4 text-sm truncate">
        <AttestationKey attestation={a} />
      </td>
      <td className="px-6 py-4 text-sm text-gray-600 max-w-[10rem]">
        <AttestationValue
          attestation={a}
          tooltipDirection={last ? 'above' : 'below'}
        />
      </td>
      <td className="px-6 py-4 text-xs text-gray-600">
        <AttestationAsControl attestation={a} />
      </td>
      <td className="px-6 py-4 text-sm truncate">
        <AttestationAddress address={a.about} />
      </td>
      <td className="px-6 py-4 text-sm truncate">
        <AttestationAddress address={a.creator} />
      </td>
      <td className="px-6 py-4 text-sm truncate">
        <a
          href={`https://optimistic.etherscan.io/tx/${a.transactionHash}`}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-900"
        >
          {formatAddress(a.transactionHash)}{' '}
          <BiLinkExternal className="inline" />
        </a>
      </td>
      <td className="px-6 py-4 text-sm text-gray-600 truncate">
        {formatTimestamp(a.blockTimestamp)}
      </td>
    </tr>
  )
}

export default AttestationRow

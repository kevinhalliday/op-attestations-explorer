import { useState } from 'react'
import { ethers } from 'ethers'
import { useKey, useAddress  } from '~/utils/nav'

function encodeRawKey(rawKey: string) {
   if (rawKey.length<32)
      return ethers.utils.formatBytes32String(rawKey)

   const hash = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(rawKey))
   return hash.slice(0,64)+'ff'
}

function SearchBar() {
  const [query, setQuery] = useState('')
  const { setKey } = useKey()
  const { setAddress } = useAddress()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (ethers.utils.isAddress(query)) {
      setAddress(query)
    } else {
      setKey(encodeRawKey(query))
    }

    setQuery('')
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-row w-full mb-4">
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
        className="flex-1 px-4 py-2 text-gray-900 border border-gray-300 shadow-md rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        placeholder="Search by address / key"
      />
    </form>
  )
}

export default SearchBar

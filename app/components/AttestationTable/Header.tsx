function AttestationHeader() {
  return (
    <thead className="bg-gray-50">
      <tr>
        <th
          scope="col"
          className="w-2/12 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
        >
          Key
        </th>
        <th
          scope="col"
          className="w-4/12 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
        >
          Value
        </th>
        <th
          scope="col"
          className="w-1/12 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
        >
          As
        </th>
        <th
          scope="col"
          className="w-1/12 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
        >
          About
        </th>
        <th
          scope="col"
          className="w-1/12 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
        >
          Creator
        </th>
        <th
          scope="col"
          className="w-1/12 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
        >
          Tx Hash
        </th>
        <th
          scope="col"
          className="w-1/12 px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
        >
          Age
        </th>
      </tr>
    </thead>
  )
}

export default AttestationHeader

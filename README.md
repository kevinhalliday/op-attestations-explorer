# op-attestations-explorer

Etherscan for attestations on optimism.

- page through the +1 million attestations on optimism
- search by key
    - [https://op-attestations-explorer.vercel.app/?key=0x466c6970736964655f757365725f73636f72696e670000000000000000000000](https://op-attestations-explorer.vercel.app/?key=0x466c6970736964655f757365725f73636f72696e670000000000000000000000)
- or by address
    - [https://op-attestations-explorer.vercel.app/?address=0xd34a8775d06d41b36054d59ef2d09a79b7aa1fa2](https://op-attestations-explorer.vercel.app/?address=0xd34a8775d06d41b36054d59ef2d09a79b7aa1fa2)


This explorer uses [remix](https://remix.run/) to render a table of attestations that satisfy the user's request on the server.
Queries are resolved against our [subgraph](https://api.thegraph.com/subgraphs/name/kevinhalliday/op-attestations), implemented [here](https://github.com/kevinhalliday/op-attestations-subgraph).
Each request is a new table is a new page. Each with it's own link.
This structure, along with our subgraph indexing mechanisms, allows the Explorer to resolve most all requests efficiently, < 0.5s.

## Run Locally

```
yarn dev
```

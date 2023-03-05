# op-attestations-explorer

Etherscan for [attestations on optimism](https://community.optimism.io/docs/governance/attestation-station/).

Submission for Optimism's ETH Denver Buidl Bounty. Judges if you're here I botched my submission so I did not add a useful project description or demo video. But I worked hard on this so hope you forgive me!
Take this README as the project's description, and our submission video can be found [here](https://www.youtube.com/watch?v=TPIwJ0a_k0k).

## Usage

- visit at [https://op-attestations-explorer.vercel.app/](https://op-attestations-explorer.vercel.app/)
- page through the +1 million attestations on optimism
- search by key [/?key={key}](https://op-attestations-explorer.vercel.app/?key=0x466c6970736964655f757365725f73636f72696e670000000000000000000000)
- or by address [/?address={address}](https://op-attestations-explorer.vercel.app/?address=0xd34a8775d06d41b36054d59ef2d09a79b7aa1fa2)
- or both! [/?address={address}&key={key}](https://op-attestations-explorer.vercel.app/?address=0xd34a8775d06d41b36054d59ef2d09a79b7aa1fa2&key=0x617667506f73744c696b65735477697474657200000000000000000000000000)


This explorer uses [remix](https://remix.run/) to render a table of attestations that satisfy the user's request on the server before sending the page back to the user.
Queries are resolved against our [attestation subgraph](https://api.thegraph.com/subgraphs/name/kevinhalliday/op-attestations), implemented [here](https://github.com/kevinhalliday/op-attestations-subgraph).
Each request is a new table is a new page. Each with it's own link.
This structure, along with our subgraph indexing mechanisms, allows the axplorer to resolve most all requests efficiently, < 0.5s.

## Run Locally

```
yarn dev
```

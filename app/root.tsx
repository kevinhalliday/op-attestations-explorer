import type { MetaFunction, LinksFunction } from '@remix-run/node'
import stylesheet from '~/tailwind.css'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'OP Attestations Explorer',
  description: 'Explore attestations on Optimism. Search by key or address.',
  viewport: 'width=device-width,initial-scale=1',
  'og:title': 'OP Attestations Explorer',
  'og:description': 'Explore attestations on Optimism. Search by key or address.',
  'og:image': '/attestation-explorer-preview.png',
})

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: stylesheet },
  { rel: 'icon', href: '/favicon.png' },
  { rel: 'apple-touch-icon', href: '/favicon.png' },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

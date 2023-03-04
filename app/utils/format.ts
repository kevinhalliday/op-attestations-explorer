import { ethers } from "ethers"
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'


export function formatAddress(address: string) {
  return address.slice(0, 6) + '...' + address.slice(-4)
}

TimeAgo.addDefaultLocale(en)
const timeago = new TimeAgo('en-US')

export function formatTimestamp(timestamp: string) {
  return timeago.format(parseInt(timestamp) * 1000)
}

export function formatAttestationKey(key: string) {
  try {
    return ethers.utils.parseBytes32String(key)
  } catch (e) {
    // Key specified by attestation at address 0
    console.error('Error parsing key', key, e)
    return key
  }
}

export function attestationValueAsStr(value: string) {
  return ethers.utils.toUtf8String(value)
}

export function attestationValueAsNum(value: string) {
  return ethers.BigNumber.from(value).toString()
}

import { useState, useContext, createContext, useMemo } from 'react'

type As = 'raw' | 'num' | 'str'

type KeyDisplay = {
  as: (key: string, as: As) => void
  of: (key: string) => As
}

const KeyDisplayContext = createContext<KeyDisplay | null>(null)

export function KeyDisplayProvider({ children }: { children: React.ReactNode }) {
  const [display, setDisplay] = useState<Record<string, As>>({})

  const value = useMemo(() => {
    const as = (key: string, as: As) =>
      setDisplay(prev => ({ ...prev, [key]: as }))

    const of = (key: string) => display[key] ?? 'raw'

    return { as, of }
  }, [display, setDisplay])

  return (
    <KeyDisplayContext.Provider value={value}>
      {children}
    </KeyDisplayContext.Provider>
  )
}

export function useKeyDisplay() {
  const context = useContext(KeyDisplayContext)

  if (!context) {
    throw new Error('useKeyDisplay must be used within a KeyDisplayProvider')
  }

  return context
}

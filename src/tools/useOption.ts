import { useState, useEffect } from 'react'
import browser from 'webextension-polyfill';
import { storage } from 'webextension-polyfill'

interface OptionType {
  state: 'colored' | 'gray';
}

export const useOption = () => {
  const [option, setOption] = useState<OptionType>({ state: 'colored' })

  const updateOption = (o: OptionType) => {
    browser.storage.sync.set(o)
  }

  useEffect(() => {
    const handler = (val: Record<string, browser.Storage.StorageChange<OptionType[keyof OptionType], OptionType[keyof OptionType]>>) => {
      setOption({ state: val.state.newValue || 'colored' })
    }
    browser.storage.onChanged.addListener(handler)
    browser.storage.sync.get(null).then((res) => {
      if (res.state) {
        setOption(res as OptionType)
      }
    })

    return () => {
      browser.storage.onChanged.removeListener(handler)
    }
  }, [])

  return [option, updateOption] as const
}

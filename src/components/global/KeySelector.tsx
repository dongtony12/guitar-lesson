'use client'

import { twJoin } from 'tailwind-merge'
import useKeyStore from '@/store/keyStore'
import type { KeyNoteType } from '@/types/key.types'
import { KEY } from '@/utils/constants/general'

const KeySelector = () => {
  const { selectedKey, setSelectedKey } = useKeyStore((state) => ({
    selectedKey: state.selectedKey,
    setSelectedKey: state.setSelectedKey,
  }))

  const handleKeyClick = (key: KeyNoteType) => {
    setSelectedKey(key)
  }

  return (
    <div className="p-4">
      <div className="flex justify-evenly mb-4">
        {KEY.map((key) => (
          <button
            key={key}
            onClick={() => handleKeyClick(key)}
            className={twJoin(
              'px-4 py-2 rounded justify-evenly border',
              selectedKey === key
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800',
            )}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  )
}

export default KeySelector

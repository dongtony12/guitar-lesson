'use client'

import React, { useState } from 'react'
import { CHORDS, RELATED_CHORDS } from '@/utils/constants'
import Image from 'next/image'

const ChordSelector: React.FC = () => {
  const [selectedChord, setSelectedChord] = useState<string | null>('C')

  const handleChordClick = (chord: string) => {
    setSelectedChord(chord)
  }

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        {CHORDS.map((chord) => (
          <button
            key={chord}
            onClick={() => handleChordClick(chord)}
            className={`px-4 py-2 rounded ${
              selectedChord === chord
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            {chord}
          </button>
        ))}
      </div>

      {selectedChord && (
        <div className="relative flex w-full items-center">
          <select
            className="flex w-full mt-2 p-2 border border-gray-400 rounded appearance-none bg-white"
            defaultValue=""
          >
            <option value="" disabled>
              Select a chord type
            </option>
            {RELATED_CHORDS.map((relatedChord) => (
              <option key={relatedChord} value={relatedChord}>
                {selectedChord + relatedChord}
              </option>
            ))}
          </select>

          <div className="absolute right-0 px-2 pointer-events-none">
            <Image
              src={'/svg/arrow-bottom-black.svg'}
              width={24}
              height={24}
              alt="arrow-bottom-black"
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ChordSelector

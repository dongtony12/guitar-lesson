'use client'

import React, { ChangeEvent, useState } from 'react'
import useChordStore from '@/store/chordStore'
import { ChordType } from '@/types/chord.types'
import { CHORD_DATA, CHORDS, RELATED_CHORDS } from '@/utils/constants/chord'

const ChordSelector: React.FC = () => {
  const setSelectedNotes = useChordStore((state) => state.setSelectedNotes)

  const [selectedChord, setSelectedChord] = useState<string | null>('C')
  const [selectedType, setSelectedType] = useState<ChordType | null>('major')

  const handleChordClick = (chord: string) => {
    setSelectedChord(chord)
  }

  const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const type = event.target.value as ChordType
    setSelectedType(type)

    if (selectedChord && type) {
      const notes = CHORD_DATA[selectedChord][type]
      setSelectedNotes(notes || [])
    }
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
        <div className="relative">
          <select
            className="block w-full mt-2 p-2 border border-gray-400 rounded appearance-none bg-white"
            value={selectedType || ''}
            onChange={handleTypeChange}
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
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 fill-current text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M5.516 7.548a1 1 0 011.366-.366l.094.063 3.507 2.602 3.507-2.602a1 1 0 011.459 1.366l-.063.094-4 3a1 1 0 01-1.123.063l-.094-.063-4-3a1 1 0 01-.23-1.366z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )
}

export default ChordSelector

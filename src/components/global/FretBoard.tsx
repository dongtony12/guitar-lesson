'use client'

import React from 'react'
import useChordStore from '@/store/chordStore'
import { FRET_COUNT, STRING_COUNT } from '@/utils/constants/general'
import { ENHARMONIC_EQUIVALENTS, STRING_NOTES } from '@/utils/constants/note'

const FretBoard = () => {
  const selectedNotes = useChordStore((state) => state.selectedNotes)

  const convertNote = (note: string) => {
    if (selectedNotes.includes(note)) {
      return note
    }

    return ENHARMONIC_EQUIVALENTS[note]
  }

  return (
    <div className="p-4 border-2 border-gray-800 rounded-lg bg-white">
      {/* 프렛 번호 표시 */}
      <div className="flex">
        <div className="w-8"></div>
        {[...Array(FRET_COUNT)].map((_, fretIndex) => (
          <div key={fretIndex} className="flex-1 text-center text-sm">
            {`${fretIndex + 1}fr`}
          </div>
        ))}
      </div>

      {/* 기타 줄과 프렛 */}
      {[...Array(STRING_COUNT)].map((_, stringIndex) => (
        <div key={stringIndex} className="flex items-center">
          {/* 줄 번호 */}
          <div className="w-8 text-center text-sm ">{`${stringIndex + 1}:`}</div>
          {/* 프렛 */}
          {[...Array(FRET_COUNT)].map((_, fretIndex) => {
            const note = STRING_NOTES[stringIndex][fretIndex]
            const displayedNote = convertNote(note) // 변환된 음 표시
            const isNoteSelected = selectedNotes.includes(displayedNote)

            return (
              <div
                key={fretIndex}
                className={`flex-1 h-12 border border-gray-400 flex justify-center items-center`}
              >
                {isNoteSelected && (
                  <div className="w-6 h-6 rounded-full bg-blue-600 text-white">
                    {displayedNote}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      ))}
    </div>
  )
}

export default FretBoard

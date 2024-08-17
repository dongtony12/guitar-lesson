import React from 'react'
import { FRET_COUNT, STRING_COUNT } from '@/utils/constants'

const FretBoard = () => {
  return (
    <div className="p-4 border-2 border-gray-800 rounded-lg bg-white">
      {[...Array(STRING_COUNT)].map((_, stringIndex) => (
        <div key={stringIndex} className="flex items-center ">
          <div className="w-8 text-center text-sm">{`${stringIndex + 1}:`}</div>

          {[...Array(FRET_COUNT)].map((_, fretIndex) => (
            <div
              key={fretIndex}
              className="flex-1 h-12 border border-gray-400"
            />
          ))}
        </div>
      ))}

      <div className="flex mt-2">
        <div className="w-8" />
        {[...Array(FRET_COUNT)].map((_, fretIndex) => (
          <div key={fretIndex} className="flex-1 text-center text-sm">
            {`${fretIndex + 1}fr`}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FretBoard

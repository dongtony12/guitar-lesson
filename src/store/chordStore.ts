import { CHORD_DATA } from '@/utils/constants/chord'
import { create } from 'zustand'

interface ChordState {
  selectedNotes: string[]
  setSelectedNotes: (notes: string[]) => void
}

const useChordStore = create<ChordState>((set) => ({
  selectedNotes: CHORD_DATA['C']['major'] as [],
  setSelectedNotes: (notes) => set({ selectedNotes: notes }),
}))

export default useChordStore

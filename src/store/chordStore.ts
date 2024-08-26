import { create } from 'zustand'

interface ChordState {
  selectedNotes: string[]
  setSelectedNotes: (notes: string[]) => void
}

const useChordStore = create<ChordState>((set) => ({
  selectedNotes: [],
  setSelectedNotes: (notes) => set({ selectedNotes: notes }),
}))

export default useChordStore

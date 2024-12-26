import { type KeyNoteType } from '@/types/key.types'
import { create } from 'zustand'

interface KeyState {
  selectedKey: KeyNoteType
  setSelectedKey: (key: KeyNoteType) => void
}

const useKeyStore = create<KeyState>((set) => ({
  selectedKey: 'C',
  setSelectedKey: (key) => set({ selectedKey: key }),
}))

export default useKeyStore

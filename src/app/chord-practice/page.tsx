import { ChordSelector, FretBoard } from '@/components'

const ChordPracticePage = () => {
  return (
    <div className="flex flex-col">
      <h1>chord practice</h1>

      <ChordSelector />
      <FretBoard />
    </div>
  )
}

export default ChordPracticePage

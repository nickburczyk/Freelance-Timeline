import { TimelineSeparator } from "@mui/lab"
import { FreelanceChapter } from "../../lib/types"
import { sortObjArray } from "../../lib/utili"
import PointInTime from "./PointInTime"
import styles from './timeline.module.css'

const h2 = styles.chapter__yearRange

const Chapter = ({
  chapter
}:Props) => {

  const sortedEvents = sortObjArray(chapter.events, 'year')

  return (
    <>
      <TimelineSeparator>
        <h2 className={h2}>{chapter.timeframe}</h2>
      </TimelineSeparator>
      {sortedEvents.map( (e, i) => 
        <PointInTime key={i} event={e}/>
      )}
    </>
  )
}

export default Chapter


interface Props {
  chapter: FreelanceChapter
}
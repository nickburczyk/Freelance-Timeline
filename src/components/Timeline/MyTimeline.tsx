import { Timeline } from "@mui/lab"
import { freelanceHistory } from "../../lib/data"
import { sortObjArray } from "../../lib/utili"
import Chapter from "./Chapter"
import styles from './timeline.module.css'

const MyTimeline = () => {
  const hist = sortObjArray(freelanceHistory, 'timeframe')

  return (
    <>
      <h2 className={styles.flexHeader}>
        <span>Design</span>
        <span>Development</span>
      </h2>
      <Timeline style={{maxWidth:'1024px', margin: "0 auto"}}>
        {hist.map( chapter => (
          <Chapter key={chapter.timeframe} chapter={chapter}/>
        ))}
      </Timeline>
    </>
  )
}

export default MyTimeline


interface Props {
  // no props
}
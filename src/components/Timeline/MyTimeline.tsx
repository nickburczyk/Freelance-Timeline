import { Timeline } from "@mui/lab"
import { useContext } from "react"
import { LanguageContext } from "../../lib/context"
import { freelanceHistory } from "../../lib/data"
import useTranslation from "../../lib/Hooks/useTranslation"
import { sortObjArray } from "../../lib/utili"
import Chapter from "./Chapter"
import styles from './timeline.module.css'

const MyTimeline = () => {
  const { translated } = useContext(LanguageContext)
  const hist = sortObjArray(freelanceHistory, 'timeframe')

  const design = useTranslation('Design', 'timeline', 'design')
  const development = useTranslation('Development', 'timeline', 'development')

  return (
    <>
      <h2 className={styles.flexHeader}>
        <span>{(translated && design) ? design : "Design"}</span>
        <span>{(translated && development) ? development : "Development"}</span>
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
import { useContext, useState } from "react"
import { 
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab'
import { FreelanceItem } from "../../lib/types"
import styles from "./timeline.module.css"
import { LanguageContext } from "../../lib/context"
import { randomize } from "../../lib/utili"
import useTranslation from "../../lib/Hooks/useTranslation"
import TranslatedParagraph from "./TranslatedParagraph"
import DetailItem from './DetailItem'

const PointInTime = ({
  event: {
    title, subtitle, 
    text, details, 
    year, yearEnd, type, 
  }
}:Props) => {
  const { translated } = useContext(LanguageContext)
  const [id] = useState(randomize(9))

  const translation = useTranslation(subtitle, id, 'subtitle')
  const titleText = useTranslation(title, id, 'title')
  const subtitleText = subtitle === "Adventure Christian Church" 
    ? subtitle 
    : translation

  return (
    <TimelineItem position={type === "DEV" ? 'right' : 'left'}>
      <TimelineOppositeContent color="#878787">
          {year}{yearEnd && ` - ${yearEnd}`}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot className={styles.dot}/>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent className={styles.point__content}>
        <div className={styles.point__heading}>
          <h3>{(translated && titleText) ? titleText : title}</h3>
          <p className={styles.point__subtitle}>{(translated && subtitleText) ? subtitleText : subtitle}</p>
        </div>
          {text.map( (t, i) => 
            <TranslatedParagraph key={i} text={t} page={id} index={i}/>
          )}
          {details && 
            <ul>
              {details.map( (d, i) => (
                <DetailItem key={i} index={i} detail={d} eventId={id}/>
              ))}
            </ul>
          }
      </TimelineContent>
      {/* ADD LATER TO ALLOW MORE DETAILS */}
      {/* <Modal
        style={{display: 'flex', justifyContent: "center", alignItems: "center"}}
        open={open} 
        onClose={handleClose}
      >
        <Box style={{padding: '30px', maxWidth: 1024, background: "White", borderRadius:"6px", outline: 'none'}}>
          <div>Description goes here</div>
        </Box>
      </Modal> */}
    </TimelineItem>
  )
}

export default PointInTime


interface Props {
  event: FreelanceItem;
}

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
import { SiUdacity } from 'react-icons/si'
import cn from 'classnames'

const PointInTime = ({
  event: {
    title, subtitle, 
    text, details, 
    year, yearEnd, type, 
    icon, id
  }
}:Props) => {
  const { translated } = useContext(LanguageContext)
  const [mapItemId] = useState(randomize(9))

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
          <h3 className={cn(styles.pointInTimeHeader, styles[type])}>
            {icon && <TitleIcon icon={icon}/>}
            {(translated && titleText) ? titleText : title}</h3>
          <p className={styles.point__subtitle}>{(translated && subtitleText) ? subtitleText : subtitle}</p>
        </div>
          {text.map( (t, i) => 
            <TranslatedParagraph key={i} text={t} page={mapItemId} index={i}/>
          )}
          {details && 
            <ul>
              {details.map( (d, i) => (
                <DetailItem key={i} index={i} detail={d} eventId={mapItemId}/>
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

interface IconId {
  icon: string;
}

/* ===== HELPER FUNCTIONS ===== */
const TitleIcon = ({icon}:IconId):JSX.Element => {
  let component = <></>
  switch(icon){
    case 'SiUdacity':
      component = <SiUdacity className={styles.titleIcon}/>
      break;
    default:
      break;
  }
  return component
}

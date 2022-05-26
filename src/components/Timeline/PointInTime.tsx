import React, { useRef, useState } from "react"
import { 
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab'
import { FreelanceItem, PointType } from "../../lib/types"
import styles from "./timeline.module.css"
import { Box, Modal } from "@mui/material"

const PointInTime = ({
  event: {
    title, subtitle, 
    text, additionalContent, 
    year, yearEnd, type, 
  }
}:Props) => {

  // const [open, setOpen] = useState(false)

  // const handleOpen = ():void => {
  //   setOpen(true)
  // }

  // const handleClose = ():void => {
  //   setOpen(false)
  // }
  // const anchorEl=useRef()
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
          <h3>{title}</h3>
          <p className={styles.point__subtitle}>{subtitle}</p>
        </div>
        <>
          {Array.isArray(text) ? (
            text.map( (t, i) => 
              <p key={i} className={styles.point__p}>{t}</p>
            )
          ) : (
            <p className={styles.point__p}>{text}</p>
          )}
        </>
        {additionalContent}
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

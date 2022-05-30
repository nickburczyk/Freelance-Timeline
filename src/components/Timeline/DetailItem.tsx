import { useContext } from "react"
import { LanguageContext } from "../../lib/context"
import useTranslation from "../../lib/Hooks/useTranslation"
import { IDetailItem } from "../../lib/types"

const DetailItem = ({
  detail: {
    title, 
    desc
  },
  eventId,
  index
}:Props) => {
  const { translated } = useContext(LanguageContext)

  const titleTranslated = useTranslation(title, eventId, `detail${index}_title`)
  const descTranslated = useTranslation(desc, eventId, `detail${index}_text`)
  
  return (
    <li>
      <h4>{(translated && titleTranslated) ? titleTranslated : title}</h4>
      <p>{(translated && descTranslated) ? descTranslated : desc}</p>
    </li>
  )
}

export default DetailItem


interface Props {
  detail: IDetailItem;
  eventId: string;
  index: number;
}
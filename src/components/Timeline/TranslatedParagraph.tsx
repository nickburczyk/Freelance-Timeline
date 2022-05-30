import { useContext } from "react"
import { LanguageContext } from "../../lib/context"
import useTranslation from "../../lib/Hooks/useTranslation";
import styles from './timeline.module.css'

const TranslatedParagraph = ({
  text, 
  page,
  index
}:Props) => {
  const { translated } = useContext(LanguageContext)

  const p = useTranslation(text, page, `p${index + 1}`)

  return (
    <p className={styles.point__p}>{(translated && p) ? p : text}</p>
  )
}

export default TranslatedParagraph


interface Props {
  text: string;
  page: string;
  index: number;
}
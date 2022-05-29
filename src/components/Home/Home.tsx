import { useState } from "react"
import useTranslation from "../../lib/Hooks/useTranslation"
import styles from "./home.module.css"

const {
  header, avatar, titleStyle, p
} = styles

const Home = () => {
  const [lang, setLang] = useState<any>("EN-US")
  const title = useTranslation(lang, texts.title, 'home', 'title')
  const p1 = useTranslation(lang, texts.p1, 'home', 'p1')
  const p2 = useTranslation(lang, texts.p2, 'home', 'p2')
  const p3 = useTranslation(lang, texts.p3, 'home', 'p3')
  const p3Bold = useTranslation(lang, texts.p3Bold, 'home', 'p3Bold')

  return (
    <header className={header}>
      <div className={avatar}/>
      <h1 className={titleStyle}>{title || texts.title}</h1>
      <p className={p}>
        {(lang !== "EN-US" && p1) ? p1 : texts.p1}
      </p>
      <p className={p}>
        {(lang !== "EN-US" && p2) ? p2 : texts.p2}
      </p>
      <p className={p}>
        {(lang !== "EN-US" && p3) ? p3 : texts.p3}
        <br/>
        <b>{(lang !== "EN-US" && p3Bold) ? p3Bold : texts.p3Bold}</b>
      </p>
      <select onChange={(e)=>setLang(e.target.value)}>
        <option value={"EN-US"}>English</option>
        <option value={"DE"}>Deutsch</option>
      </select>
    </header>
  )
}

export default Home

interface Props {
  // no props needed
}

const texts = {
  title: "Hi, I'm Nick.",
  p1: "I am a senior React developer who absolutely loves building things. Modern frontend frameworks like React provide the perfect balance between engineering and creativity.",
  p2: "For years, I did creative and development work as a freelancer, pretending that gigs on the side could ever scratch the itch that I had. These jobs always left me wanting more, so in 2019, I made the jump to full-time development work.",
  p3: "To those who wonder what that that freelance experience actually looked like,",
  p3Bold: "here is that story:"
}
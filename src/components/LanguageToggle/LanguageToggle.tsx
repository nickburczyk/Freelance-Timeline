import React, { useContext } from "react";
import { CircleFlag } from "react-circle-flags";
import { LanguageContext } from "../../lib/context";
import cn from 'classnames';
import styles from './LanguageToggle.module.css'

const LanguageToggle = () => {
  const { toggleLanguage, lang } = useContext(LanguageContext)

  return (
    <span className={styles.wrapper}>
      <CircleFlag onClick={() => toggleLanguage("DE")} className={cn(styles.flag, lang === 'DE' && styles.active)} alt={"Deutsch"} countryCode="de" height={40}/>
      <CircleFlag onClick={() => toggleLanguage("EN-US")} className={cn(styles.flag, lang === 'EN-US' && styles.active)} alt={"English"}  countryCode="us" height={40}/>
    </span>
  )
}

export default LanguageToggle


interface Props {
  // no props needed
}
import React, { useContext } from "react";
import { CircleFlag } from "react-circle-flags";
import { LanguageContext } from "../../lib/context";
import { FaGithub } from 'react-icons/fa'

import cn from 'classnames';
import styles from './LanguageToggle.module.css'

const LanguageToggle = () => {
  const { toggleLanguage, lang } = useContext(LanguageContext)

  return (
    <div className={styles.wrapper}>
      <a href={"https://github.com/nickburczyk/Freelance-Timeline"} target="_blank" className={styles.ghButton} style={{marginRight: 'auto'}} rel="noreferrer">View on Github <FaGithub/></a>
      <CircleFlag onClick={() => toggleLanguage("ES")} className={cn(styles.flag, lang === 'ES' && styles.active)} alt={"Español"} countryCode="es" height={40}/>
      <CircleFlag onClick={() => toggleLanguage("DE")} className={cn(styles.flag, lang === 'DE' && styles.active)} alt={"Deutsch"} countryCode="de" height={40}/>
      <CircleFlag onClick={() => toggleLanguage("EN-US")} className={cn(styles.flag, lang === 'EN-US' && styles.active)} alt={"English"}  countryCode="us" height={40}/>
    </div>
  )
}

export default LanguageToggle


interface Props {
  // no props needed
}
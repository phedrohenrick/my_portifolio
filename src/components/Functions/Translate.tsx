import { useTranslation } from 'react-i18next'
import { useState } from "react";

 const {
    //t, 
    i18n : {changeLanguage, language}
  } = useTranslation()

  const [currentLanguage, setCurrentLanguage] = useState(language)

  export const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'pt' : 'en'
    changeLanguage(newLanguage)
    setCurrentLanguage(newLanguage)

  }
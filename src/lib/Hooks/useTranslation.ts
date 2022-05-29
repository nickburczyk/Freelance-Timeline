import { useEffect, useState } from 'react';

const useTranslation = (lang:"EN-US" | "DE", text:string, page: string, cacheKey:string) => {
  const [translation, setTranslation] = useState<string>('');

  useEffect(() => {
    if (lang === "EN-US") {
      return
    }

    translate()
}, [lang])

  const baseUrl = "https://api-free.deepl.com/v2/translate?";
  const params:any = {
    auth_key: "0dd8ed21-3166-9868-a905-eb09e9762643:fx",
    text,
    source_lang: "EN",
    target_lang: lang,
    split_sentences: 0
  };

  const translate = async () => {
    const existing = sessionStorage.getItem(lang)
    const parsedPage = existing && JSON.parse(existing)[page]
    const parsed = parsedPage && parsedPage[cacheKey]
    if (parsed) {
      setTranslation(parsed)
      return
    }

    let uri = "";
    const paramsToString = (key:string, i: number, arr: string[]):void => {
      const and = i === arr.length - 1 ? "" : "&";
      uri += `${key}=${params[key]}${and}`
    }

    Object.keys(params).forEach(paramsToString);
    const fullUri = baseUrl + uri;

    await fetch(fullUri)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => {
        const targetText = data?.translations[0].text
        
        let cached = sessionStorage.getItem(lang)
        if (!cached) {
          sessionStorage.setItem(lang, JSON.stringify({}))
        }
        cached = sessionStorage.getItem(lang)

        const cachedParsed = cached && JSON.parse(cached)
        const updated = {
          ...cachedParsed, 
          [page]: {
            ...cachedParsed[page],
            [cacheKey]: targetText
        }}
        sessionStorage.setItem(lang, JSON.stringify(updated))
        setTranslation(targetText);
      })
      .catch(() => {
        setTranslation('')
        console.log(`Error fetching translation for: "${text}"`)
      })
  };

  return translation
}

export default useTranslation

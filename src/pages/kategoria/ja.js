import React from 'react'
import Layout from '../../components/Layout'
import Category from '../../components/Category';

export default () => {
  return (
    <Category
      imgName='ja'
      categoryName='ja'
      description={<>Wyobrażenie oraz koncepcja na swój<br></br>
                temat. Subiektywna wizja siebie.</>}
      details={<>To ewidentnie najważniejsza kategoria. Związana<br></br>
                jest ona bezpośrednio z tobą i twoją wizją siebie.<br></br>
                 To wyobrażenie tego kim chciałbyś być, będąc<br></br>
                  swoją najlepszą wersją. To nawyki, które<br></br>
                   pragniesz wprowadzić oraz cechy, które chcesz<br></br>
                    pielęgnować. To ty będący dumnym, pewnym<br></br>
                     i kochającym siebie.</>}>
    </Category>
  )
}
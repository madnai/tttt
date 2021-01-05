import React from 'react'
import Layout from '../../components/Layout'
import Category from '../../components/Category';


export default () => {
  return (
    <Category
    imgName='rodzina'
    categoryName='rodzina'
    description={<>Podstawowa, pierwotna, mała grupa <br></br>
                  społeczna składająca się z rodziców, ich<br></br>
                  dzieci (także adoptowanych) i krewnych. </>}
    details={<>Rodzina to kategoria pokazująca więzi <br></br>
              z ludźmi, których kochasz. To również obraz miejsca,<br></br>
              w którym czujesz się dobrze i bezpiecznie oraz <br></br>
              relacje jakie chcesz budować z tymi ludźmi.<br></br> </>}>
  </Category>
  )
}
import React from 'react'
import Layout from '../../components/Layout'
import Category from '../../components/Category';


export default () => {
  return (
    <Category
      imgName='przyjaciele'
      categoryName='przyjaciele'
      description={<>Osoby pozostające z kimś w bliskich,<br></br>
                    serdecznych stosunkach. Ludzie na<br></br>
                    których można polegać i liczyć na ich<br></br>
                      wsparcie.  </>}
      details={<>Przyjaciele to bliscy, bez których nie wyobrażamy<br></br>
              sobie życia. Ta kategoria zawiera wszystkie<br></br>
              stworzenia, z którymi czujesz więź. Tych na<br></br>
                których ci zależy oraz tych dla których ty jesteś<br></br>
                ważny. Warto tu również skupić się na relacjach,<br></br>
                  jakie chcesz odczuwać i wydarzeniach w jakich<br></br>
                  chcesz uczestniczyć. </>}>
    </Category>
  )
}
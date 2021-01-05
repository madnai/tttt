import React from 'react'
import Layout from '../../components/Layout'
import Category from '../../components/Category';


export default () => {
  return (
    <Category
      imgName='pasja'
      categoryName='pasja'
      description={<>Czynność wykonywana dla relaksu w <br></br>
                  czasie wolnym od obowiązków.<br></br>
                  Może łączyć się ze zdobywaniem<br></br>
                  wiedzy w danej dziedzinie. </>}
      details={<>Kategoria pasja to zastanowienie się nad tym, co<br></br>
                w naszym życiu robimy, tylko dlatego, że sprawia<br></br>
                nam to przyjemność. Wykonując to czujemy się<br></br>
                  wolni i szczęśliwi. Często pasja dodaje nam energii i siły.<br></br>
                Może być ona związana z pracą, którą<br></br>
                wykonujemy, lub wręcz przeciwnie być<br></br>
                  odskocznią od codzienności. <br></br> </>}>
    </Category>
  )
}
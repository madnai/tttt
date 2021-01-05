import React from 'react'
import Category from '../../components/Category';


export default () => {
  return (
    <Category
      imgName='milosc'
      categoryName='miłość'
      description={<>Zgodnie z definicją miłość to głębokie<br>
                </br> uczucie do drugiej osoby, któremu zwykle<br>
                </br> towarzyszy pożądanie, silna więź, jaka<br>
                </br> łączy ludzi sobie bliskich. To rodzaj<br>
                </br> uczucia, typ relacji międzyludzkich,<br>
                </br> zachowań i postaw.</>}
      details={<>Myśląc o kategorii miłość dajemy sobie czas <br></br>
                    na zastanowienie się czym miłość jest sama w sobie. <br></br>
                    Czasami są to ludzie, których kochamy, innym razem <br></br>
                    relacje jakie chcemy budować.<br></br>
                    Niekiedy uroczystości, uczucia i czynności.<br></br> 
                    Miłość może być zarówno duchowa, jak i emocjonalna,<br></br>
                    rodzicielska czy materialna. </>}>
    </Category>
  )
}
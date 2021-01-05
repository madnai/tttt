import React from 'react'
import Layout from '../../components/Layout'
import Category from '../../components/Category';


export default () => {
  return (
    <Category
      imgName='pieniadze'
      categoryName='pieniądze'
      description={<>To materialny, bądź niematerialny środek<br></br>
                    płatniczy, który można wymienić na<br></br> 
                    usługę lub towar.  </>}
      details={<> Pieniądze to kategoria, w której należy zawrzeć<br></br>
                  wszystkie rzeczy, które można kupić. To te<br></br>
                  marzenia, które możesz dotknąć i realnie je mieć.<br></br>
                    To również kategoria o której musisz wiedzieć, że<br></br>
                    urzeczywistnia się najszybciej. To znaczy, że<br></br>
                      większość materialnych rzeczy, które pragniesz<br></br>
                      mieć staje się faktem. </>}>
    </Category>
  )
}
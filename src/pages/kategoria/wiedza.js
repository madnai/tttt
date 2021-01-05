import React from 'react'
import Layout from '../../components/Layout'
import Category from '../../components/Category';


export default () => {
  return (
    <Category
      imgName='wiedza'
      categoryName='wiedza'
      description={<>Ogół wiadomości zdobytych dzięki<br></br> 
          badaniom, uczeniu się i zdobywaniu<br></br>
           informacji. Przydatna w różnych sferach <br></br>
           życia oraz niezbędna do nauczania. </>}
      details={<>Wiedza jest kategorią, która ściśle wiąże się <br></br> 
                z rozwojem osobistym. To wszystkie rzeczy, <br></br> 
                które pragniemy robić, aby się doskonalić. <br></br> 
                Często również są to czynności, w których<br></br> 
                sprawdzamy swoje talenty.<br></br></>}>
    </Category>
  )
}
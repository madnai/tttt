import React from 'react'
import Category from '../../components/Category';


export default () => {
  return (
    <Category
      imgName='praca'
      categoryName='praca'
      description={<>To miara wysiłku włożonego przez<br>
              </br> człowieka w stworzenie danego dobra;<br>
              </br> świadoma czynność polegająca na<br>
              </br> tworzeniu, wytwarzaniu lub odtwarzaniu. </>}
      details={<>Praca kojarzy się z sumiennością, rzetelnością,<br></br>
              wysiłkiem oraz wynagrodzeniem. To czynność, w<br></br>
              której zazwyczaj jesteśmy ekspertami. Praca to<br></br>
                również miejsce, w którym spędzamy większość <br></br>
                swojego czasu oraz ludzie, którymi się otaczamy.<br></br>
                Dlatego tak ważne jest zastanowienie się gdzie i<br></br>
                z kim chcemy pracować.  </>}>
    </Category>
  )
}
import React from 'react'
import Layout from '../../components/Layout'
import Category from '../../components/Category';


export default () => {
  return (
    <Category
      imgName='podroze'
      categoryName='podróże'
      description={<>Z definicji wiążą się ze zmiana miejsca<br></br>
                    pobytu na okres stały lub tymczasowy.<br></br>
                    Kojarzone są z odkrywaniem i<br></br>
                      poznawaniem nowych kultur, przyrody i<br></br> 
                      ludzi. </>}
      details={<>Kategoria podróże to odzwierciedlenie marzeń <br></br>
                związanych ze zwiedzaniem nowych miejsc. <br></br>
                Odkrywaniem wspaniałej przyrody <br></br>
                i poznawaniem ciekawych ludzi. <br></br>
                W tym miejscu trzeba przemyśleć, <br></br>
                gdzie pragniesz być, <br></br>
                jakim środkiem transportu dotrzesz <br></br>
                i jak zamierzasz spędzić podróż <br></br>
                - budżetowo czy ekskluzywnie. <br></br></>}>
    </Category>

  )
}
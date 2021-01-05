import React from 'react'
import Layout from './Layout';
import {
  isMobile,
  isBrowser
} from "react-device-detect";

const Category = ({ categoryName, description, details, imgName  }) => {
  const imgURL = `/img/kategorie/${imgName}.png`;
  const imgURLWebp = `/img/kategorie/${imgName}.webp`;

  return (
    <Layout>
      {isBrowser ? (
          <div className="container" style={{marginBottom: '50px', marginTop: '50px', marginRight: '-48px'}}>
            <div className="columns" style={{justifyContent: 'center', alignItems: 'center'}}>
            <div className="column is-narrow is-offset-1">
              <h1 style={{fontSize: '40px', fontWeight: 'bold', textAlign: 'end'}}>{categoryName}</h1>
              <p style={{fontStyle: 'italic', fontSize: '14px', textAlign: 'end'}}>
              {description}
              </p>
              <p style={{opacity: '0.6', fontSize: '12px', marginTop: '5px', fontFamily: 'Lato', fontWeight: '300', textAlign: 'end'}}>
              {details}
              </p>
            </div>
            <div className="column is-8">
            <picture>
              <source srcSet={imgURLWebp} type="image/webp" />
              <img src={imgURL} alt="Alt Text!"  />
            </picture>
            </div>
          </div>
        </div>
      ) : (
        <div className="container" style={{marginBottom: '50px', marginTop: '20px', }}>
          <div className="columns" style={{justifyContent: 'center', alignItems: 'center'}}>
          <div className="column is-narrow is-offset-1">
            <h1 style={{fontSize: '40px', fontWeight: 'bold', textAlign: 'end'}}>{categoryName}</h1>
            <p style={{fontStyle: 'italic', fontSize: '14px', textAlign: 'end'}}>
            {description}
            </p>
            <p style={{opacity: '0.6', fontSize: '12px', marginTop: '5px', fontFamily: 'Lato', fontWeight: '300', textAlign: 'end'}}>
            {details}
            </p>
          </div>
          <div className="column is-8">
            <picture>
              <source srcSet={imgURLWebp} type="image/webp" />
              <img src={imgURL} alt="Alt Text!"  />
            </picture>
          </div>
        </div>
      </div>
      )}
    </Layout>
  )
}

export default Category;
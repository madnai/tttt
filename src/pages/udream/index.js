import React from 'react'
import Layout from '../../components/Layout'
import {
  BrowserView,
  MobileView
} from "react-device-detect";

export default () => {
  return (
    <>
    <BrowserView>
      <Layout>
        <section>
          <div class="container" style={{marginBottom: '150px', paddingLeft: '100px', paddingRight: '100px'}}>
            <picture>
              <source srcSet="/img/app3.webp" type="image/webp" />
              <img src="/img/app3.png" style={{marginTop: '3%'}} width="100%" align="center"/>
            </picture>
          </div>
        </section>
      </Layout>
    </BrowserView>
    <MobileView>
      <Layout>
          <div class="container">
          <picture>
              <source srcSet="/img/app3.webp" type="image/webp" />
              <img src="/img/app3.png" style={{marginTop: '3%'}} width="100%" align="center"/>
            </picture>
           </div>
      </Layout>
    </MobileView>
    </>
  )
}
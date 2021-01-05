import React, { useState } from 'react'
import Layout from '../components/Layout';
import {
    BrowserView,
    MobileView
  } from "react-device-detect";

export default () => {
    const [email, setEmail] = useState('');

  return (
    <>
    <BrowserView>
      <Layout>
        <section>
          <div class="container" style={{marginBottom: '50px', paddingLeft: '100px', paddingRight: '100px'}}>
            <picture>
              <source srcSet="/img/shop3.webp" type="image/webp" />
              <img src="/img/shop3.png" style={{marginTop: '3%'}} width="100%" align="center"/>
            </picture>
            <div class="columns is-centered">
              <div class="column has-text-centered">
              <form name="shop"  method="POST" data-netlify="true" action="/shop/newsletter">
              <input type="hidden" name="form-name" value="contact" />

                    <h1 style={{fontSize: '1.4em', marginBottom: '0.5714em', fontFamily: 'Lato'}}>Potrzebuje</h1>
                    <div className="field" style={{display: 'inline-flex'}}>
                        <div className="control">
                            <input
                                class="input"
                                placeholder="Twój email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <button class="button is-black" 
                                style={{backgroundColor: 'black', color: 'white', marginLeft: '10px', fontWeight: '600'}} 
                                type="submit">Wyślij</button>
                            
                    </div>
                    </form>
              </div>
            </div>
           
          </div>
        </section>
      </Layout>
    </BrowserView>
    <MobileView>
      <Layout>
          <div class="container">
            <picture>
              <source srcSet="/img/shop3.webp" type="image/webp" />
              <img src="/img/shop3.png" style={{marginTop: '3%'}} width="100%" align="center"/>
            </picture>
            <div class="columns is-centered">
              <div class="column has-text-centered">
              <form name="shop "  method="POST" data-netlify="true" action="/shop/newsletter" >
              <input type="hidden" name="form-name" value="contact" />
                <h1 style={{fontSize: '1.4em', marginBottom: '0.5714em', fontFamily: 'Lato'}}>Potrzebuje</h1>
                <div className="field" style={{display: 'inline-flex'}}>
                    <div className="control">
                        <input
                            class="input"
                            placeholder="Twój email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <button class="button is-black" 
                            style={{backgroundColor: 'black', color: 'white', marginLeft: '10px', fontWeight: '600'}} 
                            type="submit">Wyślij</button>
                        
                </div>
              </form>
              </div>
            </div>
          </div>
      </Layout>
    </MobileView>
    </>
  )
}
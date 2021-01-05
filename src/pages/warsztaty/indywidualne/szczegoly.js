import React, {useState} from 'react';
import Layout from '../../../components/Layout'
import TextLoop from "react-text-loop";
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
        <div className="section" style={{padding: '0rem 1.5rem 0rem 1.5rem'}}>
          <div className="columns is-mobile">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="tile">
                  <h1 className="title" style={{paddingLeft: '15%'}}>
                  Spełniamy marzenia.<br></br>
                    Ty też {" "}
                  <TextLoop interval={4000} springConfig={{ stiffness: 200, damping: 50 }}>
                        <span>będziesz.</span>
                        <span>możesz.</span>
                        <span>teraz.</span>
                      </TextLoop>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
            <div className="columns is-centered">
              <div className="column is-5 " style={{marginTop: '-2%', marginLeft: '5%', fontSize: '14px', textAlign: 'justify', paddingRight: '50px'}}>
              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Co to</span> za warsztaty? </span><br></br>
              Warsztaty indywidualne UNOW to spotkania, podczas których dowiesz się dużo o sobie. Skoncentrujemy się na wytyczeniu oraz zaplanujemy osiągnięcie 
              twoich celów osobistych w różnych kategoriach życia. Posłuchamy o twoich doświadczeniach i skupimy się na twoim rozwoju osobistym w obszarach, które pragniesz pielęgnować. <br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Do kogo</span> są skierowane? </span><br></br>
              Warsztaty indywidualne UNOW skierowane są do ludzi, którzy pragną się rozwijać, spełniać swoje marzenia i osiągać cele. <br></br><br></br>

              <span style={{fontWeight: 'bold'}}> Jaki jest <span style={{color: '#C11B30'}}>koszt?</span> </span><br></br>
              Warsztaty indywidualne są bezpłatne.    <br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Ile</span> trwają? </span><br></br>
              Podstawą są trzy spotkania po 3 godziny.<br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#DA193E'}}>Potrzebne</span> materiały? </span><br></br>
              Dostarczamy wszystkie niezbędne materiały.  <br></br><br></br><br></br>

              <form name="warsztatyind"  method="POST" data-netlify="true" action="/warsztaty/indywidualne/newsletter" >
                <input type="hidden" name="form-name" value="warsztatyind" />

                    <h1 style={{fontSize: '1.4em', marginBottom: '0.5714em'}}>Jestem zainteresowany</h1>
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
              <div className='column is-6' style={{marginRight: '-100px', marginTop: '-5%'}}>
              <picture>
                <source srcSet="/img/warsztaty-indywidualne-wiecej.webp" type="image/webp" />
                <img src="/img/warsztaty-indywidualne-wiecej.png"  width="100%" align="right" />
              </picture>
              </div>
            </div>
          </div>
        </Layout>
      </BrowserView>
      <MobileView>
      <Layout>
        <div className="section" style={{padding: '1rem 1.5rem 0rem 1.5rem'}}>
          <div className="columns">
            <div className="column is-12">
              <picture>
                <source srcSet="/img/warsztaty-indywidualne-wiecej.webp" type="image/webp" />
                <img src="/img/warsztaty-indywidualne-wiecej.png"  width="100%" />
              </picture>
            </div>
          </div>
        </div>
        <div className="section" style={{paddingTop: '1rem', paddingTop: '1rem'}}>
            <div className="columns is-centered">
              <div className="column is-5 " style={{ fontSize: '14px', textAlign: 'justify'}}>
              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Co to</span> za warsztaty? </span><br></br>
              Warsztaty indywidualne UNOW to spotkania, podczas których dowiesz się dużo o sobie. Skoncentrujemy się na wytyczeniu oraz zaplanujemy osiągnięcie 
              twoich celów osobistych w różnych kategoriach życia. Posłuchamy o twoich doświadczeniach i skupimy się na twoim rozwoju osobistym w obszarach, które pragniesz pielęgnować. 
              <br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Do kogo</span> są skierowane? </span><br></br>
              Warsztaty indywidualne UNOW skierowane są do ludzi, którzy pragną się rozwijać, spełniać swoje marzenia i osiągać cele. <br></br><br></br>

              <span style={{fontWeight: 'bold'}}> Jaki jest <span style={{color: '#C11B30'}}>koszt?</span> </span><br></br>
              Warsztaty indywidualne zawsze są bezpłatne.  <br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Ile</span> trwają? </span><br></br>
              Podstawą są trzy spotkania po 3 godziny.<br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#DA193E'}}>Potrzebne</span> materiały? </span><br></br>
              Dostarczamy wszystkie niezbędne materiały. <br></br><br></br><br></br>

              <form name="warsztaty"  method="POST" data-netlify="true" action="/warsztaty/indywidualne/newsletter" >
                <input type="hidden" name="form-name" value="contact" />

                    <h1 style={{fontSize: '1.4em', marginBottom: '0.5714em'}}>Jestem zainteresowany</h1>
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
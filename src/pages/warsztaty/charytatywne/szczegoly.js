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
                Warsztaty charytatywne UNOW to tworzenie tablic marzeń, celów i pragnień. To spotkanie, podczas którego uczestnicy mają szansę, w ciągu 
                trzech godzin zastanowić czego naprawdę pragną w dziewięciu stworzonych kategoriach życia. A następnie dostają wiedzę oraz instrukcję, 
                która pozwala zrozumieć przybliżenie się do realizacji marzeń. Na warsztatach dzieci i dorośli dowiedzą się: kim jesteśmy, po co tu przyszliśmy, 
                co będziemy robić, czym są kategorię, stworzą własną tablicę marzeń i dowiedzą się co dalej z nią zrobić.
              <br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Do kogo</span> są skierowane? </span><br></br>
                Warsztaty charytatywne UNOW skierowane są do wszystkich dzieci i młodzieży oraz do osób starszych, którzy nie mieli okazji
                i czasu zastanowić się, czego pragną od życia oraz tych, którzy chcą przybliżyć się do poznania i spełnienia swoich marzeń.<br></br><br></br>
              <span style={{fontWeight: 'bold'}}> Jaki jest <span style={{color: '#C11B30'}}>koszt?</span> </span><br></br>
              Warsztaty charytatywne zawsze są bezpłatne.    <br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Ile</span> trwają? </span><br></br>
              3 godziny<br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#DA193E'}}>Potrzebne</span> materiały? </span><br></br>
              Dostarczamy wszystkie niezbędne materiały, m.in komputer z dostępem do bazy marzeń, kolorową drukarkę, nożyczki, kleje, kartki i ramki na tablice marzeń. <br></br><br></br><br></br>

              <form name="warsztatychar"  method="POST" data-netlify="true" action="/warsztaty/charytatywne/newsletter">
                <input type="hidden" name="form-name" value="warsztatychar" />

                    <h1 style={{fontSize: '1.4em', marginBottom: '0.5714em', fontFamily: 'Lato'}}>Jestem zainteresowany</h1>
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
                <source srcSet="/img/warsztaty-charytatywne-wiecej.webp" type="image/webp" />
                <img src="/img/warsztaty-charytatywne-wiecej.png" width="100%" align="right" />
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
              <source srcSet="/img/warsztaty-charytatywne-wiecej.webp" type="image/webp" />
              <img src="/img/warsztaty-charytatywne-wiecej.png" width="100%" />
            </picture>
            </div>
          </div>
        </div>
        <div className="section" style={{paddingTop: '1rem', paddingTop: '1rem'}}>
            <div className="columns is-centered">
              <div className="column is-5 " style={{ fontSize: '14px', textAlign: 'justify'}}>
              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Co to</span> za warsztaty? </span><br></br>
              Warsztaty charytatywne UNOW to tworzenie tablic marzeń, celów i pragnień. To spotkanie, podczas którego uczestnicy mają szansę, w ciągu 
                trzech godzin zastanowić czego naprawdę pragną w dziewięciu stworzonych kategoriach życia. A następnie dostają wiedzę oraz instrukcję, 
                która pozwala zrozumieć przybliżenie się do realizacji marzeń. Na warsztatach dzieci i dorośli dowiedzą się: kim jesteśmy, po co tu przyszliśmy, 
                co będziemy robić, czym są kategorię, stworzą własną tablicę marzeń i dowiedzą się co dalej z nią zrobić.
              <br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Do kogo</span> są skierowane? </span><br></br>
              Warsztaty charytatywne UNOW skierowane są do wszystkich dzieci i młodzieży oraz do osób starszych, którzy nie mieli okazji
                i czasu zastanowić się, czego pragną od życia oraz tych, którzy chcą przybliżyć się do poznania i spełnienia swoich marzeń.<br></br><br></br>

              <span style={{fontWeight: 'bold'}}> Jaki jest <span style={{color: '#C11B30'}}>koszt?</span> </span><br></br>
              Warsztaty charytatywne zawsze są bezpłatne.  <br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#C11B30'}}>Ile</span> trwają? </span><br></br>
              3 godziny<br></br><br></br>

              <span style={{fontWeight: 'bold'}}><span style={{color: '#DA193E'}}>Potrzebne</span> materiały? </span><br></br>
              Dostarczamy wszystkie niezbędne materiały, m.in komputer z dostępem do bazy marzeń, kolorową drukarkę, nożyczki, kleje, kartki i ramki na tablice marzeń. <br></br><br></br><br></br>

              <form name="warsztatychar"  method="POST" data-netlify="true" action="/warsztaty/charytatywne/newsletter">
                <input type="hidden" name="form-name" value="wwarsztatychar" />

                    <h1 style={{fontSize: '1.4em', marginBottom: '0.5714em', fontFamily: 'Lato'}}>Jestem zainteresowany</h1>
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
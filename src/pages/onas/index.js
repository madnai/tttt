import React from 'react'
import Layout from '../../components/Layout'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';



export default () => {
  return (
    <Layout>
       <section style={{ marginTop: '20px'}}>
          <div className="container">
            <div class="columns">
              <div class="column is-10 is-offset-1">
                  <div className="content">
                    <p style={{ textAlign: 'justify', fontFamily: 'Lato', fontSize: '14px'}}>
                    Firma UNOW powstaje z potrzeby serca, aby pomóc ludziom odnajdywać, wierzyć i realizować cele 
                    w życiu oraz doceniać drogę i dostrzegać rzeczy na drodze w realizacji tych celów. Twórcami projektu są Damian Podraza i Katarzyna Stefańska. 
                    Damian specjalizuje się w programowaniu oraz w rozwiązywaniu problemów. Prywatnie jest uzdolnionym muzykiem, entuzjastą filozofii oraz psychologii.
                      Kasia spełnia się zawodowo w branży filmowej i telewizyjnej. Jej pasją jest zarządzanie i budowanie relacji
                       międzyludzkich. Prywatnie prowadzi bloga motywacyjnego (<a href="http://jaknieteraztokiedy.pl">www.jaknieteraztokiedy.pl</a>) oraz zaraża ludzi dobrą energią. <br></br><br></br>
                       Wspólnie odkryliśmy siłę, którą czerpiemy ze spełniania marzeń, tworząc projekt, dzięki któremu każdy 
                       człowiek ma szansę zbliżyć się do realizacji swoich celów życiowych. Nad metodą pracujemy od dwóch lat, 
                       ciągle ją udoskonalając i szukając nowych rozwiązań. 
                      W przyszłości pragniemy oddać w ręce ludzi aplikację wspierającą ich w realizacji marzeń. Niebawem planujemy 
                      również wydać dzienniki wdzięczności, pokazując konkretne korzyści płynące z codziennego doceniania rzeczy w 
                      życiu. Wkrótce powstanie również planner — kalendarz na 2021 rok pozwalający zorganizować i zaplanować czas. 
                      Chcemy być świadomą firmą, która dba o środowisko, produkując każdy artykuł, stworzymy go w zgodzie z naturą.
                      Część zysków ze sprzedaży produktów pragniemy przekazać na cele charytatywne, informując w ten sposób, że za
                       firmą UNOW stoi szersza idea, a co więcej, że każdy ma możliwość pomagania.
                      <br></br><br></br>
                      Prowadzimy również warsztaty charytatywne oraz indywidualne. Oparte są one na pracy z ludźmi nad
                       wytyczeniem sobie marzeń na najbliższy rok oraz pomocy w realizacji tych marzeń. Warsztaty charytatywne
                        oparte są na pracy z dziećmi oraz seniorami. Warsztaty indywidualne skupiają się na analizie danej osoby, a przede wzystkim na określeniu 
                         czego dana osoba chce w różnych kategoriach życia
                         przez najbliższy rok. Nie ma znaczenia czy ten rok dopiero się rozpoczął, trwa czy już się
                          kończy. 
                      Bardzo skrupulatnie prowadzimy social media: Facebook, Linkedin, Instagram, Pinterest, TikTok, aby docierać 
                      ze swoją ideą do jak najszerszego grona osób.
                      Chcemy być kojarzeni z marzeniami, pomaganiem, planowaniem i docenianiem życia.
                      <br></br>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </section>
        <MobileView>
        <div className="container" style={{marginBottom: '50px'}}>
        {/* <div className="column has-text-centered is-narrow"> */}
            <picture>
              {/* <source srcSet="/img/onas_picture_new.webp" type="image/webp" /> */}
              <img src="/img/my.png" alt="Alt Text!"  />
            </picture>
          {/* </div> */}
          <div class="columns is-mobile">
            <div class="column is-pulled-left" style={{marginTop: '-15%'}}>
              <h1 class="title" style={{fontSize: '22px',  marginBottom: '0px', fontFamily: 'Lato', letterSpacing: '2px'}}><br></br><br></br><br></br>
                <span style={{color: '#C11B30'}}>K</span>ASIA</h1>
              <h1 class="title" style={{fontSize: '22px', fontFamily: 'Lato', letterSpacing: '2px', marginBottom: '0px'}}>STEFAŃSKA</h1>
              <a style={{marginRight: '8px'}} href="https://www.facebook.com/katarzyna.stefanska1" target="_blank"><FaFacebookF /></a>
              <a href="https://www.instagram.com/jaknieteraztokiedy/" target="_blank"><FaInstagram /></a>
            </div>
            <div class="column is-pulled-right" align='right' style={{marginTop: '-15%'}}>
            <h1 class="title" style={{fontSize: '22px', marginBottom: '0px', fontFamily: 'Lato', letterSpacing: '2px'}}><br></br><br></br><br></br>
                <span style={{color: '#C11B30'}}>D</span>AMIAN</h1>
              <h1 class="title" style={{fontSize: '22px', fontFamily: 'Lato', letterSpacing: '2px', marginBottom: '0px'}}>PODRAZA</h1>
              <a href="https://www.instagram.com/podraza.damian/" style={{marginRight: '8px'}} target="_blank"><FaInstagram /></a>
              <a href="https://www.facebook.com/damian.podraza.5" target="_blank"><FaFacebookF /></a>

            </div>
          </div>
          
        </div>
        </MobileView>
        <BrowserView>
        <div className="container" style={{marginBottom: '20px', marginTop: '20px'}}>
        <div className="columns is-centered">
          <div className="column has-text-centered is-narrow">
            <h1 class="title" style={{textAlign: 'right', marginTop: '30px', marginBottom: '0px', fontFamily: 'Lato', letterSpacing: '2px'}}><br></br><br></br><br></br>
              <span style={{color: '#C11B30'}}>K</span>ASIA</h1>
            <h1 class="title" style={{textAlign: 'right', fontFamily: 'Lato', letterSpacing: '2px'}}>STEFAŃSKA</h1>
            <div className="columns is-centered" style={{marginRight: '10px'}}>
              <div className="column is-2" style={{textAlign: 'right'}}></div>
              <div className="column is-2" style={{textAlign: 'right'}}></div>
              <div className="column is-2" style={{textAlign: 'right'}}></div>
              <div className="column is-2" style={{textAlign: 'right', marginRight: '6px'}}>
              <a href="https://www.facebook.com/katarzyna.stefanska1" target="_blank"><FaFacebookF /></a>
              </div>
              <div className="column is-2" style={{textAlign: 'right'}}>
              <a href="https://www.instagram.com/jaknieteraztokiedy/" target="_blank"><FaInstagram /></a>
              </div>
            </div> 
          </div>
          <div className="column has-text-centered  is-narrow">
            <picture>
              {/* <source srcSet="/img/onas_picture_new.webp" type="image/webp" /> */}
              <img src="/img/my.png" alt="Alt Text!"  width="550px" />
            </picture>
          </div>
          <div className="column has-text-centered is-narrow">
            <h1 class="title" style={{textAlign: 'left', marginTop: '30px', marginBottom: '0px', fontFamily: 'Lato', letterSpacing: '2px'}}><br></br><br></br><br></br>
              <span style={{color: '#C11B30'}}>D</span>AMIAN</h1>
            <h1 class="title" style={{textAlign: 'left', letterSpacing: '2px'}}>PODRAZA</h1>
            <div className="columns is-centered " style={{marginLeft: '-10px'}}>
            <div className="column is-2" style={{textAlign: 'left'}}>
                <a href="https://www.instagram.com/podraza.damian/" target="_blank"><FaInstagram /></a>
              </div>
              <div className="column is-2" style={{textAlign: 'left'}}>
                <a href="https://www.facebook.com/damian.podraza.5" target="_blank"><FaFacebookF /></a>
              </div>
              <div className="column is-2" style={{textAlign: 'left'}}></div>
              <div className="column is-2" style={{textAlign: 'left'}}></div>
              <div className="column is-2" style={{textAlign: 'left'}}></div>
            </div>    
          </div>
        </div>
      </div>
      </BrowserView>
    </Layout>
  )
}
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Link } from 'gatsby';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
import styled from 'styled-components'
import HoverImage from '../../components/HoverImage';
import HoverImage2 from '../../components/HoverImage2';
import Layout from '../../components/Layout'
import MasonryGallery from '../../components/MasonryGallery';
import milosc from '../../../static/img/gallery/hover/milosc.png';
import praca from '../../../static/img/gallery/hover/praca.png';
import pasja from '../../../static/img/gallery/hover/pasja.png';
import przyjaciele from '../../../static/img/gallery/hover/przyjaciele.png';
import podroze from '../../../static/img/gallery/hover/podroze.png';
import pieniadze from '../../../static/img/gallery/hover/pieniadze.png';
import ja from '../../../static/img/gallery/hover/ja.png';
import rodzina from '../../../static/img/gallery/hover/rodzina.png';
import wiedza from '../../../static/img/gallery/hover/wiedza.png';
import TextLoop from "react-text-loop";




export const ImgDiv = styled.div`
      position: absolute;
	    top: 0; right: 0;
	    bottom: 0; left: 0;
	    width: 300px;
	    height: 200px; 
	    text-align: center;
	    background-color: rgba(0,0,0,0.8);
	    opacity: 0;
	    -webkit-transition: opacity 0.6s;
	    -moz-transition: opacity 0.6s;
	    transition: opacity 0.6s;
       vertical-align:middle;
       line-height:200px;

  :hover {
    opacity: 1;
  }
`

export const IndexxPageTemplate = ({
  mainpitch
}) => {
  const [email, setEmail] = useState('');

  return (
    <div>
      {isBrowser ? (
        <section className="section section--gradient" style={{paddingTop: '1rem'}}>
        <div className="container">
          <div className="section" style={{padding: '0rem 1.5rem 3rem 1.5rem'}}>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content" style={{fontFamily: 'Lato', fontSize: '16px'}}>
                    <div className="tile">
                      <h1 className="title" style={{marginBottom: '0px'}}>{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h1 className="title" style={{marginBottom: '0px'}}>
                        {mainpitch.subtitle}{" "}
                        <TextLoop interval={4000} springConfig={{ stiffness: 200, damping: 50 }}>
                          <span>będziesz.</span>
                          <span>możesz.</span>
                          <span>teraz.</span>
                        </TextLoop>
                      </h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      ) : (
        <section className="section section--gradient" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
        <div className="container">
          <div className="section" style={{padding: '0rem'}}>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="content" style={{fontFamily: 'Lato', fontSize: '16px'}}>
                    <div className="tile">
                      <h1 className="title" style={{marginBottom: '0px'}}>{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h1 className="title" style={{marginBottom: '0px'}}>
                        {mainpitch.subtitle}{" "}
                        <TextLoop interval={4000}>
                          <span>będziesz.</span>
                          <span>możesz.</span>
                          <span>teraz.</span>
                        </TextLoop>
                      </h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}
       
      <BrowserView>
        <section style={{marginTop: '-220px', marginBottom: '100px', marginRight: '70px', marginLeft: '70px'}}> {/* TODO: ustaw margines w innym miejscu */}
          <MasonryGallery>
            <Link to="/kategoria/praca" style={{lineHeight: '0'}}>
              <HoverImage src="/img/gallery/praca.png" webp="/img/gallery/praca.webp" hoverSrc={praca} hoverWebp="/img/gallery/hover/praca.webp" className="masonry-img" alt="praca" width="100%" ></HoverImage>
            </Link> 
            <Link to="/kategoria/pasja" style={{lineHeight: '0'}}>
              <HoverImage src="/img/gallery/pasja.png"  webp="/img/gallery/pasja.webp" hoverSrc={pasja} hoverWebp="/img/gallery/hover/pasja.webp" className="masonry-img" alt="pasja" width="100%" />
            </Link>
            <Link to="/kategoria/ja" style={{lineHeight: '0'}}>
              <HoverImage src="/img/gallery/ja.png" webp="/img/gallery/ja.webp" hoverSrc={ja} hoverWebp="/img/gallery/hover/ja.webp" className="masonry-img" alt="ja" width="100%" />
            </Link>    
            <Link to="/kategoria/pieniadze" style={{lineHeight: '0'}}>
              <HoverImage src="/img/gallery/pieniadze.png" webp="/img/gallery/pieniadze.webp" hoverSrc={pieniadze} hoverWebp="/img/gallery/hover/pieniadze.webp" className="masonry-img" alt="pieniadze" width="100%" /> 
            </Link>    
            <Link to="/kategoria/milosc" style={{lineHeight: '0'}}>
              <HoverImage2 src="/img/gallery/milosc.png" webp="/img/gallery/milosc.webp" hoverSrc={milosc} hoverWebp="/img/gallery/hover/milosc.webp" className="masonry-img" alt="milosc" width="100%" />
            </Link>    
            <Link to="/kategoria/przyjaciele" style={{lineHeight: '0'}}>
              <HoverImage src="/img/gallery/przyjaciele.png" webp="/img/gallery/przyjaciele.webp" hoverSrc={przyjaciele} hoverWebp="/img/gallery/hover/przyjaciele.webp" className="masonry-img" alt="przyjaciele" width="100%" ></HoverImage>
            </Link> 
            <Link to="/kategoria/ddd" style={{lineHeight: '0'}}><span width="100%" /> </Link>   
            <Link to="/kategoria/wiedza" >
              <HoverImage2 src="/img/gallery/wiedza.png" webp="/img/gallery/wiedza.webp" hoverSrc={wiedza} hoverWebp="/img/gallery/hover/wiedza.webp" className="masonry-img"   alt="wiedza" width="100%" /> 
            </Link>   
            <Link to="/kategoria/ddaad" style={{lineHeight: '0'}}><span width="100%" /> </Link>  
            <Link to="/kategoria/rodzina" style={{lineHeight: '0'}}>
              <HoverImage src="/img/gallery/rodzina.png"  webp="/img/gallery/rodzina.webp" hoverSrc={rodzina} hoverWebp="/img/gallery/hover/rodzina.webp" className="masonry-img" alt="rodzina1" width="100%" />
            </Link>  
            <Link to="/kategoria/wwwwww" style={{lineHeight: '0'}}><span width="100%" /> </Link>   
            <Link to="/kategoria/podroze" style={{lineHeight: '0'}}>
              <HoverImage src="/img/gallery/podroze.png" webp="/img/gallery/podroze.webp" hoverSrc={podroze} hoverWebp="/img/gallery/hover/podroze.webp" className="masonry-img" alt="podroze" width="100%"  /> 
            </Link>     
          </MasonryGallery>
          <div class="columns is-centered">
              <div class="column has-text-centered">
              <form name="contact"  method="POST" data-netlify="true" action="contact/thanks">
                <input type="hidden" name="form-name" value="contact" />
                  <h1 style={{fontSize: '1.4em', marginBottom: '0.5714em', fontFamily: 'Lato'}}>Dołącz do Newslettera UNOW!<br></br>
                Bądź na bieżąco z nowościami, promocjami i konkursami.</h1>
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
                      </div><br></br>
                      <button class="button is-black" 
                              style={{backgroundColor: 'black', color: 'white', marginLeft: '10px', fontWeight: '600'}} 
                              type="submit">Wyślij</button>
                          
                  </div>
                  <p style={{color: '#d8002a'}}>Dziękujemy. Odezwiemy się w ciągu 24h.</p>
                </form>
              </div>
          </div>
        </section>
      </BrowserView>
      <MobileView>
        <MasonryGallery>
          <Link to="/kategoria/praca" style={{lineHeight: '0'}}>
            <img src={praca} className="masonry-img" alt="praca" width="100%" />
          </Link> 
          <Link to="/kategoria/pasja" style={{lineHeight: '0'}}>
            {/* <img src={pasja} className="masonry-img" alt="pasja" width="100%" /> */}
            <picture>
              <source srcSet="/img/gallery/hover/pasja.webp" type="image/webp" />
              <img src={pasja} style={{marginTop: '3%'}} width="100%" align="center"/>
            </picture>
          </Link>
          <Link to="/kategoria/ja" style={{lineHeight: '0'}}>
            {/* <img src={ja} className="masonry-img" alt="ja" width="100%" /> */}
            <picture>
                <source srcSet="/img/gallery/hover/ja.webp" type="image/webp" />
                <img src={ja} style={{marginTop: '3%'}} width="100%" align="center"/>
              </picture>
  
          </Link>    
          <Link to="/kategoria/pieniadze" style={{lineHeight: '0'}}>
            {/* <img src={pieniadze} className="masonry-img" alt="pieniadze" width="100%" />  */}
            <picture>
              <source srcSet="/img/gallery/hover/pieniadze.webp" type="image/webp" />
              <img src={pieniadze} style={{marginTop: '3%'}} width="100%" align="center"/>
            </picture>
          </Link>    
          <Link to="/kategoria/milosc" style={{lineHeight: '0'}}>
            {/* <img src={milosc} className="masonry-img" alt="milosc" width="100%" /> */}
            <picture>
              <source srcSet="/img/gallery/hover/milosc.webp" type="image/webp" />
              <img src={milosc} style={{marginTop: '3%'}} width="100%" align="center"/>
            </picture>
          </Link>    
          <Link to="/kategoria/przyjaciele" style={{lineHeight: '0'}}>
            {/* <img src={przyjaciele} className="masonry-img" alt="przyjaciele" width="100%" /> */}
            <picture>
              <source srcSet="/img/gallery/hover/przyjaciele.webp" type="image/webp" />
              <img src={przyjaciele} style={{marginTop: '3%'}} width="100%" align="center"/>
            </picture>
          </Link> 
          <Link to="/kategoria/wiedza" >
            {/* <img src={wiedza} className="masonry-img"   alt="wiedza" width="100%" />  */}
            <picture>
              <source srcSet="/img/gallery/hover/wiedza.webp" type="image/webp" />
              <img src={wiedza} style={{marginTop: '3%'}} width="100%" align="center"/>
            </picture>
          </Link>   
          <Link to="/kategoria/rodzina" style={{lineHeight: '0'}}>
            {/* <img src={rodzina} className="masonry-img" alt="rodzina1" width="100%" /> */}
            <picture>
              <source srcSet="/img/gallery/hover/rodzina.webp" type="image/webp" />
              <img src={rodzina} style={{marginTop: '3%'}} width="100%" align="center"/>
            </picture>
          </Link>  
          <Link to="/kategoria/podroze" style={{lineHeight: '0'}}>
            {/* <img src={podroze} className="masonry-img" alt="podroze" width="100%"  />  */}
            <picture>
              <source srcSet="/img/gallery/hover/podroze.webp" type="image/webp" />
              <img src={podroze} style={{marginTop: '3%'}} width="100%" align="center"/>
            </picture>
          </Link>     
        </MasonryGallery>
        <div class="columns is-centered">
              <div class="column has-text-centered">
              <form name="contact"  method="POST" data-netlify="true" action="contact/thanks">
                <input type="hidden" name="form-name" value="contact" />
                  <h1 style={{fontSize: '1.4em', marginBottom: '0.5714em', fontFamily: 'Lato'}}>Dołącz do Newslettera UNOW!<br></br>
                Bądź na bieżąco z nowościami, promocjami i konkursami.</h1>
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
                      </div><br></br>
                      <button class="button is-black" 
                              style={{backgroundColor: 'black', color: 'white', marginLeft: '10px', fontWeight: '600'}} 
                              type="submit">Wyślij</button>
                          
                  </div>
                  {/* <p style={{color: '#d8002a'}}>{message}</p> */}
                </form>
              </div>
          </div>
      </MobileView>
    </div>
  )
 }
//   <div>
//     {isBrowser ? (
//       <section className="section section--gradient" style={{paddingTop: '1rem'}}>
//       <div className="container">
//         <div className="section" style={{padding: '0rem 1.5rem 3rem 1.5rem'}}>
//           <div className="columns">
//             <div className="column is-10 is-offset-1">
//               <div className="content">
//                 <div className="content" style={{fontFamily: 'Lato', fontSize: '16px'}}>
//                   <div className="tile">
//                     <h1 className="title" style={{marginBottom: '0px'}}>{mainpitch.title}</h1>
//                   </div>
//                   <div className="tile">
//                     <h1 className="title" style={{marginBottom: '0px'}}>
//                       {mainpitch.subtitle}{" "}
//                       <TextLoop interval={4000} springConfig={{ stiffness: 200, damping: 50 }}>
//                         <span>będziesz.</span>
//                         <span>możesz.</span>
//                         <span>teraz.</span>
//                       </TextLoop>
//                     </h1>
//                   </div>
//                   <div className="tile">
//                     <h3 className="subtitle">{mainpitch.description}</h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     ) : (
//       <section className="section section--gradient" style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
//       <div className="container">
//         <div className="section" style={{padding: '0rem'}}>
//           <div className="columns">
//             <div className="column is-10 is-offset-1">
//               <div className="content">
//                 <div className="content" style={{fontFamily: 'Lato', fontSize: '16px'}}>
//                   <div className="tile">
//                     <h1 className="title" style={{marginBottom: '0px'}}>{mainpitch.title}</h1>
//                   </div>
//                   <div className="tile">
//                     <h1 className="title" style={{marginBottom: '0px'}}>
//                       {mainpitch.subtitle}{" "}
//                       <TextLoop interval={4000}>
//                         <span>będziesz.</span>
//                         <span>możesz.</span>
//                         <span>teraz.</span>
//                       </TextLoop>
//                     </h1>
//                   </div>
//                   <div className="tile">
//                     <h3 className="subtitle">{mainpitch.description}</h3>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     )}
     
//     <BrowserView>
//       <section style={{marginTop: '-220px', marginBottom: '-50px', marginRight: '70px', marginLeft: '70px'}}> {/* TODO: ustaw margines w innym miejscu */}
//         <MasonryGallery>
//           <Link to="/kategoria/praca" style={{lineHeight: '0'}}>
//             <HoverImage src="/img/gallery/praca.png" webp="/img/gallery/praca.webp" hoverSrc={praca} hoverWebp="/img/gallery/hover/praca.webp" className="masonry-img" alt="praca" width="100%" ></HoverImage>
//           </Link> 
//           <Link to="/kategoria/pasja" style={{lineHeight: '0'}}>
//             <HoverImage src="/img/gallery/pasja.png"  webp="/img/gallery/pasja.webp" hoverSrc={pasja} hoverWebp="/img/gallery/hover/pasja.webp" className="masonry-img" alt="pasja" width="100%" />
//           </Link>
//           <Link to="/kategoria/ja" style={{lineHeight: '0'}}>
//             <HoverImage src="/img/gallery/ja.png" webp="/img/gallery/ja.webp" hoverSrc={ja} hoverWebp="/img/gallery/hover/ja.webp" className="masonry-img" alt="ja" width="100%" />
//           </Link>    
//           <Link to="/kategoria/pieniadze" style={{lineHeight: '0'}}>
//             <HoverImage src="/img/gallery/pieniadze.png" webp="/img/gallery/pieniadze.webp" hoverSrc={pieniadze} hoverWebp="/img/gallery/hover/pieniadze.webp" className="masonry-img" alt="pieniadze" width="100%" /> 
//           </Link>    
//           <Link to="/kategoria/milosc" style={{lineHeight: '0'}}>
//             <HoverImage2 src="/img/gallery/milosc.png" webp="/img/gallery/milosc.webp" hoverSrc={milosc} hoverWebp="/img/gallery/hover/milosc.webp" className="masonry-img" alt="milosc" width="100%" />
//           </Link>    
//           <Link to="/kategoria/przyjaciele" style={{lineHeight: '0'}}>
//             <HoverImage src="/img/gallery/przyjaciele.png" webp="/img/gallery/przyjaciele.webp" hoverSrc={przyjaciele} hoverWebp="/img/gallery/hover/przyjaciele.webp" className="masonry-img" alt="przyjaciele" width="100%" ></HoverImage>
//           </Link> 
//           <Link to="/kategoria/ddd" style={{lineHeight: '0'}}><span width="100%" /> </Link>   
//           <Link to="/kategoria/wiedza" >
//             <HoverImage2 src="/img/gallery/wiedza.png" webp="/img/gallery/wiedza.webp" hoverSrc={wiedza} hoverWebp="/img/gallery/hover/wiedza.webp" className="masonry-img"   alt="wiedza" width="100%" /> 
//           </Link>   
//           <Link to="/kategoria/ddaad" style={{lineHeight: '0'}}><span width="100%" /> </Link>  
//           <Link to="/kategoria/rodzina" style={{lineHeight: '0'}}>
//             <HoverImage src="/img/gallery/rodzina.png"  webp="/img/gallery/rodzina.webp" hoverSrc={rodzina} hoverWebp="/img/gallery/hover/rodzina.webp" className="masonry-img" alt="rodzina1" width="100%" />
//           </Link>  
//           <Link to="/kategoria/wwwwww" style={{lineHeight: '0'}}><span width="100%" /> </Link>   
//           <Link to="/kategoria/podroze" style={{lineHeight: '0'}}>
//             <HoverImage src="/img/gallery/podroze.png" webp="/img/gallery/podroze.webp" hoverSrc={podroze} hoverWebp="/img/gallery/hover/podroze.webp" className="masonry-img" alt="podroze" width="100%"  /> 
//           </Link>     
//         </MasonryGallery>
//         <div class="columns is-centered">
//             <div class="column has-text-centered">
//             <form name="contact"  method="POST" data-netlify="true" action="contact/thanks">
//               <input type="hidden" name="form-name" value="contact" />
//                 <h1 style={{fontSize: '1.4em', marginBottom: '0.5714em', fontFamily: 'Lato'}}>Potrzebuje</h1>
//                 <div className="field" style={{display: 'inline-flex'}}>
//                     <div className="control">
//                         <input
//                             class="input"
//                             placeholder="Twój email"
//                             name="email"
//                             type="email"
//                             value={email}
//                             onChange={e => setEmail(e.target.value)}
//                         />
//                     </div>
//                     <button class="button is-black" 
//                             style={{backgroundColor: 'black', color: 'white', marginLeft: '10px', fontWeight: '600'}} 
//                             type="submit">Wyślij</button>
                        
//                 </div>
//                 <p style={{color: '#d8002a'}}>{message}</p>
//               </form>
//             </div>
//         </div>
//       </section>
//     </BrowserView>
//     <MobileView>
//       <MasonryGallery>
//         <Link to="/kategoria/praca" style={{lineHeight: '0'}}>
//           <img src={praca} className="masonry-img" alt="praca" width="100%" />
//         </Link> 
//         <Link to="/kategoria/pasja" style={{lineHeight: '0'}}>
//           {/* <img src={pasja} className="masonry-img" alt="pasja" width="100%" /> */}
//           <picture>
//             <source srcSet="/img/gallery/hover/pasja.webp" type="image/webp" />
//             <img src={pasja} style={{marginTop: '3%'}} width="100%" align="center"/>
//           </picture>
//         </Link>
//         <Link to="/kategoria/ja" style={{lineHeight: '0'}}>
//           {/* <img src={ja} className="masonry-img" alt="ja" width="100%" /> */}
//           <picture>
//               <source srcSet="/img/gallery/hover/ja.webp" type="image/webp" />
//               <img src={ja} style={{marginTop: '3%'}} width="100%" align="center"/>
//             </picture>

//         </Link>    
//         <Link to="/kategoria/pieniadze" style={{lineHeight: '0'}}>
//           {/* <img src={pieniadze} className="masonry-img" alt="pieniadze" width="100%" />  */}
//           <picture>
//             <source srcSet="/img/gallery/hover/pieniadze.webp" type="image/webp" />
//             <img src={pieniadze} style={{marginTop: '3%'}} width="100%" align="center"/>
//           </picture>
//         </Link>    
//         <Link to="/kategoria/milosc" style={{lineHeight: '0'}}>
//           {/* <img src={milosc} className="masonry-img" alt="milosc" width="100%" /> */}
//           <picture>
//             <source srcSet="/img/gallery/hover/milosc.webp" type="image/webp" />
//             <img src={milosc} style={{marginTop: '3%'}} width="100%" align="center"/>
//           </picture>
//         </Link>    
//         <Link to="/kategoria/przyjaciele" style={{lineHeight: '0'}}>
//           {/* <img src={przyjaciele} className="masonry-img" alt="przyjaciele" width="100%" /> */}
//           <picture>
//             <source srcSet="/img/gallery/hover/przyjaciele.webp" type="image/webp" />
//             <img src={przyjaciele} style={{marginTop: '3%'}} width="100%" align="center"/>
//           </picture>
//         </Link> 
//         <Link to="/kategoria/wiedza" >
//           {/* <img src={wiedza} className="masonry-img"   alt="wiedza" width="100%" />  */}
//           <picture>
//             <source srcSet="/img/gallery/hover/wiedza.webp" type="image/webp" />
//             <img src={wiedza} style={{marginTop: '3%'}} width="100%" align="center"/>
//           </picture>
//         </Link>   
//         <Link to="/kategoria/rodzina" style={{lineHeight: '0'}}>
//           {/* <img src={rodzina} className="masonry-img" alt="rodzina1" width="100%" /> */}
//           <picture>
//             <source srcSet="/img/gallery/hover/rodzina.webp" type="image/webp" />
//             <img src={rodzina} style={{marginTop: '3%'}} width="100%" align="center"/>
//           </picture>
//         </Link>  
//         <Link to="/kategoria/podroze" style={{lineHeight: '0'}}>
//           {/* <img src={podroze} className="masonry-img" alt="podroze" width="100%"  />  */}
//           <picture>
//             <source srcSet="/img/gallery/hover/podroze.webp" type="image/webp" />
//             <img src={podroze} style={{marginTop: '3%'}} width="100%" align="center"/>
//           </picture>
//         </Link>     
//       </MasonryGallery>
//     </MobileView>
//   </div>
// )

IndexxPageTemplate.propTypes = {
  mainpitch: PropTypes.object,
}

// const IndexPage =  ({ data }) => {
//   const { frontmatter } = data.markdownRemark

//   return (
//     <Layout>
//       <IndexPageTemplate
//         mainpitch={frontmatter.mainpitch}
//       />
//     </Layout>
//   )
// }

const IndexPage = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasMounted: false
    }
    }
  

  componentDidMount() {
    this.setState({ isClient: true })
    this.setState({hasMounted: true})
  }

 

  render() {
    if (!this.state.hasMounted) {
      return null;
    }
    return (
      <React.Fragment key={this.state.isClient}>
          <Layout>
            <IndexxPageTemplate
              mainpitch={this.props.data.markdownRemark.frontmatter.mainpitch}
            />
          </Layout>
          </React.Fragment>
        )
  }
}

export default IndexPage

export const pageQuery = graphql`
  query IndexxPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        mainpitch {
          title
          subtitle
          description
        }
      }
    }
  }
`

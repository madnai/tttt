import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import styled from 'styled-components'
import charytatywneImg from '../../static/img/charytatywne.png';
import charytatywneWebp from '../../static/img/charytatywne.webp';
import charytatywneImgHover from '../../static/img/charytatywne_hover.png';
import charytatywneWebpHover from '../../static/img/charytatywne_hover.webp';

import indywidualneImg from '../../static/img/indywidualne.png';
import indywidualneWebp from '../../static/img/indywidualne.webp';
import indywidualneImgHover from '../../static/img/indywidualne_hover.png';
import indywidualneWebpHover from '../../static/img/indywidualne_hover.webp';
import HoverImage from '../components//HoverImage';
import {
  BrowserView,
  MobileView
} from "react-device-detect";

export const ImgDiv = styled.div`
  display:flex;
  opacity: 0.6;
  align-items: center;
  height: 250px;
  font-size:30px;
  color:#C11B30;
  font-weight: bold;
  justify-content:center;

  :hover {
    cursor: pointer;
    opacity: 1;
  }
`


const WarsztatyPage = ({data}) => {

  const { frontmatter } = data.markdownRemark

    return (
      <>
      <BrowserView>
        <Layout>
            <div style={{marginBottom: '50px'}}>
              <div className="columns" style={{marginTop: '70px'}}>
                <div className="column " style={{padding: '0px 20px 20px 0px'}}>
                  <Link to="/warsztaty/charytatywne">
                    <HoverImage 
                      src={charytatywneImg} 
                      webp={charytatywneWebp} 
                      hoverSrc={charytatywneImgHover}
                      hoverWebp={charytatywneWebpHover} />
                  </Link>
                </div>
                <div className="column " style={{padding: '0px'}}>
                  <Link to="/warsztaty/indywidualne">
                    <HoverImage 
                      src={indywidualneImg} 
                      webp={indywidualneWebp}  
                      hoverSrc={indywidualneImgHover}  
                      hoverWebp={indywidualneWebpHover}/>
                  </Link>
                </div>
              </div>
            </div>
        </Layout>
      </BrowserView>
      <MobileView>
         <Layout>
            <div style={{marginBottom: '20px'}}>
              <div className="columns" style={{marginTop: '30px'}}>
                <div className="column  " style={{padding: '0px 0px 20px 0px'}}>
                  <Link to="/warsztaty/charytatywne">
                      <HoverImage 
                        src={charytatywneImg} 
                        webp={charytatywneWebp} 
                        hoverSrc={charytatywneImgHover}
                        hoverWebp={charytatywneWebpHover}
                        width="100%" />
                    </Link>
                </div>
                <div className="column " style={{padding: '0px'}}>
                  <Link to="/warsztaty/indywidualne">
                      <HoverImage 
                        src={indywidualneImg} 
                        webp={indywidualneWebp}  
                        hoverSrc={indywidualneImgHover}  
                        hoverWebp={indywidualneWebpHover}
                        width="100%" />
                    </Link>                
                </div>
              </div>
            </div>
        </Layout>
      </MobileView>
      </>
    )
  }


export default WarsztatyPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image1 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

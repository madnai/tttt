import React from 'react';
import { Link } from 'gatsby'
import ReactAudioPlayer from 'react-audio-player';
import accents from 'remove-accents';
import {
  BrowserView,
  MobileView, isBrowser
} from "react-device-detect";

const Episode = ({
  title,
  link,
  publishedDate,
  cover,
  episode,
  url,
  content,
  duration,
  large,
  details
}) => {

  const title2 = accents(title)
  const par = title2.replace(/\s+/g, '-');
  const titleFinal = par.replace(/\?/g,'')

  return (
    <div className="box" style={{marginBottom: '20px', marginTop: '20px'}}>
      <article className="media">
        <div className="media-left" style={{marginBottom: '5px'}}>
          {isBrowser ? (<figure className="image is-128x128" style={{width: '128px'}}>
            <img src={cover} />
          </figure>) : (<figure className="image" style={{width: '100%'}}>
            <img src={cover} />
          </figure>)
          }
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <Link to={`podcast/${titleFinal}`}><h3 className="title">{`${title}`}</h3> </Link>
              <div dangerouslySetInnerHTML={{ __html: content.substring(0, 250) }} />
            </p>
          </div>
          <ReactAudioPlayer
            src={url}
            style={{width: '100%'}}
            controls
          />
        </div>
      </article>
    </div>

  );
};

export default Episode;

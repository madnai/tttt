import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import ReactAudioPlayer from 'react-audio-player';
import readingTime from 'reading-time';
import Skeleton from 'react-loading-skeleton';
import { FaSpotify, FaApple } from 'react-icons/fa';
import FacebookComments from '../components/FacebookComments';

export default class PodcastDetails extends React.Component {


  render() {

    const podcast = this.props.data.anchorEpisode;
    const stats = readingTime(podcast.content)
    return (
      <Layout>
        <section style={{ marginTop: '50px', marginBottom: '30px'}}>
          <div className="container">
            <div className="content">
              <div className="columns is-centered">
                <div className="column is-6">
                <p>{podcast.publishedDate} | {Math.floor(podcast.itunes.duration / 60)} min. słuchania</p>
                  <h1 style={{marginTop: 'unset'}}>{podcast.title || <Skeleton />}</h1>
                  <img src={podcast.itunes.image} style={{marginBottom: '20px'}}/>
                  <ReactAudioPlayer
                    src={podcast.enclosure.url}
                    style={{width: '100%'}}
                    controls
                  />
                  <a href="https://open.spotify.com/show/2aZqs54m83sjaoyDEbF0C7"
                   class="btn transparent-black-2" 
                   target="_blank"
                   style={{marginTop: '10px', width: '47%' ,fontFamily: 'Lato',
                    marginBottom: '10px',border: '2px solid #333', fontWeight: '700',
                     marginRight: '20px', padding: '8px 20px'}}>
                       <FaSpotify style={{marginRight: '8px', marginBottom: '2px'}}/>SŁUCHAJ NA SPOTIFY</a>
                   <a href="https://podcasts.apple.com/pl/podcast/unow/id1501096908?l=pl"
                   class="btn transparent-black-2" 
                   target="_blank"
                   style={{marginTop: '10px', width: '47%' ,fontFamily: 'Lato', marginBottom: '10px',
                   border: '2px solid #333', fontWeight: '700', padding: '8px 20px'}}>
                     <FaApple style={{marginRight: '8px', marginBottom: '4px'}}/>SŁUCHAJ NA ITUNES</a>
                  <div dangerouslySetInnerHTML={{ __html: podcast.content }} />
                </div>
              </div>
            </div>
          </div>
          <FacebookComments />
        </section>
      </Layout>
    );
  }

}

export const query = graphql`
  query PodcastDetails($podcastId: String!) {
    anchorEpisode(id: { eq: $podcastId }) {
      id
      title
      link
      content
      itunes {
        image
        duration
      }
      publishedDate: isoDate(formatString: "YYYY-MM-DD")
      enclosure {
        url
        type
        length
      }
    }
  }
`

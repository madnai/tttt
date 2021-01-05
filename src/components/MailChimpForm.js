
import React from "react"
import Modal from 'react-bootstrap/Modal'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import addToMailchimp from 'gatsby-plugin-mailchimp'

class MailChimpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: "", result: null, show: true, newsletter: localStorage.getItem("newsletter") || true }
  }

    _handleSubmit = async e => {
        e.preventDefault()
        const result = await addToMailchimp(this.state.email)
        this.setState({result: result})
        localStorage.setItem("newsletter", "false")
        if(result.result === "success") {
            setTimeout(() => {
                this.setState({show: false})
            }, 4000)
        }
    }

    handleChange = event => {
        this.setState({ email: event.target.value })
    }

  handleShow = () => {
      this.setState({show: true})
  }

  handleClose = () => {
      this.setState({show: false})
      localStorage.setItem("newsletter", "false")
    }


render() {
          return (

              <Modal show={this.state.show} onHide={this.handleClose} centered>
                  <ModalHeader closeButton>
                      <ModalTitle>Newslettter UNOW</ModalTitle>
                  </ModalHeader>
                  <ModalBody>
                      <div class="columns is-centered">
                          <div class="column has-text-centered">
                              <p>
                                  Dołącz do Newslettera UNOW!
                                  Bądź na bieżąco z nowościami, promocjami i konkursami.
                              </p>
                              <br></br>
                              <form onSubmit={this._handleSubmit}>
                                  <input type="hidden" name="form-name" value="contact" />

                                  <div className="field">
                                      <div className="control">
                                          <input
                                              style={{display: 'block', marginRight: 'auto', marginLeft: 'auto', width: '50%'}}
                                              class="input"
                                              placeholder="Twój email"
                                              name="email"
                                              type="email"
                                              value={this.state.email}
                                              onChange={this.handleChange}
                                          />
                                      </div>
                                      <br></br>
                                      <button class="button is-black"
                                              style={{backgroundColor: 'black', color: 'white', marginLeft: '10px', fontWeight: '600'}}
                                              type="submit">Wyślij</button>

                                  </div>
                                  {console.info(this.state.result)}
                                  {this.state.result && this.state.result.result === 'success' && <p style={{color: '#d8002a'}}>Dziękujemy. Odezwiemy się w ciągu 24h.</p>}
                                  {this.state.result && this.state.result.result === 'error' && <p style={{color: '#d8002a'}}>Wystąpił błąd.</p>}
                              </form>
                          </div>
                      </div>
                  </ModalBody>
              </Modal>
          )
      }
}

export default MailChimpForm

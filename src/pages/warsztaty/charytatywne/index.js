import React from 'react';
import Layout from '../../../components/Layout'
import { Link } from 'gatsby'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  buttonDanger: {
    margin: theme.spacing(1),
    backgroundColor: '#C5002E',
    color: 'white',
    '&:hover': {
      backgroundColor: '#9d0024',
      color: 'white'
    },
    textTransform: 'none'
  },
  buttonBlack: {
    margin: theme.spacing(1),
    backgroundColor: '#000000',
    color: 'white',
    '&:hover': {
      backgroundColor: '#4c4c4c',
      color: 'white'
    },
    textTransform: 'none'
  },
  input: {
    display: 'none',
  },
}));

export default () => {
  const classes = useStyles();


    return (
        <Layout>
        <section style={{marginTop: '20px', marginBottom: '20px'}}> {/* TODO: ustaw margines w innym miejscu */}
          <picture>
            <source srcSet="/img/charytatywne-full.webp" type="image/webp" />
            <img src="/img/charytatywne-full.png" style={{marginTop: '3%'}} width="100%" align="center"/>
          </picture>        
        </section>
        <section>
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <h2 style={{textAlign: 'center'}}> Warsztaty charytatywne dla dzieci</h2>
                  <p style={{ textAlign: 'justify', fontFamily: 'Lato'}}>
                  Zorganizowaliśmy kilka warsztatów dla dorosłych, którzy zmienili swoje podejście i rzeczy, o których marzyli, zaczęły się spełniać.
                        Nie jest to żadna magia, udowodnione jest bowiem naukowo, że nasza percepcja oraz mózg niezwykle silnie oddziałują
                         na obrazy. Sprawia to, że jeśli zaczynamy się przywiązywać do obrazów, wizualizujemy oraz wyobrażamy sobie poczucie
                          posiadania rzeczy, których pragniemy. To w efekcie powoduje, że przyciągamy to, o czym intensywnie myślimy. Chcemy,
                           aby dzieciaki dostały czas, w którym pomyślą, czego chciałby od życia na tym etapie w konkretnych kategoriach. 
                  Zdajemy sobie sprawę z różnych grup wiekowych, dlatego dostosowujemy warsztaty do wieku dzieci.
                  </p>
                  <h2 style={{textAlign: 'center'}}> Warsztaty charytatywne dla seniorów</h2>
                  <p style={{ textAlign: 'justify', fontFamily: 'Lato'}}>
                  Z wiekiem, gdy jesteśmy
                    starsi i mniej mamy czasu oraz siły nawet nie zastanawiamy się nad tym, czego pragniemy. A marzenia nie mają daty 
                    ważności, nie są zarezerwowane tylko dla młodych ludzi i nie warto z nich rezygnować. Chcemy skupić się na ludziach
                     starszych, którzy sporo przeżyli, aby móc jednocześnie czerpać od nich siłę. Dlatego stworzyliśmy cykl warsztatów 
                     dla seniorów. 
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container" style={{marginBottom: '20px', marginTop: '20px'}}>
            <div className="columns is-centered">   
              <div className="column has-text-centered ">
                <Link to="/warsztaty/charytatywne/szczegoly" style={{textDecoration: 'none'}}>
                  <Button className={classes.buttonBlack} size="large" >Wiecej informacji</Button>
                </Link>
                {/* <a href="mailto:unow.pl@gmail.com" style={{textDecoration: 'none'}}>
                  <Button className={classes.buttonDanger}  size="large">Jestem zainteresowany</Button>
                </a> */}
              </div>
            </div>
          </div>
        
        </section>
        </Layout>
    )
}
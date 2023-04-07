import { useState, useEffect } from 'react'
import './styles/App.scss'
import logo from './assets/logo.svg'
import Inputs from './components/Inputs'

function App () {
  /* State */
  const [values, setValues] = useState({
    bill: 0,
    tip: 0,
    people: null
  })
  const [tipAmount, setTipAmount] = useState(0)
  const [totalxPerson, setTotalxPerson] = useState(0)
  const [active, setActive] = useState(true)

  useEffect(() => {
    if (values.bill > 0 && values.tip > 0 && values.people > 0) {
      /* Tip / person */
      // total/personas * tip / 100
      const totalSinPctj = values.bill / values.people
      const tipxPerson = (totalSinPctj * values.tip) / 100
      setTipAmount(tipxPerson)

      /* Total / person */
      // totalsinpctj + tipxperson
      const totalxPerson = totalSinPctj + tipxPerson
      setTotalxPerson(totalxPerson)
    }
    if (values.bill > 0 || values.tip > 0 || values.people > 0) {
      setActive(false)
    } else {
      setActive(true)
      setTipAmount(0)
      setTotalxPerson(0)
    }
  }, [values])

  const reset = (e) => {
    e.preventDefault()
    setValues({
      ...values,
      bill: -1
    })
    setTipAmount(0)
    setTotalxPerson(0)
  }

  return (
    <main>
      <h1>Splitter</h1>
      <div className='mainContainer'>
        <img
          src={logo}
          width={87}
          height={54}
          alt='Logo con la palabra Splitter'
        />

        <form className='mainContainer__form'>
          <Inputs values={values} setValues={setValues} />

          <div className='mainContainer__form__results'>
            <div>
              <div className='mainContainer__form__results__TipTotal'>
                <p className='mainContainer__form__results__TipTotal__tytText'>
                  Tip Amount
                  <br />
                  <span className='mainContainer__form__results__TipTotal__tytText-person'>/ person</span>
                </p>
                <p className='mainContainer__form__results__TipTotal__tytNumbers'>${tipAmount.toFixed(2)}</p>
              </div>

              <div className='mainContainer__form__results__TipTotal'>
                <p className='mainContainer__form__results__TipTotal__tytText'>
                  Total
                  <br />
                  <span className='mainContainer__form__results__TipTotal__tytText-person'>/ person</span>
                </p>
                <p className='mainContainer__form__results__TipTotal__tytNumbers'>${totalxPerson.toFixed(2)}</p>
              </div>
            </div>

            <button
              onClick={reset}
              disabled={active}
              className='mainContainer__form__results__button'
            >
              RESET
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}

export default App

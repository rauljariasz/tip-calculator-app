import { useRef, useEffect } from 'react'
import '../styles/Inputs.scss'

function Calculator ({ values, setValues }) {
  /* Ref */
  const customTip = useRef(null)
  const cinco = useRef(null)
  const diez = useRef(null)
  const quince = useRef(null)
  const veinticinco = useRef(null)
  const cincuenta = useRef(null)
  const inputBill = useRef(null)
  const inputPeople = useRef(null)

  useEffect(() => {
    if (values.bill === -1) {
      inputBill.current.value = ''
      inputPeople.current.value = ''
      if (customTip) {
        customTip.current.value = ''
      }
      unchecked()
      setTimeout(() => {
        setValues({
          bill: 0,
          tip: 0,
          people: null
        })
      }, 100)
    }
  }, [values.bill])

  const saveBill = (e) => {
    const newBill = Number(e.currentTarget.value)
    setValues({
      ...values,
      bill: newBill
    })
  }

  const saveFocusTip = (e) => {
    const newTip = Number(e.currentTarget.value)
    customTip.current.value = ''
    setValues({
      ...values,
      tip: newTip
    })
  }

  const unchecked = () => {
    if (cinco.current.checked) {
      cinco.current.checked = false
    } else if (diez.current.checked) {
      diez.current.checked = false
    } else if (quince.current.checked) {
      quince.current.checked = false
    } else if (veinticinco.current.checked) {
      veinticinco.current.checked = false
    } else if (cincuenta.current.checked) {
      cincuenta.current.checked = false
    }
  }

  const saveInputTip = (e) => {
    const newTip = Number(e.currentTarget.value)
    setValues({
      ...values,
      tip: newTip
    })
  }

  const savePeople = (e) => {
    const newPeople = Number(e.currentTarget.value)
    setValues({
      ...values,
      people: newPeople
    })
  }

  return (
    <div className='inputContainer'>
      <div className='inputContainer__bill'>
        <label htmlFor='bill'>
          Bill
        </label>
        <div className='inputContainer__bill-inputBill'>
          <input
            type='number'
            id='bill'
            placeholder='0'
            onChange={saveBill}
            ref={inputBill}
          />
        </div>
      </div>

      <div>
        <p>Select Tip %</p>
        <ul>
          <li>
            <label htmlFor='5'>5%</label>
            <input
              type='radio'
              name='tip'
              id='5'
              value='5'
              onFocus={saveFocusTip}
              ref={cinco}
            />
          </li>
          <li>
            <label htmlFor='10'>10%</label>
            <input
              type='radio'
              name='tip'
              id='10'
              value='10'
              onFocus={saveFocusTip}
              ref={diez}
            />
          </li>
          <li>
            <label htmlFor='15'>15%</label>
            <input
              type='radio'
              name='tip'
              id='15'
              value='15'
              onFocus={saveFocusTip}
              ref={quince}
            />
          </li>
          <li>
            <label htmlFor='25'>25%</label>
            <input
              type='radio'
              name='tip'
              id='25'
              value='25'
              onFocus={saveFocusTip}
              ref={veinticinco}
            />
          </li>
          <li>
            <label htmlFor='50'>50%</label>
            <input
              type='radio'
              name='tip'
              id='50'
              value='50'
              onFocus={saveFocusTip}
              ref={cincuenta}
            />
          </li>
          <li>
            <input
              placeholder='Custom'
              type='number'
              onFocus={unchecked}
              onChange={saveInputTip}
              ref={customTip}
            />
          </li>
        </ul>
      </div>

      <div>
        <label htmlFor='people'>
          <p>Number of People</p>
          {values.people === 0 ? <p>Can't be zero</p> : null}
        </label>

        <div>
          <input
            type='number'
            id='people'
            placeholder='0'
            onChange={savePeople}
            ref={inputPeople}
          />
        </div>
      </div>
    </div>
  )
}

export default Calculator

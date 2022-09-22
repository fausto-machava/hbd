import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const [rep1, setRep1] = useState()
  const [rep2, setRep2] = useState()
  const [rep3, setRep3] = useState()

  return (
    <div className="App">
      <span>{rep1}</span>
      <h1>Feliz aniversário Marly</h1>
      
      <div className='form'>
        <div className='input'>
          <input onChange={(event: React.FormEvent<HTMLInputElement>) => setRep1(event.currentTarget.value)} type="number" placeholder='Qual foi a primeira vez em que te pedi em Namoro(O dia) '/>
          {rep1 == 9 ? 'Resposta certa! A dica é: Atras do que toca mas não esta ligado' : 'Resposta incorrecta, tente novamente'}
        </div>

        <div className='input'>
          <input onChange={(event: React.FormEvent<HTMLInputElement>) => setRep2(event.currentTarget.value)} type="text" placeholder='Motivo que te levou a me oferecer o primeiro bombom?'/>
          {rep2 == 'dispensa' ? 'Resposta certa! A dica é: De baixo do que da conforto a cabeca.' : 'Resposta incorrecta, tente novamente'}
        </div>

        <div className='input'>
          <input onChange={(event: React.FormEvent<HTMLInputElement>) => setRep3(event.currentTarget.value)} type="number" placeholder='Dia do primeiro beijo?' />
          {rep3 == 18 ? 'Resposta certa! A dica é: No local onde eu gosto de me limpar.' : 'Resposta incorrecta, tente novamente'}
          <span>18</span>
        </div>
      </div>
    </div>
  )
}

export default App

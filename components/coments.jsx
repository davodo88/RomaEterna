import React from 'react'
import Card from './atoms/card'

const Coments = () => {
  return (
    <div className='w-screen h-full md:px-16 flex flex-col justify-center items-center gap-8 mb-8 md:p-12'>
      <Card
        coment={'Opera prima de Jordi Julià García en forma   de relato voluminoso, contundente, que en cambio no se hace pesado a quien lo lee. [...] Nos habla de una época comprometida que el autor domina más que de sobra y que relata con un discurso fragmentario —de lectura cómoda—, a menudo elíptico —lo que el lector siempre agradece— [...] Novela documentada y libre a la vez, honesta, digna y sin campanudas pretensiones.'}
        person={'José Miguel Segura Roselló'}
        who={'Crítico literario, El Periódico Mediterráneo 30/04/23.'}
      />
      <Card
        coment={'La didáctica, el sentido de la maravilla, la voluntad de enseñar y entretener, se conjugan en las páginas de Roma Eterna I con agilidad y pasión [...] os invito a descubrir todo lo que encierra esta ucronía tan bien planteada.'}
        person={'Pedro Cifuentes'}
        who={'Dibujante y autor de Historia del arte en cómic y Historia de España en cómic.'}
      />
    </div>
  )
}

export default Coments
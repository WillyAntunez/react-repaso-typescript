import { useState } from 'react';

export const useCounter = (inicial: number = 10) => {
  
    const [valor, setValor] = useState<number>(inicial);

    const acumular = (num: number):void => {
        setValor(valor + num);
    };

    return {
        valor, 
        acumular
    }

}

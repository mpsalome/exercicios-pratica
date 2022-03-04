/**
 * Cria um array de grupos de elementos divididos em tamanho máximo igual ao parâmetro
 * "tamanho". O último elemento deste novo array deverá conter o restante dos itens,
 * caso a divisão não seja perfeitamente correta.
 *
 * > Importante: O parâmetro "valores" não deve ter sua estrutura alterada.
 *
 * ex.: chunk([1, 2, 3, 4, 5], 2) === [[1, 2], [3, 4], [5]]
 *
 * @param valores array de números que deverão ser quebrados em grupos.
 * @param tamanho numero que representa o tamanho máximo de cada grupo.
 * @returns
 */
export const chunk = (valores: number[], tamanho: number): number[][] => {
  let newArr:number[][] = [];

  for (let i = 0; i < valores.length; i+=tamanho) {
    let groupArr = [];

    for (let j = 0; j < tamanho; j++) {
      if(!!valores[i+j]) groupArr.push(valores[i+j]);
    }
    newArr.push(groupArr);
  }

  return newArr;
};

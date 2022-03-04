import { KeyAndValue } from '../../types/keyAndValue';

/**
 * Deve criar um objeto a partir da lista de arrays chave/valor
 *
 * Ex.: fromPairs(['a', 'a'], ['b': 1], ['c': false]) === { a: 'a', b: 1, c: false }
 *
 * @param args
 * @returns
 */
export const fromPairs = (args: KeyAndValue[]): Record<string, unknown> => {
  let newObj:Record<string, unknown> = {};

  args.forEach( arr => newObj[arr[0]] = arr[1] ) 

  return newObj;
};
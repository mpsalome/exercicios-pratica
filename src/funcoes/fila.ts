import { writeFile, readFile } from 'fs';
import { resolve } from 'path';

const ARQUIVO_DE_FILA = `${resolve('.')}/files/fila.txt`;

/**
 * Os métodos escritos abaixo implementam uma fila de mensagens escritas em
 * arquivo de texto, presente na pasta "files". A cada mensagem escrita nesta fila,
 * (através do método `escreveNaFila`) o código escreve a frase ao final do arquivo.
 * O método `consumirDafila` retira a primeira mensagem escrita no arquivo e a retorna.
 *
 * As funções abaixo estão todas escritas utilizando callbacks como soluções
 * para a manipulação dos arquvos.
 *
 * Tranforme a solução escrita abaixo em um código válido utilizando promises ou
 * async/await.
 */

export async function zerarAquivo(): Promise<void> {
  return escreveArquivo('', () => {});
}

export async function leArquivo(callback): Promise<string> {
  return new Promise((res, rej) => {
    readFile(ARQUIVO_DE_FILA, 'utf8', (err, resultado) => {
      if (err) {
        rej(err);
      }

      res(resultado);
    });
  });
  // reste return está presente somente para cumprir a saída de Promise<string>
}

export async function escreveArquivo(texto: string, callback): Promise<void> {
  return new Promise((res, rej) => {
    writeFile(ARQUIVO_DE_FILA, texto, 'utf8', function (err) {
      if (err) {
        rej(callback(err, null));
      }

      res(callback());
    });
  });
}

export async function escreveNaFila(texto: string): Promise<void> {
  return new Promise((res, rej) => {
    leArquivo(function (error, textoAtual) {
      if (error) {
        rej(console.log(error));
      }

      console.log('texto encontrado anteriormente no arquivo', textoAtual);
      const novoTexto = textoAtual ? `${textoAtual}\n${texto}` : texto;

      escreveArquivo(novoTexto, function (error) {
        if (error) {
          rej(console.log(error));
        }

        res(console.log('texto escrito no arquivo'));
      });
    });
  });
}

export async function consumirDaFila(): Promise<string> {
  return new Promise((res, rej) => {
    leArquivo(function (error, textoAtual) {
      if (error) {
        rej(console.log(error));
        return;
      }

      console.log('texto encontrado anteriormente no arquivo', textoAtual);
      const [linhaConsumida, ...linhas] = textoAtual.split('\n');
      console.log('======== linha consumida', linhaConsumida);

      escreveArquivo(linhas.join('\n'), function (error) {
        if (error) {
          rej(console.log(error));
        }

        res('texto escrito no arquivo');
      });
    });
  });
}

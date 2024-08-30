import { v4 as uuidv4 } from 'uuid';

export enum TipoLeitura {
  Agua = 'agua',
  Gas = 'gas',
}

export interface Leitura {
  id: string;
  tipo: TipoLeitura;
  valor: number;
  imagemUrl: string;
  data: Date;
}

export const leituras: Leitura[] = [];

export function criarLeitura(tipo: TipoLeitura, valor: number, imagemUrl: string): Leitura {
  const novaLeitura: Leitura = {
    id: uuidv4(),
    tipo,
    valor,
    imagemUrl,
    data: new Date(),
  };
  leituras.push(novaLeitura);
  return novaLeitura;
}

export function obterLeituraPorMesETipo(tipo: TipoLeitura, data: Date): Leitura | undefined {
  return leituras.find(
    leitura =>
      leitura.tipo === tipo &&
      leitura.data.getMonth() === data.getMonth() &&
      leitura.data.getFullYear() === data.getFullYear()
  );
}
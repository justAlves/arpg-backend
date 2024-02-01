export interface CreateItemDto {
  name: string;
  description: string;
  type: 'Armadura' | 'Arma' | 'Pocao' | 'Chave' | 'Outro' | 'Consumivel';
}

import parse from 'html-react-parser';
import type { Conditions } from '../types';

export function convertText(
  text: string
): string | JSX.Element | JSX.Element[] {
  const newText = text.replace(/\n/g, '<br />');
  const parsedText = parse(newText);
  return parsedText;
}

export function getCondition(condition: string): string {
  const conditions: Conditions = {
    new: 'Nuevo',
    used: 'Utilizado'
  };
  return conditions[condition as keyof Conditions];
}

export function getPrice(price: number): string {
  return price.toLocaleString('es-ar', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 2
  });
}

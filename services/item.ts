export async function ItemService(
  id: string | string[] | undefined
): Promise<any> {
  try {
    const item = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const itemData = await item.json();
    return itemData;
  } catch (error) {
    throw error;
  }
}

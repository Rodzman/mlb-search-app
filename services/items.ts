export async function ItemsService(
  search: string | string[] | undefined
): Promise<any> {
  try {
    const items = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${search}&limit=4`
    );
    const data = await items.json();
    return data;
  } catch (error) {
    throw error;
  }
}

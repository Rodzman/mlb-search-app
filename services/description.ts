export async function DescriptionService(
  id: string | string[] | undefined
): Promise<any> {
  try {
    const description = await fetch(
      `https://api.mercadolibre.com/items/${id}/description`
    );
    const descriptionData = await description.json();
    return descriptionData;
  } catch (error) {
    throw error;
  }
}

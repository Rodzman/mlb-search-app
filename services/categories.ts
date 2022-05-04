export async function CategoriesService(
  id: string | string[] | undefined
): Promise<any> {
  try {
    const category = await fetch(
      `https://api.mercadolibre.com/categories/${id}`
    );
    const data = await category.json();
    return data;
  } catch (error) {
    throw error;
  }
}

type Product = {
  id: number;
  slug?: string;
  name: string;
  category?: string;
  price?: string | number;
  description?: string;
  image?: string;
  variants?: Array<{ size: string; price: string }>;
};

export async function getProducts(): Promise<{
  ok: true;
  products: Product[];
} | {
  ok: false;
  products: [];
}> {
  try {
    const res = await fetch('https://gorkha-store-git-main-gorkha-jaibiks-projects.vercel.app/products.json', {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`Products fetch failed: ${res.status}`);
      return { ok: false, products: [] };
    }

    const data = await res.json();
    const products: Product[] = (Array.isArray(data) ? data : data?.products ?? [])
      .map((p: any, idx: number) => ({
        id: p.id ?? idx,
        slug: p.slug ?? `product-${p.id ?? idx}`,
        name: p.name ?? p.title ?? 'Unknown Product',
        category: p.category,
        price: p.price,
        description: p.description,
        image: p.image,
        variants: p.variants,
      }))
      .filter((p: Product) => p.name);

    return { ok: true, products };
  } catch (error) {
    console.error('Product fetch error:', error instanceof Error ? error.message : String(error));
    return { ok: false, products: [] };
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const result = await getProducts();
  if (!result.ok) return [];
  return result.products.filter(
    (p) => p.category?.toLowerCase() === category.toLowerCase()
  );
}

export async function getFeaturedProducts(limit = 8): Promise<Product[]> {
  const result = await getProducts();
  if (!result.ok) return [];
  return result.products.slice(0, limit);
}

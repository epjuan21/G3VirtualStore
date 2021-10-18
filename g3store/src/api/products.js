import { API_URL } from '../utils/constants';

export async function getProducts(limit = 1000) {
  try {
    const response = await fetch(
      `${API_URL}/products?_sort=created_at:desc&_limit=${limit}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error)
    return null;
  }
}

export async function getProductByCatetory(categoryId) {
  try {
    const response = await fetch(`${API_URL}/products`);
    const result = await response.json();
    return result.filter((product) => product.category.id == categoryId);
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getProductsCategory(category) {
  try {
    const response = await fetch(`${API_URL}/products?_where[category.slug]=${category}`)
    const result = await response.json()
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

export async function getProductByCatetorySlug(slug) {
  try {
    const response = await fetch(`${API_URL}/products`);
    const result = await response.json();
    return result.filter((product) => product.category.slug == slug);
  } catch (error) {
    console.log(error);
    return null;
  }
}


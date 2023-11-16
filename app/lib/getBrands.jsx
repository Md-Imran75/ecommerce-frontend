import { STRAPI_API_TOKEN } from "@/utils/Url";
import { API_URL } from "@/utils/Url";
import axios from "axios";

export default async function getBrandsForPagination(slug,page) {
  const authToken =STRAPI_API_TOKEN;

  try {
    const response = await axios.get(`${API_URL}/api/categories?[filters][brand][slug][$eq]=${slug}&pagination[page]=${page}&pagination[pageSize]=4&populate=*`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    // Check if the response status is OK (200)
    if (response.status !== 200) {
      throw new Error('Failed to fetch products');
    }

    return response.data; 
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
}

export  async function getBrands() {
  const authToken =STRAPI_API_TOKEN;

  try {
    const response = await axios.get(`${API_URL}/api/brands?populate=*`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    // Check if the response status is OK (200)
    if (response.status !== 200) {
      throw new Error('Failed to fetch products');
    }

    return response.data; 
  } catch (error) {
    console.error('Error fetching products:', error);
    throw new Error('Failed to fetch products');
  }
}
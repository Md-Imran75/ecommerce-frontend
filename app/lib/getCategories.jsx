import { STRAPI_API_TOKEN } from "@/utils/Url";
import { API_URL } from "@/utils/Url";


export default async function getCategories() {
  const authToken =STRAPI_API_TOKEN;

  const response = await fetch(`${API_URL}/api/categories?populate=*`,
  {

    cache: 'no-cache' ,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch products')
  }

  return await response.json();
}

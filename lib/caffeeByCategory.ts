import { axios } from "@/axiosInstance";
import { Coffee } from "@/types";

export async function fetchCoffeeByCategories(
  locale: string = "en",
  categoryId: string,
): Promise<Coffee[]> {
  const response = await axios.get<Coffee[]>(
    `/search-by-category/${categoryId}`,
    {
      headers: {
        "Accept-Language": locale,
      },
    },
  );

  return response.data;
}

import { axios } from "@/axiosInstance";
import { Category } from "@/types";

export async function fetchCategories(
  locale: string = "en",
): Promise<Category[]> {
  const response = await axios.get<Category[]>("/category", {
    headers: {
      "Accept-Language": locale,
    },
  });

  return response.data;
}

import { axios } from "@/axiosInstance";
import { Coffee, PaginatedResponse } from "@/types";

export async function fetchFullMenu(
  locale: string = "en",
  page: number = 1,
  size: number = 9,
): Promise<PaginatedResponse<Coffee>> {
  const response = await axios.get<PaginatedResponse<Coffee>>(
    `?page=${page}&size=${size}`,
    {
      headers: {
        "Accept-Language": locale,
      },
    },
  );

  return response.data;
}

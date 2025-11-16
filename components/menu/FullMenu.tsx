"use client";

import { useEffect, useState } from "react";
import { useLocale } from "next-intl";
import CoffeeCard from "../templates/CoffeeCard";
import { fetchFullMenu } from "@/lib/getFullMenu";
import { Coffee } from "@/types";

export default function FullMenu() {
  const locale = useLocale();
  const size = 9;

  const [page, setPage] = useState(1);
  const [menu, setMenu] = useState<{ data: Coffee[]; total: number; totalPages: number } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMenu = async () => {
      setLoading(true);
      try {
        const data = await fetchFullMenu(locale, 1, size);
        setMenu(data);
        setPage(1);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [locale]);

  const handlePageChange = async (newPage: number) => {
    setLoading(true);
    try {
      const data = await fetchFullMenu(locale, newPage, size);
      setMenu(data);
      setPage(newPage);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center px-7 py-11 min-h-[40vh]">
      {menu && menu.data.length === 0 && (
        <p className="mt-10 text-center text-lg text-primary">No products available.</p>
      )}

      {menu && menu.data.length > 0 && (
        <>
          <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 min-h-[30vh] justify-center items-center">
            {menu.data.map((coffee) => (
              <CoffeeCard key={coffee.id} coffee={coffee} />
            ))}
          </main>

          <nav
            className="mt-10 flex justify-center gap-4"
            role="navigation"
            aria-label="Pagination"
          >
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page <= 1 || loading}
              aria-label="Go to previous page"
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Back
            </button>

            <span
              className="px-4 py-2 rounded bg-gray-100"
              aria-current="page"
            >
              Page {page} of {menu.totalPages}
            </span>

            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page >= menu.totalPages || loading}
              aria-label="Go to next page"
              className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
            >
              Next
            </button>
          </nav>
        </>
      )}
    </div>
  );
}

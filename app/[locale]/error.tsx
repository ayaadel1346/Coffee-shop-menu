"use client";
import CustomImage from "@/components/templates/CustomImage";
import { useTranslations } from "next-intl";
import { useEffect, useTransition } from "react";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("ErrorPage");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="relative flex flex-col justify-center items-center w-full min-h-[80vh] p-10 text-center">
      <CustomImage
        src="https://plus.unsplash.com/premium_photo-1682309772037-8da49abb2b84?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXJyb3J8ZW58MHx8MHx8fDA%3D"
        alt="Hero background"
        preload={true}
        className="absolute inset-0 -z-10"
        objectFit="cover"
      />

      <main
        role="alert"
        aria-live="assertive"
        className="bg-white/50 backdrop-blur-md p-8 rounded-[20px]"
      >
        <h2 className="mb-4 text-3xl md:text-5xl font-extrabold text-red-800">
          ❌ {t("oops")}
        </h2>

        <p className="mb-6 text-xl md:text-2xl font-semibold text-red-700">
          {error.message}
        </p>

        <button
          type="button"
          disabled={isPending}
          aria-disabled={isPending}
          onClick={() => startTransition(() => reset())}
          className={`
          px-6 py-3 font-bold text-white rounded 
          bg-[#B91C1C] hover:bg-[#991B1B] 
          transition-colors duration-300 
         cursor-pointer 
          disabled:opacity-50 disabled:cursor-not-allowed
        `}
          aria-label={isPending ? t("resetting") : t("tryAgain")}
        >
          {isPending ? t("resetting") : t("tryAgain")}
        </button>
      </main>
    </div>
  );
}

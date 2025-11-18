"use client";

import { postContactData } from "@/lib/saveContactData";
import { useTranslations } from "next-intl";
import { useActionState } from "react";

export default function MainPage() {
  const t = useTranslations("contact");

  const [data, action, isPending] = useActionState(postContactData, undefined);

  return (
    <main className="flex flex-col items-center px-6 py-12 min-h-[60vh] w-full">
      <p className="text-lg md:text-2xl text-center text-primary mb-8">
        {t("subtitle")}
      </p>

      <section className="w-full md:max-w-[80%] lg:max-w-3/5 mb-12">
        {data?.message && (
          <div
            role="alert"
            className="mb-6 p-4 bg-green-100 text-green-800 rounded shadow"
          >
            {t("success")}
          </div>
        )}

        <form
          action={action}
          className="flex flex-col gap-6 p-10 border-2 border-accent rounded-lg"
        >
          <input
            type="text"
            name="name"
            placeholder={t("name")}
            required
            defaultValue={data?.fieldData?.name}
            aria-label={t("name")}
            className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
          />

          <input
            type="email"
            name="email"
            placeholder={t("email")}
            required
            defaultValue={data?.fieldData?.email}
            aria-label={t("email")}
            className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
          />

          <textarea
            name="message"
            placeholder={t("message")}
            required
            rows={6}
            defaultValue={data?.fieldData?.message}
            aria-label={t("message")}
            className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-accent"
          />

          <button
            type="submit"
            disabled={isPending}
            className="px-6 py-3 font-bold text-white bg-active-link rounded hover:bg-accent transition-colors duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPending ? `${t("send")}...` : t("send")}
          </button>

          {data?.error && (
            <p role="alert" className="text-red-700 mt-2">
              {data.error}
            </p>
          )}
        </form>
      </section>

      <section className="w-full md:max-w-[80%] lg:max-w-3/5 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <address>
          <h2 className="font-semibold text-active-link mb-2">{t("phone")}</h2>
          <a
            href="tel:888-456-7890"
            aria-label="Call us at 888 456 7890"
            className="text-primary transition-colors duration-300 hover:text-accent-light"
          >
            888-456-7890
          </a>
        </address>

        <address>
          <h2 className="font-semibold text-active-link mb-2">
            {t("emailAddress")}
          </h2>
          <a
            href="mailto:info@caffeline.com"
            aria-label="Email us at info@caffeline.com"
            className="text-primary transition-colors duration-300 hover:text-accent-light"
          >
            info@caffeline.com
          </a>
        </address>

        <address>
          <h2 className="font-semibold text-active-link mb-2">
            {t("address")}
          </h2>
          <p className="text-primary">123 Coffee Street, Cairo, Egypt</p>
        </address>
      </section>
    </main>
  );
}

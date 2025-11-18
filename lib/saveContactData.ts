"use server";

export async function postContactData(
  prevState:
    | { message: string; error?: undefined }
    | { error: string; message?: undefined }
    | undefined,
  formData: FormData,
) {
  try {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    console.log({ name, email, message });

    return {
      message: "email sent successfully",
      fieldData: { name, email, message },
    };
  } catch (err) {
    return {
      error: (err as Error).message,
      fieldData: {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
      },
    };
  }
}

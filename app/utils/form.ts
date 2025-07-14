import type { NForm } from "#components";

export async function validateForm(form: Ref<InstanceType<typeof NForm> | undefined>) {
  try {
    await form.value?.validate();
  }
  catch (error) {
    const messages: string[] = (error as ValidateError[][]).flatMap(e => e.flatMap(e => e.message as string));
    return Promise.reject(messages);
  }
}

import { getContact } from "../contacts";

export async function getContactsLoader() {
  const contacts = await getContact();
  return { contacts };
}
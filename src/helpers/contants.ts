import fetch from "node-fetch";

export const SNIPER_GUILD_ID = ""; // urlnin alinacagi sunucu id
export const SNIPER_SELF_TOKEN = "" // sunuculara sokulacak self botun tokeni
export const URL_SNIPER_SELF_TOKEN =
  ""; // urlnin alinacagi sunucuda ytsi olan bir hesabin tokeni
export const WEBHOOKS = {
  SUCCESS: async (content: string) => {
    await fetch(
      `https://discord.com/api/webhooks/1086969819804479598/NfX5jjmUPOcmTjevV0wBprQqR4y7PESYgPYnyJKagW8wjS0oYDLtK9FsK0rbtN67ZEko`, // basarili webhook url
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          username: "Basarili",
        }),
      }
    );
  },
  INFO: async (content: string) => {
    await fetch(
      `https://discord.com/api/webhooks/1086969819804479598/NfX5jjmUPOcmTjevV0wBprQqR4y7PESYgPYnyJKagW8wjS0oYDLtK9FsK0rbtN67ZEko`, // bilgilendirme webhook url
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          username: "Bilgilendirme",
        }),
      }
    );
  },

  FAIL: async (content: string) => {
    await fetch(
      `https://discord.com/api/webhooks/1086969819804479598/NfX5jjmUPOcmTjevV0wBprQqR4y7PESYgPYnyJKagW8wjS0oYDLtK9FsK0rbtN67ZEko`, // hata webhook url
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content,
          username: "Hata",
        }),
      }
    );
  },
};

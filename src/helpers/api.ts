import ApolloClient from "apollo-boost";

const BASE_URL = "https://back.prod.checklist.baza.vk-apps.com/gql";

export const client = new ApolloClient({
  uri: BASE_URL,
  headers: {
    "x-launch-params":
      "vk_access_token_settings=&vk_app_id=7495070&vk_are_notifications_enabled=0&vk_is_app_user=0&vk_is_favorite=0&vk_language=ru&vk_platform=mobile_web&vk_ref=other&vk_user_id=606875497&sign=FPlLpGuRyfZvR69jhmaff2UtXxJvMFgjlH42X9nNFw4",
  },
});

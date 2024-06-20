const DEFAULT_ERROR_MSG = "Success"
import { notifications } from "@mantine/notifications";


export const showErrorNotification = (message?: string) => {
  notifications.show({
    title: "Error",
    message: message ?? DEFAULT_ERROR_MSG,
    color: "red",
    autoClose: 7000,
  });}

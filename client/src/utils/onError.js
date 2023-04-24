import * as toastMessage from "./notification/index";

export const error = (data) => {
	const error = data?.response?.data?.message;
	if (error) toastMessage.error(error);
	else toastMessage.error("שגיאה: בעיית התחברות לשרת");
};

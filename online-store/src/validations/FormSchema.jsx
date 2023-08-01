import { object, string} from "yup";

export const FormmSchema = object({
    name: string().required("Name is required.").max(50),
    email: string().required("Email is required.").email("You must enter a valid email."),
    message: string().required("Enter some text.").max(250,"Message overexceed!!!")
})
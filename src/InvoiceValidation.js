import * as Yup from "yup";

const userValidation = {
  companyName: Yup.string().min(2, "Too Short").required("Required"),
  city: Yup.string().min(2, "Too Short").required("Required"),
  street: Yup.string().min(2, "Too Short").required("Required"),
  postcode: Yup.string().min(2, "Too Short").required("Required"),
  nip: Yup.number()
    .integer("Value must be a integer")
    .positive("Value must be a positive number")
    .required("Required"),
  phone: Yup.number()
    .integer("Value must be a integer")
    .positive("Value must be a positive number")
    .min(5, "Too Short")
    .required("Required"),
  email: Yup.string().email("Add valid email address").required("Required"),
  bankAccount: Yup.number()
    .integer("Value must be a integer")
    .positive("Value must be a positive number")
    .required("Required"),
};

const InvoiceSchema = Yup.object().shape({
  id: Yup.string().min(1, "Too Short").required("Required"),
  created: Yup.date().required("Required"),
  validUntil: Yup.date()
    .min(Yup.ref("created"), "Valid Until date can't be before start date")
    .required("Required"),
  recipientData: Yup.object().shape(userValidation),
  senderData: Yup.object().shape(userValidation),
  items: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().min(2, "Too Short").required("Required"),
      amount: Yup.number()
        .min(1, "Too Short")
        .integer("Value must be a integer")
        .positive("Value must be a positive number")
        .required("Required"),
      unit: Yup.string().min(1, "Too Short").required("Required"),
      tax: Yup.number()
        .min(1, "Too Short")
        .integer("Value must be a integer")
        .positive("Value must be a positive number")
        .required("Required"),
      price: Yup.string()
        .matches(/^([1]([.,][0-9]+)?|[1-9]([0-9]+)?([.,][0-9]+)?)$/, {
          message: "Number must be greater the 0",
        })
        .required("Required"),
    })
  ),
});

export default InvoiceSchema;

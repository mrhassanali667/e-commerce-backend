import * as Yup from "yup";

export const orderSchema = Yup.object({
    userId: Yup.string()
        .required("User ID is required"),

    productId: Yup.string()
        .required("Product ID is required"),

    quantity: Yup.number()
        .required("Quantity is required")
        .min(1, "Minimum quantity is 1"),

    status: Yup.string()
        .oneOf(
            ["Pending", "Confirmed", "Shipped", "Delivered", "Cancelled"],
            "Invalid order status"
        )
        .default("Pending"),

    receiverPhone: Yup.string()
        .required("Receiver phone is required")
        .matches(/^\d{10,15}$/, "Invalid phone number"),

    shippingAddress: Yup.object({
        street: Yup.string().required("Street is required"),
        city: Yup.string().required("City is required"),
        state: Yup.string().nullable(),
        postalCode: Yup.string().required("Postal code is required"),
        country: Yup.string().required("Country is required")
    }),

    orderDate: Yup.date().default(() => new Date())
});

export default orderSchema

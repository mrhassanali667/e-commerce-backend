import * as Yup from "yup";

export const productSchema = Yup.object({
    title: Yup.string()
        .required("Title is required"),

    description: Yup.string()
        .required("Description is required"),

    categories: Yup.array()
        .of(Yup.string().required("Category is required"))
        .min(1, "At least one category is required")
        .required("Categories are required"),

    brand: Yup.string()
        .default("No Brand"),

    price: Yup.number("Price must be a number")
        .required("Price is required"),

    discountPrice: Yup.number("Discount price must be a number")
        .nullable(),

    images: Yup.array()
        .of(Yup.string().required("Image URL is required"))
        .min(1, "At least one image is required")
        .required("Images are required"),

    stock: Yup.number("Stock must be a number")
        .default(0),

    seller: Yup.object({
        id: Yup.string()
            .required("Seller ID is required"),
        shopName: Yup.string()
            .required("Shop name is required"),
    }).required("Seller info is required"),

    variations: Yup.array().of(
        Yup.object({
            type: Yup.string()
                .nullable(),  
            options: Yup.array().of(Yup.string())
                .nullable(),
        })
    ),

    ratings: Yup.object({
        average: Yup.number()
            .default(0),
        totalReviews: Yup.number()
            .default(0),
    }),

    reviews: Yup.array().of(
        Yup.object({
            user: Yup.string().nullable(),
            rating: Yup.number().nullable(),
            comment: Yup.string().nullable(),
            createdAt: Yup.date().default(() => new Date()),
        })
    ),

    isFeatured: Yup.boolean()
        .default(false),

    status: Yup.string()
        .oneOf(["active", "inactive", "pending", "rejected"])
        .default("active"),
});


export default productSchema
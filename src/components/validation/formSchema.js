// Here goes the schema for the form
//const yup = require("yup");
import * as yup from 'yup';//

const schema = yup.object().shape({
    name: yup
        .string()
        .required("name is required")
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .required("Please tell us what Size Pizza You would like"),
    pepporoni: yup.boolean(),
    bananaPeppers: yup.boolean(),
    greenPeppers: yup.boolean(),
    jalepenos: yup.boolean(),
    tomatoes: yup.boolean(),
    specialInstructions: yup.string(),
})

export default schema;
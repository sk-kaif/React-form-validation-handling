// step 1 
import * as Yup from "yup";


// step 2 create our schemas
export const signUpSchemas = Yup.object({

    // step 3 yup ko batao k hmare kitne fields ka vaildatio krna hai
    name:Yup.string().min(2).max(25).required('please Enter Your Our Name'),
    email: Yup.string().email().required('please Enter Your Our Email'),
    password : Yup.string().min(6).max(12).required('please Enter Your Our Password'),

    // step 4 how to make password & confirmPassword match 
    // use (oneOF) in Yup mean -> one of its kind
    // and we Yup.ref = password
    confirmPassword :  Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"), 


});
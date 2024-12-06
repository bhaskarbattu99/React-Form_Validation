import React from "react";
import { useForm } from "react-hook-form";
import{yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "./Forms.css";

    const Forms=()=>{
        //implimentaion the validation
         const ValidationSchema=Yup.object().shape({
            "firstname":Yup.string().required(`firstname must be required`).min(4,"minimum 4 charcaters required").max(8,"maximum 8 charcaters are allowed"),
        
            "lastname":Yup.string().required(`lastname must be required`).min(4,"minimum 4 charcaters required").max(8,"maximum 8 charcaters are allowed"),
            "email":Yup.string().required(`email must be required`).email("enter valid email"),
            "gender":Yup.string().required(`gender must be required`).min(4,"minimum 4 charcaters required").max(6,"maximum 6 charcaters are allowed"),
            "mobilenumber":Yup.string().required(`mobilenumber must be required`).min(10,"minimum 10 charcaters required").max(10,"maximum 10 charcaters are allowed")
            
        });
            //supply validationschema to use hook form
          const{ register,
                 reset,
                 handleSubmit,
                formState:{errors}} = useForm({
                resolver:yupResolver(ValidationSchema)
            });

            //handle onsubmit event
            const onSubmit =(data)=>{
                console.log(data);
            }

        return(
            <>
            
            <div className="register-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <fieldset>
                      <legend>RegisterForm</legend>
                        <table align="center">
                      
                     <div className="form-group">
                       <label>firstname</label>
                        <input type="text" 
                        {...register("firstname")}
                        className={`form-control ${errors.firstname?'is-invalid':''}`}></input>
                        <div className="invalid-feedback">
                            {
                                Object.keys(errors).includes("firstname")?errors.firstname.message:""
                            }
                        </div>

                     </div>
                     <div className="form-group">
                        <label>lastname</label>
                        <input type="text" 
                        {...register("lastname")}
                        className={`form-control ${errors.lastname?'is-invalid':''}`}></input>
                        <div className="invalid-feedback">
                            {
                                Object.keys(errors).includes("lastname")?errors.lastname.message:""
                            }
                        </div>

                     </div>
                     <div className="form-group">
                        <label>email</label>
                        <input type="email" 
                        {...register("email")}
                        className={`form-control ${errors.email?'is-invalid':''}`}></input>
                        <div className="invalid-feedback">
                            {
                                Object.keys(errors).includes("email")?errors.email.message:""
                            }
                        </div>

                     </div>
                     <div className="form-group">
                       <label>mobilenumber</label>
                        <input type="text" 
                        {...register("mobilenumber")}
                        className={`form-control ${errors.mobilenumber?'is-invalid':''}`}></input>
                        <div className="invalid-feedback">
                            {
                                Object.keys(errors).includes("mobilenumber")?errors.mobilenumber.message:""
                            }
                        </div>

                     </div>
                     <div className="form-group">
                       <label>gender</label>
                        <input type="text" 
                        {...register("gender")}
                        className={`form-control ${errors.gender?'is-invalid':''}`}></input>
                        <div className="invalid-feedback">
                            {
                                Object.keys(errors).includes("gender")?errors.gender.message:""
                            }
                        </div>

                     </div>

                     <div className="form-group">
                        <button type="submit" className="btn btn-success btn-sm m-5">Submit</button>
                        <button type="reset" onClick={()=>reset()} className="btn btn-danger btn-sm m-5">Reset</button>
                     </div>
                     </table>
                    </fieldset>
                    
                </form>
            </div>
            

            </>
        )

    }
    export default Forms;

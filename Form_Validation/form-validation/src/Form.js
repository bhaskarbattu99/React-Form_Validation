import React from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as Yup from "yup";
const Forms = ()=>{
    const ValidationSchema = Yup.object().shape({
        "firstname":Yup.string().required("firstname can not be left blank")
    })
    const {register,
           reset,
          handleSubmit,
          formState:{errors}} = useForm({
        resolver:yupResolver(ValidationSchema)
    });
   
    console.log(errors);
    const onSubmit = (data)=>{
        console.log(data);
    };
    return(
        
        <>
            <div style={{width:500, 
                         margin:50}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>First Name</label> 
                        <input type="text"
                               {...register("firstname")}
                               className="form-control ${errors.firstname?'is-invalid':''}"></input> 
                        
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-success btn-sm">Submit</button>
                        <button type="reset" onClick={()=>reset()} className="btn btn-danger btn-sm">Reset</button>
                    </div>


                </form>
            </div>
        </>
    )
}
export default Forms;
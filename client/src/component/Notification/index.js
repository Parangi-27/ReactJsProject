import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Notification = (props) => {
    const sucess=(text)=>{toast.success(text
    ,{position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",});}
    const error=(text)=>{toast.error(text
        ,{position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",});}
        const promise=(text)=>{toast.promise({
       pending:"pending",
        success:"success",
        error:"rejected"
        },{position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",});}

    const getnotify=(props)=>{

        // if({props.sucess})
        //  sucess({props.text});
        // if({props.error})
        //   error({props.text});
        // if({props.promise})
        //   promise({props.text});


    }

  return (
    <div>
     
    {(props.sucess || props.error ||props.promise) ? (getnotify):(getnotify)}
        <ToastContainer />
    </div>
  )
}

export default Notification
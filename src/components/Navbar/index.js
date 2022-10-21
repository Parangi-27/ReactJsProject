import styles from "./styles.module.css";
//import { useNavigate } from "react-router-dom";

const handleLogout=()=>{
   //const navigate = useNavigate();
 localStorage.removeItem("jtwtoken");

 window.location.href = "/";

}
const Navbar=()=>
{
    
    return (
        <div className={styles.main_container}>
            <nav className={styles.navbar}>
                <h1>BBOOK</h1>
                <button className={styles.white_btn} onClick={handleLogout}>
                    Logout
                </button>
                <button className={styles.white_btn} >
                    about us
                </button><button className={styles.white_btn}>
                    Contact us
                </button>
            </nav>

        </div>

    )
}
export default Navbar;
import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header>
            <div className = "menu">
                <div className="logo">
                <span> <Link to="/"> &lt; Desafio Target /&gt; </Link></span>
                </div>
                <div className="link" >
                    <ul className="question_list"> 
                    <li><Link className="question_icon" to = "/desafio1"> <img src={"/numero-1.png"}  alt="" /> </Link></li>
                    <li><Link className="question_icon" to = "/desafio2">  <img src={"/numero-2.png"} alt="" /> </Link></li>
                    <li><Link className="question_icon" to = "/desafio3">  <img src={"/numero-3.png"} alt="" /> </Link></li>
                    <li><Link className="question_icon" to = "/desafio4">  <img src={"/numero-4.png"} alt="" /> </Link></li>
                    <li><Link className="question_icon" to = "/desafio5">  <img src={"/numero-5.png"} alt="" /> </Link></li>
                    </ul>
                </div>        
            </div>
        </header>
    )

}
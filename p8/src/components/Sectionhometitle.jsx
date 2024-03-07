import "./Sectionhometitle.scss"
import paysage from "../assets/image/Mask Group.png";

const Sectiontitle = () => {
    return (
        <div className='sectiontitle'>            
            <img className='paysage' src={paysage} alt="paysage"/>
            <h1>Chez vous, partout et ailleurs</h1>
        </div>    
    )
}


export default Sectiontitle
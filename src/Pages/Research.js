import ResearchItem from '../components/ResearchItem';
import '../CSS/Reserch.css'
import { useContext } from 'react';
import { DBContext } from '../context/DBContext';

const Research = () => {

    const { researches } = useContext(DBContext);

    return(
        <div className="reserchWrapper">
            <h1>Research topics</h1>
            <div className='listWrraper'>
                {researches && researches.map((research) => {
                    return (
                        <ResearchItem research={research}/>
                    )
                })}
            </div>
        </div>
    )
}
    
export default Research;
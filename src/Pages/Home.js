import { useContext } from 'react';
import Carousel from '../components/Carousel';
import OpenPosition from '../components/OpenPosition';

import { DBContext } from '../context/DBContext';

import '../CSS/Home.css';

const Home = () => {

    const { positions, images } = useContext(DBContext);
    return (
        <div className="homeWrapper">
            <div className="slider">
                {images && <Carousel images={images}/>}
            </div>
            <div className='wantedWrapper'>
                <h1>Open positions</h1>
                <div className='positionsInfo'>
                    <span>We are looking for talented BSc, MSc and PhD students from various scientific backgrounds to join our group.</span>
                    <span>Methods used in our lab include electrophysiology, imaging, theoretical modelling and simulations, robotics and data analysis.</span>
                    <span>To apply, please contact Amir Ayali at ayali@tauex.tau.ac.il.</span>
                </div>
                <div className='positions'>
                    {positions && positions.map((position) => {
                        return (
                            <OpenPosition position={position}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;
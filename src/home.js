import './App.css';
import profilepic from './images/profile.jpeg';

function Home () {
    return (
        <div className="home">
            <div className='pic-box'>
                <img className='profilepic' src={profilepic} alt='website developer'/>
            </div>
        </div>
    )
}

export default Home;
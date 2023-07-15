import './cssfiles/sider.css'

function Sider () {
    return (
        <div className="sider">
            <div className='side-items'><a href="/">Home &gt;</a></div>
            <div className='side-items'><a href="/kills">Skills &gt;</a></div>
            <div className='side-items'><a href="/proj">Projects &gt;</a></div>
        </div>
    )
}

export default Sider;
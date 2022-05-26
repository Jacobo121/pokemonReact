import '../../styles/navigationStyles.css';

const Navigation = ({pokeFn}) => {
    return (
        <div>
            <div>
                <img src='https://images.wikidexcdn.net/mwuploads/esssbwiki/thumb/7/77/latest/20111028181540/TituloUniversoPok%C3%A9mon.png/550px-TituloUniversoPok%C3%A9mon.png' alt="" />
            </div>
            <button className='button fire ' onClick={() => pokeFn(1)} >Fire</button>
            <button className='button water' onClick={() => pokeFn(2)} >Water</button>
            <button className='button rock' onClick={() => pokeFn(3)} >Rock</button>
            <button className='button electric' onClick={() => pokeFn(4)} >Electric</button>
        </div>
    );
}

export default Navigation;
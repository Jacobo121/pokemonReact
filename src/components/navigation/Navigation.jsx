

const Navigation = ({pokeFn}) => {
    return (
        <div>
            <button onClick={() => pokeFn(1)} >Fire</button>
            <button onClick={() => pokeFn(2)} >Water</button>
            <button onClick={() => pokeFn(3)} >Rock</button>
        </div>
    );
}

export default Navigation;
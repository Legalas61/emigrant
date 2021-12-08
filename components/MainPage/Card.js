const Card = ({title}) => {
    return (
        <>
            <div>
                {title}
            </div>
            <style jsx>{`
                div{
                    padding: 10px;
                    margin: 10px;
                    box-shadow:1px 1px 1px 1px;
                    height: 100px;
                }
            `}</style>
        </>
    );
}

export default Card;

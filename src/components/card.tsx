const Card = ({children}: {children: React.ReactNode}) => {
    const cardStyle = {
        padding: "100px",
        margin: "10px",
        boxShadow: "0 2px 6px 0 #000",
        border: "1px solid #ccc",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return <div style={cardStyle}>{children}</div>
};

export default Card;
export const Card = ({ children }) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}

export const CardTitle = ({ title }) => {
    return (
        <h6 className="card-title">{title}</h6>
    )
}

export const CardBody = ({ children }) => {
    return (
        <div className="card-body">
            {children}
        </div>
    )
}

export const CardFooter = ({ children }) => {
    return (
        <div className="card-footer">
            {children}
        </div>
    )
}
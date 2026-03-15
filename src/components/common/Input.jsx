export const Input = ({ placeHolder, type, isActive }) => {
    /* Meterle toda la logica que quieran */
    return (
        <input
            placeholder={placeHolder}
            className={type === "number" ? "input-number" : "input"}
            disabled={!!!isActive}
            type={type}
        />
    )
}

export default Input
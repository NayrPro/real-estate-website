export const OptionsMap = (input) => {
    return(
    Object.keys(input).map((key,i) => (
        <option key={i} value={key == 'default'? "" : key}>{input[key]}</option>
    )))
}
import { AutoContext } from "./AutoContext"

export const AutoProvider = ({children}) => {

    return(
        <AutoContext.Provider value={
            {}
        }>
            {children}
        </AutoContext.Provider>
    )
}
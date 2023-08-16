import { useAutos } from "../hooks/useAutos";
import { AutoContext } from "./AutoContext"

export const AutoProvider = ({children}) => {

    const {
        autos,
        getAutos,
    } = useAutos();

    return(
        <AutoContext.Provider value={
            {
                autos,
                getAutos,
            }
        }>
            {children}
        </AutoContext.Provider>
    )
}
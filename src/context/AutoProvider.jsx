import { useAutos } from "../hooks/useAutos";
import { AutoContext } from "./AutoContext"

export const AutoProvider = ({children}) => {

    const {
        autos,
        getAutos,
        handlerAddAuto,
    } = useAutos();

    return(
        <AutoContext.Provider value={
            {
                autos,
                getAutos,
                handlerAddAuto,
            }
        }>
            {children}
        </AutoContext.Provider>
    )
}
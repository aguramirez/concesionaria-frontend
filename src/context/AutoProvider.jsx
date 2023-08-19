import { useAutos } from "../hooks/useAutos";
import { AutoContext } from "./AutoContext"

export const AutoProvider = ({children}) => {

    const {
        autos,
        getAutos,
        handlerAddAuto,
        getDetalle,
    } = useAutos();

    return(
        <AutoContext.Provider value={
            {
                autos,
                getAutos,
                handlerAddAuto,
                getDetalle,
            }
        }>
            {children}
        </AutoContext.Provider>
    )
}
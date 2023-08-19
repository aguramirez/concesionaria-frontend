import { useAutos } from "../hooks/useAutos";
import { AutoContext } from "./AutoContext"

export const AutoProvider = ({children}) => {

    const {
        autos,
        autoSelected,
        initialAuto,
        getAutos,
        handlerAddAuto,
        handlerRemoveAuto,
        getDetalle,
    } = useAutos();

    return(
        <AutoContext.Provider value={
            {
                autos,
                autoSelected,
                initialAuto,
                getAutos,
                handlerAddAuto,
                handlerRemoveAuto,
                getDetalle,
            }
        }>
            {children}
        </AutoContext.Provider>
    )
}
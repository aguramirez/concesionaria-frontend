import { Navigate, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/NavBar"
import { AutoCards } from "../components/AutoCards"
import { AutoProvider } from "../context/AutoProvider"
import { AutoForm } from "../components/AutoForm"
import { AutoDetail } from "../components/AutoDetail"

export const AutoRoutes = () => {

    return(
        <AutoProvider>
            <NavBar />
            <Routes>

                <Route path="autos" element={<AutoCards />} />
                <Route path="/" element={<Navigate to="/autos" />} />
                <Route path="autos/crear" element={<AutoForm />} />
                <Route path="autos/editar/:id" element={<AutoForm />} />
                <Route path="autos/detalle/:id" element={<AutoDetail />} />

            </Routes>
        </AutoProvider>
    )
}
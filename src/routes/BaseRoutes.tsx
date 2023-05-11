import { Route, Routes } from "react-router-dom";
import QrIpLocalEntrada from "../pages/QrRutaEntrada";
import ManejoDeFases from "../pages/ManejoDeFases";
function AppRoutes() {
    return (
            <Routes>
                <Route path="/" element={<QrIpLocalEntrada />} />
                <Route path="/ManejoDeFases" element={<ManejoDeFases />} />
            </Routes>
    );
}

export default AppRoutes;
import { Prestamos } from "../models/prestamos.model";

export interface CargarPrestamos {
    
    total: number;
    prestamos: Prestamos[];
    
}
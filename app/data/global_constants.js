export const apiUrl = 'http://localhost:4000/api/';

// Strings
export const PLACEHOLDER = 'Nunca dejes de buscar';
export const ITEMDESC = "Descripción del producto";
export const NEW = "new";
export const USED = "used";
export const NUEVO = "Nuevo";
export const USADO = "Usado";
export const NE = "No Especificado";

export function getCondition(type) {
    switch(type){
        case NEW:
        {
            return NUEVO;
        }
        case USED:
        {
            return USADO;
        }
        default:
        {
            return NE;
        }
    }
}
export function getSaludo(nombre) {
    if (!nombre) {
        return `Hola Coca Cola`
    }

    return 'Hola ' + nombre;
}
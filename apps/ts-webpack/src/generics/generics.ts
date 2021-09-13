export const printObject = (object: any) => {
    console.log(object)
}

export function genericFunction<T>(argument: T): T {
    return argument
}

export const genericFunctionArrow = <T>(argument: T): T => {
    return argument
}
namespace Validations {

    export const validateText = (text: string): boolean => {
        return text.length > 3
    }

    export const validateDate = (date: Date): boolean => {
        return !isNaN(date.valueOf())
    }
}


console.log(
    Validations.validateText('Fer'),
    Validations.validateDate(new Date())
)
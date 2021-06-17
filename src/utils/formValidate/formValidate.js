export const required = (value) => {
    if (!value) return "field is required"
}

export const maxLength = (strLength) => (value) =>{
    if(value.length > strLength) return `max length is ${strLength}`
}
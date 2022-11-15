
export const sleep = (duration)  => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration)
    })
}

export const removeMarkup = (string) => {
    const regex = /(<([^>]+)>)/ig;
    const result = string.replace(regex, ' ');
    return result;
}
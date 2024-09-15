// En JavaScript se podría hacer lo siguiente 
const ERRROR_TYPES = {
    NOT_FOUND : 'notFound',
    UNAUTHORIZED: 'unauthorized',
    FORBIDDEN: 'forbidden'
}

function showMessage (errorType: string): void {
    if (errorType === ERRROR_TYPES.NOT_FOUND) {
        console.log("Resource not found")
    } else if (errorType === ERRROR_TYPES.UNAUTHORIZED) {
        console.log("You don't have permissions to access")
    } else if (errorType === ERRROR_TYPES.FORBIDDEN) {
        console.log("You don't have enough privileges")
    }
}
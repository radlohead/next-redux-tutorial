export const INCREMENT = 'INCREMENT';

export const increment = (index: number) => {
    return {
        type: INCREMENT,
        index
    }
}
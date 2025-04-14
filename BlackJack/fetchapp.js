export const deck = async () => {
    const table = await fetch("./deck.json")
    const carte = await table.json()

    return carte 
}
const baseUrl = 'http://35.226.209.223'

export async function getAllProducts() {
    const response = await fetch(`${baseUrl}/products`)

    const responseJson = await response.json()

    return responseJson
}

export async function searchProducts(q) {

    const response = await fetch(`${baseUrl}/search?name=${q}`)

    const responseJson = await response.json()

    return responseJson
}

export async function getHistoric(q) {

    const response = await fetch(`${baseUrl}/products?url=${q}`)

    const responseJson = await response.json()

    return responseJson
}
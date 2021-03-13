const baseUrl = 'http://localhost:5000'

export async function getAllProducts() {
    const response = await fetch(`${baseUrl}/products`)
    
    const responseJson = await response.json()

    return responseJson
}

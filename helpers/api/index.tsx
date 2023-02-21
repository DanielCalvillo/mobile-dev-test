async function getProducts() {
    try {
        const response = await fetch('https://6222994f666291106a29f999.mockapi.io/api/v1/products');
        const data = await response.json();
        return { data }
    } catch(err) {
        return { err }
    }
}

export {
    getProducts
}
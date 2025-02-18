export async function fetchData() {
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    return data;
} 

export async function fetchDataId(id) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const prod = await response.json();
    return  prod;
} 

export async function fetchDataCategory(Category) {
    const response = await fetch(`https://fakestoreapi.com/products/category/${Category}`);
    const cat = await response.json();
    return cat;
} 


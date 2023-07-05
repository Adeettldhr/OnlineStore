import axios from 'axios'

const ProductsList = async () =>{
    const result = await axios.get("https://fakestoreapi.com/products");
    console.log(result.data.results);
    return result.data.results
    
}
export default ProductsList
import { products } from '../data/product'
import { ProductCard } from './ProductCard'

export const ProductList = () => {
    return (
        <div>
            <h1>Product List</h1>
            {products.map((product) => (
                <ProductCard product={product} key={product.id}></ProductCard>
            ))}
        </div>
    )
}

import { products } from '../data/product'
import { ProductCard } from './ProductCard'

export const ProductList = ({ searchTerm, selectedCategory, onAddCart }) => {

    const filteredProducts = selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

    const searchFilteredProducts = filteredProducts.filter((search) => search.name.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div>
            <h1>Product List</h1>
            {/* {searchFilteredProducts.map((product) => (
                <ProductCard product={product} key={product.id}></ProductCard>
            ))} */}
            
            <div className="product-grid">
                {searchFilteredProducts.length > 0 ? (
                searchFilteredProducts.map((product) => (
                    <ProductCard product={product} onAddCart={onAddCart} key={product.id}></ProductCard>
                ))
            ) : <p className='no-products'>No Products Found</p>}
            </div>
        </div>
    )
}

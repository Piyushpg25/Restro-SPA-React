import { products } from '../data/product'
import { ProductCard } from './ProductCard'

export const ProductList = ({ selectedCategory }) => {
    console.log("Direct Match:", products[0].category === selectedCategory);
    console.log("Category Length:", products[0].category.length);
    console.log("Selected Length:", selectedCategory.length);
    console.log("Category Value:", JSON.stringify(products[0].category));
    console.log("Selected Value:", JSON.stringify(selectedCategory));
    const filteredProducts = selectedCategory === "All" ? products : products.filter((product) => product.category === selectedCategory)

    return (
        <div>
            <h1>Product List</h1>
            {filteredProducts.map((product) => (
                <ProductCard product={product} key={product.id}></ProductCard>
            ))}
        </div>
    )
}

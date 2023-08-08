import axios from 'axios'
import React, { useState } from 'react'
import { useQuery } from 'react-query'


const fetchProducts = (pageNumber) => {
    return axios.get(`https://fakestoreapi.com/products?_limit=5&_page=${pageNumber}`)
}

const ProductPaginated = () => {
    const [pageNumber, setPageNumber] = useState("");
    const { isLoading, isError, error, data , isFetching} = useQuery(
        ['productData', pageNumber],
        () => fetchProducts(pageNumber),
        {
            keepPreviousData: true,
        }
    )

    if (isLoading) return 'Loading...'

    if (isError) return 'An error has occurred: ' + error.message


    return (
        <div>
            {data?.data.map((product) => {
                return (
                    <div key={product.id}>
                        <h6>
                            {product.id}. {product.title}
                        </h6>
                    </div>
                )
            })}

            <div>
                <button onClick={() => setPageNumber(page => page - 1)} disabled={pageNumber === 1}>Prev Page</button>
                <button onClick={() => setPageNumber(page => page + 1)} disabled={pageNumber === 4}>Next Page</button>
            </div>
            {isFetching && 'Loading...'}
        </div>
    )
}

export default ProductPaginated
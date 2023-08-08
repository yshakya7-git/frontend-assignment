import axios from 'axios';
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useQuery } from 'react-query';

const Paginated = () => {

    const [pageNumber, setPageNumber] = useState("");
    const [productData, setProductData] = useState("");

    const handlePageClick = (data) => {
        setPageNumber(data.selected);

    }

    const { isLoading, error } = useQuery(
        ['repoData'], () =>
        axios
            .get(pageNumber ? `https://jsonplaceholder.typicode.com/comments?_page=${pageNumber + 1}` :
                `https://jsonplaceholder.typicode.com/comments?_page=1`)
            .then((res) => {
                setProductData(res.data)
            })
    );

    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message


    return (
        <>
            <div className="container d-flex justify-content-between my-4 flex-column flex wrap">
                {productData ? (
                    <>
                        {productData.map((product) => {
                            return (
                                <div key={product.id}
                                className='my-3 px-4 py-3'
                                style={{width:'400px', border: "1px solid silver"}}
                                >
                                    <div>{product.id}</div>
                                    <div>{product.email}</div>
                                </div>
                            )
                        })}

                    </>
                ) :
                    (
                        <h4>Loading...</h4>
                    )}
            </div>
            <ReactPaginate
                containerClassName='pagination justify-content-center'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                breakLabel="..."
                nextLabel="next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={100}
                previousLabel="previous"
                breakClassName='page-item'
                previousClassName='page-item'
                previousLinkClassName='page-link'
                nextClassName='page-item'
                nextLinkClassName='page-link'
                breakLinkClassName='page-link'
                renderOnZeroPageCount={null}
                activeClassName='active'
            />
        </>
    )
}

export default Paginated
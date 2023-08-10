import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

const Paginated = () => {

    const [pageNumber, setPageNumber] = useState();
    const [productData, setProductData] = useState("");
    const[pageTotal, setPageTotal] = useState();

    const handlePageClick = (data) => {
        setPageNumber(data.selected);

    }

    const fetchData = async () => {
        await axios.get(pageNumber ? `https://jsonplaceholder.typicode.com/photos?_page=${pageNumber + 1}&_limit=10` 
        : `https://jsonplaceholder.typicode.com/photos?_page=${pageNumber}&_limit=10`)
        .then((res)=> setProductData(res.data))
    };

    useEffect(() => {
        fetchData();
    }, [pageNumber]);

    useEffect(()=>{
        const fetchTotal = async () =>{
            await axios.get('https://jsonplaceholder.typicode.com/photos')
            .then((res)=> setPageTotal(res.data.length/10))
        };
        fetchTotal();
    },[]);
     console.log(productData)

    return (
        <>
            <div className="container d-flex justify-content-between my-4 flex-column flex wrap">
                {productData ? (
                    <>
                        {productData.map((product) => {
                            return (
                                <div key={product.id}
                                    className='my-3 px-4 py-3'
                                >
                                    <div>{product.id}</div>
                                    <div>{product.title}</div>
                                    <div>{product.url}</div>
                                    <div>{product.thumbnailUrl}</div>
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
                pageCount={pageTotal}
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
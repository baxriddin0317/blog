import React from 'react'
import "./Pogination.scss";

function Pogination({postsPerPage, totalPosts, paginate, currentPage}) {
    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumber.push(i);   
    }
 return (
    // ===== pohgination links =====
    <nav className='pagination'>
        <button onClick={() => {
            if(currentPage === 1){
                paginate(1);
            }else{
                paginate(currentPage -1);
            }
        }}>
        <i className='bx bx-chevron-left'></i>
        </button>
        <ul className='pagination__list'>
            {
                pageNumber.map(num => (
                    <li key={num} className={currentPage === num ? 'pagination__item activePage' : 'pagination__item'}>
                        <a onClick={() => paginate(num)} href="#">
                            {num}
                        </a>
                    </li>
                ))
            }
        </ul>
        <button onClick={() => {
                if(currentPage === totalPosts / postsPerPage){
                    paginate(1);
                }else{
                    paginate(currentPage + 1);
                }
            }}
        >
            <i className='bx bx-chevron-right'></i>
        </button>
    </nav>
  )
}

export default Pogination
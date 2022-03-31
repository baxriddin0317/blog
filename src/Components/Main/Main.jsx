import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Page from '../Page/Page';
import Pogination from '../Pogination/Pogination';
// main styles
import "./Main.scss";

function Main({search}) {
    const [ posts, setPosts ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ postsPerPage ] = useState(10);

    useEffect(() => {
        const fetchPage = async () => {
            setLoading(true);
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPosts(res.data);
            setLoading(false);
        }

        fetchPage();
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

    // pagination click
    const paginate = (num) => {
        setCurrentPage(num);
    }

     // filter
     const handleFilter = (val) => {
        if(search === ""){
            return val;
        }else if (val.title.toLowerCase().includes(search.toLowerCase())){
            return val;
        }
    }
    
  return (
    //  ===== main start ======
    <main className="main container">
        <div className="main__block">
            <div className="main__box">
                <h2 className="main__box-title">
                    What I do!
                </h2>
                <p className="main__box-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer aliquet, orci in bibendum luctus, turpis ante pretium velit, eu rutrum augue erat ac eros. Cras ultricies mattis convallis.
                </p>
                <div className="main__box-more">
                    EXPLORE ME
                    <span>
                    <i className='bx bx-chevron-right'></i>
                    </span>
                </div>
                <div className="main__box-links">
                    <Link to={"#"}>
                    <i className='bx bxl-facebook' ></i>
                    </Link>
                    <Link to={"#"}>
                    <i className='bx bxl-github' ></i>
                    </Link>
                    <Link to={"#"}>
                    <i className='bx bxl-twitter' ></i>
                    </Link>
                    <Link to={"#"}>
                    <i className='bx bxl-linkedin' ></i>
                    </Link>
                </div>
            </div>
            <div className="main__right">
                <h2 className="main__right-title">
                    Recent Posts
                </h2>
                <Page 
                    data={currentPost.filter(item => handleFilter(item))} 
                    loading={loading} 
                />
                <Pogination 
                    postsPerPage={postsPerPage} 
                    totalPosts={posts.length} 
                    paginate={paginate}
                    currentPage={currentPage}
                />
            </div>
        </div>
    </main>
    //  ===== main end ======
  )
}

export default Main
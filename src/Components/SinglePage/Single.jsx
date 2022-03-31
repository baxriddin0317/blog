import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Img from "../../Assets/Img/img.jpg";
import './Single.scss';
import Page from '../Page/Page';

function Single() {
  const { index } = useParams();
  const [ posts, setPosts ] = useState([]);
 
  useEffect(() => {
    const fetchPage = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(res.data);
    }

    fetchPage();
}, []);

return (
    <div className='single'>
      {/* ==== post render ==== */}
      {
        posts.filter(item => item.id === Number(index)).map(d => (
          <div key={d.id} className="single__block">
              <span>User interface</span>
              {/* ==== blog title ==== */}
              <h2 className="single__block-title">
                {d.title}
              </h2>
              <div>
                <span>October 24, 2020</span>
                <span>
                    <i className='bx bx-time-five'></i>
                    3 minutes read
                </span>
              </div>
              {/* ==== blog img ==== */}
              <img src={Img} alt="" />

              <p className="single__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non imperdiet dui risus et elit.
              </p>
              <h3 className="single__title">
              Information overload
              </h3>

              <p className="single__text">
              Vivamus dictum ultrices tortor. Ut imperdiet, enim in suscipit dignissim, mauris massa pellentesque augue, quis ultricies sem tortor et velit.
              </p>

          </div>
        ))
      }      

      <h2 className="single__title">
      More like this
      </h2>
      <Page data={posts.slice(Number(index), (Number(index) + 3))} />
    </div>
  )
}

export default Single
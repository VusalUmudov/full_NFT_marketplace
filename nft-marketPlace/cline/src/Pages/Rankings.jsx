import React, { useEffect, useState } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import axios from "axios";

function Rankings() {

  const [artist, setArtist] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/artists").then((res) => {
      setArtist(res.data);
    });
  }, []);

  return (

    <div>
      <Navbar />

      <section className='rankings'>

        <div className='hedline__rankings'>
          <div className='headline__subhead'>
            <div className='headline'>
              <p className='headline-top'>Top Creators</p>
            </div>
            <div className='subhead'>
              <p className='headline-bottom'>Check out top ranking NFT artists on the NFT Marketplace.</p>
            </div>
          </div>
        </div>

        <div className='rankings__frame'>
          <div className='tabs'>
            <div className='tab_today'>
              <p>Today</p>
            </div>
            <div className='tab'>
              <p>This Week</p>
            </div>
            <div className='tab'>
              <p>This Month</p>
            </div>
            <div className='tab'>
              <p>All Time</p>
            </div>
          </div>
        </div>

        <div className='rankings__artists'>
          <div className='table_header'>
            <div className='table__headers'>
              <div className='table__header_left'>
                <p className='header#_'>#</p>
                <p className='headers_artist'>Artist</p>
              </div>

              <div className='table__header_right'>
                <div className='table_right_element'>
                  <p>Change</p>
                </div>
                <div className='table_right_element'>
                  <p>NFTs Sold</p>
                </div>
                <div className='table_right_element'>
                  <p>Volume</p>
                </div>
                <div className='table_right_element'>
                  <p>Add</p>
                </div>
              </div>
            </div>
          </div>

          {artist &&
            artist.map((user) => {
              return (
                <div div key={user._id} className='rankings__card-conatiner' >
                  <div className='rankings__card'>

                    <div className='artist__user-container'>
                      <div className='artist__user-num'><p>{user.rank}</p></div>
                      <div className='artist__user'>
                        <div className='artist__user-img'><img src={user.img} alt='foto'/></div>
                        <div className='artist__user-name'><p>{user.name}</p></div>
                      </div>
                    </div>

                    <div className='rankings__card-text'>
                      <div className='artist__user__card-text'>
                        <p className='change-text'>+ {user.change} %</p>
                      </div>
                      <div className='artist__user__card-text'>
                        <p className='nftSolid-text'>{user.NFTsold}</p>
                      </div>
                      <div className='artist__user__card-text'>
                        <p className='volume-text'>{user.volume} ETH</p>
                      </div>
                      <div className='artist__user__card-text'>
                        <button className='nav__btn'>Add</button>
                      </div>
                    </div>


                  </div>
                </div>
              )

            })}

        </div>


      </section >
      <Footer />
    </div >
  )
}

export default Rankings
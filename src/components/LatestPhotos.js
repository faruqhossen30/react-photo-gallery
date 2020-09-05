import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import { Ellipsis } from 'react-awesome-spinners'

const LatestPhotos = () => {
    const [photos, setPhotos] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const URL = `https://api.unsplash.com/photos/?client_id=UfLmlk7A7abRyf5U9m_KB5XgE2HrZmnX4ph2N-eNmGA&per_page=20&page=${page}`
        Axios.get(URL)
            .then((allphoto) => {
                setPhotos(allphoto.data)
                setLoading(false)
            })
            .catch(e => console.log(e))
    }, [page])

    return (
        <>
            {
                loading &&
                <div className="col">
                    <h2 className='text-center my-3 font-weight-bold text-secondary'>
                        <Ellipsis />
                    </h2>
                </div>
            }
            {
                !loading &&
                <div className="row mt-5 search_bar">
                    <div className="col">
                        <h3 className='my-1 text-secondary'>Latest Photos</h3>
                    </div>
                    <div className="col">
                        <form className='form-group'>
                            <div className="input-group">
                                <input className='form-control' type="text" placeholder='Searh your photo' />
                                <span className='input-group-prepend'>
                                    <button type='submit' className='btn btn-primary'>Search</button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            }

            <div className="row">
                {
                    photos.map((images) => {
                        return (
                            <div className="col-lg-3" key={images.id}>
                                <div className="single-photo-item">
                                    <a href="/" className="d-block my-3">
                                        <img src={images.urls.thumb} alt={images.alt_description} />
                                    </a>
                                    <p className='my-0'>Photo Name:<strong> {images.user.name} </strong> </p>
                                    <span className='font-weight-bold text-secondary'>&#10084; {images.user.total_likes}</span>
                                    <span className='ml-3'> <strong className='font-weight-bold text-secondary'>By</strong> {images.user.first_name} {images.user.last_name} </span>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    !loading &&
                    <div className="load-more ">
                        <button onClick={() => setPage(page + 1)} className='btn btn-primary my-3'>Load Page {page + 1}</button>
                    </div>
                }
                
            </div>
        </>
    );
};

export default LatestPhotos;
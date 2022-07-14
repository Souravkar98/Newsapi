import React, { Component } from 'react'

export class NewItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrls, author, date, source } = this.props
        return (
            <div>
                <div className="card" >
                    <img src={!imgUrl ? "https://img.etimg.com/thumb/msid-91346930,width-1070,height-580,imgsize-2482502,overlay-ettech/photo.jpg" : imgUrl}
                        className="card-img-top" alt="..." />
                    <div className="card-body">
                        <span className="position-absolute start-50 top-0  translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zindex: '1' }}>
                            {source}
                            <span className="visually-hidden"></span>
                        </span>
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text'><small className='text-muted'>by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>

                        <a href={newsUrls} target="-blank" className="btn btn-dark ">read More</a>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default NewItem

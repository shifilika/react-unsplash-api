import React, { Component } from 'react'
import * as axios from 'axios'
export default class LetestPhoto extends Component {

    state = {
        photos: [],
        page: 1
    }


    componentDidMount() {
        axios.get('https://api.unsplash.com/photos/?client_id=dfaea35e8a0e06f4542d26eb334e162231c65578554ce6eca5d8ad6dcfbd4821&per_page=12&page=' + this.state.page)
            .then(res => this.setState({
                photos: res.data
            })
            )
        this.setState({ page: this.state.page + 1 })
    }
    loadNextPage = (e) => {
        this.setState({ page: this.state.page + 1 })
        axios.get('https://api.unsplash.com/photos/?client_id=dfaea35e8a0e06f4542d26eb334e162231c65578554ce6eca5d8ad6dcfbd4821&per_page=12&page=' + this.state.page)
            .then(res => this.setState({
                photos: res.data
            })
            )
    }

    render() {
        console.log(this.state.photos)


        return (
            <React.Fragment>
                {
                    this.state.photos.map((photo) => (

                        <div key={photo.id} className="col-lg-3">
                            <div className="single-photo-item">
                                <a className="d-block" href="/">
                                    <div className="photo-size">
                                        <img src={photo.urls.small} alt={photo.user.updated_at} />
                                    </div>
                                    <h2>{photo.user.updated_at}</h2>
                                    <p className="catagory-name">{photo.user.first_name}{photo.user.last_name}</p>
                                </a>
                            </div>
                        </div>
                    ))
                }
                <div className="col-lg-12">
                    <div className="load-more-page">
                        <button onClick={this.loadNextPage}>Load more {this.state.page}</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
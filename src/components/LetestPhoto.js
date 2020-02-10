import React, { Component } from 'react'

import axios from 'axios'
export default class LetestPhoto extends Component {
    state = {
        photos: [],
        page: 1,
        keyword: ''
    }
    componentDidMount() {

        axios.get(`https://api.unsplash.com/photos/?client_id=dfaea35e8a0e06f4542d26eb334e162231c65578554ce6eca5d8ad6dcfbd4821&per_page=16&page=${this.state.page}`)
            .then(res => this.setState({ photos: res.data }))
        // .then(res => console.log('data', this.state.photos))

    }

    loadNext = () => {
        // console.log('loadnext')
        this.setState({ page: this.state.page + 1 }, () => {
            axios.get(`https://api.unsplash.com/photos/?client_id=dfaea35e8a0e06f4542d26eb334e162231c65578554ce6eca5d8ad6dcfbd4821&per_page=16&page=${this.state.page}`)
                .then(res =>
                    this.setState({
                        photos: res.data
                    })
                )
        })

    }

    // searchInput = (e) => {
    //     let inputValue = e.target.value
    //     // console.log(e.target);

    //     this.setState({ keyword: inputValue })


    //     const searchURL = `https://api.unsplash.com/search/photos/?client_id=dfaea35e8a0e06f4542d26eb334e162231c65578554ce6eca5d8ad6dcfbd4821&per_page=16&page=${this.state.page}&query=${this.state.keyword}`;


    //     axios.get(searchURL)
    //         .then(
    //             res => this.setState({ photos: res.data.results })
    //         )
    // }

    // searchPhoto = (e) => {

    //     e.preventDefault();



    // }
    searchInput = (e) => {
        let inputValue = e.target.value
        this.setState({
            keyword: inputValue
        })

    }

    searchPhoto = (e) => {
        e.preventDefault();
        const searchURL = `https://api.unsplash.com/search/photos/?client_id=dfaea35e8a0e06f4542d26eb334e162231c65578554ce6eca5d8ad6dcfbd4821&per_page=16&page=${this.state.page}&query=${this.state.keyword}`;
        axios.get(searchURL)
            .then(
                res =>
                    this.setState({
                        photos: res.data.results,
                        page: 2
                    })
            )
    }

    render() {
        return (
            <>
                <div className="row top-heading">
                    <div className="col my-auto">
                        <h2>letest photos</h2>
                    </div>
                    <div className="col col-auto my-auto">
                        <form onSubmit={this.searchPhoto}>

                            <input id='si' type="text" placeholder="search_key" onChange={this.searchInput} />
                            <input type="submit" />
                        </form>
                    </div>
                </div>
                <div className="row">


                    <div className="row">
                        {
                            this.state.photos.map(image => {
                                return (
                                    <div className="col-lg-3" key={image.id}>
                                        <div className="d-block">
                                            <div className="photos-wraps">
                                                <img src={image.urls.small} alt={image.alt_description} />
                                            </div>
                                            <h5>{image.alt_description}</h5>
                                            <a href="/" className="cat-name">{image.user.name}</a>
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                    <button onClick={this.loadNext}>Load Next</button>
                </div>
            </>
        )
    }
}

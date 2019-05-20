
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import './ImageList.css'
import Button from '@material-ui/core/Button'
import Tags from '../Tags/Tags'

// import TextField from '@material-ui/core/TextField'


class ImageList extends Component {


    // setting state 
    state = {
        tag_id: 0,
        images_id: 1,
    }

    // dispatch action to render images and tags
    componentDidMount() {
        this.props.dispatch({ type: 'FETCH_IMAGES' })
        this.props.dispatch({ type: 'FETCH_TAGS' })
        this.props.dispatch({ type: 'GET_TAG' })
        this.props.dispatch({ type: 'ADD_TAG', payload: this.state })
    }

    // 
    handleAdd = () => {
        // map through the tags to get the id
        console.log(this.props)
        this.props.dispatch({ type: 'ADD_TAG', payload: this.state })

    } // end handleAdd


    // handle the next button
    handleNext = () => {
        // place holder for the images
        //
        console.log(this.state.images_id)
        if (this.state.images_id === 5) {
            this.setState({
                images_id: 1
            })
        } else {

            this.setState({
                images_id: (this.state.images_id + 1)
            })
        }
        this.props.dispatch({ type: 'STATE_REDUCER', payload: this.state.images_id })
        console.log(this.state.images_id)
    } // end handleNext

    // handle the previous button
    // setting the state
    handlePrevious = () => {
        console.log(this.state.images_id)
        if (this.state.images_id === 1) {
            this.setState({ images_id: 5 })
        } else {
            this.setState({ images_id: (this.state.images_id - 1) })
        }
        console.log(this.state.images_id)
        this.props.dispatch({ type: 'STATE_REDUCER', payload: this.state.images_id })
    }// end handlePrevious


    // handle the tag_id
    // being sure its an integer, not a string 
    handleTagChange = (event) => {
        this.setState({ tag_id: parseInt(event.target.value) })
    } // end handleTagChange

    render() {
        // mapping through image title
        let imageName = this.props.images.map((image) => {
            return image = image.title
        })
        // mapping through images url
        let imagePath = this.props.images.map((image) => {
            return image = image.path
        })
        console.log(this.props.added_tags)
        console.log(this.state.tag_id)

        return (
            <div>
                <head>
                    {/* Display image and title */}
                    <h1>{imageName[this.state.images_id - 1]}</h1>
                </head>
                <body>
                    {/* <p> {tagName} </p> */}

                    {/* previous & next button  */}
                    <div>
                        <Button
                            className="tag"
                            type="submit"
                            variant="outlined"
                            color="primary"
                            onClick={this.handlePrevious}>Previous
                    </Button>

                        <img src={imagePath[this.state.images_id - 1]} />
                        <Button
                            className="tag2"
                            type="submit"
                            variant="outlined"
                            color="primary"
                            onClick={this.handleNext}> Next</Button>
                        <div>
                            {/* drop down to pick the specific tag */}
                            <select value={this.state.id} onChange={this.handleTagChange} >
                                <option disabled  >Pick an state</option>
                                {this.props.tags.map(tag => {
                                    return (
                                        <option value={tag.id}>{tag.name}</option>
                                    )
                                })}

                            </select>
                            {/* button for adding tag */}
                            <Button
                                type="submit"
                                variant="outlined"
                                color="primary"
                                onClick={this.handleAdd}> Add Tag </Button>
                        </div>
                    </div>
                    <h3>Tags</h3>
                    {/* <Tags /> */}

                    {/* conditional displaying only tags with the same 
                    id at the image being displayed */}
                    <div className="blue">
                        {this.props.added_tags.map((tag)=> {
                    if (tag.images_id === this.state.images_id) {
                        return (<p>{tag.name}</p>)
                    }})} 
                    </div>
                </body>
            </div>

        )
    }
}

const mapRedux = (reduxState) => {
    return {
        added_tags: reduxState.image_tags,
        images: reduxState.images,
        tags: reduxState.tags
    }
}
export default connect(mapRedux)(ImageList); 
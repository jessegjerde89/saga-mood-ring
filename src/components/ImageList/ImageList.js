
import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import axios from 'axios';
import './ImageList.css'
import Button from '@material-ui/core/Button'
// import TextField from '@material-ui/core/TextField'


class ImageList extends Component {


    // setting state 
state = {
    tag_id: 0,
    images_id : 1,
}

// dispatch action to render images and tags
componentDidMount() {
    this.props.dispatch({ type: 'FETCH_IMAGES'})
    this.props.dispatch({ type: 'FETCH_TAGS'})
    // this.props.dispatch({ type: 'GET_TAGS'})
} 

// 
handleAdd = () => {
    // map through the tags to get the id
    console.log(this.props)
    this.props.dispatch({type: 'ADD_TAG', payload: this.state})
    this.props.dispatch({ type: 'GET_TAGS'})
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
        images_id : (this.state.images_id + 1)
    })
} 
    console.log(this.state.images_id)
} // end handleNext

// handle the previous button
// setting the state
handlePrevious = () => {
    console.log(this.state.images_id)
    if (this.state.images_id === 1){
        this.setState({images_id : 5})
    } else {
    this.setState({ images_id : (this.state.images_id - 1)})
}
    console.log(this.state.images_id)
}// end handlePrevious


// handle the tag_id
handleTagChange = (event) => {
    this.setState({ tag_id: parseInt(event.target.value)})
} // end handleTagChange


    render() {
        let imageName = this.props.images.map((image) => {
            return image = image.title     
        })
   
        let imagePath =  this.props.images.map((image) => {
            return image = image.path
        })

        return (
                <div>
                    <h1>{imageName[this.state.images_id - 1 ]}</h1>
                   <img src = {imagePath[this.state.images_id - 1 ]} />
                   {/* <p> {tagName} </p> */}
                  
                    <div>
                   <Button type="submit" variant="outlined" color="primary" onClick= {this.handlePrevious}>Previous</Button>
                   <Button type="submit" variant="outlined" color="primary" onClick={this.handleNext}> Next</Button>
                   <select value={this.state.id} onChange={this.handleTagChange} >
                       <option disabled  >Pick an state</option>
                       {this.props.tags.map(tag => {
                            return (
                       <option value={tag.id}>{tag.name}</option>
                        )})}
                   
                   </select>
                   <Button type="submit" variant="outlined" color="primary" onClick={this.handleAdd}> Add Tag </Button>

                </div>
                   <h3>Tags</h3>  
                </div>
        )
    }
}

const mapRedux = (reduxState) => {
    return { 
        images : reduxState.images,
        tags : reduxState.tags
    }
}
export default connect(mapRedux)(ImageList); 
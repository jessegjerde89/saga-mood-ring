
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
    image_id : 1,
}

// dispatch action to render images and tags
componentDidMount() {
    this.props.dispatch({ type: 'FETCH_IMAGES'})
    this.props.dispatch({ type: 'FETCH_TAGS'})
   
} 

// 
handleAdd = () => {
    // map through the tags to get the id
    console.log(this.state)
    this.props.dispatch({type: 'ADD_TAG', payload: this.state})
} // end handleAdd


// handle the next button
handleNext = () => {
        // place holder for the images
        //
        console.log(this.state.image_id)
    if (this.state.image_id === 5) {
        this.setState({ 
            image_id: 1
        })
    } else {

    this.setState({ 
        image_id : (this.state.image_id + 1)
    })
} 
    console.log(this.state.image_id)
} // end handleNext

// handle the previous button
// setting the state
handlePrevious = () => {
    console.log(this.state.images_id)
    if (this.state.image_id === 1){
        this.setState({image_id : 5})
    } else {
    this.setState({ image_id : (this.state.image_id - 1)})
}
    console.log(this.state.image_id)
}// end handlePrevious


// handle the tag_id
handleTagChange = (event) => {
    
    this.setState({ tag_id: event.target.value })
} // end handleTagChange


    render() {
    
    let imageName = this.props.images.map((image) => {
            return  image = image.title
})

        
    let imagePath =  this.props.images.map((image) => {
                     return  image = image.path
            })

    // let tagName = this.props.tags.map((tag) => {
    //                 return tag = tag.name
    // })

    
        
        return (
                <div>
                    <h1>{imageName[this.state.image_id - 1 ]}</h1>
                   <img src = {imagePath[this.state.image_id - 1 ]} />
                   {/* <p> {tagName} </p> */}
                  
                    <div>
                   <Button type="submit" variant="outlined" color="primary" onClick= {this.handlePrevious}>Previous</Button>
                   <Button type="submit" variant="outlined" color="primary" onClick={this.handleNext}> Next</Button>
                   <select value={this.state.id} onChange={this.handleTagChange} >
                       <option disabled  >Pick an state</option>
                       {this.props.tags.map(tag => {
                            return (
                       <option value={tag.id}>{tag.name}</option>
                    //    <option value={tag.name} value={tag.id}>{tag.name}</option>
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
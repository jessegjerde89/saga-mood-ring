import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import axios from 'axios';
import './ImageList.css'



class ImageList extends Component {

state = {
    image_url: '', 
    tag: 0, 
    id: 0,
    image_spot : 0

}




componentDidMount() {
    this.props.dispatch({ type: 'FETCH_IMAGES'})
    this.props.dispatch({ type: 'FETCH_TAGS'})
   
} 

handleAdd = () => {
    console.log(this.state)
    this.props.dispatch({type: 'CHANGE_TAG', payload: this.state.tag})
}

handleNext = () => {
    if (this.state.image_spot === 5) {
        this.setState({ 
            image_spot: 1
        })
    } else {

    this.setState({ 
        image_spot : (this.state.image_spot + 1)
    })
}
    console.log(this.state.image_spot)
}


handlePrevious = () => {
    if (this.state.image_spot === 1){
        this.setState({
            image_spot : 5
        })
    } else {
    this.setState({ 
        image_spot : (this.state.image_spot - 1)
    })
}
    console.log(this.state.image_spot)
}

handleTagChange = (event) => {
    event.preventDefault() 
    this.setState({ 
        tag: event.target.value
    })

}


    render() {
    
    let imageName = this.props.images.map((image) => {
            return  image = image.title
})

        
    let imagePath =  this.props.images.map((image) => {
                     return  image = image.path
            })

    let tagName = this.props.tags.map((tag) => {
                    return tag = tag.name
    })

    
        console.log(imagePath)
        return (
                <div>
                    <h1>{imageName[this.state.image_spot]}</h1>
                   <img src = {imagePath[this.state.image_spot]} />
                   <p> {tagName} </p>
                  

                   <button onClick= {this.handlePrevious}>Previous</button>
                   <button onClick={this.handleNext}> Next</button>
                   <select value={this.state.id} onChange={this.handleTagChange} >
                       <option >Pick an state</option>
                       {this.props.tags.map(tag => {
                            return (
                       <option >{tag.name}</option>
                    //    <option value={tag.name} value={tag.id}>{tag.name}</option>
                            )})}
                   
                   </select>
                   <button onClick={this.handleAdd}> Add Tag </button>
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
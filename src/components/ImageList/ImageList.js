import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import axios from 'axios';
import './ImageList.css'



class ImageList extends Component {

state = {
    image_url: '', 
    tag: 0

}

componentDidMount() {
    this.props.dispatch({ type: 'FETCH_IMAGES'})
    this.props.dispatch({ type: 'FETCH_TAGS'})
   
} 


    render() {
        
    let imagePath =  this.props.images.map((image) => {
                     return  image = image.path
            })

    let tagName = this.props.tags.map((tag) => {
                    return tag = tag.name
    })

    
        console.log(imagePath)
        return (
                <div>
                   <img src = {imagePath} />
                   <p> {tagName} </p>
                   <pre> {JSON.stringify(imagePath)}  </pre>
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
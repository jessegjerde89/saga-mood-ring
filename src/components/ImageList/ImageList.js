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
   
} 


    render() {
        
    let imagePath =  this.props.images.map((image) => {
                     return  image = image.path
            }
                )
        console.log(imagePath)
        return (
                <div>
                   <img src ={imagePath[4]} />
                </div>
        )
    }
}



const mapRedux = (reduxState) => {
    return { images : reduxState.images }
}

export default connect(mapRedux)(ImageList); 
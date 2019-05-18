import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import axios from 'axios';



class ImageList extends Component {

state = {
    image_url: '', 
    tag: 0

}

componentDidMount() {
    this.props.dispatch({ type: 'FETCH_IMAGES', payload: this.state})
   
} 


    render() {
        
    let imagePath =  this.props.images.map((image) => {
                     return  <div key={image.id} image = {image.path}  />
            }
                )
        console.log(this.props.images)
        return (
                <div>
                   {JSON.stringify({imagePath})}
                </div>
        )
    }
}



const mapRedux = (reduxState) => {
    return { images : reduxState.images }
}

export default connect(mapRedux)(ImageList); 
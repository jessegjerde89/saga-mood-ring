
import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import axios from 'axios';




class Tags extends Component {

    render() {

        let imageid = this.props.images.map((image) => {
            return image = image.id  
        })
        // let added_tags =  this.props.added_tags.map((tag) => {
        //     return tag = tag.name
        // })

        console.log(this.props.added_tags)
        console.log(this.props.images)
        console.log(this.props.tags)
        console.log(imageid)
        return ( 
            <div>
            {this.props.added_tags.map((tag)=> {
                if (tag.images_id === imageid) {
                    return <div>(tag.name)</div>
                }})}
            </div>
        )
        
    }
}
const mapRedux = (reduxState) => {
    return { 
        added_tags : reduxState.image_tags,
        images : reduxState.images,
        tags : reduxState.tags
    }
}
export default connect(mapRedux)(Tags); 
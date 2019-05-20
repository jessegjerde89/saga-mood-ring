
import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import axios from 'axios';




class Tags extends Component {

    render() {


        let added_tags =  this.props.added_tags.map((tag) => {
            return tag = tag.title
        })
        return ( 



            <ul>
            <li>{added_tags}</li>
           </ul>

        )
    }
}
const mapRedux = (reduxState) => {
    return { 
        images : reduxState.images,
        tags : reduxState.tags,
        added_tags : reduxState.image_tags
    }
}
export default connect(mapRedux)(ImageList); 
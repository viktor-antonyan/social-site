import React, {Component} from "react"
import MyPosts from "./MyPosts";
import {addPost} from "../../../redux/actions";
import {connect} from "react-redux";

export class MyPostsContainer extends Component{
    // eslint-disable-next-line no-undef
    addNewPost = (formData) => {
        this.props.addPost(formData.newPost)
    }
    render() {
        return(
            <MyPosts {...this.props} addNewPost={this.addNewPost}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.profileData.posts,
        currentText: state.profileData.currentText
    }
}

export default  connect(mapStateToProps, {addPost})(MyPostsContainer)
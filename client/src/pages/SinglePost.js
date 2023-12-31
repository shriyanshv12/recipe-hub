import React, { useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import moment from "moment";
import { getPost } from "../redux/features/postSlice";

const SinglePost = () => {
    const dispatch = useDispatch();
    const { post } = useSelector((state) => ({ ...state.post }));
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            dispatch(getPost(id));
          }
              // eslint-disable-next-line react-hooks/exhaustive-deps
        },[id])
        return (
            <>
            <MDBContainer style={{ width: "60%", marginTop:"80px"}} >
              <MDBCard className="mb-3 mt-20">
                <MDBCardImage
                  position="top"
                  style={{ width: "100%", maxHeight: "600px" }}
                  src={post.imageFile}
                  alt={post.title}
                />
                <MDBCardBody>
                <h3>{post.title}</h3>
            <span>
              <p className="text-start postName">Created By: {post.name}</p>
            </span>
            <MDBCardText className="text-start mt-2">
              <MDBIcon
                style={{ float: "left", margin: "5px" }}
                far
                icon="calendar-alt"
                size="lg"
              />
              <small className="text-muted">
                {moment(post.createdAt).fromNow()}
              </small>
            </MDBCardText>
            <MDBCardText className="lead mb-0 text-start">
             Making time - {post.time} minutes
            </MDBCardText>
            <MDBCardText className="lead mb-0 text-start">
             Ingredients used - {post.ingredients}
            </MDBCardText>
            <MDBCardText className="lead mb-0 text-start">
             Description- {post.description}
            </MDBCardText>
            </MDBCardBody>
            </MDBCard>
            </MDBContainer>
            </>
        );
};
export default SinglePost;
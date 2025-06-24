import CreatePostHeader from "../components/createPost/CreatePostHeader";
import CreatePostBody from "../components/createPost/CreatePostBody";

export default function CreatePost(){
    return (
        <div className="main-container">
            <CreatePostHeader />
            <CreatePostBody />
        </div>
    );
}
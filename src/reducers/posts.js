import { FETCH_ALL, CREATE, DELETE, UPDATE } from "../constants/actionTypes";

const posts = (posts = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;

        case CREATE:
            return [...posts, action.payload];

        case UPDATE:
            // gonna loop over the posts array and finding the post with given id and returning the changes;
            // console.log(posts);
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));

        case DELETE:
            return posts.filter((post) => post._id !== action.payload);

        // case LIKE:
        //     return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    
        default:
            return posts;
    }
};

export default posts;

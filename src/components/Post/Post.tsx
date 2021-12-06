import { Props } from "./types";

export default function Post(post: Props) {
    return (
        <p>{post.post.title}</p>
    )
}
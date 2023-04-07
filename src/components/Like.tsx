import { LikeProps } from "../types/types";

function Like(props: LikeProps) {
    const like = props.like;

    return (
        <div>
            {like ? <img className="like-img" src={'images/favorite-icon.png'} /> : <></>}
        </div>
    )
}

export default Like;
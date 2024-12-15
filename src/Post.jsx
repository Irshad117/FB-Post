import { useState } from "react";
import "./Post.css"
export default function Post() {
    let [likes, setLikes] = useState(0)
    function count() {
        setLikes(likes + 1)
    }
    const handleSliderChange = (event) => {
    };

    return (
        <>
        <div className="card" style={{ width: "18rem" }}>
            <img src="https://scontent.fkhi20-1.fna.fbcdn.net/v/t1.6435-9/132191664_1537661376420583_972805415563373402_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeExRBPtMYtONKg5_yi92_ga3jlCDRXz2MveOUINFfPYy8RmwFtUhWJRjlJFUwrYZyJ0bGQDgI_o3tn-55ddcDVe&_nc_ohc=7YYBwBGtr8cQ7kNvgHiYG06&_nc_zt=23&_nc_ht=scontent.fkhi20-1.fna&_nc_gid=AP67aW2r8aVKQYlnFGdNB6A&oh=00_AYDJCqDji5lZrht993z3jUIFhPdQkR_ROX6NpwmCFw4hLw&oe=67825264" className="card-img-top" alt="Top Image" />
            <div className="card-body">
                <h5 className="card-title">Irshad Ahmed</h5>
                <p className="card-text">I slept and dreamt that life was joy. I awoke and saw that life was service. I acted and behold, service was joy.</p>
                <button type="button" className="btn btn-light" onClick={count}> {likes ? (<i className="fa-solid fa-heart"></i>) : (<i className="fa-regular fa-heart"></i>)}
                    <span className="position-relative top-0 start-100 translate-middle badge rounded-pill bg-danger">{likes}</span>
                </button>
            </div>
        </div >
        </>
    )
}
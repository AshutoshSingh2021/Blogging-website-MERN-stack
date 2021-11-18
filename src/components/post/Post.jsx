import './post.css'

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="images/pexels-josh-sorenson-1714208.jpg" alt="" />
            <div className="postInfo">
                <div className="postCatg">
                    <span className="postCat">Technology</span>
                    <span className="postCat">Business</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor sit amet.</span>
                <hr />
                <span className="postDate">18 November, 2021</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magni maxime velit, illum ducimus facere iste at tempora. Cupiditate voluptatem architecto quibusdam nam modi?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magni maxime velit, illum ducimus facere iste at tempora. Cupiditate voluptatem architecto quibusdam nam modi?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magni maxime velit, illum ducimus facere iste at tempora. Cupiditate voluptatem architecto quibusdam nam modi?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magni maxime velit, illum ducimus facere iste at tempora. Cupiditate voluptatem architecto quibusdam nam modi?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione magni maxime velit, illum ducimus facere iste at tempora. Cupiditate voluptatem architecto quibusdam nam modi?
            </p>

        </div>
    )
}

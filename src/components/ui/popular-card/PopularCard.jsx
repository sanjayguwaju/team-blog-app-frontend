import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./_popular__card.scss"

const posts = [
    {
        id: 1,
        category: 'Technology',
        title: 'The Rise of Artificial Intelligence: Impact on Society',
        author: 'Sarah Johnson',
        date: 'February 28, 2024 at 09:15 AM',
        likes: 45,
        comments: 10,
        content: 'Artificial Intelligence (AI) has emerged as a transformative technology with profound impacts on various aspects of society. From healthcare to finance, AI is revolutionizing...'
    },
    {
        id: 2,
        category: 'Technology',
        title: 'Blockchain Technology: Beyond Cryptocurrency',
        author: 'Michael Smith',
        date: 'March 10, 2024 at 11:30 AM',
        likes: 32,
        comments: 5,
        content: 'While blockchain technology gained prominence with the rise of cryptocurrencies like Bitcoin, its potential reaches far beyond digital currencies. Blockchain...'
    },
    // Add more real blog posts about technology as needed
];


const PopularCard = () => {
    return (
        <div className="popular-card col-12">
            <h2 className="popular-card__title">Popular posts</h2>
            <div className="popular-card__list">
                {posts.map(post => (
                    <a key={post.id} href="#0" className="popular-card__item">
                        <div className="popular-card__category">{post.category}</div>
                        <h3 className="popular-card__heading">{post.title}</h3>
                        <p className="popular-card__info">Author: {post.author} (<time dateTime={post.date}>{post.date}</time>)</p>
                        <div className="popular-card__meta">
                            <span className="popular-card__likes"><FontAwesomeIcon icon={faThumbsUp} /> {post.likes}</span>
                            <span className="popular-card__comments"><FontAwesomeIcon icon={faComment} /> {post.comments}</span>
                        </div>
                        <p className="popular-card__content">{post.content}</p>
                    </a>
                ))}
            </div>      
        </div>
    );
}

export default PopularCard;


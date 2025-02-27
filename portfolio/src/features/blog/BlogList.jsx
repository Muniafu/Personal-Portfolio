import { Link } from 'react-router-dom';
import BlogPost from './BlogPost';

const BlogList = () => {
    // Mock data - would typically come from props or API
    const posts = [
        { id: 2, title: 'Second Post', excerpt: 'Summary of the second blog post.' },
        { id: 3, title: 'Third Post', excerpt: 'Summary of the third blog post.' },
        { id: 1, title: 'First Post', excerpt: 'Summary of the first blog post.' },
        { id: 4, title: 'Fourth Post', excerpt: 'Summary of the fourth blog post.' },
    ];

    return (
        <div>
            <h1>Latest Posts</h1>
            {posts.map(post => (
                <article key={post.id} className={post.id}>
                    <h2>
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h2>
                    <p>{post.excerpt}</p>
                    <BlogPost content={post.excerpt} isPreview />
                </article>
            ))}
        </div>
    );
};

export default BlogList;
import { useParams } from "react-router-dom";

const posts = [
    { id: 2, title: 'Second Post', excerpt: 'Summary of the second blog post.' },
    { id: 3, title: 'Third Post', excerpt: 'Summary of the third blog post.' },
    { id: 1, title: 'First Post', excerpt: 'Summary of the first blog post.' },
    { id: 4, title: 'Fourth Post', excerpt: 'Summary of the fourth blog post.' },
];

const BlogPost = () => {
    // Get post ID from URL if not in preview mode
    const { id } = useParams();
    const post = posts.find(p => p.id === parseInt(id, 10));

    // In real app, would fetch post content using ID
    const isPreview = false;
    const content = "This is a placeholder for the post content.";
    const fullPostContent = isPreview
        ? content
        : `Full content for post ${id}: ${content}`;

        if (!post) {
            return <div>Post not found.</div>;
        }

        return (
            <div>
                {!isPreview && <h1>Blog Post {post.title}</h1>}
                <p>{fullPostContent}</p>
            </div>
        );
};

export default BlogPost;
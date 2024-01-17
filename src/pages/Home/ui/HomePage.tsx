import { PostList } from '../../../entities/post';
import { useGetPostsQuery } from '../model/api/postsApi';

function HomePage() {
    const { data: posts = [] } = useGetPostsQuery();

    return (
        <main className='flex min-h-screen flex-col bg-[#ffffff] container mx-auto my-auto overflow-hidden pb-48'>
            <h1 className='text-5xl m-12 mx-auto'>Список постов</h1>
            <PostList posts={posts} />
        </main>
    );
}
export default HomePage;

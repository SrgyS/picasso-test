import { useNavigate, useParams } from 'react-router-dom';

import { PostCard } from '../../../entities/post';
import { RoutePath } from '../../../shared/config/routeConfig/routeConfig';
import { useGetPostByIdQuery } from '../model/api/postApi';

function PostPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: postData } = useGetPostByIdQuery(id as string);

    if (!id) {
        navigate(RoutePath.not_found);
        return null;
    }

    return (
        <main className='flex min-h-screen flex-col bg-[#ffffff] container mx-auto my-auto'>
            <h1 className='text-5xl text-center m-12'>Пост</h1>
            {postData ? <PostCard post={postData} /> : null}
        </main>
    );
}

export default PostPage;

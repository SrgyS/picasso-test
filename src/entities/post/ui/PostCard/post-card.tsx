import { Button } from '../../../../shared/ui/buttons/Button';
import { Post } from '../../model/types/post';
import { RoutePath } from '../../../../shared/config/routeConfig/routeConfig';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface PostCardProps {
    post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
    const navigate = useNavigate();
    const onBackToList = useCallback(() => {
        navigate(RoutePath.home);
    }, [navigate]);

    return (
        <div className='flex flex-col gap-4 p-6 border-2 border-blue-200 rounded-md my-3'>
            <h1 className='text-4xl'>{post.title}</h1>
            <p className='text-2xl'>{post.body}</p>
            <Button onClick={onBackToList}>Назад к списку</Button>
        </div>
    );
};

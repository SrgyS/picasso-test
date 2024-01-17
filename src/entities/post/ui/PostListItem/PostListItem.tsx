import { Button } from '../../../../shared/ui/buttons/Button';
import { Post } from '../../model/types/post';
import { RoutePath } from '../../../../shared/config/routeConfig/routeConfig';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface PostListItemProps {
    post: Post;
    style: React.CSSProperties;
}

export function PostListItem({ post, style }: PostListItemProps) {
    const navigate = useNavigate();

    const onOpenPost = useCallback(() => {
        navigate(RoutePath.post + post.id);
    }, [navigate, post.id]);

    return (
        <div
            className='flex flex-col p-4 border-2 border-blue-200 rounded-md gap-4'
            style={style}
        >
            <div className='flex justify-start items-center gap-4'>
                <span>{post.id}.</span>
                <h2 className='text-xl '>{post.title}</h2>
            </div>
            <p className='overflow-hidden overflow-ellipsis whitespace-nowrap w-100'>
                {post.body}
            </p>
            <Button onClick={onOpenPost}>Read More</Button>
        </div>
    );
}

import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { Post } from '../../model/types/post';
import { PostListItem } from '../PostListItem/PostListItem';

interface PostListProps {
    posts: Post[];
}

export function PostList({ posts }: PostListProps) {
    return (
        <div className='grow px-24'>
            <AutoSizer>
                {({ height, width }) => (
                    <List
                        itemData={posts}
                        height={height}
                        itemCount={posts.length}
                        itemSize={180}
                        width={width}
                        innerElementType='div'
                    >
                        {({ index, data, style }) => {
                            return (
                                <PostListItem
                                    post={data[index]}
                                    style={style}
                                />
                            );
                        }}
                    </List>
                )}
            </AutoSizer>
        </div>
    );

    // <PostListItem post={post} />;
}

// return (
// <div className='flex flex-col gap-6'>
//     {posts.length > 0 ? posts.map(renderPost) : null}
// </div>

// );

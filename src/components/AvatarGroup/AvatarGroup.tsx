import { Avatar } from '../Avatar/Avatar';

type Props = {
  srcs: string[];
  limit?: number;
  size?: 'small' | 'medium' | 'large';
};

export function AvatarGroup({ srcs, limit = 5, size = 'medium' }: Props) {
  return (
    <div className="flex -space-x-4">
      {srcs.slice(0, limit).map((url) => (
        <Avatar src={url} size={size} outline />
      ))}
    </div>
  );
}

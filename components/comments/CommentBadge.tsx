interface CommentBadgeProps {
  member: boolean;
}

export default function CommentBadge({
  member,
}: CommentBadgeProps) {

  if (!member) {
    return null;
  }

  return (

    <span className="comment-dev-badge">
      [DEV]
    </span>

  );

}
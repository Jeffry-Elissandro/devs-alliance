import { Comment } from "@/lib/comments/types";

import CommentCard from "./CommentCard";

interface CommentListProps {
  comments: Comment[];
}

export default function CommentList({
  comments,
}: CommentListProps) {

  return (

    <section className="comment-list">

      {comments.map((comment) => (

        <CommentCard
          key={comment.id}
          comment={comment}
        />

      ))}

    </section>

  );

}
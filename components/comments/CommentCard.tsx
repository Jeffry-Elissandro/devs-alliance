import { Comment } from "@/lib/comments/types";

import CommentBadge from "./CommentBadge";
import FeaturedComment from "./FeaturedComment";

interface CommentCardProps {
  comment: Comment;
}

export default function CommentCard({
  comment,
}: CommentCardProps) {

  const formattedDate =
    new Date(comment.createdAt).toLocaleDateString(
      "es-GT",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    );

  return (

    <article
      className={
        comment.featured
          ? "comment-card featured"
          : "comment-card"
      }
    >

      <header className="comment-card-header">

        <div className="comment-card-user">

          <h3>

            {comment.nickname}

            <CommentBadge
              member={comment.member}
            />

            {comment.featured && (

              <FeaturedComment />

            )}

          </h3>

          <span className="comment-card-date">

            {formattedDate}

          </span>

        </div>

      </header>

      <p className="comment-card-message">

        {comment.message}

      </p>

      <footer className="comment-card-footer">

        <button
          type="button"
          className="comment-like-button"
        >

          👍 {comment.likes}

        </button>

      </footer>

    </article>

  );

}
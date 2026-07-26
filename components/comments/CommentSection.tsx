"use client";

import { useEffect, useState } from "react";

import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import EmptyComments from "./EmptyComments";

import { Comment } from "@/lib/comments/types";

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([]);

  const [loading, setLoading] = useState(true);

  async function loadComments() {
    try {
      setLoading(true);

      const response = await fetch("/api/comments");

      const data = await response.json();

      setComments(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadComments();
  }, []);

  return (
    <section className="comments-section">
      <CommentForm
        onCommentAdded={loadComments}
      />

      {loading ? (

  <p className="comments-loading">

    Cargando comentarios...

  </p>

) : (

  <>

    <div className="comments-divider">

      <h2>

        Comentarios de la comunidad

      </h2>

      <p>

        Cada experiencia compartida ayuda a construir una comunidad
        más fuerte. Gracias por dedicar unos minutos para dejar tu
        opinión.

      </p>

    </div>

    {comments.length === 0 ? (

      <EmptyComments />

    ) : (

      <CommentList
        comments={comments}
      />

    )}

  </>

)}
    </section>
  );
}
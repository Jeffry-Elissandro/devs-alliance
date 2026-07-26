"use client";

import { useState } from "react";

interface CommentFormProps {
  onCommentAdded?: () => void;
}

export default function CommentForm({
  onCommentAdded,
}: CommentFormProps) {
  const [nickname, setNickname] = useState("");

  const [message, setMessage] = useState("");

  const [code, setCode] = useState("");

  const [sending, setSending] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSuccess("");
    setError("");

    // Validación del Nick

    if (!nickname.trim()) {
      setError("Debes escribir un nombre o Nick.");
      return;
    }

    // Validación del comentario

    if (!message.trim()) {
      setError("Escribe un comentario antes de enviarlo.");
      return;
    }

    if (message.trim().length > 500) {
      setError(
        "El comentario supera el límite de 500 caracteres."
      );
      return;
    }

    setSending(true);

    try {
      const response = await fetch("/api/comments", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          nickname: nickname.trim(),
          message: message.trim(),
          code: code.trim(),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error ??
            "No fue posible enviar el comentario."
        );
      }

      // Limpiar formulario

      setNickname("");

      setMessage("");

      setCode("");

      setSuccess(
        "¡Gracias por compartir tu comentario con DEV'S ALLIANCE!"
      );

      // Actualizar comentarios

      onCommentAdded?.();

    } catch (error) {

      setError(
        error instanceof Error
          ? error.message
          : "Ocurrió un error inesperado."
      );

    } finally {

      setSending(false);

    }
  }

  return (
    <section className="comment-form-section">

      <div className="comment-form-card">

        <div className="comment-form-header">

          <span className="comment-form-icon">
            💬
          </span>

          <h2>
            Comparte tu experiencia
          </h2>

          <p>
            Tu opinión ayuda a mejorar DEV'S ALLIANCE y puede orientar
            a futuros miembros de la comunidad.
          </p>

          <p className="comment-form-note">
            Todos los comentarios son revisados para mantener un
            ambiente respetuoso y agradable para todos.
          </p>

        </div>

        <form
          className="comment-form"
          onSubmit={handleSubmit}
        >

          <div className="comment-field">

            <label htmlFor="nickname">
              Nickname
            </label>

            <input
              id="nickname"
              type="text"
              autoComplete="nickname"
              maxLength={30}
              placeholder="Ej. CHESSDEV"
              value={nickname}
              onChange={(event) =>
                setNickname(
                  event.target.value.slice(0, 30)
                )
              }
            />

          </div>

          <div className="comment-field">

            <label htmlFor="message">
              Comentario
            </label>

            <textarea
              id="message"
              rows={6}
              maxLength={500}
              placeholder="Escribe aquí tu comentario..."
              value={message}
              onChange={(event) =>
                setMessage(
                  event.target.value.slice(0, 500)
                )
              }
            />

            <span className="comment-counter">
              {message.length}/500
            </span>

          </div>

          <div className="comment-field">

            <label htmlFor="code">
              Código DEV (opcional)
            </label>

            <input
              id="code"
              type="password"
              autoComplete="off"
              placeholder="Solo miembros"
              value={code}
              onChange={(event) =>
                setCode(event.target.value)
              }
            />

          </div>

          {error && (

            <p className="comment-error">
              {error}
            </p>

          )}

          {success && (

            <p className="comment-success">
              {success}
            </p>

          )}

          <button
            type="submit"
            className="comment-submit-button"
            disabled={
              sending ||
              !nickname.trim() ||
              !message.trim()
            }
          >

            {sending
              ? "Enviando..."
              : "Enviar comentario"}

          </button>

        </form>

      </div>

    </section>
  );
}
export const COMMENT_LIMITS = {
  nicknameMin: 3,
  nicknameMax: 20,

  messageMin: 3,
  messageMax: 300,
};

export function validateNickname(nickname: string) {
  const value = nickname.trim();

  if (value.length < COMMENT_LIMITS.nicknameMin) {
    return "El nombre es demasiado corto.";
  }

  if (value.length > COMMENT_LIMITS.nicknameMax) {
    return "El nombre es demasiado largo.";
  }

  return null;
}

export function validateMessage(message: string) {
  const value = message.trim();

  if (value.length < COMMENT_LIMITS.messageMin) {
    return "Escribe un comentario.";
  }

  if (value.length > COMMENT_LIMITS.messageMax) {
    return "El comentario supera el límite permitido.";
  }

  return null;
}
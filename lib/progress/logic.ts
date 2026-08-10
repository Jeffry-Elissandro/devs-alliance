import { data } from "./data";

// ========================================
// CONSTANTES DEL PROGRESO
// ========================================

const DIAMOND_SCORE = 16000;

// ========================================
// RANGO DEL GREMIO
// ========================================

export function getGuildRank(score: number) {
  if (score >= 16000) {
    return "Diamante";
  }

  if (score >= 12000) {
    return "Oro";
  }

  if (score >= 8000) {
    return "Plata";
  }

  if (score >= 4000) {
    return "Bronce";
  }

  return "Sin rango";
}

// ========================================
// PORCENTAJE DE PROGRESO
// ========================================

export function getProgressPercentage(score: number) {
  return Math.round((score / DIAMOND_SCORE) * 100);
}

// ========================================
// PROGRESO VISUAL DE LA BARRA
// ========================================

export function getProgressBarPercentage(score: number) {
  return Math.min(
    getProgressPercentage(score),
    100
  );
}

// ========================================
// ESTADO VISUAL DE LA BARRA
// ========================================

export function getProgressState(score: number) {
  if (score >= 16000) {
    return "diamond";
  }

  if (score >= 12000) {
    return "gold";
  }

  if (score >= 8000) {
    return "silver";
  }

  if (score >= 4000) {
    return "bronze";
  }

  return "none";
}

// ========================================
// DATOS CALCULADOS DEL PROGRESO
// ========================================

export function getProgressData(score: number = data.score_actual) {
  return {
    score,

    diamondScore: DIAMOND_SCORE,

    rank: getGuildRank(score),

    percentage: getProgressPercentage(score),

    barPercentage: getProgressBarPercentage(score),

    state: getProgressState(score),
  };
}
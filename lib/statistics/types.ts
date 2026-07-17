export type AllianceRank =
  | "Líder"
  | "Colíder"
  | "Especialista"
  | "Miembro";

export type PerformanceStatus =
  | "TOP"
  | "Elite"
  | "Sólido"
  | "Aceptable"
  | "Ineficiente";

export interface MemberData {
  name: string;
  points: number;
  damage: number;

  rank?: AllianceRank;
  id?: string;
  level?: number;
  power?: number;
}

export interface EvaluatedMember extends MemberData {
  pointsGrade: number;
  damageGrade: number;
  consistency: number;
  score: number;
  status: PerformanceStatus;
}

export interface StatisticsConfig {
  pointsGoal: number;
  damageGoal: number;

  pointsWeight: number;
  damageWeight: number;
}
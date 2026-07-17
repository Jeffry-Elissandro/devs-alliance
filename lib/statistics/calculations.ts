import {
  EvaluatedMember,
  MemberData,
  PerformanceStatus,
  StatisticsConfig,
} from "./types";

export const statisticsConfig: StatisticsConfig = {
  pointsGoal: 500,
  damageGoal: 200,

  pointsWeight: 0.85,
  damageWeight: 0.15,
};

export function calculatePointsGrade(
  points: number,
  config: StatisticsConfig = statisticsConfig
): number {
  return Number(
    Math.min(10, (points / config.pointsGoal) * 10).toFixed(2)
  );
}

export function calculateDamageGrade(
  damage: number,
  config: StatisticsConfig = statisticsConfig
): number {
  return Number(
    Math.min(10, (damage / config.damageGoal) * 10).toFixed(2)
  );
}

export function calculateConsistency(
  pointsGrade: number,
  damageGrade: number,
  config: StatisticsConfig = statisticsConfig
): number {
  const consistency =
    pointsGrade * config.pointsWeight +
    damageGrade * config.damageWeight;

  return Number(consistency.toFixed(2));
}

export function calculateScore(consistency: number): number {
  return Number((consistency * 10).toFixed(2));
}

export function classifyPerformance(
  score: number
): PerformanceStatus {
  if (score === 100) {
    return "TOP";
  }

  if (score >= 85) {
    return "Elite";
  }

  if (score >= 70) {
    return "Sólido";
  }

  if (score >= 50) {
    return "Aceptable";
  }

  return "Ineficiente";
}

export function evaluateMember(
  member: MemberData,
  config: StatisticsConfig = statisticsConfig
): EvaluatedMember {
  const pointsGrade = calculatePointsGrade(
    member.points,
    config
  );

  const damageGrade = calculateDamageGrade(
    member.damage,
    config
  );

  const consistency = calculateConsistency(
    pointsGrade,
    damageGrade,
    config
  );

  const score = calculateScore(consistency);

  const status = classifyPerformance(score);

  return {
    ...member,

    pointsGrade,
    damageGrade,
    consistency,
    score,
    status,
  };
}

export function evaluateMembers(
  members: MemberData[],
  config: StatisticsConfig = statisticsConfig
): EvaluatedMember[] {
  return members
    .map((member) => evaluateMember(member, config))
    .sort((a, b) => b.score - a.score);
}
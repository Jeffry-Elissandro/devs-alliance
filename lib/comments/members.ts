export const DEV_MEMBER_CODE = "monika";

export function isMember(code: string): boolean {
  return code.trim().toLowerCase() === DEV_MEMBER_CODE;
}
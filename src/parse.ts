import { parse as parseMessageFormat, Token } from "messageformat-parser";

export function parse(source: string): Token[] {
  const tokens = parseMessageFormat(source, { strict: true });
  return tokens;
}

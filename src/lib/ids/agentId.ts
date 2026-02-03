export const generateAgentId = ({ agentKey }: { agentKey: string }): string => {
  const trimmed = agentKey.trim();
  if (!trimmed) {
    throw new Error("Agent key is required to generate an agent id.");
  }
  return `agent-${trimmed}`;
};

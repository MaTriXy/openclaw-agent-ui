import { describe, expect, it } from "vitest";

import { getAgentSummaryPatch, getChatSummaryPatch } from "@/features/agents/state/summary";

describe("agent summary reducer", () => {
  it("updates preview and activity from assistant chat", () => {
    const patch = getChatSummaryPatch(
      {
        runId: "run-1",
        sessionKey: "agent:main:studio:agent-1",
        state: "final",
        message: { role: "assistant", content: "Hello" },
      },
      123
    );

    expect(patch?.latestPreview).toBe("Hello");
    expect(patch?.lastActivityAt).toBe(123);
  });

  it("updates status from agent lifecycle events", () => {
    const patch = getAgentSummaryPatch(
      {
        runId: "run-2",
        stream: "lifecycle",
        data: { phase: "start" },
      },
      456
    );

    expect(patch?.status).toBe("running");
    expect(patch?.lastActivityAt).toBe(456);
  });
});

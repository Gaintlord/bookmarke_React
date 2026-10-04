import { useEffect, useState } from "react";
import { checkSession } from "./checkSession";

export type SessionState = "checking" | "ready" | "missing";

export const useSession = (): SessionState => {
  const [state, setState] = useState<SessionState>("checking");

  useEffect(() => {
    let cancelled = false;

    checkSession().then((ok) => {
      if (!cancelled) setState(ok ? "ready" : "missing");
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
};

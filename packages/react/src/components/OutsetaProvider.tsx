import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type {
  AuthWidgetOptions,
  OutsetaEmbed,
  OutsetaUser,
  ProfileWidgetOptions,
} from "./types.js";

export interface OutsetaContextValue {
  user: OutsetaUser | null;
  isLoading: boolean;
  logout: () => void;
  openLogin: (options?: AuthWidgetOptions) => void;
  openSignup: (options?: AuthWidgetOptions) => void;
  openProfile: (options?: ProfileWidgetOptions) => void;
}

const OutsetaContext = createContext<OutsetaContextValue | null>(null);

export function useOutseta(): OutsetaContextValue {
  const context = useContext(OutsetaContext);
  if (!context) {
    throw new Error("useOutseta must be used within an OutsetaProvider");
  }
  return context;
}

function getOutseta(): OutsetaEmbed | null {
  if (typeof window !== "undefined" && window.Outseta) {
    return window.Outseta;
  }
  return null;
}

export function OutsetaProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<"init" | "ready">("init");
  const [user, setUser] = useState<OutsetaUser | null>(null);
  const outsetaRef = useRef<OutsetaEmbed | null>(null);

  useEffect(() => {
    const outseta = getOutseta();
    if (!outseta) return;
    outsetaRef.current = outseta;

    const updateUser = async () => {
      try {
        const outsetaUser = await outseta.getUser();
        setUser(outsetaUser);
      } catch {
        setUser(null);
      } finally {
        setStatus("ready");
      }
    };

    // Subscribe to user-related events
    outseta.on("subscription.update", updateUser);
    outseta.on("profile.update", updateUser);
    outseta.on("account.update", updateUser);

    // Handle OAuth callback access_token from URL
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("access_token");

    if (accessToken) {
      outseta.setAccessToken(accessToken);

      // Clean up URL without triggering navigation
      params.delete("access_token");
      const newSearch = params.toString();
      const newUrl =
        window.location.pathname +
        (newSearch ? `?${newSearch}` : "") +
        window.location.hash;
      window.history.replaceState({}, "", newUrl);
    }

    // Check existing auth state
    const checkAuth = async () => {
      try {
        const token = await outseta.getAccessToken();
        if (token) {
          await updateUser();
        } else {
          setStatus("ready");
        }
      } catch {
        setStatus("ready");
      }
    };

    checkAuth();

    return () => {
      // Replace event handlers with no-ops on cleanup
      outseta.on("subscription.update", () => {});
      outseta.on("profile.update", () => {});
      outseta.on("account.update", () => {});
    };
  }, []);

  const logout = () => {
    const outseta = outsetaRef.current;
    if (!outseta) return;
    outseta.setAccessToken("");
    setUser(null);
    outseta.logout();
  };

  const openLogin = (options: AuthWidgetOptions = {}) => {
    outsetaRef.current?.auth.open({
      widgetMode: "login|register",
      authenticationCallbackUrl: window.location.href,
      ...options,
    });
  };

  const openSignup = (options: AuthWidgetOptions = {}) => {
    outsetaRef.current?.auth.open({
      widgetMode: "register",
      authenticationCallbackUrl: window.location.href,
      ...options,
    });
  };

  const openProfile = (options: ProfileWidgetOptions = {}) => {
    outsetaRef.current?.profile.open({ tab: "profile", ...options });
  };

  return (
    <OutsetaContext.Provider
      value={{
        user,
        isLoading: status !== "ready",
        logout,
        openLogin,
        openSignup,
        openProfile,
      }}
    >
      {children}
    </OutsetaContext.Provider>
  );
}

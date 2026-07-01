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
  EmailListWidgetOptions,
  LeadCaptureWidgetOptions,
  OutsetaEmbed,
  OutsetaUser,
  ProfileWidgetOptions,
  SupportWidgetOptions,
} from "./types.js";

export interface OutsetaContextValue {
  user: OutsetaUser | null;
  isLoading: boolean;
  logout: () => void;
  openAuth: (options?: AuthWidgetOptions) => void;
  openLogin: (options?: AuthWidgetOptions) => void;
  openSignup: (options?: AuthWidgetOptions) => void;
  openProfile: (options?: ProfileWidgetOptions) => void;
  openSupport: (options?: SupportWidgetOptions) => void;
  openEmailList: (options: EmailListWidgetOptions) => void;
  openLeadCapture: (options: LeadCaptureWidgetOptions) => void;
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

function getCurrentUrl(): string | undefined {
  if (typeof window === "undefined") return undefined;
  return window.location.href;
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

  const openAuth = (options: AuthWidgetOptions = {}) => {
    outsetaRef.current?.auth.open({
      widgetMode: "login|register",
      mode: "popup",
      authenticationCallbackUrl: getCurrentUrl(),
      ...options,
    });
  };

  const openLogin = (options: AuthWidgetOptions = {}) => {
    openAuth({ ...options, widgetMode: "login" });
  };

  const openSignup = (options: AuthWidgetOptions = {}) => {
    openAuth({ ...options, widgetMode: "register" });
  };

  const openProfile = (options: ProfileWidgetOptions = {}) => {
    outsetaRef.current?.profile.open({ tab: "profile", ...options });
  };

  const openSupport = (options: SupportWidgetOptions = {}) => {
    outsetaRef.current?.support?.open({ mode: "popup", ...options });
  };

  const openEmailList = (options: EmailListWidgetOptions) => {
    outsetaRef.current?.emailList?.open({ mode: "popup", ...options });
  };

  const openLeadCapture = (options: LeadCaptureWidgetOptions) => {
    outsetaRef.current?.leadCapture?.open({ mode: "popup", ...options });
  };

  return (
    <OutsetaContext.Provider
      value={{
        user,
        isLoading: status !== "ready",
        logout,
        openAuth,
        openLogin,
        openSignup,
        openProfile,
        openSupport,
        openEmailList,
        openLeadCapture,
      }}
    >
      {children}
    </OutsetaContext.Provider>
  );
}

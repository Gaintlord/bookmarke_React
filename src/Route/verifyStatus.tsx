import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { GradiantButton } from "../components/GradiantBorder/gradiantButton";
import { HomeLogoAncher } from "../components/homeLogoAncher";
import { refreshSession } from "../utils/refreshSession";

type StatusConfig = {
  heading: string;
  message: string;
  actionLabel: string;
  actionTo: string;
  ring: string;
  icon: ReactNode;
};

const VerifiedIcon = () => (
  <svg
    className="size-12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m5 13 4 4L19 7" />
  </svg>
);

const ExpiredIcon = () => (
  <svg
    className="size-12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const UnverifiedIcon = () => (
  <svg
    className="size-12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="m9 9 6 6M15 9l-6 6" />
  </svg>
);

const statusConfig: Record<string, StatusConfig> = {
  verified: {
    heading: "User Verified",
    message: "Your email has been verified. Welcome to Bokmarke.",
    actionLabel: "Go to Dashboard",
    actionTo: "/dashboard",
    ring: "bg-emerald-50 text-emerald-600 ring-emerald-200",
    icon: <VerifiedIcon />,
  },
  expired: {
    heading: "OTP Expired",
    message:
      "That verification code is older than 30 minutes. Sign up again to get a new one.",
    actionLabel: "Back to Sign Up",
    actionTo: "/signup",
    ring: "bg-amber-50 text-amber-600 ring-amber-200",
    icon: <ExpiredIcon />,
  },
  unverified: {
    heading: "Verification Failed",
    message:
      "We couldn't verify this link. It may have already been used or is invalid.",
    actionLabel: "Back to Sign Up",
    actionTo: "/signup",
    ring: "bg-red-50 text-red-600 ring-red-200",
    icon: <UnverifiedIcon />,
  },
};

export default function VerifyStatus() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isHydrating, setIsHydrating] = useState(false);
  const [hydrateError, setHydrateError] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false);
  const requested = searchParams.get("status") ?? "";
  const status = requested in statusConfig ? requested : "unverified";
  const config = statusConfig[status];

  useEffect(() => {
    if (status !== "verified") return;
    let cancelled = false;
    setIsHydrating(true);
    setHydrateError(false);
    refreshSession()
      .then((ok) => {
        if (cancelled) return;
        setIsHydrated(ok);
        if (!ok) setHydrateError(true);
      })
      .finally(() => {
        if (!cancelled) setIsHydrating(false);
      });
    return () => {
      cancelled = true;
    };
  }, [status]);

  const handleAction = async () => {
    if (status === "verified" && !isHydrated) {
      setIsHydrating(true);
      setHydrateError(false);
      const ok = await refreshSession();
      setIsHydrated(ok);
      setIsHydrating(false);
      if (!ok) {
        setHydrateError(true);
        return;
      }
    }
    navigate(config.actionTo, { replace: true });
  };

  return (
    <div className="w-full h-screen bg-blue-50 flex">
      <div className="gradient w-[96%] h-[92%] m-auto rounded-2xl shadow-2xl bg-white flex flex-col">
        <div className="flex justify-center mt-[3%]">
          <HomeLogoAncher className="w-[16%]" />
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div
            className={`flex items-center justify-center size-24 rounded-full ring-2 ${config.ring}`}
          >
            {config.icon}
          </div>
          <h1 className="suse-mono mt-8 text-4xl sm:text-5xl text-blue-950">
            {config.heading}
          </h1>
          <p className="font-mono mt-4 max-w-md text-gray-600">
            {config.message}
          </p>
        </div>
        <div className="flex flex-col items-center mb-[6%]">
          <div
            onClick={isHydrating ? undefined : handleAction}
            className={`cursor-pointer ${
              isHydrating ? "pointer-events-none opacity-60" : ""
            }`}
          >
            <GradiantButton>
              {isHydrating ? "Preparing…" : config.actionLabel}
            </GradiantButton>
          </div>
          {hydrateError && (
            <div className="mt-4 text-center">
              <p className="font-mono text-sm text-red-600">
                We couldn't set up your session. Please try again.
              </p>
              <button
                type="button"
                onClick={handleAction}
                className="font-mono text-sm font-bold text-blue-600 hover:underline"
              >
                Try again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

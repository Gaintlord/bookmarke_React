import { Link } from "react-router-dom";

function SignupGraphic() {
  return (
    <svg
      aria-hidden="true"
      className="h-full w-full"
      fill="none"
      viewBox="0 0 320 230"
    >
      <path
        className="text-blue-400/30"
        d="M86 42h128c25 0 46 21 46 46v67c0 25-21 46-46 46H86c-25 0-46-21-46-46V88c0-25 21-46 46-46Z"
        fill="currentColor"
      />
      <path
        className="text-blue-950/10"
        d="m58 184 77-100 77 100H58Z"
        fill="currentColor"
      />
      <rect
        className="text-white"
        fill="currentColor"
        height="142"
        rx="20"
        width="148"
        x="75"
        y="58"
      />
      <circle
        className="text-blue-100"
        cx="149"
        cy="105"
        fill="currentColor"
        r="27"
      />
      <circle
        className="text-blue-500"
        cx="149"
        cy="99"
        fill="currentColor"
        r="10"
      />
      <path
        className="text-blue-500"
        d="M130 122c3-9 10-14 19-14s16 5 19 14c-5 6-11 10-19 10s-14-4-19-10Z"
        fill="currentColor"
      />
      <path
        className="text-slate-300"
        d="M111 153h76M123 171h52"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="8"
      />
      <circle
        className="text-slate-950"
        cx="214"
        cy="163"
        fill="currentColor"
        r="39"
      />
      <path
        className="text-blue-400"
        d="M214 147v32m-16-16h32"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="8"
      />
    </svg>
  );
}

function RedirectIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M7 17 17 7m-7 0h7v7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function SignUpInstruction() {
  return (
    <section
      aria-labelledby="signup-title"
      className="relative grid w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-900/10 h-[28rem] lg:h-[34rem] md:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="flex flex-col h-full justify-center px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6 lg:px-12 lg:py-14">
        <div className="mb-3 flex w-fit items-center gap-2 rounded-full bg-blue-100 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-900 lg:mb-8 lg:px-3 lg:py-1.5 lg:text-xs">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          Join Bokmarke
        </div>

        <p
          aria-level={1}
          className="max-w-md text-xl font-black leading-[0.98] tracking-[-0.04em] text-slate-950 sm:text-2xl md:text-3xl lg:text-5xl"
          id="signup-title"
          role="heading"
        >
          Add every link you come across
        </p>
        <p className="mt-2 max-w-sm text-xs leading-5 text-slate-600 lg:mt-5 lg:text-base lg:leading-7">
          Sign up to Bokmarke once and our extention start working for every
          site you visit.
        </p>
        <Link to="/signup" target="_blank">
          <div className="group mt-3 flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 active:translate-y-0 lg:mt-8 lg:px-6 lg:py-4 lg:text-sm">
            Sign Up
            <RedirectIcon />
          </div>
        </Link>
        <p className="mt-2 text-center text-[10px] leading-4 text-slate-500 lg:mt-4 lg:text-xs lg:leading-5">
          Free forever. No credit card required.
        </p>

        <p className="mt-3 text-xs text-slate-500 lg:mt-7 lg:text-sm">
          Already have an account?{" "}
          <Link to="/signin" target="_blank">
            <span className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-800">
              Sign in
            </span>
          </Link>
        </p>
      </div>

      <div className="relative min-h-32 overflow-hidden bg-blue-500 p-3 sm:min-h-40 md:min-h-full lg:p-8">
        <div className="absolute inset-x-0 top-0 h-px bg-white/60" />
        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full border-[16px] border-white/20 lg:-right-16 lg:-top-16 lg:h-44 lg:w-44 lg:border-[28px]" />
        <div className="absolute -bottom-8 -left-6 h-20 w-20 rounded-full bg-white/20 lg:-bottom-12 lg:-left-10 lg:h-40 lg:w-40" />
        <div className="relative flex h-full min-h-24 items-center justify-center lg:min-h-64">
          <SignupGraphic />
        </div>
      </div>
    </section>
  );
}

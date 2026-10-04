function DeviceCloudGraphic() {
  return (
    <svg
      aria-label="A laptop sending data to the cloud"
      className="h-full w-full"
      fill="none"
      role="img"
      viewBox="0 0 360 190"
    >
      <rect
        className="text-blue-800/20"
        fill="currentColor"
        height="70"
        rx="10"
        width="94"
        x="21"
        y="63"
      />
      <rect
        className="text-white"
        fill="currentColor"
        height="68"
        rx="10"
        width="94"
        x="17"
        y="58"
      />
      <rect
        className="text-blue-100"
        fill="currentColor"
        height="52"
        rx="6"
        width="78"
        x="25"
        y="66"
      />
      <circle
        className="text-white"
        cx="64"
        cy="92"
        fill="currentColor"
        r="15"
      />
      <path
        className="text-blue-500"
        d="M55 92h18m-9-9v18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="5"
      />
      <path
        className="text-blue-800/20"
        d="M13 130h102l13 13c2 2 0 6-4 6H7c-4 0-6-4-4-7l10-12Z"
        fill="currentColor"
      />
      <path
        className="text-white"
        d="M10 125h108l10 12c2 2 0 6-4 6H5c-4 0-6-4-4-7l9-11Z"
        fill="currentColor"
      />
      <path
        className="text-blue-200"
        d="M126 99c45-30 94-30 143-3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeDasharray="2 11"
        strokeWidth="6"
      />
      <circle
        className="text-white"
        cx="159"
        cy="84"
        fill="currentColor"
        r="6"
      />
      <circle
        className="text-blue-300"
        cx="199"
        cy="78"
        fill="currentColor"
        r="7"
      />
      <circle
        className="text-white"
        cx="239"
        cy="85"
        fill="currentColor"
        r="5"
      />
      <path
        className="text-blue-800/20"
        d="M290 131h42c13 0 23-9 23-21 0-11-8-20-19-21-4-16-18-27-35-27-19 0-34 14-37 32-10 2-18 10-18 19 0 10 9 18 20 18h24Z"
        fill="currentColor"
      />
      <path
        className="text-white"
        d="M287 126h42c13 0 23-9 23-21 0-11-8-20-19-21-4-16-18-27-35-27-19 0-34 14-37 32-10 2-18 10-18 19 0 10 9 18 20 18h24Z"
        fill="currentColor"
      />
      <path
        className="text-blue-500"
        d="M298 108V79m0 0-10 10m10-10 10 10"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="6"
      />
    </svg>
  );
}

export default function DragNDropInstruction() {
  return (
    <section
      aria-labelledby="signup-title"
      className="relative grid w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-900/10 md:h-[34rem] md:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="flex flex-col justify-center px-7 py-10 sm:px-12 sm:py-14">
        <div className="mb-8 flex w-fit items-center gap-2 rounded-full bg-blue-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-blue-900">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          Add Link From any Site
        </div>

        <p
          aria-level={1}
          className="max-w-md text-4xl font-black leading-[0.98] tracking-[-0.04em] text-slate-950 sm:text-5xl"
          id="signup-title"
          role="heading"
        >
          Drag and Drop the Link
        </p>
        <p className="mt-5 max-w-sm text-base leading-7 text-slate-600">
          Grab the link you want to add as a Bokmarke and drag it to the Chest
          and drop
        </p>

        <div className="mt-5 min-h-0 flex-1 overflow-hidden rounded-3xl bg-blue-500 p-3 shadow-lg shadow-blue-500/15">
          <DeviceCloudGraphic />
        </div>

        <p className="mt-7 text-sm text-slate-500">
          Already have an account?{" "}
          <a
            className="font-bold text-blue-600 underline decoration-blue-200 underline-offset-4 hover:text-blue-800"
            href="#signin"
          >
            Sign in
          </a>
        </p>
      </div>

      <div className="min-h-72 bg-blue-500 sm:min-h-96 md:min-h-full flex items-center justify-center">
        <div className="absolute inset-x-0 top-0 h-px bg-white/60" />
        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-[28px] border-white/20" />
        <div className="absolute -bottom-12 right-80 h-40 w-40 rounded-full bg-white/20" />

        <div className="flex items-center justify-center mb-20 mx-5 z-50">
          <img src="DragNDrop.png" alt="Drag and drop" />
        </div>
      </div>
    </section>
  );
}

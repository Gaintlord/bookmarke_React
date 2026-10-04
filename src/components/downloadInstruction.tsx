export function DownloadGraphic() {
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
        d="m62 168 64-83 64 83H62Z"
        fill="currentColor"
      />
      <g className="text-white">
        <path
          d="M98 68h82l42 42v75c0 8-7 15-15 15H98c-8 0-15-7-15-15V83c0-8 7-15 15-15Z"
          fill="currentColor"
        />
        <path
          className="text-slate-100"
          d="M180 68v33c0 5 4 9 9 9h33l-42-42Z"
          fill="currentColor"
        />
      </g>
      <path
        className="text-slate-300"
        d="M108 100h43M108 122h72M108 144h49"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="8"
      />
      <circle
        className="text-slate-950"
        cx="205"
        cy="166"
        fill="currentColor"
        r="40"
      />
      <path
        className="text-blue-400"
        d="M205 143v37m0 0-14-14m14 14 14-14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <path
        className="text-blue-400"
        d="M190 190h30"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="8"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="none" viewBox="0 0 24 24">
      <path
        d="M12 3v12m0 0 5-5m-5 5-5-5M5 21h14"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function DownloadInstruction() {
  return (
    <section
      aria-labelledby="download-title"
      className="relative grid w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-900/10 md:h-[34rem] md:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="flex flex-col justify-center px-7 py-10 sm:px-12 sm:py-14">
        <div className="mb-8 flex w-fit items-center gap-2 rounded-full bg-blue-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-blue-900">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          Ready to go
        </div>

        <p
          className="max-w-md text-4xl font-black leading-[0.98] tracking-[-0.04em] text-slate-950 sm:text-5xl"
          id="download-title"
          role="heading"
          aria-level={1}
        >
          Download Your Bokmarke Extention
        </p>
        <p className="mt-5 max-w-sm text-base leading-7 text-slate-600">
          Get the Bokmarke Extention from the extention stores, or our github
        </p>

        <button
          className="mt-8  flex items-center gap-4 border-y border-slate-200 py-4 hover:scale-105 hover:bg-blue-100 hover:rounded-2xl hover:px-2 duration-200"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://codeload.github.com/Gaintlord/Bokmarke_Extention/zip/refs/heads/master";
          }}
          type="button"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
            <span className="text-xs font-black">ZIP</span>
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">
              Bokmarke Extention
            </p>
            <p className="mt-0.5 text-xs text-slate-500">
              ZIP archive · 136 KB
            </p>
          </div>
        </button>

        <button className="group mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 active:translate-y-0 sm:w-fit">
          <DownloadIcon />
        </button>
      </div>

      <div className="relative min-h-72 overflow-hidden bg-blue-500 p-8 sm:min-h-96 md:min-h-full">
        <div className="absolute inset-x-0 top-0 h-px bg-white/60" />
        <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-[28px] border-white/20" />
        <div className="absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-white/20" />
        <div className="relative flex h-full min-h-64 items-center justify-center">
          <DownloadGraphic />
        </div>
      </div>
    </section>
  );
}

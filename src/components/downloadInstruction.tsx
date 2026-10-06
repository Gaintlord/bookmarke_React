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
      className="relative grid w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-900/10 h-[28rem] lg:h-[34rem] md:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="flex flex-col justify-center px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6 lg:px-12 lg:py-14">
        <div className="mb-3 flex w-fit items-center gap-2 rounded-full bg-blue-100 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-blue-900 lg:mb-8 lg:px-3 lg:py-1.5 lg:text-xs">
          <span className="h-2 w-2 rounded-full bg-blue-400" />
          Ready to go
        </div>

        <p
          className="max-w-md text-xl font-black leading-[0.98] tracking-[-0.04em] text-slate-950 sm:text-2xl md:text-3xl lg:text-5xl"
          id="download-title"
          role="heading"
          aria-level={1}
        >
          Download Your Bokmarke Extention
        </p>
        <p className="mt-2 max-w-sm text-xs leading-5 text-slate-600 lg:mt-5 lg:text-base lg:leading-7">
          Get the Bokmarke Extention from the extention stores, or our github
        </p>

        <button
          className="mt-3  flex items-center gap-3 border-y border-slate-200 py-2 hover:scale-105 hover:bg-blue-100 hover:rounded-2xl hover:px-2 duration-200 lg:mt-8 lg:gap-4 lg:py-4"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://codeload.github.com/Gaintlord/Bokmarke_Extention/zip/refs/heads/master";
          }}
          type="button"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-slate-100 text-slate-700 lg:h-11 lg:w-11">
            <span className="text-xs font-black">ZIP</span>
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900 lg:text-sm">
              Bokmarke Extention
            </p>
            <p className="mt-0.5 text-[10px] text-slate-500 lg:text-xs">
              ZIP archive · 136 KB
            </p>
          </div>
        </button>

        <button className="group mt-3 flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-500 px-5 py-2.5 text-xs font-bold text-white shadow-lg shadow-blue-500/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500 active:translate-y-0 sm:w-fit lg:mt-8 lg:px-6 lg:py-4 lg:text-sm">
          <DownloadIcon />
        </button>
      </div>

      <div className="relative min-h-32 overflow-hidden bg-blue-500 p-3 sm:min-h-40 md:min-h-full lg:p-8">
        <div className="absolute inset-x-0 top-0 h-px bg-white/60" />
        <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full border-[16px] border-white/20 lg:-right-16 lg:-top-16 lg:h-44 lg:w-44 lg:border-[28px]" />
        <div className="absolute -bottom-8 -left-6 h-20 w-20 rounded-full bg-white/20 lg:-bottom-12 lg:-left-10 lg:h-40 lg:w-40" />
        <div className="relative flex h-full min-h-24 items-center justify-center lg:min-h-64">
          <DownloadGraphic />
        </div>
      </div>
    </section>
  );
}

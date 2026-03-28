export default function AmbientBackground() {
  return (
    <div className="fixed overflow-hidden z-[-1] top-0 right-0 bottom-0 left-0 gap-x-12 gap-y-12">
      <div className="bg-glow bg-blue-600/20 w-[40vw] h-[40vw] top-[-10%] left-[-10%]"></div>
      <div className="bg-glow bg-purple-600/20 w-[50vw] h-[50vw] bottom-[-20%] right-[-10%]" style={{ animationDelay: '-4s' }}></div>
      <div className="opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDIiLz4KPC9zdmc+')] absolute top-0 right-0 bottom-0 left-0"></div>
    </div>
  );
}
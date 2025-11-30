import FullLogo from "@/components/logo/FullLogo";

const LoadingPage = () => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 backdrop-blur-md"
      aria-label="Loading Page"
    >
      <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-8 shadow-xl">
        <FullLogo />
        <div className="flex items-center justify-center gap-2">
          <div className="h-4 w-4 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.2s] [animation-duration:0.6s]" />
          <div className="h-4 w-4 animate-bounce rounded-full bg-blue-500 [animation-delay:-0.1s] [animation-duration:0.6s]" />
          <div className="h-4 w-4 animate-bounce rounded-full bg-blue-500 [animation-duration:0.6s]" />
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;

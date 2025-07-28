export function BackgroundElements() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50" />
      
      {/* Secondary gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-50/30 to-yellow-50/20" />
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-pink-200/25 to-orange-200/25 rounded-full blur-lg" />
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-gradient-to-br from-green-200/15 to-blue-200/15 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-40 w-28 h-28 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-xl" />
      
      {/* Abstract geometric patterns */}
      <div className="absolute top-1/3 left-1/4 w-2 h-20 bg-gradient-to-b from-blue-300/30 to-transparent rotate-45" />
      <div className="absolute top-1/2 right-1/3 w-2 h-16 bg-gradient-to-b from-purple-300/25 to-transparent -rotate-12" />
      <div className="absolute bottom-1/3 left-1/3 w-1 h-24 bg-gradient-to-b from-pink-300/20 to-transparent rotate-75" />
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Animated elements */}
      <div className="absolute top-1/4 right-1/4 w-16 h-16 border border-blue-200/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-12 h-12 border border-purple-200/25 rotate-45 animate-pulse" />
    </div>
  );
}
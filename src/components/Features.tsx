export const Features = () => {
  const features = [
    {
      title: "HD Quality",
      description: "Crystal-clear high-definition streaming for all channels",
      icon: (
        <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 4h10M5 10h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2z M9 20l-1 1h8l-1-1" />
        </svg>
      ),
      bgColor: "bg-emerald-50",
    },
    {
      title: "24/7 Access",
      description: "Watch your favorite shows anytime, anywhere",
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: "bg-amber-50",
    },
    {
      title: "Multiple Devices",
      description: "Stream on TV, mobile, tablet, and more",
      icon: (
        <svg className="w-10 h-10 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2zM3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      bgColor: "bg-slate-100",
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col items-center group">
            {/* Icon Container */}
            <div className={`w-24 h-24 ${feature.bgColor} rounded-full flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 shadow-sm group-hover:shadow-md`}>
              {feature.icon}
            </div>
            
            {/* Text Content */}
            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">
              {feature.title}
            </h3>
            <p className="text-slate-500 font-medium max-w-[240px] leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'CTO @ Nebulon',
      quote: '"Cognexon didn\'t just build our platform; they architected our future."',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCn9Go4yoB7aROZydNEYvwAXx-PTGn8O40GHv_H6n0lWHlANBO_KR7bydkWkFnLccivqOJ859OFDYdW21VaEEU5ByXCv_D1b06pTSS6zXmFqPPgk5yd7W5a09QtRvGYKqKlYhasq7xgZZq0bzdEibCFNz8fbl8aO1Zlp1NFcKNG4d_RXO7eOPP2Fnlpnz-x9pwxc9siFYAXBeVsa830IdyERYQEoNliKuYUMpCQFiQfxk1ZuxITl4yp8pxlnRYHXj9YlOvqnBRYYg',
      gradient: 'from-primary to-cyan-neon'
    },
    {
      name: 'Michael Chang',
      role: 'Founder @ Orbit',
      quote: '"The UI/UX work is simply out of this world."',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDntAgP4TrzCpKyq65j9qnaDvHHcNIYARjsc08JLKlsWmArAp-amTzJH2yuLDVPoR_rGDEGoXCtPyVDQy9v_HfC7IVp9LeTBYaCN7z8haX1cG_6zbYbxMUPuaxwQ4ecrXwTzIvb4zqA9FZ2YwfQXsGVDX-uceWRi92iKPty8VqGN-26ukYL8xGSrWsgDF2i9qqWKqjm8nPAHP0XEBZ_sVINuYeRnZtxQbdtQO9eehnfKnmPxJgAdqtN4evuw9HzcJ94c4j7zcw4SZ0',
      gradient: 'from-cyan-neon to-purple-500'
    },
    {
      name: 'Elena Rodriguez',
      role: 'VP Product @ Void',
      quote: '"Deep technical expertise combined with stunning aesthetics."',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDIG_AUgB7Uqm6lhl8IggTXYKCRIW5Muv_zO73Y9-y5Jo3r9ge36BbhSG5i-LfUcI0gr_fj57Hyq_0TU9ezuLg_CYEI2D99oul_971Atgqn4wjoK1WotMwUuMgS9vZgO5yV8iaznevY_oGkGAHu8dijHWimoCYUiUa4QuyDogX_TB5IHDGpOHKftQklHlI8SKNBLU0S6x3YZDe6vlj1QT1MAcvX37TceVMjDG181zzp-qqzIOR5jgrwa39mMWWujjwDtZdDBLywPt8',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-20 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-center text-4xl font-bold text-white mb-16">Transmissions from the Fleet</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-panel p-8 rounded-2xl flex flex-col gap-6 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className={`absolute inset-0 rounded-full bg-gradient-to-tr ${testimonial.gradient} blur-sm`}></div>
                  <img
                    alt={testimonial.name}
                    className="relative size-12 rounded-full border-2 border-slate-900 object-cover"
                    src={testimonial.image}
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-xs text-primary">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-slate-300 italic">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
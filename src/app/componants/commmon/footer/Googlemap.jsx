"use client";

const GoogleMap = () => {
  return (
    <div className="w-full h-full">
      <iframe
        width={"500"}
        height={"342"}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.637078871669!2d77.20902101508582!3d28.613939691856706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4b5f22c2e67%3A0xfbd33beecd444e95!2sDelhi%2C%20India!5e0!3m2!1sen!2sus!4v1644975640047!5m2!1sen!2sus"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default GoogleMap;

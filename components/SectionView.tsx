import React from 'react';
import { ViewState, BlogPost, GalleryItem } from '../types';
import { BLOG_POSTS, GALLERY_IMAGES, SCHOOL_EMAIL, SCHOOL_PHONE, SCHOOL_LOCATION } from '../constants';
import { Calendar, MapPin, Phone, Mail, User, Clock, CheckCircle, BookOpen } from 'lucide-react';

interface SectionViewProps {
  view: ViewState;
  onBack: () => void;
}

const SectionView: React.FC<SectionViewProps> = ({ view, onBack }) => {
  const renderContent = () => {
    switch (view) {
      case 'about':
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="relative h-64 rounded-3xl overflow-hidden mb-8">
              <img src="https://picsum.photos/id/180/1200/400" alt="School Campus" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-brand-purple/20 mix-blend-multiply"></div>
              <h2 className="absolute bottom-6 left-6 text-4xl font-display font-bold text-white">About Fairway High</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-display">Our History</h3>
                <p className="text-gray-600 leading-relaxed">
                  Established in Kawempe-Kazo, Fairway High School has grown from a humble community initiative to a premier institution of learning. 
                  Our journey is defined by a commitment to raising holistic citizens who excel in both sciences and arts.
                </p>
                <h3 className="text-2xl font-bold font-display mt-8">Mission & Vision</h3>
                <div className="bg-brand-purple/5 p-6 rounded-2xl border border-brand-purple/10">
                    <p className="font-medium text-brand-purple italic">"To empower young minds with knowledge, skills, and values for a dynamic world."</p>
                </div>
              </div>
              <div className="space-y-6">
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="font-bold mb-3 flex items-center gap-2"><CheckCircle size={18} className="text-brand-lime"/> Academic Excellence</h4>
                    <p className="text-sm text-gray-500">Consistent top performance in UNEB O'Level and A'Level examinations.</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="font-bold mb-3 flex items-center gap-2"><CheckCircle size={18} className="text-brand-lime"/> Holistic Education</h4>
                    <p className="text-sm text-gray-500">Strong focus on sports, music, dance, and drama alongside academics.</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="font-bold mb-3 flex items-center gap-2"><CheckCircle size={18} className="text-brand-lime"/> Community</h4>
                    <p className="text-sm text-gray-500">Deeply rooted in the Kawempe-Kazo community with strong parent involvement.</p>
                 </div>
              </div>
            </div>
          </div>
        );

      case 'admissions':
        return (
          <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
            <div className="text-center space-y-4 mb-12">
               <h2 className="text-4xl font-display font-bold">Join the Fairway Family</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">We are accepting applications for Senior 1 and Senior 5 for the upcoming academic year. Secure your place today.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
                    <div className="w-12 h-12 bg-brand-purple/10 text-brand-purple rounded-full flex items-center justify-center mx-auto mb-4">
                        <User size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">1. Register</h3>
                    <p className="text-sm text-gray-500">Download the form or pick one from the school bursar's office.</p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
                    <div className="w-12 h-12 bg-brand-lime/20 text-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">2. Interview</h3>
                    <p className="text-sm text-gray-500">Attend a brief oral and written interview to assess academic placement.</p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">3. Admission</h3>
                    <p className="text-sm text-gray-500">Receive your admission letter and requirements list.</p>
                </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 mt-8">
                <h3 className="font-bold text-xl mb-6">Enquiry Form</h3>
                <form className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Student Name</label>
                        <input type="text" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-purple" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Parent Phone</label>
                        <input type="tel" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-purple" placeholder="+256..." />
                    </div>
                    <div className="space-y-1 md:col-span-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Message / Class of Interest</label>
                        <textarea className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-purple h-32" placeholder="I am interested in S1 placement..."></textarea>
                    </div>
                    <div className="md:col-span-2">
                        <button type="button" className="w-full bg-brand-black text-white font-bold py-4 rounded-xl hover:bg-brand-purple transition-colors">Submit Enquiry</button>
                    </div>
                </form>
            </div>
          </div>
        );

      case 'student-life':
        return (
           <div className="space-y-8 animate-fadeIn">
               <div className="grid md:grid-cols-2 gap-8 items-center">
                   <div>
                       <h2 className="text-4xl font-display font-bold mb-4">Beyond the Classroom</h2>
                       <p className="text-gray-600 mb-6">At Fairway High, education goes beyond textbooks. We believe in nurturing talent through a vibrant array of extra-curricular activities.</p>
                       <ul className="space-y-3">
                           {['Football & Netball Teams', 'Music, Dance & Drama (MDD)', 'Debating Club', 'ICT & Coding Club', 'Science Innovation Club', 'Scripture Union'].map((item, i) => (
                               <li key={i} className="flex items-center gap-2 font-medium bg-white p-3 rounded-lg shadow-sm">
                                   <div className="w-2 h-2 rounded-full bg-brand-purple"></div>
                                   {item}
                               </li>
                           ))}
                       </ul>
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                       <img src="https://picsum.photos/id/450/300/400" className="rounded-2xl w-full h-full object-cover translate-y-8" alt="Sports" />
                       <img src="https://picsum.photos/id/452/300/400" className="rounded-2xl w-full h-full object-cover -translate-y-8" alt="Music" />
                   </div>
               </div>
           </div>
        );

      case 'blog':
        return (
            <div className="space-y-6 animate-fadeIn">
                <h2 className="text-3xl font-display font-bold">Latest News & Updates</h2>
                <div className="grid gap-6">
                    {BLOG_POSTS.map(post => (
                        <div key={post.id} className="bg-white rounded-2xl p-4 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100">
                            <img src={post.image} alt={post.title} className="w-full md:w-48 h-32 object-cover rounded-xl" />
                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-2">
                                    <Calendar size={14} /> {post.date}
                                </div>
                                <h3 className="font-bold text-xl mb-2 text-gray-800">{post.title}</h3>
                                <p className="text-gray-600 text-sm">{post.excerpt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );

      case 'gallery':
        return (
            <div className="space-y-6 animate-fadeIn">
                 <h2 className="text-3xl font-display font-bold">Campus Gallery</h2>
                 <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                     {GALLERY_IMAGES.map(img => (
                         <div key={img.id} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-zoom-in">
                             <img src={img.url} alt={img.caption} className="w-full h-auto rounded-2xl" />
                             <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                                 <p className="text-white font-medium">{img.caption}</p>
                             </div>
                         </div>
                     ))}
                 </div>
            </div>
        );

      case 'contact':
        return (
            <div className="grid md:grid-cols-2 gap-8 animate-fadeIn h-full">
                <div className="bg-brand-lime rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between text-brand-black min-h-[400px]">
                    <div>
                        <h2 className="text-4xl font-display font-bold mb-6">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/40 p-3 rounded-full"><MapPin size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">Visit Us</h4>
                                    <p className="opacity-80">{SCHOOL_LOCATION}</p>
                                    <p className="text-xs mt-1 font-bold opacity-60">Opposite Kawempe Health Center IV</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white/40 p-3 rounded-full"><Phone size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">Call Us</h4>
                                    <p className="opacity-80">{SCHOOL_PHONE}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white/40 p-3 rounded-full"><Mail size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">Email</h4>
                                    <p className="opacity-80">{SCHOOL_EMAIL}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-black/10">
                         <p className="font-display font-bold text-xl">"Education is the key to success."</p>
                    </div>
                </div>
                
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm flex flex-col justify-center">
                    <h3 className="font-bold text-2xl mb-6">Send us a message</h3>
                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-brand-lime" />
                        <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-brand-lime" />
                        <textarea placeholder="How can we help?" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-brand-lime h-32"></textarea>
                        <button className="w-full bg-brand-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors">Send Message</button>
                    </form>
                </div>
            </div>
        );

      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="bg-white/90 backdrop-blur-md rounded-[2.5rem] w-full h-full overflow-hidden flex flex-col relative animate-slideUp">
      <div className="p-6 md:p-8 border-b border-gray-100 flex justify-between items-center bg-white/50 sticky top-0 z-20">
         <h2 className="text-xl font-bold font-display uppercase tracking-widest text-brand-purple">{view.replace('-', ' ')}</h2>
         <button onClick={onBack} className="text-sm font-bold bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors">
            Close X
         </button>
      </div>
      <div className="p-6 md:p-10 overflow-y-auto custom-scrollbar">
        {renderContent()}
      </div>
    </div>
  );
};

export default SectionView;
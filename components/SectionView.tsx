import React, { useState } from 'react';
import { ViewState } from '../types';
import { BLOG_POSTS, GALLERY_IMAGES, SCHOOL_EMAIL, SCHOOL_PHONE, SCHOOL_LOCATION, FACULTY_MEMBERS } from '../constants';
import { MapPin, Phone, Mail, User, CheckCircle, BookOpen, Download, Music, Trophy, Sprout, FlaskConical, Globe, Briefcase, Clock, Users, X, Image } from 'lucide-react';
import Footer from './Footer';

interface SectionViewProps {
  view: ViewState;
  onBack: () => void;
  onNavigate: (view: ViewState) => void;
}

const SectionView: React.FC<SectionViewProps> = ({ view, onBack, onNavigate }) => {
  const [selectedFacultyId, setSelectedFacultyId] = useState<number | null>(null);

  const renderContent = () => {
    switch (view) {
      case 'about':
        return (
          <div className="space-y-8 animate-fadeIn">
            <div className="relative h-64 rounded-3xl overflow-hidden mb-8 bg-brand-black">
              <div className="absolute inset-0 bg-brand-accent/20 mix-blend-multiply"></div>
              <h2 className="absolute bottom-6 left-6 text-4xl font-display font-bold text-white">About Fairway High</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-display text-brand-black">Our History</h3>
                <p className="text-gray-600 leading-relaxed">
                  Established in 2015 in the heart of Kawempe-Kazo, Fairway High School has grown from a humble community initiative to a premier institution of learning. 
                  Our journey is defined by a commitment to raising holistic citizens who excel in both sciences and arts. We have consistently produced excellent results in UNEB examinations, making us a top choice for parents in the region.
                </p>
                <h3 className="text-2xl font-bold font-display mt-8 text-brand-black">Mission & Vision</h3>
                <div className="bg-sky-50/50 p-6 rounded-2xl border border-brand-accent/10">
                    <p className="font-medium text-brand-accent italic text-lg">"To empower young minds with knowledge, skills, and values for a dynamic world."</p>
                    <p className="font-bold text-brand-black mt-4 uppercase tracking-widest text-sm">Toil and Preserve</p>
                </div>
                
                {/* Link to Faculty Section */}
                <div className="mt-8">
                    <button 
                        onClick={() => onNavigate('faculty')} 
                        className="flex items-center gap-2 text-brand-accent font-bold hover:underline group"
                    >
                        Meet our Staff & Faculty <Users size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
              </div>
              <div className="space-y-6">
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="font-bold mb-3 flex items-center gap-2 text-brand-black"><CheckCircle size={18} className="text-brand-accent"/> Academic Excellence</h4>
                    <p className="text-sm text-gray-500">Consistent top performance in UNEB O'Level and A'Level examinations.</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="font-bold mb-3 flex items-center gap-2 text-brand-black"><CheckCircle size={18} className="text-brand-accent"/> Holistic Education</h4>
                    <p className="text-sm text-gray-500">Strong focus on sports, music, dance, and drama alongside academics.</p>
                 </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="font-bold mb-3 flex items-center gap-2 text-brand-black"><CheckCircle size={18} className="text-brand-accent"/> Community</h4>
                    <p className="text-sm text-gray-500">Deeply rooted in the Kawempe-Kazo community with strong parent involvement.</p>
                 </div>
              </div>
            </div>
          </div>
        );

      case 'faculty':
        const selectedFaculty = FACULTY_MEMBERS.find(m => m.id === selectedFacultyId);

        return (
            <div className="space-y-8 animate-fadeIn relative">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-4xl font-display font-bold mb-4 text-brand-black">Our Dedicated Team</h2>
                    <p className="text-gray-600">Meet the passionate educators and staff who make Fairway High School a center of excellence.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FACULTY_MEMBERS.map(member => (
                        <div 
                            key={member.id} 
                            onClick={() => setSelectedFacultyId(member.id)}
                            className="bg-white rounded-[2rem] p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all group cursor-pointer hover:border-brand-accent/30"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-16 h-16 rounded-full bg-brand-gray flex items-center justify-center border-2 border-brand-accent/20 group-hover:border-brand-accent transition-colors">
                                    <User size={32} className="text-brand-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-brand-black leading-tight">{member.name}</h3>
                                    <p className="text-xs font-bold text-brand-accent uppercase tracking-wide">{member.role}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed opacity-80 line-clamp-3">{member.bio}</p>
                            <p className="text-xs font-bold text-brand-accent mt-4 group-hover:underline flex items-center gap-1">Read full bio <span className="group-hover:translate-x-1 transition-transform">&rarr;</span></p>
                        </div>
                    ))}
                </div>

                {/* Modal Overlay */}
                {selectedFaculty && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fadeIn" onClick={() => setSelectedFacultyId(null)}>
                        <div 
                            className="bg-white rounded-[2.5rem] max-w-lg w-full p-8 shadow-2xl relative animate-slideUp" 
                            onClick={e => e.stopPropagation()}
                        >
                            <button 
                                onClick={() => setSelectedFacultyId(null)}
                                className="absolute top-6 right-6 p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors text-gray-500 hover:text-brand-black"
                            >
                                <X size={24} />
                            </button>
                            
                            <div className="flex flex-col items-center text-center mb-8">
                                <div className="relative mb-6">
                                    <div className="absolute inset-0 bg-brand-accent/10 rounded-full blur-xl transform scale-110"></div>
                                    <div className="relative w-32 h-32 rounded-full bg-brand-gray flex items-center justify-center border-4 border-white shadow-lg">
                                        <User size={64} className="text-brand-secondary" />
                                    </div>
                                </div>
                                <h3 className="text-3xl font-bold font-display text-brand-black mb-1">{selectedFaculty.name}</h3>
                                <p className="text-brand-accent font-bold uppercase tracking-wider text-xs bg-brand-accent/5 px-3 py-1 rounded-full">{selectedFaculty.role}</p>
                            </div>
                            
                            <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed text-center">
                                <p className="text-lg font-medium text-gray-800 mb-4">"{selectedFaculty.bio}"</p>
                                <p className="text-sm opacity-80">
                                    At Fairway High School, {selectedFaculty.name.split(' ')[1] || selectedFaculty.name} is dedicated to fostering a supportive and challenging learning environment. 
                                    With a focus on student success and holistic development, they play a crucial role in our community.
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-50 flex justify-center">
                                <button 
                                    onClick={() => setSelectedFacultyId(null)}
                                    className="bg-brand-black text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg shadow-brand-black/20"
                                >
                                    Close Profile
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );

      case 'academics':
        return (
            <div className="space-y-8 animate-fadeIn">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-4xl font-display font-bold mb-4 text-brand-black">Academic Programs</h2>
                    <p className="text-gray-600">We offer a comprehensive curriculum designed to challenge students and prepare them for higher education and career success.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* O-Level */}
                    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-bold font-display mb-4 text-brand-accent">O-Level Curriculum</h3>
                        <p className="text-gray-600 mb-6 text-sm">Our Lower Secondary curriculum follows the new competence-based curriculum (CBC) by NCDC, focusing on learner-centered education.</p>
                        <ul className="space-y-2">
                            {['Mathematics', 'English Language', 'Physics, Chemistry, Biology', 'History & Geography', 'Religious Education', 'Kiswahili', 'Entrepreneurship'].map((subject, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div> {subject}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* A-Level */}
                    <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm">
                        <h3 className="text-2xl font-bold font-display mb-4 text-brand-accent">A-Level Curriculum</h3>
                        <p className="text-gray-600 mb-6 text-sm">We offer a wide range of combinations for Uganda Advanced Certificate of Education (UACE) in both Arts and Sciences.</p>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-bold text-sm uppercase text-gray-400 mb-2">Sciences</h4>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li>PCM / PCB</li>
                                    <li>PEM / BCM</li>
                                    <li>MEG / MAG</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-bold text-sm uppercase text-gray-400 mb-2">Arts</h4>
                                <ul className="space-y-1 text-sm text-gray-700">
                                    <li>HEG / HEL</li>
                                    <li>LEG / DEG</li>
                                    <li>HED / HLG</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Departments */}
                <h3 className="text-2xl font-bold font-display mt-8 mb-6 text-brand-black">Our Departments</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-sky-50 p-6 rounded-2xl hover:bg-sky-100 transition-colors">
                        <FlaskConical className="text-brand-accent mb-4" size={32} />
                        <h4 className="font-bold text-lg mb-2">Science Department</h4>
                        <p className="text-sm text-gray-600">Equipped with modern Physics, Chemistry, and Biology laboratories for practical learning.</p>
                    </div>
                    <div className="bg-amber-50 p-6 rounded-2xl hover:bg-amber-100 transition-colors">
                        <Globe className="text-brand-accent mb-4" size={32} />
                        <h4 className="font-bold text-lg mb-2">Humanities</h4>
                        <p className="text-sm text-gray-600">Fostering critical thinking and cultural awareness through History, Geography, and Literature.</p>
                    </div>
                    <div className="bg-green-50 p-6 rounded-2xl hover:bg-green-100 transition-colors">
                        <Briefcase className="text-green-600 mb-4" size={32} />
                        <h4 className="font-bold text-lg mb-2">Vocational</h4>
                        <p className="text-sm text-gray-600">Practical skills in Agriculture, Fine Art, ICT, and Entrepreneurship for self-reliance.</p>
                    </div>
                </div>
            </div>
        );

      case 'admissions':
        return (
          <div className="max-w-4xl mx-auto space-y-8 animate-fadeIn">
            <div className="text-center space-y-4 mb-12">
               <h2 className="text-4xl font-display font-bold text-brand-black">Join the Fairway Family</h2>
               <p className="text-gray-600 max-w-2xl mx-auto">We are accepting applications for Senior 1 and Senior 5 for the upcoming academic year. Secure your place today.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center group hover:border-brand-accent transition-colors">
                    <div className="w-12 h-12 bg-sky-50 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <User size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">1. Register</h3>
                    <p className="text-sm text-gray-500">Download the form below or pick one from the school bursar's office.</p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center group hover:border-brand-accent transition-colors">
                    <div className="w-12 h-12 bg-amber-100 text-brand-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <BookOpen size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">2. Interview</h3>
                    <p className="text-sm text-gray-500">Attend a brief oral and written interview to assess academic placement.</p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm text-center group hover:border-green-500 transition-colors">
                    <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <CheckCircle size={24} />
                    </div>
                    <h3 className="font-bold text-lg mb-2">3. Admission</h3>
                    <p className="text-sm text-gray-500">Receive your admission letter and requirements list.</p>
                </div>
            </div>

            <div className="flex justify-center my-8">
                <button className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-sky-600 transition-all shadow-lg shadow-brand-accent/20">
                    <Download size={20} /> Download Application Form (PDF)
                </button>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 mt-8">
                <h3 className="font-bold text-xl mb-6 text-brand-black">Enquiry Form</h3>
                <form className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Student Name</label>
                        <input type="text" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent" placeholder="John Doe" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-500 uppercase">Parent Phone</label>
                        <input type="tel" className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent" placeholder="+256..." />
                    </div>
                    <div className="space-y-1 md:col-span-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Message / Class of Interest</label>
                        <textarea className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent h-32" placeholder="I am interested in S1 placement..."></textarea>
                    </div>
                    <div className="md:col-span-2">
                        <button type="button" className="w-full bg-brand-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-colors">Submit Enquiry</button>
                    </div>
                </form>
            </div>
          </div>
        );

      case 'co-curricular':
        return (
           <div className="space-y-8 animate-fadeIn">
               <div className="grid md:grid-cols-2 gap-8 items-center">
                   <div>
                       <h2 className="text-4xl font-display font-bold mb-4 text-brand-black">Beyond the Classroom</h2>
                       <p className="text-gray-600 mb-6">At Fairway High, education goes beyond textbooks. We believe in nurturing talent through a vibrant array of extra-curricular activities.</p>
                       
                       <div className="space-y-6">
                           <div className="flex gap-4">
                               <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                   <Trophy size={24} />
                               </div>
                               <div>
                                   <h4 className="font-bold text-lg">Sports & Games</h4>
                                   <p className="text-sm text-gray-600">Our Football and Netball teams compete at the district level. We emphasize teamwork, physical fitness, and fair play.</p>
                               </div>
                           </div>
                           <div className="flex gap-4">
                               <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                                   <Music size={24} />
                               </div>
                               <div>
                                   <h4 className="font-bold text-lg">Music, Dance & Drama (MDD)</h4>
                                   <p className="text-sm text-gray-600">A vibrant part of our culture. Students engage in traditional dance, drama, and music competitions.</p>
                               </div>
                           </div>
                           <div className="flex gap-4">
                               <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
                                   <Sprout size={24} />
                               </div>
                               <div>
                                   <h4 className="font-bold text-lg">Agriculture Club</h4>
                                   <p className="text-sm text-gray-600">Practical skills in our school garden. Students learn modern farming techniques and crop management.</p>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="grid grid-cols-2 gap-3">
                       <div className="rounded-2xl w-full h-64 bg-green-100 translate-y-8 shadow-lg flex items-center justify-center">
                           <Trophy size={48} className="text-green-600 opacity-50" />
                       </div>
                       <div className="rounded-2xl w-full h-64 bg-purple-100 -translate-y-8 shadow-lg flex items-center justify-center">
                           <Music size={48} className="text-purple-600 opacity-50" />
                       </div>
                   </div>
               </div>
           </div>
        );

      case 'blog':
        return (
            <div className="space-y-6 animate-fadeIn">
                <h2 className="text-3xl font-display font-bold text-brand-black">Latest News & Updates</h2>
                <div className="grid gap-6">
                    {BLOG_POSTS.map(post => (
                        <div key={post.id} className="bg-white rounded-2xl p-4 flex flex-col md:flex-row gap-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-gray-100">
                            <div className="w-full md:w-48 h-32 bg-brand-gray rounded-xl flex items-center justify-center shrink-0">
                                <BookOpen size={32} className="text-brand-secondary opacity-50" />
                            </div>
                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-2">
                                    <Clock size={14} /> {post.date}
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
                 <h2 className="text-3xl font-display font-bold text-brand-black">Campus Gallery</h2>
                 <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                     {GALLERY_IMAGES.map(img => (
                         <div key={img.id} className="break-inside-avoid relative group rounded-2xl overflow-hidden cursor-pointer bg-brand-gray h-64 flex items-center justify-center">
                             <div className="text-brand-secondary opacity-20"><Image size={48} /></div>
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
                <div className="bg-brand-black rounded-[2.5rem] p-8 md:p-12 flex flex-col justify-between text-white min-h-[400px]">
                    <div>
                        <h2 className="text-4xl font-display font-bold mb-6">Get in Touch</h2>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-full"><MapPin size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">Visit Us</h4>
                                    <p className="opacity-80">{SCHOOL_LOCATION}</p>
                                    <p className="text-xs mt-1 font-bold opacity-60">Opposite Kawempe Health Center IV</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-full"><Phone size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">Call Us</h4>
                                    <p className="opacity-80">{SCHOOL_PHONE}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-white/10 p-3 rounded-full"><Mail size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">Email</h4>
                                    <p className="opacity-80">{SCHOOL_EMAIL}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/10">
                         <p className="font-display font-bold text-xl">"Education is the key to success."</p>
                    </div>
                </div>
                
                <div className="bg-white rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm flex flex-col justify-center">
                    <h3 className="font-bold text-2xl mb-6 text-brand-black">Send us a message</h3>
                    <form className="space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-brand-accent" />
                        <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-brand-accent" />
                        <textarea placeholder="How can we help?" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-brand-accent h-32"></textarea>
                        <button className="w-full bg-brand-accent text-white font-bold py-4 rounded-xl hover:bg-sky-600 transition-colors">Send Message</button>
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
         <h2 className="text-xl font-bold font-display uppercase tracking-widest text-brand-accent">{view.replace('-', ' ')}</h2>
         <button onClick={onBack} className="text-sm font-bold bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full transition-colors text-gray-600">
            Close X
         </button>
      </div>
      <div className="p-6 md:p-10 pb-24 md:pb-32 overflow-y-auto custom-scrollbar">
        {renderContent()}
        <Footer />
      </div>
    </div>
  );
};

export default SectionView;

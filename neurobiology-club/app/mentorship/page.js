import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <div>
            <Header />
            <div className="flex items-center justify-center">
                <p id="mentorship-program"> 
                    MENTORSHIP 
                    PROGRAM
                </p>
            </div>
            <div className="flex items-center justify-center">
                <button id="who-are-we" className="mt-20">UNDERGRADUATE MENTORSHIP PROGRAM</button>
            </div>
            <div className="bg-gradient-to-t from-[#F3FF99] to-[#F4F3F2]">
                <p id="description-headers">
                    FOR WHOM
                </p>
                <p id="mentorship-description">
                    This program is intended for Undergraduate Students who are interested in 
                    being matched with a current student studying Neuroscience, Biology, or another 
                    STEM-related field. It offers an opportunity for students seeking guidance and 
                    support as they navigate their academic journey within the sciences.
                </p>

                <p id="description-headers">
                    WHAT TO EXPECT
                </p>

                <p id="mentorship-description">
                    
                    Through this mentorship, students can receive personalized advice on a variety of topics, 
                    including applying to specific majors, managing a busy schedule, studying for introductory courses 
                    like the biology series, and finding volunteer/research opportunities! Mentors provide insights drawn from their own experiences, 
                    helping mentees feel more prepared and confident as they pursue their academic and extracurricular goals.
                </p>

                <p id="description-headers">
                    MEETING SCHEDULE
                </p>

                <p id="mentorship-description">
                    
                    The program is quite flexible, allowing mentors and mentees to arrange meetings according to their own availability. 
                    While there is no fixed meeting structure, participants are expected to maintain open and clear communication throughout the quarter.
                </p>

            </div>
            <div className="flex items-center justify-center">
                <button id="grad-programs" className="mt-20">GRADUATE MENTORSHIP PROGRAM</button>
            </div>
            <p id="description-headers">
                FOR WHOM
            </p>

            <p id="mentorship-description">
              
              This mentorship program is designed for undergraduate students, medical students, 
              and residents who are interested in fostering connections across different stages of the medical field.
              Undergraduate students considering a future in medicine can benefit from those already on the path. 
              Medical students play a dual role-they not only mentor undergraduates but can also be mentees to residents, 
              allowing them to both share their knowledge and gain insights from those further along in their journey. 
              Residents serve as mentors to medical students and undergraduates, offering specialized advice and sharing experiences from 
              their residency and clinical practice.
            </p>
            
            <p id="description-headers">
                WHAT TO EXPECT
            </p>

            <p id="mentorship-description">
                
                Participants in the program can expect personalized mentorship focused on medical school and residency preparation. 
                This includes practical tips for studying for the MCAT, navigating application processes, and learning from the personal stories of 
                mentors who have progressed through various stages of the medical profession. The program also fosters opportunities for networking,
                 creating connections between undergraduates, medical students, and residents to encourage collaboration and knowledge sharing across 
                 the different phases of their medical careers.
            </p>
            
            <p id="description-headers">
                MEETING SCHEDULE
            </p>

            <p id="mentorship-description">
                
                Recognizing the demanding schedules of mentors, the program encourages mentees to take an active role in initiating and maintaining 
                communication with their mentors. Meetings are arranged flexibly throughout the quarter, based on mutual availability, allowing for a 
                tailored approach that fits the individual schedules of both mentors and mentees.
            </p>
            
            <Footer/>
        </div> 
    )
}
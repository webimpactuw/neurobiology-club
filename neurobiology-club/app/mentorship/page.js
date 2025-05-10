import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MentorshipButtons from "../components/MentorshipButtons";

export default function Mentorship() {
    return (
      <div>
        <Header />
          <div className="flex items-center justify-center">
            <div>
              <div className="flex items-center">
                <p id="big-text">M</p>
                <p id="big-text">E</p>
                <p id="big-text">N</p>
                <p id="big-text">T</p>
                <p id="big-text">O</p>
                <p id="big-text">R</p>
                <p id="big-text">S</p>
                <p id="big-text">H</p>
                <p id="big-text">I</p>
                <p id="big-text">P</p>
              </div>
              <div className="flex justify-center">
                <p id="big-text">P</p>
                <p id="big-text">R</p>
                <p id="big-text">O</p>
                <p id="big-text">G</p>
                <p id="big-text">R</p>
                <p id="big-text">A</p>
                <p id="big-text">M</p>
              </div>
            </div>  
          </div>

          <div className="flex items-center justify-center">
            <button id="who-we-are" className="mt-20">UNDERGRADUATE MENTORSHIP PROGRAM</button>
          </div>
          <div className="bg-gradient-to-t from-[#F3FF99] to-[#F4F3F2] ">
            <div className="flex flex-col items-center justify-center">
              <p id="description-headers">FOR WHOM</p>
              <p id="mentorship-description">
                This program is intended for <b>Undergraduate Students</b> who are interested in 
                being matched with a current student studying Neuroscience, Biology, or another 
                STEM-related fields. It offers an opportunity for students seeking guidance and 
                support as they navigate their academic journey within the sciences.
              </p>

              <p id="description-headers">WHAT TO EXPECT</p> 
              <p id="mentorship-description">
                Through this mentorship, students can receive personalized advice on a variety of topics, 
                including applying to specific majors, managing a busy schedule, studying for introductory courses 
                like the biology series, and finding volunteer/research opportunities! Mentors provide insights drawn from their own experiences, 
                helping mentees feel more prepared and confident as they pursue their academic and extracurricular goals.
              </p>
                    
              <p id="description-headers"> MEETING SCHEDULE</p>
              <p id="mentorship-description">
                The program is quite flexible, allowing mentors and mentees to arrange meetings according to their own availability. 
                While there is no fixed meeting structure, participants are expected to maintain open and clear communication throughout the quarter.
              </p>

              <div id="mentorship-container">
                <p id= "join-header">JOIN OUR MENTORSHIP!</p>
                <div className="flex items-center justify-center" id="mentorship-button-text">
                  <p>
                    A mentorship social even is typically held once per quarter, providing a chance
                    for all participants to connect and engage with the broader
                    mentorship community.
                  </p>
                </div>

                <div id="button-group">
                  <button id="mentorship-button">Click Here!</button>
                  <button id="mentorship-button">Click Here!</button>
                </div>
              </div>
            </div>
          </div>
                
          <div className="flex items-center justify-center">
            <button id="grad-programs" className="mt-20">GRADUATE MENTORSHIP PROGRAM</button>
          </div>
          <div className="flex flex-col items-center justify-center">
          <p id="description-headers">FOR WHOM</p>
          <p id="mentorship-description">
            This mentorship program is designed for undergraduate students, medical students, 
            and residents who are interested in fostering connections across different stages of the medical field.
            Undergraduate students considering a future in medicine can benefit from those already on the path. 
            Medical students play a dual role-they not only mentor undergraduates but can also be mentees to residents, 
            allowing them to both share their knowledge and gain insights from those further along in their journey. 
            Residents serve as mentors to medical students and undergraduates, offering specialized advice and sharing experiences from 
            their residency and clinical practice.
          </p>
                
          <p id="description-headers">WHAT TO EXPECT</p>
          <p id="mentorship-description">
            Participants in the program can expect personalized mentorship focused on medical school and residency preparation. 
            This includes practical tips for studying for the MCAT, navigating application processes, and learning from the personal stories of 
            mentors who have progressed through various stages of the medical profession. The program also fosters opportunities for networking,
            creating connections between undergraduates, medical students, and residents to encourage collaboration and knowledge sharing across 
            the different phases of their medical careers.
          </p>
                
          <p id="description-headers">MEETING SCHEDULE</p>

          <p id="mentorship-description">
            Recognizing the demanding schedules of mentors, the program encourages mentees to take an active role in initiating and maintaining 
            communication with their mentors. Meetings are arranged flexibly throughout the quarter, based on mutual availability, allowing for a 
            tailored approach that fits the individual schedules of both mentors and mentees.
          </p>

          <div id="mentorship-container">
            <p id= "join-header">JOIN OUR MENTORSHIP!</p>
            <div className="flex items-center justify-center" id="mentorship-button-text">
              <p>
                Applications for this program will be open
                at the start of fall and spring quarter.
                If you are a current undergraduate student interested in pursuing medicine in the
                future, medical student or resident, consider applying!
              </p>
            </div>

            <div id="button-group">
              <button id="mentorship-button">Undergraduate</button>
              <button id="mentorship-button">Medical Student</button>
              <button id="mentorship-button">Resident</button>
            </div>
          </div>
        </div>
      <Footer/>
    </div> 
  )
}
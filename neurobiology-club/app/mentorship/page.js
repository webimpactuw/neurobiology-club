import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
          <button className="mt-20 font-extrabold" id="blue-box">UNDERGRADUATE MENTORSHIP PROGRAM</button>
        </div>
        <div className="bg-gradient-to-t from-[#F3FF99] to-[#F4F3F2] ">
          <div className="flex flex-col items-center justify-center">
            <p id="description-headers">FOR WHOM</p>
            <div id="mentorship-description">
              <p>This program is intended for <b>Undergraduate Students</b> who are interested in</p>
              <p>being matched with a current student studying Neuroscience, Biology, or another</p>
              <p>STEM-related fields. It offers an opportunity for students seeking guidance and</p>
              <p>support as they navigate their academic journey within the sciences.</p>
            </div>

            <p id="description-headers">WHAT TO EXPECT</p> 
            <div id="mentorship-description">
              <p>Through this mentorship, students can receive personalized advice on a variety of </p>
              <p>topics, including applying to specific majors, managing a busy schedule, studying</p>
              <p>for introductory courses like the biology series, and finding volunteer/research</p>
              <p>opportunities! Mentors provide insights drawn from their own experiences,</p>
              <p>helping mentees feel more prepared and confident as they pursue their academic</p>
              <p>and extracurricular goals.</p>
             </div>
                    
            <p id="description-headers"> MEETING SCHEDULE</p>
            <div id="mentorship-description">
              <p>The program is quite flexible, allowing mentors and mentees to arrange meetings</p>
              <p>according to their own availability. While there is no fixed meeting structure,</p>
              <p>participants are expected to maintain open and clear communication throughout</p>
              <p>the quarter.</p> 
             </div>

            <div className="pt-20 pb-20">
              <div className="bg-[#F4F3F2]"id="mentorship-container">
                <p id= "join-header">JOIN OUR MENTORSHIP!</p>
                <div id="mentorship-button-text">
                  <p>A mentorship social even is typically held <b>once per quarter</b>, providing a chance for all</p>
                  <p>participants to connect and engage with the broader mentorship community.</p>
                </div>

                <div className="flex items-center justify center pt-8">
                  <div>
                    <p className="pb-4" id="mentorship-description">LOOKING FOR A MENTOR?</p>
                    <a id="mentorship-button">Click Here!</a>
                  </div>

                  <div className="ml-24">
                    <p className="pb-4" id="mentorship-description">INTERESTED IN MENTORING?</p>
                    <a id="mentorship-button">Click Here!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                
        <div className="flex items-center justify-center">
          <button className="mt-20 font-extrabold" id="yellow-box">GRADUATE MENTORSHIP PROGRAM</button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p id="description-headers">FOR WHOM</p>
          <div id="mentorship-description">
            <p>This mentorship program is designed for undergraduate students, medical students,</p>
            <p>and residents who are interested in fostering connections across different stages of</p>
            <p>the medical field.</p>
            <br></br>
            <p>Undergraduate students considering a future in medicine can benefit from those</p>
            <p>already on the path. Medical students play a dual role-they not only mentor</p>
            <p>undergraduates but can also be mentees to residents, allowing them to both share</p>
            <p>their knowledge and gain insights from those further along in their journey. Residents</p>
            <p>serve as mentors to medical students and undergraduates, offering specialized</p>
            <p>advice and sharing experiences from their residency and clinical practice.</p>
          </div>
                
          <p id="description-headers">WHAT TO EXPECT</p>
          <div id="mentorship-description">
            <p>Participants in the program can expect personalized mentorship focused on medical</p>
            <p>school and residency preparation. This includes practical tips for studying for the</p>
            <p>MCAT, navigating application processes, and learning from the personal stories of</p>
            <p>mentors who have progressed through various stages of the medical profession. The</p>
            <p>program also fosters opportunities for networking, creating connections between</p>
            <p>undergraduates, medical students, and residents to encourage collaboration and</p>
            <p>knowledge sharing across the different phases of their medical careers.</p>
          </div>
                
          <p id="description-headers">MEETING SCHEDULE</p>
          <div id="mentorship-description">
            <p>Recognizing the demanding schedules of mentors, the program encourages mentees</p>
            <p>to take an active role in initiating and maintaining communication with their mentors.</p>
            <p>Meetings are arranged flexibly throughout the quarter, based on mutual availability,</p>
            <p>allowing for a tailored approach that fits the individual schedules of both mentors</p>
            <p>and mentees.</p>
          </div>

          <div className="pt-20 pb-20">
            <div className="bg-white" id="mentorship-container">
              <p id= "join-header">JOIN OUR MENTORSHIP!</p>
              <div id="mentorship-button-text">
                <p>Applications for this program will be open at the start of <b>fall and spring quarter.</b></p>
                <p>If you are a current undergraduate student interested in pursuing medicine in the</p>
                <p>future, medical student or resident, consider applying!</p>
              </div>

              <div className="flex items-center justify center pt-8">
                <button id="mentorship-button">Undergraduate</button>
                <a className="ml-8" id="mentorship-button">Medical Student</a>
                <a className="ml-8" id="mentorship-button">Resident</a>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </div> 
  )
}
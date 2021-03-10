import In_person_icon from '../images/in-person-icon.svg'
import Online_icon from "../images/online-icon.svg"
import Adam_Raff from '../images/Dr-Adam-Raff-MD-109495-circle_large 1.svg'
import Avnish_Sengupta from '../images/IMG_4509.JPG'
import Stacy_Berrin from '../images/Stacy_Berrin.png'
import Samuel_Schwarz from '../images/52499482-f183-4875-a336-d56f24bc2798zoom.jpg'
import Rotana_Tek from '../images/902081ee-4b86-4875-a337-f8ea8f0c8a4dzoom.jpg'
import Omid_Shaye from '../images/f66f6d20-d37c-408c-bbdb-f598c671045azoom.jpg'


const TherapistIconArray=[
    {
        name:["Dr. Adam Raff, MD", "Dr. Avnish Sengupta, PhD"],
        img:In_person_icon,
        alt:'In-person icon',
        text:'In-person Visits'
    },
    {
        name:["Dr. Adam Raff, MD", "Dr. Avnish Sengupta, PhD"],
        img:Online_icon,
        alt:'Online Visit icon',
        text:'Online Visits'
    }
]




const ReviewArray=[
    {
        name:'Dr. Adam Raff, MD',
        URLdestination:'/Dr._Adam_Raff,_MD',
        rating: '4.48',
        address:'40 Park Avenue, New York, NY, 10016',
        img:Adam_Raff,
        review:[{
                content:'Dr. Raff is considerate, friendly, professional, thorough, helpful, and clearly very good at what he does. He put me at easestraight-away and listened non-judgementally.',
                date:'April 18, 2018'
            },
            {
                content:'Appointments were fine, but the billing is a nightmare which is why I had to switch providers. Took many follow up emails to get correct receipts for appointments and I was routinely billed for appointments that I had already paid at time of service. Do not see this provider if you need timely, accurate receipts.',
                date:'April 18, 2018'
            },
            {
                content:'Amazing doctor helped me with my ptsd anxiety and depression better than any doctor I have visited in the past',
                date:'September 13, 2019'
            },
            {
                content:'Fantastic gentleman and doctor. Completely understood my situation. I hope to keep him on a my permanent psychiatrist.',
                date:'June 25, 2019'
            },
            {
                content:'I really like this doctor! Very attentive, no wait time, very professional, and easy to talk to. Would definitely recommend.',
                date:'January 5, 2019'
            },
            {
                content:'Very professional and spent adequate time to understand my situation. It was a very positive experience.',
                date:'December 14, 2018'
            }
        ],
        ReviewCount:function(){return(this.review.length)},
        Specialties:['Psychiatrist'],
        EducationAndTraining:['Medical School - Sackler School of Medicine, Tel Aviv University, Doctor of Medicine', 'New York University, Bellevue Hospital Center, Residency in Adult Psychiatry and Forensic Psychiatry'],
        BoardCertification:['American Board of Psychiatry and Neurology', 'Forensic Psychiatry (Psychiatry and Neurology)'],
        EducationAndBackgroundContent:'Dr. Raff is a compassionate and experienced physician, whose clinical expertise has its roots in numerous sources, ranging from his studio background in the fine arts to the rigorous psychiatric residencies (adult and forensic) at NYU-Bellevue, additional training in treating adolescents, and his psychoanalytic training at the New York Psychoanalytic Institute. First and foremost, Dr. Raff develops working relationships with his patients based on trust and a desire to help the patient move forward from a particular problem. Working with the patient to identify an issue, understand why he/she is “stuck” in a particular way, and the myriad of factors that contribute to it are all crucial aspects of the process. Treatment may involve talk therapy, psycho-pharmacology, and psychoanalysis or a combination of each. Dr. Raff also has an experience in treating conditions of addiction and substance abuse. For those individuals struggling with opiate addiction, Dr. Raff carries certification in the prescription of Buprenorphine (Suboxone).'
    },
    {
        name:'Dr. Samuel Schwarz, MD',
        URLdestination:'/Dr._Samuel_Schwarz,_MD',
        rating: '4.45',
        address:'205 East 76th Street, New York, NY, 10021',
        img:Samuel_Schwarz,
        review:[{
                content:'Dr. Schwarz was professional, listened carefully and addressed my concerns and plan of action thoughtfully. I would recommend him, I see him for a follow-up within the next 2 weeks. His staff was equally responsive.',
                date:'February 5, 2021'
            },
            {
                content:'Dr. Schwarz was friendly, relatable, easy to talk to, and very helpful. Great experience.',
                date:'January 4, 2021'
            },
            {
                content:'Professional, Private, concerned, interpersonal skilled.',
                date:'November 25, 2020'
            },
            {
                content:'Very down to earth and understanding. Knowledgeable and polite.',
                date:'October 23, 2020'
            },
        ],
        ReviewCount:function(){return(this.review.length)},
        Specialties:['Gastroenterologist'],
        EducationAndTraining:['Medical School - Sackler School of Medicine, Tel Aviv University, Doctor of Medicine', 'Lenox Hill Hospital, Residency in Internal Medicine','Lenox Hill Hospital, Fellowship in Gastroenterology','Johns Hopkins University (Bachelor’s)'],
        BoardCertification:['American Board of Gastroenterology and Internal Medicine'],
        EducationAndBackgroundContent:'We are a fully accredited facility with New York State through the American Association for Accreditation of Ambulatory Surgical Facilities. We have an anesthesiologist present in our facility as well as all required emergency equipment and medicines. Dr. Schwarz is board certified in Gastroenterology and Internal medicine. He is licensed to practice in New York after attending Johns Hopkins University, University of Miami School of Medicine and Salckler School of Medicine. He is affiliated with two hospitals, Lenox Hill Hospital and Mount Sinai Hospital. He and his friendly staff are eager to welcome new patients and give them a wonderful medical experience!'
    },
    {
        name:'Dr. Rotana Tek, DO',
        URLdestination:'/Dr._Rotana_Tek,_DO',
        rating: '4.84',
        address:'468 N Camden Dr, Beverly Hills, California, CA 90210',
        img:Rotana_Tek,
        review:[{
                content:'My appointment was quick and to the point. Dr. Tek showed compassion and answered all of my questions thoroughly.',
                date:'February 16, 2021'
            },
            {
                content:'He’s really great! I’m definitely coming back in the future!',
                date:'February 5, 2021'
            },
            {
                content:'I love his personality in general! Awesome doctor.',
                date:'June 25, 2020'
            },
            {
                content:'Excellent service.',
                date:'March 14, 2020'
            },
        ],
        ReviewCount:function(){return(this.review.length)},
        Specialties:['Internist'],
        EducationAndTraining:['Medical School - University of North Texas Health Science Center, Doctor of Osteopathic Medicine','Wellington Regional Medical Center, Internship in Internal Medicine','Hackensack Meridian Health, Palisades Medical Center, Residency in Internal Medicine'],
        BoardCertification:['Bioidentical Hormone Certification'],
        EducationAndBackgroundContent:'Dr. Tek states, "Being a physician is a distinct privilege. We make patients feel better in the worst time of their lives, by maintaining the opportunity to nurture and keep them healthy and active. There is always an overwhelming satisfaction to help patients. It’s especially gratifying to hear them recover from an ailment that I was able to treat. It gives me pause to know that they have their life back. At the end of the day, it is about quality patient care. Listening to my patients concerns about their health is first priority. Understanding my patients experiences, memories, socioeconomic status, and career choices helps me to appreciate them as unique individuals.” He truly believes that great care requires compassion, and a medical provider that truly listens to his patient’s needs and practices evidence based medicine. Patients deserve the best when it comes to their health, and they will find exceptional care with him.'
    },
    {
        name:'Dr. Omid Shaye, MD',
        URLdestination:'/Dr._Omid_Shaye,_MD',
        rating: '4.78',
        address:'8631 W 3rd St., Los Angeles, CA 90048',
        img:Omid_Shaye,
        review:[{
                content:'He was really sweet and thorough! I felt seen and not gaslit like I felt with previous doctors. He knows his stuff.',
                date:'January 13, 2021'
            },
            {
                content:'Very professional staff, It was a pleasure meeting Dr. Shaye. He has an awesome personality.',
                date:'January 5, 2021'
            },
            {
                content:'Dr. Shaye and his team were absolutely fantastic. I would recommend them to anybody looking for help with internal medicine and gastro issues.',
                date:'May 25, 2020'
            },
            {
                content:'Never seen a better doctor than Dr Shaye.',
                date:'March 12, 2020'
            },
        ],
        ReviewCount:function(){return(this.review.length)},
        Specialties:[ 'Internist', 'Primary Care Doctor'],
        EducationAndTraining:['Medical School - University of California, San Diego, Doctor of Medicine','Cedars-Sinai Medical Center, Residency in Internal Medicine','University of California, Los Angeles, Fellowship in Gastroenterology'],
        BoardCertification:['Gastroenterology (Internal Medicine)'],
        EducationAndBackgroundContent:'Omid A. Shaye, MD, brings a wealth of experience and a vast body of knowledge to Gastroenterology Associates of Beverly Hills. He and his Co-Director Dr. Enayati have quickly become the “go-to” doctors for all GI disorders and related treatments in Beverly Hills, California. A strong patient advocate and supporter of educational outreach, Dr. Shaye encourages all of his patients to learn as much as they can about their specific health condition so that he and the patient can work together as a team. Dr. Shaye has done extensive research on GI disorders and liver diseases, is the author of numerous journal articles and abstracts and has presented on a variety of topics both nationally and internationally'

    }

]

export {TherapistIconArray, ReviewArray};
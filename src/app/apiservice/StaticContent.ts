import { Injectable } from '@angular/core';


export class WheelContent {
    Planning: any;
    Preparing: any;
    Performing: any;
    Reviewing: any;
}

let wheelContents: WheelContent[] = [
    {
        "Planning": [
            {
                "Decidingonthetopic": [
                    {
                        "Description": "set goals and objectives",
                        "step": 1,
                        "content": " Without a specific goal and objective your webinar can lose its significance and focus "
                    },
                    {
                        "Description": "Determine your target audience",
                        "step": 1,
                        "content": " Select a winning topic that connects with your target audience "
                    },
                    {
                        "Description": "Make the list of topics",
                        "step": 1,
                        "content": " Creating a list helps you in organizing the information and prioritize the topic "
                    },
                    {
                        "Description": "fix the topic",
                        "step": 1,
                        "content": "Select the perfect topic from the list and fix it"
                    },
                    {
                        "defaultdata": "Deciding on the topic is fundamental to the conceptualization and delivery of a successful webinar How to decide on a perfect topic for the webinar",
                        "Description": "Deciding the Topic",
                        "step": 1
                    }
                ],
                "AssigningRoles": [
                    {
                        "Description": "Organizer",
                        "step": 2,
                        "content": "The organizer oversees, developing the content, finding the suitable speakers and the person in charge of registration"
                    },
                    {
                        "Description": "Presenter",
                        "step": 2,
                        "content": "The presenter can be the subject matter expert who delivers the webinar or the moderator who interviews them."
                    },
                    {
                        "Description": "Assistant",
                        "step": 2,
                        "content": "The assistant makes sure that the webinar is running smoothly. They might greet the audience before the webinar begins as well as ask ice-breaking questions. They help webinar registrants with technical difficulties and pass along their questions and comments to the presenter."
                    },
                    {
                        "defaultdata": "The next aspect of planning for a webinar begins with the formation of a core committee to ensure smooth planning of the webinar.",
                        "Description": "Assigning Roles",
                        "step": 2
                    }
                ],
                "Recruitingthespeakers": [
                    {
                        "Description": "Experience",
                        "step": 3,
                        "content": "The speaker has any previous experience who could entail speaking at a conference, podcast, a lecture or even at a meeting."
                    },
                    {
                        "Description": "Expertise",
                        "step": 3,
                        "content": "The speaker is an expert in a particular topic typically and has a sense of passion for the topic as well. This will be just as important to engage the audience during the presentation"
                    },
                    {
                        "Description": "Time Management",
                        "step": 3,
                        "content": "Since webinars are live events, and need to start and end on time, it is imperative that your speaker has strong time management skill"
                    },
                    {
                        "Description": "Availability",
                        "step": 3,
                        "content": "Webinar presenters need to be available for: pre-webinar session(s), the live webinar and sometimes a postwebinar session."
                    },
                    {
                        "Description": "Adaptability",
                        "step": 3,
                        "content": "The speaker should be adaptable to the various questions asked by the audience. so, it’s important that speaker can answer or divert unexpected question"
                    },
                    {
                        "defaultdata": "Recruiting a good speaker is a vital step in the webinar. The speaker can either make or break your webinar. The steps to keep in mind while recruiting the speakers are as follows",
                        "Description": "Recruiting the speakers",
                        "step": 3
                    }
                ],
                "Decidingontheplatform": [
                    {
                        "Description": "Ease of use",
                        "step": 4,
                        "content": "The platform should be easy to use by the host, presenter and audience ."
                    },
                    {
                        "Description": "Audience size",
                        "step": 4,
                        "content": "If the webinar is said to have a large attendance, choose a platform that can accommodate enough people. Before you invest in a platform, get a sense of the size of the audience."
                    },
                    {
                        "Description": "Budget",
                        "step": 4,
                        "content": "There are free as well as paid platforms. Decide on the needs before purchasing the platform."
                    },
                    {
                        "Description": "Recording option",
                        "step": 4,
                        "content": "Many registrants fail to attend the webinar for a number of reasons. In such cases, recording the webinar might be really beneficial. As a result, selecting a webinar platform that includes this feature is the best option."
                    },
                    {
                        "Description": "Engagement tool",
                        "step": 4,
                        "content": "Engagement is a central part of a webinar. Most webinar platforms provide chatbox features and a “raise your hand”feature. Select the right platform with wide range of engagement tools."
                    },
                    {
                        "Description": "Mobile utilization",
                        "step": 4,
                        "content": "With many people using mobile as the device to attend webinar, one should make sure the mobile compatibility of the platform."
                    },
                    {
                        "Description": "Multi-stream capabilities",
                        "step": 4,
                        "content": "With the popularity of social media platforms on the rise, webinar hosts might benefit from social media integration. Make sure the platform has multi-stream capabilities across various social medi."
                    },
                    {
                        "Description": "Video & Audio quality",
                        "step": 4,
                        "content": "It is critical to select a webinar platform that offers high-definition streaming with minimal latency."
                    },
                    {
                        "defaultdata": "With a wide variety of platform options available in the market. Choosing the right one for your webinar is crucial.",
                        "Description": "Deciding on the platform",
                        "step": 4
                    }
                ]
            }
        ],
        "Preparing": [
            {
                "Preparetheequipments": [
                    {
                        "Description": "Computer/tablets",
                        "step": 5,
                        "content": "Any modern computer is basically good enough for holding webinars. One of the followingbrowsers should be installed on the computer: Google Chrome, Mozilla Firefox, Safari, Opera."
                    },
                    {
                        "Description": "Stable Internet Connection",
                        "step": 5,
                        "content": "The quality of sound and video during webinars is greatly dependent on the Internet connection speed. For a webinar with video broadcasting, this should be not less than 10 Mbps. In cases where no webcam is used, 4 Mbps should suffice."
                    },
                    {
                        "Description": "Microphone",
                        "step": 5,
                        "content": "Most computers and laptops have built-in microphones and speakers, but they offer low sound quality accompanied by an echoing effect as a rule."
                    },
                    {
                        "Description": "Webcam",
                        "step": 5,
                        "content": "Most of the computers and laptops have got built-in webcams that could be used for holding webinars. But video quality can often be improved considerably by using a standalone webcam."
                    },
                    {
                        "Description": "Lighting",
                        "step": 5,
                        "content": "A well-lit room is required for the webinar to have a better video quality. If not available add artificial lights to the room where webinar is being conducted."
                    },
                    {
                        "Description": "Earpiece",
                        "step": 5,
                        "content": "To conduct a webinar, any usual 3.5 mm or USB headset can be used. Due to the built-in soundprocessing card, it provides a clearer sound and is effective in noise reduction"
                    },
                    {
                        "defaultdata": "Webinar being conducted online needs minimum devices for the smooth conduction of webinar. They are us follows.",
                        "Description": "Prepare the equipment’s",
                        "step": 5
                    }
                ],
                "SetupRegistration": [
                    {
                        "Description": "Registration tool",
                        "step": 6,
                        "content": "While some platforms provide built-in registration form. If not prepare your own registration forms using online tools like google forms."
                    },
                    {
                        "Description": "Registration fee",
                        "step": 6,
                        "content": "Decide on the registration fee for webinar or it is free webinar. If the webinar is a paid webinar mention on the payment details or provide a payment link with the registration tool."
                    },
                    {
                        "Description": "Clear Concise forms",
                        "step": 6,
                        "content": "Keep the language of the form simple and concise."
                    },
                    {
                        "Description": "Contact details of host",
                        "step": 6,
                        "content": "Provide the contact details of the host, for any queries."
                    },
                    {
                        "Description": "Follow-up",
                        "step": 6,
                        "content": "After a user registers for the webinars, ensure that the registered user attends. Direct successful registrations to a thank you page where it provides a link for attending the webinar and boldly restate the date and time in which it is taking place."
                    },
                    {
                        "defaultdata": "The following steps must be followed for registration.",
                        "Description": "Set-up Registration",
                        "step": 6
                    }
                ],
                "Marketing": [
                    {
                        "Description": "Promotional Material",
                        "step": 7,
                        "content": "Design an attractive invitation or an exclusive website with all the details of the webinar, including the link for registration."
                    },
                    {
                        "Description": "Promoting",
                        "step": 7,
                        "content": "Promote the webinar across various social media such us facebook/twitter/whatsapp from 1 week prior to the webinar."
                    },
                    {
                        "Description": "Follow-up",
                        "step": 7,
                        "content": "Send remainder e-mails for the participants on regular interval."
                    },
                    {
                        "defaultdata": "Promoting the webinar and attracting the participants is the crucial step for a successful webinar. For a better marketing the following steps to be followed.",
                        "Description": "Marketing",
                        "step": 7
                    }
                ],
                "DryRun": [
                    {
                        "Description": "Introductions",
                        "step": 8,
                        "content": "Introduce the webinar team members and presenters to each other if they haven’t already met. If guest speakers have any questions or require assistance, they should know whom to turn to for help."
                    },
                    {
                        "Description": "Test The equipment’s",
                        "step": 8,
                        "content": "Check your equipment to ensure everything is in working order. This includes an audio test, features check, and recording check. Make sure everyone attends your webinar dry run from the computer they'll be using for the live event to avoid any unpleasant surprises."
                    },
                    {
                        "Description": "Agenda review",
                        "step": 8,
                        "content": "Review your webinar agenda and ensure that everyone understands what their signalling mechanisms are. If there are any lingering concerns, now is the moment to resolve them and complete adjustments."
                    },
                    {
                        "Description": "Presentation check",
                        "step": 8,
                        "content": "Adjust your presentation as needed, troubleshoot any technological issues, and respond to any unanswered questions."
                    },
                    {
                        "Description": "Timing",
                        "step": 8,
                        "content": "Make sure everyone sticks to the timing and make changes accordingly."
                    },
                    {
                        "Description": "Reviewing the recording",
                        "step": 8,
                        "content": "Review your dry run recording and note down any problematic areas."
                    },
                    {
                        "defaultdata": "Since webinar is entirely dependent on technology, everything should be double-checked ahead of time. For that reason alone, you should schedule a webinar run-through a few days before the event, to check that everything is well prepared.",
                        "Description": "Dry Run",
                        "step": 8
                    }
                ]
            }
        ],
        "Performing": [
            {
                "Checkontheconnections": [
                    {
                        "Description": "Check the internet speed",
                        "step": 9,
                        "content": "Countercheck the internet stability and make sure it is not less than 10mbps."
                    },
                    {
                        "Description": "Check on the equipments",
                        "step": 9,
                        "content": "Check on the computer, microphone and headpiece."
                    },
                    {
                        "Description": "Log into platform 15-30 mins prior",
                        "step": 9,
                        "content": ""
                    },
                    {
                        "Description": "Perform a audio and video check",
                        "step": 9,
                        "content": "Test the video and audio prior to start of the webinar."
                    },
                    {
                        "defaultdata": "Check all the connections and equipment's before you start. This includes.",
                        "Description": "Check on the connections",
                        "step": 9
                    }
                ],
                "Recordthewebinar": [
                    {
                        "Description": "Use a build in screen recorder download",
                        "step": 10,
                        "content": ""
                    },
                    {
                        "Description": "Set up screen recording",
                        "step": 10,
                        "content": ""
                    },
                    {
                        "Description": "Record the webinar",
                        "step": 10,
                        "content": ""
                    },
                    {
                        "Description": "Edit and save",
                        "step": 10,
                        "content": ""
                    },
                    {
                        "defaultdata": "Since a Webinar is a live event, it is important to record your valuable content such that it can be reviewed and publishes on a later time.",
                        "Description": "Record the webinar",
                        "step": 10
                    }
                ],
                "Promoteonsocialmedia": [
                    {
                        "Description": "Testing the equipments & connectivity",
                        "step": 11,
                        "content": ""
                    },
                    {
                        "Description": "Live streaming on social media(youtube/facebook/linkedin)",
                        "step": 11,
                        "content": ""
                    },
                    {
                        "Description": "Gain reach and better targeting",
                        "step": 11,
                        "content": ""
                    },
                    {
                        "defaultdata": "Promoting the live webinar by going live on different sites at the same time has the potential to outshine most of the other promotional activities.",
                        "Description": "Promote on social media",
                        "step": 11
                    }
                ],
                "Gatherspeakerandcallinguests": [
                    {
                        "Description": "Start the program at right time",
                        "step": 12,
                        "content": ""
                    },
                    {
                        "Description": "Welcome the speakers",
                        "step": 12,
                        "content": ""
                    },
                    {
                        "Description": "Stick to time",
                        "step": 12,
                        "content": ""
                    },
                    {
                        "Description": "End the program with a formal vote of thanks",
                        "step": 12,
                        "content": ""
                    },
                    {
                        "defaultdata": "Now the webinar is ready to start. Follow the steps",
                        "Description": "Gather speaker and call-in guests",
                        "step": 12
                    }
                ]
            }
        ],
        "Reviewing": [
            {
                "Sendingfeedback": [
                    {
                        "Description": "Keep scale questions and multiple choice questions",
                        "step": 13,
                        "content": ""
                    },
                    {
                        "Description": "Keep the language simple and direct",
                        "step": 13,
                        "content": ""
                    },
                    {
                        "Description": "Link the certificate of participation with feedback",
                        "step": 13,
                        "content": ""
                    },
                    {
                        "Description": "send the feedback link within 2 hours of webinar ends",
                        "step": 13,
                        "content": ""
                    },
                    {
                        "defaultdata": "Feedback allows you to determine what works and what doesn't in your webinar. This enables you to make better educated decisions the following time, and therefore improve.",
                        "Description": "Sending feedback",
                        "step": 13
                    }
                ],
                "Collectingthematerialsandsharing": [
                    {
                        "Description": "Request and collect the webinar materials from speakers",
                        "step": 14,
                        "content": ""
                    },
                    {
                        "Description": "Send the certificate of appreciation to resource persons",
                        "step": 14,
                        "content": ""
                    },
                    {
                        "Description": "Share the materials to participant through mail",
                        "step": 14,
                        "content": ""
                    },
                    {
                        "Description": "Share the materials within 3 days of completing webinar",
                        "step": 14,
                        "content": ""
                    },
                    {
                        "defaultdata": "Make sure that all the materials used for webinar has been compiled and ready for sharing",
                        "Description": "Collecting the materials and sharing",
                        "step": 14
                    }
                ],
                "Evaluatethefeedback": [
                    {
                        "Description": "Review each of the feedback points",
                        "step": 15,
                        "content": ""
                    },
                    {
                        "Description": "Discuss on the feedback with the team",
                        "step": 15,
                        "content": ""
                    },
                    {
                        "Description": "Act on the feedback",
                        "step": 15,
                        "content": ""
                    },
                    {
                        "defaultdata": "",
                        "Description": "Evaluate the feedback",
                        "step": 15
                    }
                ],
                "Planfornextwebinar": [
                    {
                        "Description": "Review the strength and weakness",
                        "step": 16,
                        "content": ""
                    },
                    {
                        "Description": "Give adequate space between the two webinars",
                        "step": 16,
                        "content": ""
                    },
                    {
                        "Description": "Start discussing with the team members",
                        "step": 16,
                        "content": ""
                    },
                    {
                        "defaultdata": "Congratulations on completing your webinar! Wait… This is not the end, just a beginning…",
                        "Description": "Plan for next webinar",
                        "step": 16
                    }
                ]
            }
        ]
    }

]

@Injectable()
export class Services {
    getWheelContentss() {
        return wheelContents;
    }
}



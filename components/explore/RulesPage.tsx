"use client";

import { useLanguage } from "@/context/LanguageContext";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function RulesPage() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();

  // Sync language with URL path
  useEffect(() => {
    if (pathname.startsWith("/fr")) {
      setLang("fr");
    } else if (pathname.startsWith("/en")) {
      setLang("en");
    }
  }, [pathname, setLang]);

  const t = {
    en: {
      title: "Rules",
      version: "Version in force since May 1, 2025",
      preambleTitle: "Preamble",
      preambleText1: "This regulation is established in accordance with the provisions of articles L 6352-3 and R 6352-1 to R 6352-15 of the Labor Code. Its purpose is to establish the rules relating to discipline, hygiene and safety within the private higher education institution GRAND SUD FORMATION located at 21 rue du Village d'Entreprises, ZAC de l'Hers, Bâtiment 6, 31670 LABEGE (SIRET 94212165800028).",
      preambleText2: "The internal regulations aim to ensure the smooth running of learning and collective life.",
      scopesTitle: "Scopes",
      scopesList: [
        "The regulations apply to all persons participating in a training activity, an oral defense or information meetings (such as open days) held on the premises of GRAND SUD FORMATION.",
        "An IT charter completes this regulation. The acceptance of a training contract automatically implies acceptance of these internal rules and the IT charter. These provisions are applicable to all learners, who must comply with them without restriction.",
        "A copy is given to each learner. Each learner is considered to have accepted the terms of this regulation when he follows a training and agrees that measures will be taken against him in case of non-compliance with the latter.",
        "In this regulation, the term 'learners' refers to students, trainees, apprentices or any other person attending classes at GRAND SUD FORMATION schools.",
        "In this regulation, the premises and surroundings of GRAND SUD FORMATION are referred to as 'Campus'.",
        "In this regulation, the term 'Direction' refers to the Campus Managers or the Director of the GRAND SUD FORMATION school.",
        "In this regulation, is referred to as the 'Curriculum' all the courses followed by the learners contractually planned."
      ],
      healthSafetyTitle: "Health and Safety",
      healthSafetyIntro: "Each learner must ensure their own safety and that of others by respecting the general and particular safety and hygiene instructions in force at the training site. However, in accordance with the regulations in force, when the training takes place in a company or an establishment already having internal regulations, the safety and hygiene measures applicable to the learners are those of the latter.",
      fireTitle: "Fire instructions and risk prevention",
      fireTexts: [
        "Fire instructions, including a plan for the location of fire extinguishers and emergency exits, are posted on campus. Each learner must take note of it.",
        "In case of an alert, each learner is required to execute without delay the evacuation order given by the trainer or by a campus employee. Any learner witnessing the outbreak of a fire must immediately call for help by dialing 18 from a landline phone or 112 from a mobile phone and alert a representative of GRAND SUD FORMATION.",
        "Emergency exits and clearances allowing rapid evacuation in case of fire must always be free and never encumbered with objects of any kind; access to fire extinguishers, in particular, must be permanently clear.",
        "It is forbidden to disable any security device. Handling operations are reserved for authorized personnel unless specifically requested by the Management or its representatives.",
        "Learners must immediately report to the reception any anomaly that they might possibly notice: student discomfort, smoke odors, leaks, etc. Any accident, even slight, occurred during the training must be brought to the attention of the Campus no later than 24 hours except in cases of force majeure, absolute impossibility or legitimate reason.",
        "The learners undertake to participate calmly and seriously in the fire evacuation exercises organized by GRAND SUD FORMATION."
      ],
      noSmokingTitle: "No smoking",
      noSmokingTexts: [
        "It is strictly forbidden to smoke and 'vape' in all premises including access places (corridors, stairs, porches, etc.). It is also forbidden to smoke in front of the building and to throw cigarette butts or any other waste around the campus. A sign reminding of the prohibition on smoking is placed in all the premises concerned.",
        "A place is provided for this purpose. Learners can approach the administration to learn more.",
        "Failure to comply with the prohibition on smoking in the premises concerned will give rise to penalties under the conditions defined below."
      ],
      alcoholTitle: "Drinking alcohol is prohibited.",
      alcoholTexts: [
        "The introduction or consumption of drugs or alcoholic beverages in the premises or on campus is strictly prohibited, except in exceptional circumstances and with the agreement of the Management.",
        "It is forbidden for students to enter or stay on campus in a state of intoxication or under the influence of drugs, under penalty of disciplinary measures. Learners will have access during breaks to non-alcoholic beverage dispensing stations."
      ],
      mealsTitle: "Meals and management of the dining room",
      mealsTexts: [
        "It is strictly forbidden to eat and bring drinks in the classrooms. Only water bottles or gourds are allowed.",
        "A cafeteria area is dedicated to learner breaks. It has vending machines, microwaves and a fridge.",
        "Even if a cleaning service is provided, the learners must ensure that they are clean.",
        "The catering area is a common living space, it must be kept clean and tidy by the users for the comfort of all.",
        "GRAND SUD FORMATION disclaims all responsibility in case of any problems with food and drink distributors."
      ],
      disciplineTitle: "Provisions Relating to Discipline",
      disciplineIntro: "Respect for rules and community life is core to our pedagogical approach.",
      schedulesTitle: "Respect for schedules, delays and absences",
      schedulesTexts: [
        "Learners have an obligation of presence and punctuality.",
        "Learners must respect timetables, training schedules and breaks. These are communicated by the educational administration. Any modification is decided by the Campus Management and/or the Pedagogical Direction and cannot be the subject of direct negotiation between the learners and a trainer. During periods in the company (work-study, internship, etc.), the learner, under the authority of the company manager, must comply with the internal regulations, the requested missions and the schedules in force in the company within the normal duration of the legislation in force.",
        "In case of exceptional modification of class hours or rooms by the administration, learners will be informed and required to comply with it.",
        "Deaths, relocations and certain administrative procedures are subject to an exceptional absence authorization, within the limits of those provided for by the Labor Code. Learners in initial training must present a medical certificate for any absence, illness or accident. Alternating learners must necessarily present a work stoppage, regardless of the duration of the absence. The latter must be submitted within 48 hours of stopping.",
        "Any delay due to a case of force majeure or not must be reported to the administration upon the learner's arrival. Recurring delays may be subject to disciplinary measures. Beyond a 15-minute delay, the learner will be considered absent. The speaker is however free to accept it or not in the classroom.",
        "Departures from the campus during mandatory hours, excluding breaks, may only occur with the authorization of the administration."
      ],
      schedulesListTitle: "The admitted cases of absences are as follows:",
      schedulesList: [
        "learner sick at the training place and returning to his home or a medical center",
        "serious family event unexpectedly occurring",
        "imperative summons from an administration",
        "imperative medical care and/or exams"
      ],
      examsTitle: "Absences from exams",
      examsTexts: [
        "The unjustified absence from a control test cancels the result. Only absences motivated by hospitalization, death or certain administrative procedures can lead to an invalidation of the exam. The learner must then inform the educational manager of their foreseeable absence, obtain his approval and then justify their absence on the day of their return to the campus by submitting an official document. Unforeseeable absences must be justified by a sick leave."
      ],
      dropoutTitle: "Dropout",
      dropoutTexts: [
        "If the learner must leave the course in case of outside force majeure, he must contact the Management as soon as possible after having informed it by registered letter with acknowledgment of receipt of the reason for his abandonment."
      ],
      premisesTitle: "Respect for the premises",
      premisesTexts: [
        "The premises must be used in accordance with their purpose, destination and the mission assigned to them by the Campus. Learners do not have to intervene on the premises or move furniture without the prior authorization of the Campus staff (speakers or management team).",
        "Under the responsibility of the concerned stakeholders, learners are required to proceed with the tidying up of their work area at the end of classes. Learners also participate in the rehabilitation of premises used for any element of campus life.",
        "Any learner responsible for the deterioration of the premises must participate in their restoration. Any damaged equipment and supplies, or any theft observed, will result in the reimbursement by their authors of the costs of repair or replacement.",
        "Disciplinary sanctions may also be considered.",
        "The use of skateboards, scooters or any other means of locomotion is prohibited inside the campus."
      ],
      equipmentTitle: "Use of the equipment",
      equipmentTexts: [
        "The learners must maintain in good condition the work equipment entrusted to them (camera, video projector, television, furniture, computers and peripherals, active network servers, etc.). Repairs and modifications of the devices can only be carried out by the person in charge of them on the Campus. Learners may not use the materials entrusted to them for personal use. In particular, they are prohibited from taking items belonging to the Campus outside without written permission.",
        "Any attempt to hack software owned by the Campus will be considered theft. The use of the Internet is reserved within the framework of courses provided for professional use.",
        "In case of disappearance of material on the campus, at the training site or outside the campus, the responsibility of the learners may be sought by all legal means."
      ],
      hoursTitle: "Opening hours",
      hoursTexts: [
        "Unless special provisions are made known to the learners, the campus is open and accessible:",
        "• from Monday to Thursday from 8:00 AM to 5:30 PM",
        "• on Friday from 8:00 to 17:00",
        "Exceptional openings can be set up on the occasion of juries, assessments, special projects, open days, various events. Schedule changes may be decided by the Management for security reasons, particular constraints or other major reasons. Any learner with a job to produce must therefore organize themselves according to these schedules.",
        "A learner may be denied access in class in case of an incomplete file or unpaid tuition fees.",
        "The training rooms and ancillary premises (break rooms, workspaces, etc.) are reserved exclusively for the professional activities of GRAND SUD FORMATION and the learners."
      ],
      leafletsTitle: "Leaflets and displays",
      leafletsTexts: [
        "Wild posting is strictly prohibited. The Campus may make display panels available to learners.",
        "It is forbidden to engage in religious or community proselytism.",
        "In respect of freedom of information and expression with regard to political, economic, social and cultural problems, the distribution of leaflets or any document by learners is authorized within the campus only under the condition of having previously received authorization from the Direction.",
        "It is forbidden to bring into the workplace objects or goods intended for sale there; to circulate without authorization subscription or collection lists; to use without authorization the corporate name «GRAND SUD FORMATION» in the organization of parties, events or in any form of written or unwritten external communication.",
        "In order to avoid any deterioration, the display of decorative objects (posters, cards, etc.) is subject to authorization by the Management."
      ],
      theftTitle: "Theft and deterioration",
      theftTexts: [
        "The Management declines all responsibility for theft and damage that could be caused to the property of the learners. Personal PCs are the responsibility of their owner."
      ],
      dressTitle: "Dress code",
      dressTexts: [
        "The learners must present themselves in training with correct and appropriate dress for the future profession concerned. Thus the Management strongly favours wearing professional attire.",
        "The Management forbids:",
        "• the crop top",
        "• wearing headgear (hat, cap, beret, etc.)",
        "• the wearing of elements covering all or part of the face",
        "• shorts, bermudas, flip-flops or t-shirts (not suitable for a professional environment)",
        "• the pants with nicks, holes that reveal too much the anatomy of the learners",
        "• the joggers",
        "• the headphones or earbuds",
        "Wearing of professional clothing is mandatory during certain specific events."
      ],
      attitudeTitle: "Attitude in class and on campus",
      attitudeTexts: [
        "Representing the image of the campus, learners must demonstrate a respectful and professional attitude during classes and during all activities related to the Campus. This respect also applies to all exchanges that the learner may have with the teachers but also with the administrative team and all the campus stakeholders in general.",
        "A learner adopting behavior likely to disrupt the smooth running of the course or non-compliant attire may be expelled from the courses concerned and will incur the penalties provided for in this Regulation. Any exclusion from classes will result in an unjustified absence.",
        "Personal telephone communications are only transmitted outside school hours and must be limited to emergency cases. The use of mobile phones, whatever their purpose, is not allowed during classes.",
        "However, in some subjects, the speaker may request to use the mobile phone for educational purposes.",
        "Games and websites not suitable for classes are not allowed.",
        "Objects such as knives, cutters, sharp-tipped scissors, glass objects, firecrackers are prohibited on the campus."
      ],
      hazingTitle: "Crime of hazing",
      hazingTexts: [
        "The act of causing another, whether against his will or not, to suffer or commit humiliating or degrading acts during demonstrations or meetings is an offence punishable under the conditions laid down in the Criminal Code. The act of hazing may give rise to a disciplinary sanction independent of the implementation of criminal proceedings."
      ],
      imageTitle: "Authorization to reproduce and distribute the image",
      imageTexts: [
        "For communication and promotional purposes, GRAND SUD FORMATION may produce videos and photos featuring images of learners.",
        "Authorization to use the images is formalized by the 'authorization to use the learner's image' form completed by each learner at the start of the academic year. It is specified that this acceptance is independent of the Campus's decision to use all or part of the recorded images."
      ],
      harassmentTitle: "Sexual harassment",
      harassmentTexts: [
        "No learner may be punished or excluded for having suffered or refused to suffer harassment by a member of the campus staff, the company, another learner, or any person who, abusing the authority conferred on them by their position, has given orders, made threats, imposed constraints, or exerted pressure of any kind on that learner with the aim of obtaining sexual favors for their own benefit or for the benefit of a third party.",
        "No learner may be punished or excluded for witnessing or reporting the acts defined above. Any provision or act to the contrary is null and void. Any learner who has committed the acts defined above is liable to disciplinary action."
      ],
      advisorsTitle: "Disability Advisor and Mobility Advisor",
      disabilityTitle: "Accessibility and disability advisor",
      disabilityTexts: [
        "The campus disability advisor monitors all students with disabilities. They gather information on individual needs and, where necessary, work with their network to find a personalized solution for students with disabilities.",
        "The advisor supports learners in their efforts, either directly or through the campus teams. They ensure that learners have access to training in the best possible conditions, particularly by taking their disability into account.",
        "They are the main point of contact for learners, companies, and teaching teams when it comes to taking disability into account at GRAND SUD FORMATION and in the workplace.",
        "If you have any questions on this subject, please contact the disability advisor.",
        "The advisor and their role and responsibilities are presented during the orientation days.",
        "For any course or exam accommodations, medical documentation must be provided to the disability advisor."
      ],
      mobilityTitle: "National and international mobility advisor",
      mobilityTexts: [
        "GRAND SUD FORMATION is attentive to the national and international mobility of its students.",
        "The campus mobility advisor, introduced during the enrollment process, is the primary contact for any questions or information."
      ],
      sanctionsTitle: "Disciplinary Sanctions and Learners' Rights of Defense",
      sanctionSubTitle: "Disciplinary sanctions",
      sanctionTexts: [
        "Learners are required to observe all the rules set out in these regulations in a spirit of respect for people and property. Any failure to comply with the provisions set out herein, or any fraud or attempted fraud committed during registration, continuous assessment, examinations, or qualification tests, will be subject to disciplinary action.",
        "No sanction may be imposed on a learner without first informing them of the charges against them.",
        "The scale of sanctions is as follows:",
        "• warning letter",
        "• temporary exclusion as a precautionary measure",
        "• permanent exclusion"
      ],
      proceedingsTitle: "Disciplinary proceedings",
      proceedingsTexts: [
        "Depending on the severity of the breaches of these regulations, the Campus Management may impose sanctions or convene the disciplinary committee.",
        "Late arrivals and absences are penalized as follows:",
        "• 3 unjustified late arrivals result in a warning",
        "• 2 unjustified absences result in a warning",
        "• after 2 warnings, any further unjustified late arrivals or absences will result in a summons to the disciplinary committee"
      ],
      committeeTitle: "Disciplinary committee",
      committeeTexts: [
        "The Campus has a disciplinary committee, whose role is to rule on all cases referred to it involving non-compliance with the rules applicable on campus.",
        "The disciplinary committee is convened for any breach by one or more learners, as perpetrators or accomplices, of the internal regulations or for any behavior serious enough to justify disciplinary proceedings.",
        "The disciplinary committee is composed of at least the following persons:",
        "• The Campus Director or his/her representative, chair of the disciplinary committee",
        "• A member of the campus team, secretary of the committee",
        "• A representative of the teaching staff",
        "The learner may be accompanied by any person of his/her choice, whether internal or external to the campus.",
        "The summons shall be sent to the learner at least 72 hours before the date of the disciplinary committee meeting and must mention the date, time, and place of the hearing and state that the learner may be accompanied.",
        "Minutes shall be sent by email or delivered by hand to the learners concerned at the end of the disciplinary committee meeting."
      ],
      decisionsTitle: "Decisions of the disciplinary board",
      decisionsTexts: [
        "The decisions of the disciplinary committee are taken by a simple majority of the members present. The chair may submit the following proposed sanctions to a vote by the committee:",
        "• warning",
        "• temporary exclusion for a maximum period of one month",
        "• permanent exclusion",
        "• any other sanction deemed appropriate.",
        "The imposition of a sanction may be accompanied, as appropriate, by the invalidation of the registration or the invalidation of the exam corresponding to the fraud or attempted fraud, or even, for the learner concerned, the invalidation of the group of exams or the exam session.",
        "The council shall submit to the president any other penalty not listed above that would ensure discipline on campus. In the event of a learner's permanent expulsion, the learner shall be required to pay the full tuition fees for the current year. The campus director shall notify each learner of the decision by official email or hand-delivered letter.",
        "The implementation of the disciplinary procedure and the imposition of a sanction at the end of that procedure are independent of the implementation of criminal proceedings for the same facts."
      ],
      representationsTitle: "Learner Representations",
      electionTitle: "Election of delegates and voting",
      electionTexts: [
        "(in accordance with the provisions of Articles R6352-9 to 12 of the Labor Code)",
        "For training courses organized in sessions lasting more than five hundred hours in total, a permanent representative and a substitute representative are elected simultaneously by a two-round, single-member voting system. All learners are eligible to vote and stand for election.",
        "The election shall take place during training hours. It shall be held no earlier than twenty-four hours and no later than one hundred and forty-four hours after the start of the first group session.",
        "The campus director is responsible for organizing the election. He or she shall ensure that it runs smoothly.",
        "If, at the end of the election, it is found that learner representation cannot be ensured, the director draws up a report of deficiency."
      ],
      mandateTitle: "Mandate and responsibilities of delegates",
      mandateTexts: [
        "(in accordance with the provisions of Articles R6352-13 to 15 of the Labor Code, some of which have been amended by Decree 2019-1143 of November 7, 2019)",
        "Delegates are elected for the duration of the training program. Their terms of office end when they cease to participate in the training program. When the full delegate and the alternate delegate have ceased their duties before the end of the training course, a new election is held, under the conditions provided for in Articles R6352-9 to R6352-12 of the Labor Code.",
        "Delegates make suggestions to improve the running of training courses and the living conditions of learners in the training organization. They shall submit individual or collective complaints relating to these matters, health and safety conditions at work, and the application of the internal regulations.",
        "They shall sit on class councils and shall be the representatives of their class.",
        "The provisions of this section (Articles R.6352.3 to R.6352.14) shall not apply to prisoners admitted to participate in vocational training."
      ],
      cfaCouncilTitle: "CFA Improvement Council",
      cfaIntro: "As part of apprenticeship training initiatives, a development council has been established to oversee the organization and operation of the campus’s CFA (apprenticeship training center).",
      orgTitle: "Organization",
      orgTexts: [
        "The chair of the development council is held by the director of the CFA or his or her representative. The development council is composed of the following members:",
        "• the director of the CFA or his or her representative",
        "• the CFA’s head of teaching",
        "• a representative of the administrative staff appointed by the CFA director",
        "• two representatives of the teaching staff appointed by the teaching team",
        "• at least two elected representatives of the students appointed by the teaching team",
        "• at least four representatives of the socio-professional world appointed by the CFA director",
        "Other participants may attend the improvement council at the invitation of the chair."
      ],
      opTitle: "Operation",
      opTexts: [
        "The improvement committee examines and discusses issues relating to the organization and operation of the CFA, in particular:",
        "• the CFA’s educational program",
        "• the general conditions for welcoming and supporting learners, particularly those with disabilities, and promoting diversity and national and international mobility",
        "• the organization and delivery of training courses",
        "• the conditions for the preparation and professional development of trainers",
        "• the organization of relations between companies hosting learners and the CFA",
        "• investment projects",
        "• information published each year relating in particular to graduation rates and apprenticeship contract termination rates."
      ],
      bookletTitle: "WORK-STUDY PROGRAM TRACKING BOOKLET",
      bookletText: "The work-study student tracking booklet (apprenticeship booklet) is a tool for tracking training progress. It is given to each student at the start of their training. Students must comply with the terms and conditions set out in the booklet, in particular by having it signed by their apprenticeship supervisor and the campus teaching team.",
      commTitle: "Communication",
      commText: "The learner is informed of these internal regulations before final enrollment, when the commercial proposal is drawn up. A copy of these regulations is available at the GRAND SUD FORMATION premises.",
      effectiveDate: "These internal regulations apply from May 1, 2025."
    },
    fr: {
      title: "Règlement intérieur",
      version: "Version en vigueur depuis le 1er mai 2025",
      preambleTitle: "Préambule",
      preambleText1: "Le présent règlement est établi conformément aux dispositions des articles L 6352-3 et R 6352-1 à R 6352-15 du Code du travail. Il a pour objet de fixer les règles relatives à la discipline, à l'hygiène et à la sécurité au sein de l'établissement d'enseignement supérieur privé GRAND SUD FORMATION situé au 21 rue du Village d'Entreprises, ZAC de l'Hers, Bâtiment 6, 31670 LABEGE (SIRET 94212165800028).",
      preambleText2: "Le règlement intérieur a pour but d'assurer le bon déroulement des apprentissages et de la vie collective.",
      scopesTitle: "Champ d'application",
      scopesList: [
        "Le règlement s'applique à toutes les personnes participant à une activité de formation, une soutenance orale ou des réunions d'information (telles que les journées portes ouvertes) se déroulant dans les locaux de GRAND SUD FORMATION.",
        "Une charte informatique complète ce règlement. L'acceptation d'un contrat de formation implique automatiquement l'acceptation du présent règlement intérieur et de la charte informatique. Ces dispositions sont applicables à tous les apprenants, qui doivent s'y conformer sans restriction.",
        "Un exemplaire est remis à chaque apprenant. Chaque apprenant est réputé avoir accepté les termes du présent règlement lorsqu'il suit une formation et accepte que des mesures soient prises à son encontre en cas de non-respect de ce dernier.",
        "Dans ce règlement, le terme « apprenants » désigne les étudiants, stagiaires, apprentis ou toute autre personne suivant des cours au sein des écoles GRAND SUD FORMATION.",
        "Dans ce règlement, les locaux et les abords de GRAND SUD FORMATION sont désignés sous le terme de « Campus ».",
        "Dans ce règlement, le terme « Direction » fait référence aux directeurs de campus ou au directeur de l'école GRAND SUD FORMATION.",
        "Dans ce règlement, il est désigné sous le terme de « Curriculum » l'ensemble des cours suivis contractuellement par les apprenants."
      ],
      healthSafetyTitle: "Santé et Sécurité",
      healthSafetyIntro: "Chaque apprenant doit veiller à sa propre sécurité et à celle des autres en respectant les consignes générales et particulières de sécurité et d'hygiène en vigueur sur le lieu de formation. Cependant, conformément aux règlements en vigueur, lorsque la formation se déroule dans une entreprise ou un établissement disposant déjà d'un règlement intérieur, les mesures de sécurité et d'hygiène applicables aux apprenants sont celles de ce dernier.",
      fireTitle: "Consignes d'incendie et prévention des risques",
      fireTexts: [
        "Les consignes d'incendie, y compris le plan de localisation des extincteurs et des sorties de secours, sont affichées sur le campus. Chaque apprenant doit en prendre connaissance.",
        "En cas d'alerte, chaque apprenant est tenu d'exécuter sans délai l'ordre d'évacuation donné par le formateur ou par un salarié du campus. Tout apprenant témoin d'un début d'incendie doit immédiatement appeler les secours en composant le 18 depuis un poste fixe ou le 112 depuis un téléphone portable et alerter un représentant de GRAND SUD FORMATION.",
        "Les sorties de secours et les dégagements permettant une évacuation rapide en cas d'incendie doivent toujours être libres et jamais encombrés d'objets de quelque nature que ce soit ; l'accès aux extincteurs, en particulier, doit être libre en permanence.",
        "Il est interdit de désactiver tout dispositif de sécurité. Les opérations de manipulation sont réservées au personnel autorisé, sauf demande expresse de la Direction ou de ses représentants.",
        "Les apprenants doivent signaler immédiatement à l'accueil toute anomalie qu'ils pourraient constater : malaise d'un étudiant, odeurs de fumée, fuites, etc. Tout accident, même léger, survenu pendant la formation doit être porté à la connaissance du Campus au plus tard dans les 24 heures, sauf cas de force majeure, impossibilité absolue ou motif légitime.",
        "Les apprenants s'engagent à participer calmement et sérieusement aux exercices d'évacuation incendie organisés par GRAND SUD FORMATION."
      ],
      noSmokingTitle: "Interdiction de fumer",
      noSmokingTexts: [
        "Il est strictement interdit de fumer et de « vapoter » dans tous les locaux, y compris les accès (couloirs, escaliers, porches, etc.). Il est également interdit de fumer devant le bâtiment et de jeter des mégots de cigarettes ou tout autre déchet aux abords du campus. Un panneau rappelant l'interdiction de fumer est apposé dans tous les locaux concernés.",
        "Un espace est prévu à cet effet. Les apprenants peuvent s'adresser à l'administration pour en savoir plus.",
        "Le non-respect de l'interdiction de fumer dans les locaux concernés donnera lieu à des sanctions dans les conditions définies ci-dessous."
      ],
      alcoholTitle: "L'alcool est interdit",
      alcoholTexts: [
        "L'introduction ou la consommation de drogues ou de boissons alcoolisées dans les locaux ou sur le campus est strictement interdite, sauf circonstances exceptionnelles et avec l'accord de la Direction.",
        "Il est interdit aux étudiants d'entrer ou de séjourner sur le campus en état d'ivresse ou sous l'emprise de stupéfiants, sous peine de sanctions disciplinaires. Les apprenants auront accès pendant les pauses à des distributeurs de boissons non alcoolisées."
      ],
      mealsTitle: "Repas et gestion de la salle de restauration",
      mealsTexts: [
        "Il est strictement interdit de manger et d'apporter des boissons dans les salles de classe. Seules les bouteilles d'eau ou les gourdes sont autorisées.",
        "Un espace cafétéria est dédié aux pauses des apprenants. Il dispose de distributeurs automatiques, de micro-ondes et d'un réfrigérateur.",
        "Même si un service de nettoyage est assuré, les apprenants doivent veiller à ce qu'ils soient propres.",
        "L'espace restauration est un espace de vie commun, il doit être maintenu propre et rangé par les utilisateurs pour le confort de tous.",
        "GRAND SUD FORMATION décline toute responsabilité en cas de problème avec les distributeurs de boissons et de nourriture."
      ],
      disciplineTitle: "Dispositions relatives à la discipline",
      disciplineIntro: "Le respect des règles et de la vie collective est au cœur de notre démarche pédagogique.",
      schedulesTitle: "Respect des horaires, des retards et des absences",
      schedulesTexts: [
        "Les apprenants ont une obligation de présence et de ponctualité.",
        "Les apprenants doivent respecter les plannings, les horaires de formation et les pauses. Ceux-ci sont communiqués par l'administration pédagogique. Toute modification est décidée par la Direction du Campus et/ou la Direction Pédagogique et ne peut faire l'objet de négociations directes entre les apprenants et un formateur. Pendant les périodes en entreprise (alternance, stage, etc.), l'apprenant, sous l'autorité du chef d'entreprise, doit se conformer au règlement intérieur, aux missions demandées et aux horaires en vigueur dans l'entreprise dans le respect de la durée normale de la législation en vigueur.",
        "En cas de modification exceptionnelle des horaires de cours ou des salles par l'administration, les apprenants en seront informés et tenus de s'y conformer.",
        "Les décès, déménagements et certaines démarches administratives font l'objet d'une autorisation d'absence exceptionnelle, dans la limite de celles prévues par le Code du travail. Les apprenants en formation initiale doivent présenter un certificat médical pour toute absence, maladie ou accident. Les apprenants en alternance doivent impérativement présenter un arrêt de travail, quelle que soit la durée de l'absence. Ce dernier doit être transmis dans les 48 heures suivant l'arrêt.",
        "Tout retard, dû ou non à un cas de force majeure, doit être signalé à l'administration dès l'arrivée de l'apprenant. Les retards répétés pourront faire l'objet de sanctions disciplinaires. Au-delà d'un retard de 15 minutes, l'apprenant sera considéré comme absent. L'intervenant reste toutefois libre de l'accepter ou non en classe.",
        "Les départs du campus pendant les heures obligatoires, hors pauses, ne peuvent avoir lieu qu'avec l'autorisation de l'administration."
      ],
      schedulesListTitle: "Les cas d'absences admis sont les suivants :",
      schedulesList: [
        "apprenant malade sur le lieu de formation et retournant à son domicile ou dans un centre médical",
        "événement familial grave survenant de manière imprévue",
        "convocation impérative d'une administration",
        "soins médicaux et/ou examens impératifs"
      ],
      examsTitle: "Absences aux examens",
      examsTexts: [
        "L'absence injustifiée à un contrôle de connaissances annule le résultat. Seules les absences motivées par une hospitalisation, un décès ou certaines démarches administratives peuvent donner lieu à une annulation de l'examen. L'apprenant doit alors informer le responsable pédagogique de son absence prévisible, obtenir son accord puis justifier son absence le jour de son retour sur le campus en présentant un document officiel. Les absences imprévisibles doivent être justifiées par un arrêt maladie."
      ],
      dropoutTitle: "Abandon de formation",
      dropoutTexts: [
        "Si l'apprenant doit abandonner la formation en cas de force majeure extérieure, il doit contacter la Direction dans les plus brefs délais après l'avoir informée par lettre recommandée avec accusé de réception du motif de son abandon."
      ],
      premisesTitle: "Respect des locaux",
      premisesTexts: [
        "Les locaux doivent être utilisés conformément à leur destination et à la mission qui leur est assignée par le Campus. Les apprenants n'ont pas à intervenir sur les locaux ou à déplacer le mobilier sans l'autorisation préalable du personnel du Campus (intervenants ou équipe de direction).",
        "Sous la responsabilité des intervenants concernés, les apprenants sont tenus de procéder au rangement de leur zone de travail à la fin des cours. Les apprenants participent également à la remise en état des locaux utilisés pour tout élément de la vie du campus.",
        "Tout apprenant responsable de dégradations sur les locaux doit participer à leur remise en état. Tout matériel et fourniture endommagés, ou tout vol constaté, donnera lieu au remboursement par ses auteurs des frais de réparation ou de remplacement.",
        "Des sanctions disciplinaires pourront également être envisagées.",
        "L'utilisation de skates, trottinettes ou tout autre moyen de locomotion est interdite à l'intérieur du campus."
      ],
      equipmentTitle: "Utilisation du matériel",
      equipmentTexts: [
        "Les apprenants doivent maintenir en bon état le matériel de travail qui leur est confié (caméra, vidéoprojecteur, télévision, mobilier, ordinateurs et périphériques, serveurs réseau actifs, etc.). Les réparations et modifications des appareils ne peuvent être effectuées que par la personne qui en est responsable sur le Campus. Les apprenants ne peuvent utiliser le matériel qui leur est confié pour un usage personnel. Il leur est notamment interdit de sortir du matériel appartenant au Campus à l'extérieur sans autorisation écrite.",
        "Toute tentative de piratage des logiciels appartenant au Campus sera considérée comme un vol. L'utilisation d'Internet est réservée dans le cadre des cours dispensés à un usage professionnel.",
        "En cas de disparition de matériel sur le campus, sur le lieu de formation ou hors du campus, la responsabilité des apprenants pourra être recherchée par toutes voies de droit."
      ],
      hoursTitle: "Horaires d'ouverture",
      hoursTexts: [
        "Sauf dispositions particulières portées à la connaissance des apprenants, le campus est ouvert et accessible :",
        "• du lundi au jeudi de 8h00 à 17h30",
        "• le vendredi de 8h00 à 17h00",
        "Des ouvertures exceptionnelles peuvent être mises en place à l'occasion de jurys, d'évaluations, de projets spéciaux, de journées portes ouvertes, d'événements divers. Des modifications d'horaires peuvent être décidées par la Direction pour des raisons de sécurité, de contraintes particulières ou pour tout autre motif majeur. Tout apprenant ayant un travail à produire doit donc s'organiser en fonction de ces horaires.",
        "Un apprenant pourra se voir refuser l'accès en classe en cas de dossier incomplet ou de frais de scolarité impayés.",
        "Les salles de formation et les locaux annexes (salles de pause, espaces de travail, etc.) sont réservés exclusivement aux activités professionnelles de GRAND SUD FORMATION et des apprenants."
      ],
      leafletsTitle: "Tracts et affichages",
      leafletsTexts: [
        "L'affichage sauvage est strictement interdit. Le Campus peut mettre des panneaux d'affichage à la disposition des apprenants.",
        "Il est interdit de se livrer à du prosélytisme religieux ou communautaire.",
        "Dans le respect de la liberté d'information et d'expression concernant les problèmes politiques, économiques, sociaux et culturels, la distribution de tracts ou de tout document par les apprenants est autorisée au sein du campus à la seule condition d'avoir préalablement reçu l'autorisation de la Direction.",
        "Il est interdit d'introduire sur le lieu de travail des objets ou des marchandises destinés à y être vendus ; de faire circuler sans autorisation des listes de souscription ou de collecte ; d'utiliser sans autorisation la dénomination sociale «GRAND SUD FORMATION» dans l'organisation de soirées, d'événements ou sous toute forme de communication externe écrite ou non écrite.",
        "Afin d'éviter toute détérioration, l'affichage d'objets décoratifs (affiches, cartes, etc.) est soumis à l'autorisation de la Direction."
      ],
      theftTitle: "Vols et dégradations",
      theftTexts: [
        "La Direction décline toute responsabilité en cas de vol et de dégradation qui pourraient être causés aux biens des apprenants. Les PC personnels restent sous la responsabilité de leur propriétaire."
      ],
      dressTitle: "Tenue vestimentaire",
      dressTexts: [
        "Les apprenants doivent se présenter en formation avec une tenue correcte et adaptée à la future profession concernée. Ainsi, la Direction privilégie fortement le port d'une tenue professionnelle.",
        "La Direction interdit :",
        "• le crop top",
        "• le port de couvre-chefs (chapeau, casquette, béret, etc.)",
        "• le port d'éléments couvrant tout ou partie du visage",
        "• les shorts, bermudas, tongs ou t-shirts (non adaptés à un environnement professionnel)",
        "• les pantalons présentant des déchirures ou des trous laissant trop apparaître l'anatomie des apprenants",
        "• les joggings",
        "• les casques ou écouteurs",
        "Le port d'une tenue professionnelle est obligatoire lors de certains événements spécifiques."
      ],
      attitudeTitle: "Attitude en classe et sur le campus",
      attitudeTexts: [
        "Représentant l'image du campus, les apprenants doivent faire preuve d'une attitude respectueuse et professionnelle pendant les cours et lors de toutes les activités liées au Campus. Ce respect s'applique également à tous les échanges que l'apprenant peut avoir avec les enseignants mais aussi avec l'équipe administrative et l'ensemble des acteurs du campus en général.",
        "Un apprenant adoptant un comportement de nature à perturber le bon déroulement du cours ou une tenue non conforme pourra être exclu des cours concernés et encourra les sanctions prévues au présent Règlement. Toute exclusion de cours entraînera une absence injustifiée.",
        "Les communications téléphoniques personnelles ne sont transmises qu'en dehors des heures de cours et doivent être limitées aux cas d'urgence. L'utilisation des téléphones portables, quel qu'en soit l'usage, n'est pas autorisée pendant les cours.",
        "Cependant, dans certaines matières, l'intervenant pourra demander d'utiliser le téléphone portable à des fins pédagogiques.",
        "Les jeux et les sites internet non adaptés aux cours ne sont pas autorisés.",
        "Les objets tels que couteaux, cutters, ciseaux pointus, objets en verre, pétards sont interdits sur le campus."
      ],
      hazingTitle: "Délit de bizutage",
      hazingTexts: [
        "Le fait d'amener autrui, contre son gré ou non, à subir ou à commettre des actes humiliants ou dégradants lors de manifestations ou de réunions est un délit puni dans les conditions fixées par le Code pénal. Le fait de bizutage peut donner lieu à une sanction disciplinaire indépendante de la mise en œuvre de poursuites pénales."
      ],
      imageTitle: "Autorisation de reproduction et de diffusion de l'image",
      imageTexts: [
        "À des fins de communication et de promotion, GRAND SUD FORMATION peut réaliser des vidéos et des photos présentant des images d'apprenants.",
        "L'autorisation d'utiliser les images est formalisée par le formulaire « autorisation d'utilisation de l'image de l'apprenant » complété par chaque apprenant en début d'année universitaire. Il est précisé que cette acceptation est indépendante de la décision du Campus d'utiliser tout ou partie des images enregistrées."
      ],
      harassmentTitle: "Harcèlement sexuel",
      harassmentTexts: [
        "Aucun apprenant ne peut être sanctionné ou exclu pour avoir subi ou refusé de subir des agissements de harcèlement de la part d'un membre du personnel du campus, de l'entreprise, d'un autre apprenant ou de toute personne qui, abusant de l'autorité que lui confère sa position, a donné des ordres, proféré des menaces, imposé des contraintes ou exercé des pressions de toute nature sur cet apprenant dans le but d'obtenir des faveurs sexuelles à son profit ou au profit d'un tiers.",
        "Aucun apprenant ne peut être sanctionné ou exclu pour avoir témoigné ou relaté les agissements définis ci-dessus. Toute disposition ou tout acte contraire est nul et de nul effet. Tout apprenant ayant commis les faits définis ci-dessus est passible de sanctions disciplinaires."
      ],
      advisorsTitle: "Référent Handicap et Référent Mobilité",
      disabilityTitle: "Référent accessibilité et handicap",
      disabilityTexts: [
        "Le référent handicap du campus accompagne tous les étudiants en situation de handicap. Il recueille des informations sur les besoins individuels et, le cas échéant, travaille avec son réseau pour trouver une solution personnalisée pour les étudiants concernés.",
        "Le référent accompagne les apprenants dans leurs démarches, soit directement, soit par l'intermédiaire des équipes du campus. Il veille à ce que les apprenants aient accès à la formation dans les meilleures conditions possibles, notamment en prenant en compte leur handicap.",
        "Il est le principal point de contact pour les apprenants, les entreprises et les équipes pédagogiques lorsqu'il s'agit de prendre en compte le handicap au sein de GRAND SUD FORMATION et en entreprise.",
        "Si vous avez des questions à ce sujet, veuillez contacter le référent handicap.",
        "Le référent ainsi que son rôle et ses responsabilités sont présentés lors des journées d'intégration.",
        "Pour tout aménagement de cours ou d'examen, des justificatifs médicaux doivent être fournis au référent handicap."
      ],
      mobilityTitle: "Référent mobilité nationale et internationale",
      mobilityTexts: [
        "GRAND SUD FORMATION est attentif à la mobilité nationale et internationale de ses étudiants.",
        "Le référent mobilité du campus, présenté lors du processus d'inscription, est le principal contact pour toute question ou information."
      ],
      sanctionsTitle: "Sanctions disciplinaires et droits de la défense",
      sanctionSubTitle: "Sanctions disciplinaires",
      sanctionTexts: [
        "Les apprenants sont tenus de respecter l'ensemble des règles fixées par le présent règlement dans un esprit de respect des personnes et des biens. Tout manquement aux dispositions fixées aux présentes, ou toute fraude ou tentative de fraude commise lors de l'inscription, du contrôle continu, des examens ou des épreuves de qualification, fera l'objet de sanctions disciplinaires.",
        "Aucune sanction ne peut être infligée à un apprenant sans que celui-ci ait été préalablement informé des griefs retenus contre lui.",
        "L'échelle des sanctions est la suivante :",
        "• lettre d'avertissement",
        "• exclusion temporaire à titre conservatoire",
        "• exclusion définitive"
      ],
      proceedingsTitle: "Procédure disciplinaire",
      proceedingsTexts: [
        "Selon la gravité des manquements au présent règlement, la Direction du Campus pourra prononcer des sanctions ou convoquer le conseil de discipline.",
        "Les retards et absences injustifiés sont sanctionnés comme suit :",
        "• 3 retards injustifiés entraînent un avertissement",
        "• 2 absences injustifiées entraînent un avertissement",
        "• après 2 avertissements, tout nouveau retard ou absence injustifié entraînera une convocation devant le conseil de discipline"
      ],
      committeeTitle: "Conseil de discipline",
      committeeTexts: [
        "Le Campus dispose d'un conseil de discipline, dont le rôle est de statuer sur tous les cas qui lui sont soumis impliquant le non-respect des règles applicables sur le campus.",
        "Le conseil de discipline est convoqué pour tout manquement par un ou plusieurs apprenants, en qualité d'auteurs ou de complices, au règlement intérieur ou pour tout comportement suffisamment grave pour justifier des poursuites disciplinaires.",
        "Le conseil de discipline est composé au moins des personnes suivantes :",
        "• Le Directeur du Campus ou son représentant, président du conseil de discipline",
        "• Un membre de l'équipe du campus, secrétaire du conseil",
        "• Un représentant du personnel enseignant",
        "L'apprenant peut se faire accompagner de toute personne de son choix, interne ou externe au campus.",
        "La convocation est adressée à l'apprenant au moins 72 heures avant la date de réunion du conseil de discipline et doit mentionner la date, l'heure et le lieu de l'audition et préciser que l'apprenant peut se faire accompagner.",
        "Un procès-verbal est envoyé par mail ou remis en main propre aux apprenants concernés à l'issue de la réunion du conseil de discipline."
      ],
      decisionsTitle: "Décisions du conseil de discipline",
      decisionsTexts: [
        "Les décisions du conseil de discipline sont prises à la majorité simple des membres présents. Le président peut soumettre au vote du conseil les propositions de sanctions suivantes :",
        "• avertissement",
        "• exclusion temporaire pour une durée maximale d'un mois",
        "• exclusion définitive",
        "• toute autre sanction jugée appropriée.",
        "Le prononcé d'une sanction peut s'accompagner, le cas échéant, de l'invalidation de l'inscription ou de l'invalidation de l'examen correspondant à la fraude ou tentative de fraude, voire, pour l'apprenant concerné, de l'invalidation du groupe d'examens ou de la session d'examens.",
        "Le conseil soumet au président toute autre peine non listée ci-dessus de nature à assurer la discipline sur le campus. En cas d'exclusion définitive d'un apprenant, celui-ci sera tenu de verser l'intégralité des frais de scolarité de l'année en cours. Le directeur du campus notifie la décision à chaque apprenant par mail officiel ou lettre remise en main propre.",
        "La mise en œuvre de la procédure disciplinaire et le prononcé d'une sanction à l'issue de cette procédure sont indépendants de la mise en œuvre de poursuites pénales pour les mêmes faits."
      ],
      representationsTitle: "Représentation des apprenants",
      electionTitle: "Élection des délégués et scrutin",
      electionTexts: [
        "(conformément aux dispositions des articles R6352-9 à 12 du Code du travail)",
        "Pour les formations organisées en sessions d'une durée totale supérieure à cinq cents heures, un délégué titulaire et un délégué suppléant sont élus simultanément au scrutin uninominal à deux tours. Tous les apprenants sont électeurs et éligibles.",
        "Le scrutin a lieu pendant les heures de formation. Il se déroule au plus tôt vingt-quatre heures et au plus tard cent quarante-quatre heures après le début de la première session collective.",
        "Le directeur du campus est responsable de l'organisation du scrutin. Il veille à son bon déroulement.",
        "Si, à l'issue du scrutin, il est constaté que la représentation des apprenants ne peut être assurée, le directeur dresse un procès-verbal de carence."
      ],
      mandateTitle: "Mandat et responsabilités des délégués",
      mandateTexts: [
        "(conformément aux dispositions des articles R6352-13 à 15 du Code du travail, dont certains ont été modifiés par le décret 2019-1143 du 7 novembre 2019)",
        "Les délégués sont élus pour la durée du programme de formation. Leurs mandats prennent fin lorsqu'ils cessent de participer au programme de formation. Lorsque le délégué titulaire et le délégué suppléant ont cessé leurs fonctions avant la fin de la formation, il est procédé à une nouvelle élection, dans les conditions prévues aux articles R6352-9 à R6352-12 du Code du travail.",
        "Les délégués font des suggestions pour améliorer le déroulement des formations et les conditions de vie des apprenants au sein de l'organisme de formation. Ils présentent les réclamations individuelles ou collectives relatives à ces questions, aux conditions de santé et de sécurité au travail et à l'application du règlement intérieur.",
        "Ils siègent aux conseils de classe et sont les représentants de leur classe.",
        "Les dispositions de la présente section (articles R.6352.3 à R.6352.14) ne s'appliquent pas aux détenus admis à participer à une formation professionnelle."
      ],
      cfaCouncilTitle: "Conseil de perfectionnement du CFA",
      cfaIntro: "Dans le cadre des actions de formation par l'apprentissage, un conseil de perfectionnement a été mis en place pour veiller à l'organisation et au fonctionnement du CFA (centre de formation d'apprentis) du campus.",
      orgTitle: "Organisation",
      orgTexts: [
        "La présidence du conseil de perfectionnement est assurée par le directeur du CFA ou son représentant. Le conseil de perfectionnement est composé des membres suivants :",
        "• le directeur du CFA ou son représentant",
        "• le responsable pédagogique du CFA",
        "• un représentant du personnel administratif désigné par le directeur du CFA",
        "• deux représentants du personnel enseignant désignés par l'équipe pédagogique",
        "• au moins deux représentants élus des étudiants désignés par l'équipe pédagogique",
        "• au moins quatre représentants du monde socio-professionnel désignés par le directeur du CFA",
        "D'autres participants peuvent assister au conseil de perfectionnement sur invitation du président."
      ],
      opTitle: "Fonctionnement",
      opTexts: [
        "Le conseil de perfectionnement examine et débat des questions relatives à l'organisation et au fonctionnement du CFA, notamment :",
        "• le projet pédagogique du CFA",
        "• les conditions générales d'accueil et d'accompagnement des apprenants, notamment ceux en situation de handicap, ainsi que la promotion de la diversité et de la mobilité nationale et internationale",
        "• l'organisation et le déroulement des formations",
        "• les conditions de préparation et de perfectionnement professionnel des formateurs",
        "• l'organisation des relations entre les entreprises accueillant des apprenants et le CFA",
        "• les projets d'investissement",
        "• les informations publiées chaque année concernant notamment les taux d'obtention des diplômes et les taux de rupture des contrats d'apprentissage."
      ],
      bookletTitle: "LIVRET DE SUIVI DE L'ALTERNANT",
      bookletText: "Le livret de suivi de l'alternant (livret d'apprentissage) est un outil de suivi de la progression de la formation. Il est remis à chaque étudiant en début de formation. Les étudiants doivent se conformer aux modalités fixées dans le livret, notamment en le faisant signer par leur tuteur d'apprentissage et l'équipe pédagogique du campus.",
      commTitle: "Communication",
      commText: "L'apprenant est informé de ce règlement intérieur avant son inscription définitive, lors de l'établissement de la proposition commerciale. Un exemplaire de ce règlement est disponible dans les locaux de GRAND SUD FORMATION.",
      effectiveDate: "Ce règlement intérieur s'applique à compter du 1er mai 2025."
    }
  }[lang];

  return (
    <main className="bg-white min-h-screen pt-28 md:pt-36 pb-20 text-black">
      <div className="max-w-[1440px] mx-auto px-6 md:px-[100px] lg:px-[150px]">
        
        {/* Centered red bracket heading */}
        <div className="flex justify-center w-full mb-12">
          <div className="relative py-12 px-12 w-fit">
            <div className="absolute inset-0 border-l-[4px] border-t-[4px] border-b-[4px] border-primary-red w-[80px] md:w-[100px]" />
            <h1 className="text-black text-[28px] md:text-[44px] lg:text-[52px] font-bold uppercase leading-[1.1] text-center tracking-tight relative z-10">
              {t.title}
            </h1>
          </div>
        </div>

        {/* Subtitle version right-aligned */}
        <div className="text-right text-[12px] md:text-[13px] text-gray-500 font-semibold mb-8 uppercase tracking-wider">
          {t.version}
        </div>

        {/* Centered container for legal text */}
        <div className="max-w-[900px] mx-auto space-y-20">
            
            {/* Section 1: Preamble & Scopes */}
            <section id="preamble" className="scroll-mt-36 space-y-10">
              {/* Preamble */}
              <div className="space-y-4">
                <h2 className="text-primary-red text-[24px] md:text-[28px] font-bold uppercase tracking-wide">
                  {t.preambleTitle}
                </h2>
                <div className="text-[14px] md:text-[15px] leading-relaxed text-black/80 font-medium space-y-4">
                  <p>{t.preambleText1}</p>
                  <p>{t.preambleText2}</p>
                </div>
              </div>

              {/* Scopes */}
              <div className="space-y-4 pt-6 border-t border-gray-100">
                <h3 className="text-[20px] md:text-[24px] font-bold text-black uppercase tracking-wide">
                  {t.scopesTitle}
                </h3>
                <ul className="list-disc pl-5 text-[14px] md:text-[15px] leading-relaxed text-black/80 font-medium space-y-3">
                  {t.scopesList.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Section 2: Health & Safety */}
            <section id="health-safety" className="scroll-mt-36 space-y-8 pt-8 border-t border-gray-200">
              <h2 className="text-primary-red text-[24px] md:text-[28px] font-bold uppercase tracking-wide">
                {t.healthSafetyTitle}
              </h2>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-black/80 font-medium">
                {t.healthSafetyIntro}
              </p>

              {/* Fire Instructions */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.fireTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.fireTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Smoking */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.noSmokingTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.noSmokingTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Alcohol */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.alcoholTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.alcoholTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Dining room */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.mealsTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.mealsTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 3: Discipline */}
            <section id="discipline" className="scroll-mt-36 space-y-8 pt-8 border-t border-gray-200">
              <h2 className="text-primary-red text-[24px] md:text-[28px] font-bold uppercase tracking-wide">
                {t.disciplineTitle}
              </h2>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-black/80 font-medium">
                {t.disciplineIntro}
              </p>

              {/* Schedules, Absences */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.schedulesTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-3">
                  {t.schedulesTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
                <div className="mt-4 pt-2">
                  <h5 className="text-[13px] font-bold uppercase text-black mb-2">{t.schedulesListTitle}</h5>
                  <ul className="list-disc pl-5 text-[13px] md:text-[14px] text-black/80 space-y-1">
                    {t.schedulesList.map((item, idx) => (
                      <li key={idx} className="font-medium">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Absences from exams */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.examsTitle}
                </h4>
                <p className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium">
                  {t.examsTexts[0]}
                </p>
              </div>

              {/* Dropout */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.dropoutTitle}
                </h4>
                <p className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium">
                  {t.dropoutTexts[0]}
                </p>
              </div>

              {/* Respect for premises */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.premisesTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.premisesTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Use of equipment */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.equipmentTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.equipmentTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Opening hours */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.hoursTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.hoursTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Leaflets and Displays */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.leafletsTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.leafletsTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Theft and Deterioration */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.theftTitle}
                </h4>
                <p className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium">
                  {t.theftTexts[0]}
                </p>
              </div>

              {/* Dress Code */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.dressTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.dressTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Attitude */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.attitudeTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.attitudeTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Hazing */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.hazingTitle}
                </h4>
                <p className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium">
                  {t.hazingTexts[0]}
                </p>
              </div>

              {/* Image */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.imageTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.imageTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Harassment */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.harassmentTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.harassmentTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 4: Advisors */}
            <section id="advisors" className="scroll-mt-36 space-y-8 pt-8 border-t border-gray-200">
              <h2 className="text-primary-red text-[24px] md:text-[28px] font-bold uppercase tracking-wide">
                {t.advisorsTitle}
              </h2>

              {/* Disability */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.disabilityTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.disabilityTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Mobility */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.mobilityTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.mobilityTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 5: Sanctions & Defense */}
            <section id="sanctions" className="scroll-mt-36 space-y-8 pt-8 border-t border-gray-200">
              <h2 className="text-primary-red text-[24px] md:text-[28px] font-bold uppercase tracking-wide">
                {t.sanctionsTitle}
              </h2>

              {/* Sanctions */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.sanctionSubTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.sanctionTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Proceedings */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.proceedingsTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.proceedingsTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Committee */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.committeeTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.committeeTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Decisions */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.decisionsTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.decisionsTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 6: Representations */}
            <section id="representations" className="scroll-mt-36 space-y-8 pt-8 border-t border-gray-200">
              <h2 className="text-primary-red text-[24px] md:text-[28px] font-bold uppercase tracking-wide">
                {t.representationsTitle}
              </h2>

              {/* Election */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.electionTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.electionTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Mandate */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.mandateTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.mandateTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>
            </section>

            {/* Section 7: CFA Improvement Council */}
            <section id="cfa-council" className="scroll-mt-36 space-y-8 pt-8 border-t border-gray-200">
              <h2 className="text-primary-red text-[24px] md:text-[28px] font-bold uppercase tracking-wide">
                {t.cfaCouncilTitle}
              </h2>
              <p className="text-[14px] md:text-[15px] leading-relaxed text-black/80 font-medium">
                {t.cfaIntro}
              </p>

              {/* Organization */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.orgTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.orgTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Operation */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.opTitle}
                </h4>
                <div className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium space-y-2">
                  {t.opTexts.map((text, idx) => (
                    <p key={idx}>{text}</p>
                  ))}
                </div>
              </div>

              {/* Booklet */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.bookletTitle}
                </h4>
                <p className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium">
                  {t.bookletText}
                </p>
              </div>

              {/* Communication */}
              <div className="space-y-3">
                <h4 className="text-[16px] md:text-[18px] font-bold text-black uppercase tracking-wider">
                  {t.commTitle}
                </h4>
                <p className="text-[13px] md:text-[14px] leading-relaxed text-black/80 font-medium">
                  {t.commText}
                </p>
              </div>

              {/* Effective date subtext */}
              <div className="pt-4 text-[13px] text-primary-red font-bold uppercase tracking-wide">
                {t.effectiveDate}
              </div>
            </section>

        </div>

      </div>
    </main>
  );
}

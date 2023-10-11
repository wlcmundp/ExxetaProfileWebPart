/* eslint-disable max-len */

const common = {
  titleDashBoard: 'Dashboard',
  titleUnauthorized: 'Unauthorized',

  otherLocation: 'Other',
  locationNoAddress: 'Not specified',

  connect: 'Network',
  connectHeader: 'Networking with colleagues',
  discover: 'Discover',
  discoverHeader: 'Discover jobs and opportunities',
  participate: 'Participate',
  participateHeader: 'Participate in courses and events',
  planning: 'Collect',
  planningHeader: 'Collect and sort content',
  orientate: 'Orient',
  orientateHeader: 'Find knowledge hubs',
  profile: 'Profile',
  myContent: 'My content',
  myKnowledgeHubs: 'My knowledge hubs',
  myDevelopment: 'My development / team development',
  infoCenter: 'Info Center',

  NEWS: 'News',
  FAQ: 'Learn to LernWerk',
  FEEDBACK: 'Feedback',

  chatGPTHint: 'Use world knowledge as an impulse? Then learn how to use an AI like ChatGPT - in our sandbox.',
  chatGPTAlt: 'Open ChatGPT',
  contribute: 'Contribute',
  contributeHint:
    'Did you know how easily you can help your colleagues? Simply make valuable articles or videos and podcasts from the internet available on LernWerk! Try it out now',
  content: 'Learning content',
  createLearningPath: 'Create own Learning Path',

  myNotifications: 'My notifications',

  menu: 'Menu',
  myLernwerk: 'My LernWerk',

  myProfile: 'My profile',
  languagesSwitchTitle: 'Language',
  adminMode: 'Superadmin mode',
  logOut: 'Log out',

  youAreSuperAdmin: 'You are SuperAdmin',
  leaveSAModeModalTitle: 'Please document your changes',
  leaveSAModeModalText:
    'You are disabling the Super Admin mode. Should you have made some changes, please document them by posting in our Teams channel.',
  leaveSAModeModalSubmit: 'Open Teams channel',

  englishRadioButton: 'English',
  germanRadioButton: 'German',

  save: 'Save',
  cancel: 'Cancel',
  ok: 'OK',
  use: 'Use',
  delete: 'Delete',
  back: 'Back',

  all: 'All',
  add: 'Add',
  change: 'Change',
  send: 'Send',
  remove: 'Remove',
  pleaseChoose: 'Please choose...',
  findContentAppointmentsEtc: 'Find contents, events, learning paths and people',
  suggestSkill: 'Suggest Skill...',

  addButtons: {
    addNewOpportunity: 'Add new Opportunity',
    addNewGroup: 'Add new Group',
  },

  genericBackendErrorHeader: "Something's gone wrong",
  genericBackendErrorBody: "Our servers don't seem to be reachable. Make sure you're online or retry later.",

  genericWarningHeader: 'Attention!',

  functionNotAvailableHeader: 'Coming soon...',
  functionNotAvailableBody:
    'This part of LernWerk is currently under development and will be finished at a later point.',

  wrongLinksErrorToastHeader: 'Your profile changes could not be saved',
  wrongLinksErrorToastBody: 'Your input seems to be invalid. Please re-check the links.',

  profileUpdatedHeader: 'Profile changes saved',
  profileUpdatedBody: 'Your profile has been updated successfully.',

  contentTypeArticle: 'Text',
  contentTypeVideo: 'Video',
  contentTypeAudio: 'Audio',

  allFilters: 'Show all filter',

  LAST_PINNED: 'Relevancy',
  LAST_UPDATED: 'Newest first',
  ALPHABET: 'A - Z',
  DURATION_ASC: 'Duration ascending',
  DURATION_DESC: 'Duration descending',
  MOST_HELPFUL: 'Most helpful',
  MOST_VIEWED: 'Most viewed',
  CURATOR_PREFERENCE: 'Curator preferences',

  knowledgeHub: 'Knowledge hub',
  event: 'Event',
  opportunity: 'Opportunity',
  devDialogue: 'Development Dialogue',
  createNewsPost: 'News post',
  meeting: 'Development meeting',
  homeHub: 'Home hub',
  noHomeHub: 'None',
  group: 'Group',
  members: 'Members',
  logo: 'Logo',

  noContent: 'No content',
  contents: '{{count}} Content',
  contents_plural: '{{count}} Contents',

  areYouSure: 'Are you sure?',
  yesDelete: 'Yes, delete!',
  yesRemove: 'Yes, remove!',
  yesReset: 'Yes, reset!',
  yesTakeItOffline: 'Yes, take it offline!',
  noContinueWork: 'No, continue working',
  okUnderstood: 'OK, got it',

  PINBOARD: 'Pinboard',
  COLLECTIONS: 'Collections',
  MYLEARNINGPATHS: 'Copied learning paths',

  BOOKMARKED: 'Pinned colleagues',
  SUBSCRIBED: 'Subscribed colleagues',
  MYGROUPS: 'My Groups',
  SUBSCRIBERS: 'My subscribers',

  ALL_EVENTS: 'All events',
  BOOKED_EVENTS: 'Booked',
  VISITED_EVENTS: 'Visited',

  copiedToClipboardTitle: 'The link was copied and can now be pasted using Ctrl+V / command+V',
  copiedToClipboardMessage: 'You can now share the link!',

  EVERYONE: 'Everyone',
  CONNOISSEUR: 'Basic',
  EXPERT: 'Advanced',
  MASTER: 'Expert',

  editButton: 'Edit',

  adminBoxTitleAdmin: "You're the admin of this {{contentType}}.",
  adminBoxTitleAuthor: "You're the author of this {{contentType}}.",

  editedByMeOn: 'Edited by you on {{date}}',

  availableSeats: 'Still {{count}} free seats',
  availableSeat: 'Only one free seat left',
  noAvailableSeats: 'No seats available',
  today: 'Today',

  skills: 'Skills',
  languages: 'Languages',

  openSocialGroup: 'Open "{{name}}"',

  OPPORTUNITY: 'Opportunity',
  FIELD_OF_APPLICATION: 'Fields of application',
  JOBS: 'Jobs',
  DEMAND: 'Business demand',

  skillsInfoBadge: '{{userSkills}} of {{matchingSkills}} skills',
  skillsInfoBadgeTooltipText: 'Number of skills from your profile matching the opportunity requirements',

  pageNotFound: 'This page does not exist',

  filter: 'Filter',
  filterAllContents: 'All contents',

  unauthorizedDescr:
    "Hooray! You've found your way to LernWerk - our platform, with which we connect learning, career opportunities and networking",
  unauthorizedHint:
    "Unfortunately you can't use LernWerk yet - either your division or subsidiary hasn't been onboarded yet. Our goal is to make LernWerk available to all divisions and subsidiaries of EnBW. You can check our Yammer channel for news: ",
  yammerChannelButtonTitle: 'LernWerk',

  shareContent: 'Share content',
  share: 'Share',
  sharing: 'Share',
  shareWithRight: 'with:',
  shareVia: 'via:',
  shareButtonEmail: 'E-Mail',
  shareButtonTeams: 'Teams',
  shareValidationMessage: {
    KNOWLEDGE_HUB: 'Please specify at least one Knowledge hub that you want to share the content with.',
    GROUP: 'Please specify at least one group that you want to share the content with.',
    PROFILE: 'Please specify at least one person that you want to share the content with.',
  },
  shareEmailSubject: '{{username}} wants to share a LernWerk learning content with you',
  shareTeamsTopic: 'LernWerk',
  shareEmailMessage:
    'Hello, %0D I found this interesting Learning Content on Lernwerk. Maybe you should also have a look. %0D {{lcTitle}} %0D {{lcLink}} %0D Best regards %0D {{username}}',
  shareTeamsMessage: 'Hi, %0Alook what content I found on LernWerk: %0A%0A"{{lcTitle}}" %20',
  shareDirectly: 'Or share it directly in LernWerk:',
  sharedWithUsersTitle: 'Who do you want to share the content with?',
  sharingTargetOptions: {
    KNOWLEDGE_HUB: 'Followers of my Knowledge hubs',
    GROUP: 'Members of my groups',
    SUBSCRIBER: 'My personal subscribers',
    PROFILE: 'Selected users',
  },
  sharedWithUsersValidationMessage: 'Please use at least one tag for the event',
  sharedMessageTitle: 'Message',
  sharedMessageOptional: '(Optional)',
  contentSharedTitle: 'Action successfully executed',
  collectionSharedTitle: 'Collection successfully shared',
  contentSharedMessage: 'The content “{{contentTitle}}” was successfully shared! ',
  collectionSharedMessage: 'The collection “{{contentTitle}}” was successfully shared! ',
  shareMySubscribersLinkTitle: 'Check your personal subscribers here',

  leavePageWarning: 'Unsaved changes! Really want to leave this page?',
  leavePageSubmit: 'Yes, leave',

  contactButtonTitle: 'E-Mail',

  buttonCopyLinkToClipboard: 'Copy Link',

  reportInappropriateContent: 'Inappropriate content',
  reportContentTitle: 'Report this content',
  reportProcessDescription_part1:
    'The LernWerk team checks if reported contents violate the community guidelines. Repeated offenses may result in accounts being suspended.',
  reportProcessDescription_part2:
    'By using this report function you agree to your name and contact details being shared with the LernWerk team. These are used in the case of any questions we have for you.',
  reportProcessDescription_part3: 'Please contact your superior and/or HR if you think anyone is in immediate danger.',
  report: 'Report',

  adminRoleRequestTitle: 'Request admin rights',
  adminRoleRequestApplyButton: 'Apply',

  adminRoleRequest: {
    INTEREST: 'I am interested in this and would like to support',
    UNREACHABLE_ADMINS: 'I cannot reach any of the administrators',
    INACTIVE_ADMINS: 'The administrators are no longer active on LernWerk',
  },

  adminRoleRequestEmailBodyMessage: {
    INTEREST:
      "Dear {{type}} admins,%0D%0D I'd like to support you as admin of the {{type}} {{link}}. %0D%0D Best regards %0D {{userName}} %0D%0D Technical information for the {{type}} admin: %0D You receive this mail in your role as administrator of the {{type}} mentioned above. You now have two options to react: %0D a) Go to the base data of the {{type}} and add the user as admin or/and %0D b) Use MS Teams Chat or Outlook to provide feedback to the sender of this request.",
    UNREACHABLE_ADMINS:
      "Dear super admin, %0D%0D I'd like to contribute to the success of the {{type}} {{link}} by becoming an admin. I did not get a reply to my request from the admins. %0D Could you please add me? %0D%0D Best regards %0D {{userName}}",
    INACTIVE_ADMINS:
      "Dear super admin, %0D%0D I'd like to contribute to the success of the {{type}} {{link}} by becoming an admin. It seems the initial admins are no longer active on LernWerk. Could you please add me? %0D%0D Best regards %0D {{userName}}",
  },

  tooltip_INTEREST:
    "It's great that you want to help. Click on Apply and use it to contact the existing administrators.",
  tooltip_UNREACHABLE_ADMINS:
    "It's a pity that you can't reach any of the administrators personally. Maybe they are on parental leave or something similar. Apply for admin rights and our superadmin will take care of your request.",
  tooltip_INACTIVE_ADMINS:
    'Sometimes it happens that colleagues no longer accompany us on our learning journey. Great that you want to take their place as admin.',

  adminRoleRequestModalInfo_firstPart:
    'We are pleased that you would like to actively support shared learning as an admin. By clicking on Apply, an email will open and you can add further information to your request.',
  adminRoleRequestModalInfo_secondPart: 'Have fun learning',
  adminRoleRequestModalInfo_thirdPart: 'Your LernWerk',

  violationLabel_PORNOGRAPHIC: 'Sexual content',
  violationLabel_VIOLENT: 'Violent or repulsive content',
  violationLabel_HATEFUL: 'Hateful or abusive content',
  violationLabel_HARASSMENT: 'Harassment or bullying',
  violationLabel_HARMFUL: 'Harmful or dangerous acts',
  violationLabel_CHILD_ABUSE: 'Child abuse',
  violationLabel_TERRORISTIC: 'Promotes terrorism',
  violationLabel_SPAM: 'Spam or misleading',
  violationLabel_INFRIGEMENT: 'Infringes my rights',
  violationLabel_COMPLIANCE_ISSUE: 'Compliance issue',
  violationLabel_OTHER: 'Others',

  tooltip_PORNOGRAPHIC: 'Content that includes graphic sexual activity, nudity, or other types of sexual content',
  tooltip_VIOLENT: 'Content that is violent, graphic, or posted to shock viewers',
  tooltip_HATEFUL:
    'Content that promotes hatred against protected groups, abuses vulnerable individuals, or engages in cyberbullying',
  tooltip_HARASSMENT: 'Content that threatens individuals or targets them with prolonged or malicious insults',
  tooltip_HARMFUL: 'Content that includes acts that may result in physical harm',
  tooltip_CHILD_ABUSE: 'Content that includes sexual, predatory, or abusive communications towards minors',
  tooltip_TERRORISTIC:
    'Content that is intended to recruit for terrorist organizations, incite violence, glorify terrorist attacks, or otherwise promote acts of terrorism',
  tooltip_SPAM: 'Content that is massively posted or otherwise misleading in nature',
  tooltip_INFRIGEMENT: 'Copyright, privacy, or other legal complaints',
  tooltip_COMPLIANCE_ISSUE: 'Content that does not apply to the company guidelines',
  tooltip_OTHER: '',

  currentEnvLabel: 'CURRENT ENVIRONMENT:',
  feEnvLabel: 'FRONTEND:',
  beEnvLabel: 'BACKEND:',
  envTitleStage: ' = LernWerk TEST Environment!',

  addTagToProfileHint1: 'You can add or remove ',
  addTagToProfileHint2: ' directly to or from your profile here',
  addToMyProfile: 'Add to your profile:',
  hintLanguages: 'Please manage your language experiences directly on your profile',

  categoryLearningGoals: 'Learning goals',
  categoryInterests: 'Interests',
  categoryExperiences: 'Skills',

  anonymousUser: 'Unpublished',

  iconButtonTitles: {
    ALL: 'Show all contents',
    onlyType: 'Show only {{type}}',
  },

  contentTypeAlt: 'Learning content of type {{type}}',

  startDate: 'Start date',
  endDate: 'End date',

  startTime: 'From',
  endTime: 'Until',

  visibility: {
    title: 'Visibility',
    PUBLIC_long: 'Publicly listed',
    PRIVATE_long: 'Only visible with link',

    PRIVATE: 'Private',
    PUBLIC: 'Public',
  },

  infoCenterModal: {
    required: 'required',
    faqUrls: {
      title: 'Change FAQ-URL',
      description:
        'Here you can link the LernWerk FAQ. If there is a bilingual FAQ, please insert it in both input fields.',
      deLabel: 'German FAQ-URL',
      enLabel: 'English FAQ-URL',
      confirmTitle: 'The FAQ URLs have been successfully updated.',
      confirmDescription: 'The new FAQ URLs are now accessible for all users.',
    },
    feedbackUrls: {
      title: 'Change Feedback-URL',
      description:
        'Here you can link the LernWerk feedback page as URL. If there is a bilingual feedback form, please insert it in both input fields.',
      deLabel: 'German Feedback-URL',
      enLabel: 'English Feedback-URL',
      confirmTitle: 'The feedback URLs have been successfully updated.',
      confirmDescription: 'The new feedback URLs are now accessible for all users.',
    },
  },

  learningSuggestions: 'Learning suggestions',

  tabInConstructionHint: "under construction - please be patient, soon you'll see something here",

  bannerExxeta: 'The state you can see is under construction, some pages may have errors or be incomplete.',

  PRESENCE: 'in person',
  HYBRID: 'hybrid',
  VIRTUAL: 'online',

  expandFilterIcon: 'Expand filter',
  collapseFilterIcon: 'Collapse filter',

  imageOverlayCloseIconAlt: 'close overlay for zoomed image',
}

export default common

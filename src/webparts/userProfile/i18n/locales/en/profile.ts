/* eslint-disable max-len */

const profile = {
  titleTypePeople: 'People',

  emptyInfoButton: 'Edit profile',
  profileInfoEditTitle: 'Edit profile',

  greetingHeader: 'Hey {{userName}}, nice to see you!',
  greetingSubHeader: 'Would you like to tell LernWerk a bit more about yourself?',
  greetingContent:
    "LernWerk would like to support you in finding learning content relevant for you individually - this is what we use this information for. Don't worry, you're always in charge of who can see what, and you can always remove anything you've added again.",
  greetingHideOnceButton: 'Ok, sure!',
  greetingHideForeverButton: "Sure - and please don't show again",

  emptyContentMyProfileMobile:
    'You cannot edit your profile on mobile phones, only consume content. Please make changes to your profile on a larger device.',
  emptyContentOtherProfile: 'No {{contentType}} have been entered yet.',

  interests: 'Additional learning goals and interests',
  learningGoals: 'Focused learning goals',
  experiences: 'Skills',
  knowledgeHubs: 'Knowledge hubs',
  languages: 'Languages',
  learningContents: 'Learning contents',
  learningPaths: 'Learning paths',
  subscribed: 'Authors',

  newTag: 'Type to search...',

  addAsNewTag: 'add as new tag',
  proposeAsNewTag: 'suggest as new tag',

  skillProposalHeaderTitle: 'Suggest a new Skill',
  skillProposalAdditionTitle: 'Do you perhaps mean one of these already existing skills?',
  skillProposalNewSkillTitle: 'Skill to be proposed',
  SkillProposalThankYouTitle: 'Thank you very much for your help!',
  skillProposalNewSkillRules: 'Here are some rules and aids if you really want to propose the new skill:',
  skillProposalIfSkillExistsTitle: 'The new Skill does not match the existing ones',
  skillProposalInterestedUsersTitle: 'Supporter of this proposal',
  skillProposalInterestedUsersHint: '(Colleagues also proposing this skill; optional)',
  skillProposalInterestedUsersText:
    'These colleagues will be notified as well once the skill is added to the database.',

  skillRules: {
    ruleOne: 'Abbreviations only in combination with the long term, e.g. Certified Scrum Product Owner (CSPO).',
    ruleTwo: 'No roles, e.g. moderation instead of facilitator',
    ruleThree: 'No projects/events where one was present, e.g. Rock am Ring',
    ruleFour: 'No pure verbs, e.g. moderation instead of moderating',
    ruleFive: 'For software/tools, use the spelling used by the manufacturer itself, e.g. Java instead of JAVA',
    ruleSix: 'If the term describes a skill, e.g. train guide dogs instead of dog',
  },

  nextButtonForNewSkill: 'Not any of these',
  backButton: 'Back',
  addNewSkillButton: 'Suggest another skill',
  suggestNewSkill: 'Suggest a new skill',
  urlTitle: 'URL',
  urlHelperText: 'Provide better understanding of your skill to the skill managers.',
  urlHelperTextTitle: '(Wikipedia link or other descriptions)',
  keywordsTitle: 'Add keywords',
  keywordsHelperText:
    'Which buzzwords would describe this skill? Would you find this skill on Google using these keywords?',
  SuggestionSuccessfulText:
    'We have received your suggestion and will now review it. You can now close the tab or suggest another skill.',

  skill: 'Skill',
  skillLevel: 'Skill Level',
  visibility: 'Visibility',

  visibilityPRIVATE: 'private',
  visibilityPUBLIC: 'public',
  visibilityMENTOR: 'Mentor',

  tooltipPRIVATE: 'A private tag is visible only to you.',
  tooltipPUBLIC: 'A public tag is visible to anyone on LernWerk.',
  tooltipMENTOR:
    'Mentor tags are visible for anyone and show your colleagues that they can talk to you in depth about this topic.',

  quoteLabel: 'Quote',
  quotePlaceholder: 'Add a motto, a quote or your short phrase about you',

  socialMediaLabels: 'Your social media accounts',
  facebookPlaceholder: 'https://facebook.com/username',
  githubPlaceholder: 'https://github.com/username',
  instagramPlaceholder: 'https://www.instagram.com/username',
  linkedinPlaceholder: 'https://www.linkedin.com/in/username',
  xingPlaceholder: 'https://www.xing.com/profile/username',
  twitterPlaceholder: 'https://twitter.com/username',
  youtubePlaceholder: 'https://www.youtube.com/channel/name',
  invalidMediaError: 'Please enter a valid URL',

  teamsConnect: 'Connect in Teams',
  subscribe: 'Subscribe',
  unsubscribe: 'Unsubscribe',
  bookmark: 'Bookmark',
  bookmarked: 'Bookmarked',

  removeFromBookmarked: 'Remove from list of bookmarked colleagues.',
  addToBookmarked: 'Add to list of bookmarked colleagues.',
  bookmarkedToastTitle: 'Bookmarked',
  bookmarkedToastMessage:
    'The profile was added to the list of bookmarked colleagues. You can find it via: Network\\My colleagues.',

  removeFromSubscribed: 'Remove from your subscribed authors',
  addToSubscribed: 'Add to your subscribed authors',
  subscribedToastTitle: 'Subscription added',
  subscribedToastMessage:
    'You subscribed to new LernWerk content of this author. You can find your list of subscribed authors in the Network menu, Subscribed Authors tab.',

  shared: 'Shared',
  sharedWith: 'Shared with',
  completedLearningContent: " you've both completed",
  bothFollowingKnowledgeHubs: ' you both follow',
  otherFollowingKnowledgeHubs: ' {{firstname}} follows',
  bothSubscribed: " you've both subscribed",
  otherSubscribed: ' {{firstname}} subscribed',
  sharedTags: 'Shared ',
  newestPosts: 'Newest posts',
  newestPostsFrom: 'Newest posts of',

  noSharedContent: 'No share {{type}} found.',
  noContent: 'No {{type}} found.',

  languageBeginner: 'Beginner',
  languageIntermediate: 'Intermediate',
  languageFluent: 'Fluent',

  noNewsPostsTitle: 'No contents have been created yet',
  noNewsPostsDescription:
    '{{name}} has not created any content. You can subscribe to {{name}} to find his or her news on your dashboard.',
  skillAddDropDownPlaceholderText: 'Type to search...',

  previewMyProfileText: 'Display which content other LernWerk users will see from your profile.',
  previewMyProfileLink: 'Profile preview',
  backToMyProfileText: 'This is the preview of your profile without your private content.',
  backToMyProfileLink: 'Back to your profile',

  proposeSkill: 'Propose new skill',
  proposeSkillSaveButton: 'Propose',
  proposeSkillDescription:
    'Do you think your colleague is missing an important skill on his profile? You can suggest a new skill to them here. As soon as you propose the skill, they will get a notification and can decide whether to add your skill proposal to their profile.',
  proposeSelectHint: 'Search skill',
  proposeMessageHint: 'Why would you propose this skill and level?',
  proposeMessageHelper: '(Optional)',
  proposeSkillMissing: 'Please make sure to add a skill to the notification.',
  profileSuggestSkillToastTitle: 'Skill proposal successful',
  profileSuggestSkillToastBody: 'Your skill proposal was successfully sent to your colleague.',
  proposeSkillAlreadyExists: "The skill already exists on user's profile",

  INTERESTS: {
    title: 'Additional learning goals and interests',
    yourTitle: 'Your additional learning goals and interests',
    addNew: 'Add new additional learning goals and interests',
    edit: 'Edit additional learning goals and interests',

    emptyHeader: 'What are your additional learning goals and interests?',
    emptyContent: "Show colleagues what you're interested in.",
    emptyButton: 'Add additional learning goals and interests',
  },

  LEARNING_GOALS: {
    title: 'Focused learning goals',
    yourTitle: 'Your focused learning goals',
    addNew: 'Add new focused learning goals',
    edit: 'Edit focused learning goals',
    emptyHeader: 'What are your focused learning goal?',
    emptyContent: 'Add focused learning goals to influence the content recommended for you.',
    emptyButton: 'Add focused learning goals',
  },

  ROLES: {
    title: 'Roles & responsibilities',
    yourTitle: 'Your roles & experiences',
    addNew: 'Add new roles & experiences',
    edit: 'Edit roles & experiences',
    emptyHeader: 'What are your roles and what are you responsible for?',
    emptyContent: "Show your colleagues what you're working on",
    emptyButton: 'Add roles',
    newRole: 'New role...',
    rolesOrResponsibilities: 'roles or responsibilities',
    rolesDescr:
      'What responsibilities do you have next to your official job description? For example, project managers can also be emergency responders, community managers, agile coaches, AI multiplicators, etc.',
  },

  EXPERIENCES: {
    title: 'Skills',
    yourTitle: 'Your Skills',
    addNew: 'Add new Skills',
    edit: 'Edit Skills',
    emptyHeader: 'What do you have skills & experience in ?',
    emptyContent: 'These can help colleagues and you can see what the respective other is experienced in',
    emptyButton: 'Add Skills',
  },

  LANGUAGES: {
    title: 'Languages',
    yourTitle: 'Your languages',
    addNew: 'Add new languages',
    edit: 'Edit languages',
    emptyHeader: 'What languages do you speak?',
    emptyContent: 'These can help colleagues and you can see what the respective other is experienced in',
    emptyButton: 'Add languages',
  },
}

export default profile

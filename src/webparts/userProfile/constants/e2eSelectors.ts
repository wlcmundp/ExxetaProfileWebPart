const common = {
  inputField: 'title-input-field-',
}

type subjectType = 'drag-n-drop' | 'input'
export const attachFileDnDType: subjectType = 'drag-n-drop'

const localSearchInputField = 'local-search-input-field'

const selectors = {
  common: {
    titleInput: common.inputField + 'title',
    urlInput: common.inputField + 'url',
    shortDescription: common.inputField + 'shortDescription',
    externalUrl: common.inputField + 'externalUrl',
    description: common.inputField + 'description',
    media: common.inputField + 'media',
    benefits: common.inputField + 'benefits',
    prerequisites: common.inputField + 'prerequisites',
    message: common.inputField + 'message',
    discount: common.inputField + 'discount',
    saveContent: 'save-content',
    modalSubmitButton: 'modal-submit-button',
    searchTerm: 'react',
    contributeButton: 'contribute-button',
    tagSelection: 'create-content-tags-select',
    submitError: 'submit-error',
    socialCard: 'social-card',
    socialCardImage: 'social-card-image',
    ckBlurred: '.ck-blurred',
    addToolButton: 'add-tool-button',
    superAdminToggleButton: 'super-admin-toggle',
    modalTitle: 'modal-title',
  },
  cypressCommands: {
    disabled: 'be.disabled',
    notDisabled: 'not.be.disabled',
    enterKey: '{enter}',
    rightArrowKey: '{rightarrow}',
    backspaceKey: '{backspace}',
    haveValue: 'have.value',
    exist: 'exist',
    notExist: 'not.exist',
    beVisible: 'be.visible',
    haveAttr: 'have.attr',
    haveNotAttr: 'have.not.attr',
    notContain: 'not.contain',
    haveCss: 'have.css',
    pointerEvents: 'pointer-events',
  },
  group: {
    groupStateRadioButtons: 'group-state-select',
    groupState: 'group-state-label',
    archivedGroupsCheckbox: 'archived-groups-checkbox',
    joinButton: 'join-group-button',
    joinButtonMobile: 'join-group-button-mobile',
    reuseLpFromLwButton: 'reuse-lp-from-lw-button',
    copyLpModalError: 'copy-lp-modal-error',
    groupVisibility: 'group-visibility',
    lockIcon: 'lock-icon',
  },
  devDialogue: {
    title: 'dev-dialogue-title',
    goalTitle: 'dev-goal-title',
    editDevGoal: 'dev-goal-edit',
    sealPlanButton: 'seal-plan-button',
    create: { startDate: '[name="startDate"]', editorContent: '.ck-content' },
    collaborationBoardInput: 'title-input-field-collaborationBoardUrl',
    collaborationBoardInputError: 'title-input-field-collaborationBoardUrl-error',
    collaborationBoardEmptyState: 'collaboration-board-empty-state',
    collaborationBoard: 'collaboration-board-iframe',
    collaborationBoardUrl: 'miro-board-url',
    emptyStatePersonalGoals: 'empty-state-personal-goals',
    completedPersonalGoals: 'completed-personal-goals',
    createNewGoal: 'create-new-goal',
    closeActivePersonalGoal: 'close-active-personal-goal',
    meetingCard: 'meeting-card',
    createMeetingFromLpButton: 'create-meeting-from-lp',
    myDevDialogueStatistics: 'development-dialogue-statistics',
    closeDialogueButton: 'close-development-dialogue-button',
    archivedCheckbox: 'archived-checkbox',
    planOfMeasures: {
      fillWithSuggestionsButton: 'fill-plan-of-measures-button',
      checkBoxContent: 'check-box-content',
      selectedContentCounter: 'selected-content-counter',
    },
  },
  knowledgeHub: {
    contributeKnowledgeHub: 'contribute-knowledgeHub',
    urlSlug: 'some-nice-url-ending',
    knowledgeHubIntroImage: 'knowledge-hub-intro-image',
  },
  myContent: {
    searchInputField: localSearchInputField,
    bulkChangeButton: 'myContent-bulk-change-button',
    selectAllCheckbox: 'select-all',
    nextButton: 'bulk-change-next-button',
    confirmButton: 'bulk-change-confirm-button',
  },
  pinnboard: {
    searchInputField: localSearchInputField,
  },
  search: {
    navigationSearchButton: 'navigation-search-button',
    navigationSearchInput: 'navigation-search-input',
  },
  collections: {
    shareButton: 'collection-share-button',
  },
  collectionDetails: {
    searchInputField: localSearchInputField,
  },
  createEvent: {
    categoriesInput: 'categories-input-wrapper',
  },
  event: {
    eventSeriesTab: 'tab-event_series',
    eventBackstageTab: 'tab-backstage',
    benefits: common.inputField + 'benefits',
    prerequisites: common.inputField + 'prerequisites',
    learningGoal: common.inputField + 'learningGoal',
    cancelEventButton: 'cancel-event-button',
    cancelInputMessage: 'title-input-field-message',
    eventListCardLabel: 'learning-content-list-card-label',
    changeDeadlineButton: 'changeApplicationDeadlineButton',
    eventDeadline: 'eventApplicationDeadline',
    counterInterestedPeople: 'counter-interested-people',
    bookEventButton: 'event-book-button',
    bookAllButton: 'book-all-button',
    cancelAllButton: 'cancel-all-button',
    eventCancelButton: 'event-cancel-button',
    toggleAnonymously: 'toggle-participate-anonymously',
    toggleAttendanceInPresence: 'toggle-participate-state',
    attendanceRatioText: 'attendance-ratio-text',
    amountOfParticipants: 'amount-of-participants',
    totalAmountOfParticipantsCounter: 'total-amount-of-participants-counter',
    attendanceStateProfile: 'attendance-state-profile',
    personCard: 'person-card',
    acceptPriceCheckbox: 'accept-price-checkbox',
    acceptPrerequisitesCheckbox: 'accept-prerequisites-checkbox',
    bookingProcessRadioButton: 'booking-process-radio-button',
    personSingleSelect: 'person-single-select',
    checkInButton: 'checkInButton',
    attendanceListRow: 'attendance-list-row',
    checkOutButton: 'check-out-button',
    noteIndicator: 'note-indicator',
    addNoteButton: 'add-note-button',
    durationDetailPage: 'duration',
    eventInfoStatistic: 'event-info-statistics',
    messageAttendeesMenu: 'message-attendees-menu',
    notifyColumnButton: 'notify-column-button',
    notificationMessage: 'title-input-field-message',
    participantVoices: 'participant-voices',
    wasHelpfullButton: 'was-helpfull-button',
    participantVoiceInputField: 'title-input-field-participantVoice',
    submitFeedbackButton: 'submit-feedback-button',
    toggleArchiveButton: 'toggle-archive-button',
    eventArchivedButton: 'event-archived-button',
    exportParticipantsLinkButton: 'exportParticipantsLink',
    toolReminderBellIcon: 'tool-reminder-bell-icon',
    toolsTab: 'tab-tools',
    checkboxGroup: 'checkbox-group',
    tabTools: 'tab-tools',
    releaseScheduleOptions: 'release-schedule-options',
    releaseInfo: 'release-info',
    releaseAllButton: 'release-all-button',
    editEventButton: 'event-button-edit',
    quoteRadioButtons: 'quote-radio-buttons',
    quoteSection: 'quote-section',
    discountSection: 'discount-section',
  },
  learningPath: {
    description: 'learning-path-description',
    radioButtons: 'radio-lp-new-element',
    lpInputFieldControl: '.select-learning-content__control',
    lpInputFieldOption: '.select-learning-content__option',
    addNewLPElement: 'add-new-lp-element',
    chapterInputField: 'chapter-input-field',
    groupLpChapter: 'group-lp-chapter',
    lpTab: 'tab-learning_path',
    lpSelectImage: 'learningpath-select-img',
    lpListCardTitle: 'learning-content-list-card-title',
    personSelectAutosuggest: 'person-select-autosuggest',
    noteInputField: 'edit-notice-input-field',
  },
  opportunity: {
    socialCardLabelButton: 'social-card-label-button',
    opportunityGalleryView: 'opportunity-gallery-view',
    registerInterest: 'opp-register-interest',
    cancelInterest: 'opp-cancel-interest',
    contributeOpportunity: 'contribute-opportunity',
    radioButtonVisibility: 'radio-opportunityVisibility',
  },
  filter: {
    filterOption: 'filter-option',
    filterOptionSelected: 'filter-option-selected',
  },
  notificationCenter: {
    counter: 'notification-counter',
    notificationCard: 'notification-card-',
    notificationAccept: 'accept-button',
    notificationDecline: 'decline-button',
    state: 'notification-request-state',
    markAsRead: 'mark-notification-as-read',
    delete: 'delete-notification',
    readMore: 'read-more-message',
    contentLink: 'content-link',
    toolLinkTitle: 'tool-link-title',
  },
  learningContent: {
    shareMessage: common.inputField + 'message',
    mediaInput: common.inputField + 'media',
    mediaInputError: common.inputField + 'media-error',
    selectImage: 'learningcontent-select-img',
    selectImageChange: 'learningcontent-select-img-change',
    mediaCheckmarkInput: common.inputField + 'media-checkmark',
    tagsSelectValueContainer: '.create-content-tags-select__value-container',
    adminSelect: 'create-content-admin-select',
    tagsSelectMenu: '.create-content-tags-select__menu',
    adminSelectRemove: '.create-content-admin-select__multi-value__remove',
    adminSelectValueContainer: '.create-content-admin-select__value-container',
    adminSelectMenu: '.create-content-admin-select__menu',
    languageSelect: 'custom-drop-down-selector-language',
    languageControl: '.custom-drop-down-selector-language__control',
    languageMenu: '.custom-drop-down-selector-language__menu',
    learningTimeSelect: 'custom-drop-down-selector-learningTime',
    learningTimeControl: '.custom-drop-down-selector-learningTime__control',
    learningTimeMenu: '.custom-drop-down-selector-learningTime__menu',
    difficultySelect: 'custom-drop-down-selector-difficulty',
    difficultyControl: '.custom-drop-down-selector-difficulty__control',
    difficultyMenu: '.custom-drop-down-selector-difficulty__menu',
    saveAsDraft: 'save-as-draft',
    editLearningContent: 'learning-content-button-edit',
    learningContentMedia: 'learning-content-media',
    contributeContent: 'contribute-content',
    learningContentTitle: 'learning-content-title',
    learningContentType: 'learning-content-type',
    learningContentMaincontent: 'learning-content-maincontent',
    learningContentLanguage: 'learning-content-language',
    learningContentDescription: 'learning-content-description',
    learningContentVideoThumbnail: 'learningcontent-video-thumbnail',
    learningPathBenefits: 'learning-content-benefits',
    learningPathPrerequisites: 'learning-content-prerequisites',
    learningPathDifficulty: 'learning-content-difficulty',
    learningContentOptionDate: 'select-learning-content-option-date',
    metaDataDuration: 'meta-data-duration',
    tagsContainer: 'tags-container',
    settingsWrapper: '.settings-wrapper',
    settingsOverlayMyContent: 'settings-overlay-myContent',
    contentCardMyContent: 'content-card-my-content',
    stickyPinButtonNumber: '[class^=StickyPinButton_number]',
    metaDataHelpful: 'meta-data-helpful',
    metaDataCompleted: 'meta-data-completed',
    metaDataViews: 'meta-data-views',
    pinButton: 'learning-content-button-pin',
    shareButton: 'learning-content-button-share',
    helpfulButton: 'learning-content-button-helpful',
    dataTestMyContentContextMenu: '[data-test=my-content-context-menu]',
    cardContextMenuMoreContextIcon: '[class^=CardContextMenu_moreContextIcon]',
    mediaContentExternalUrl: 'media-content-external-url',
    tabEmbed: 'tab-embed',
    duplicateError: 'duplicate-exists-error',
    unpublish: 'unpublish',
    tilePinButton: 'tile-pin-button',
    stickyPinButton: 'sticky-pin-button',
    profilesShortListTile: 'profiles-short-list-tile',
    pinboardGalleryView: 'pinboard-gallery-view',
    authorsContainer: 'authors-container',
    sharingTargets: 'sharingTargets',
  },
  profile: {
    subscribeButton: 'subscribe-button',
    proposeSkillDropdown: 'propose-skill-dropdown',
    proposeSkillButton: 'propose-skill-button',
    tagRemoveIcon: 'tag-remove-icon',
  },
}

export default selectors

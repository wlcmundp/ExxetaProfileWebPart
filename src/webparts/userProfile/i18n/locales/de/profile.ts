/* eslint-disable max-len */

const profile = {
  titleTypePeople: 'Personen',

  emptyInfoButton: 'Visitenkarte bearbeiten',
  profileInfoEditTitle: 'Visitenkarte bearbeiten',

  greetingHeader: 'Hey {{userName}}! Schön, dass Du hier bist!',
  greetingSubHeader: 'Willst Du dem LernWerk etwas mehr über Dich sagen? Wieso?',
  greetingContent:
    'Weil das LernWerk Dich individuell unterstützen möchte und Dir passende Inhalte nur dann anzeigen kann, wenn es mehr Informationen hat. Keine Sorge, Du entscheidest immer welche der Informationen auch andere sehen dürfen und Du kannst auch jederzeit Einträge wieder löschen.',
  greetingHideOnceButton: 'Ok, alles klar!',
  greetingHideForeverButton: 'Ok, bitte nicht mehr anzeigen',

  emptyContentMyProfileMobile:
    'Du kannst dein Profil auf dem Handy nicht bearbeiten, sondern nur Inhalte konsumieren. Nimm Änderungen an deinem Profil bitte auf einem größeren Gerät vor.',
  emptyContentOtherProfile: 'Es wurden noch keine {{contentType}} eingetragen.',

  interests: 'Weitere Lernziele und Interessen',
  learningGoals: 'Fokussierte Lernziele',
  experiences: 'Fähigkeiten',
  knowledgeHubs: 'Wissenshubs',
  languages: 'Sprachen',
  learningContents: 'Lerninhalte',
  learningPaths: 'Lernpfade',
  subscribed: 'Autor*innen',

  newTag: 'Tippe zum Suchen...',

  addAsNewTag: 'als neuen Tag hinzufügen',
  proposeAsNewTag: 'als neuen Tag vorschlagen',

  skillProposalHeaderTitle: 'Neuen Skill vorschlagen',
  skillProposalAdditionTitle: 'Meinst Du vielleicht einen dieser bereits existierenden Skills',
  skillProposalNewSkillTitle: 'Vorzuschlagender Skill',
  SkillProposalThankYouTitle: 'Vielen Dank für deine Mithilfe!',
  skillProposalNewSkillRules: 'Hier einige Regeln und Hilfen, wenn Du den neuen Skill wirklich vorschlagen willst:',
  skillProposalIfSkillExistsTitle: 'Der neue Skill stimmt nicht mit den bestehenden überein',
  skillProposalInterestedUsersTitle: 'Unterstützer*innen dieses Vorschlags',
  skillProposalInterestedUsersHint: '(Personen, die diesen Skill ebenfalls vorschlagen würden; optional)',
  skillProposalInterestedUsersText:
    'Diese Personen erhalten auch eine Info, wenn dieser Skill bestätigt wurde und bereitsteht.',

  skillRules: {
    ruleOne: 'Abkürzungen nur in Kombination mit dem Langbegriff, z.B. Certified Scrum Product Owner (CSPO)',
    ruleTwo: 'Keine Rollen, z.B. Moderation anstelle von Moderator*in',
    ruleThree: 'Keine Projekte/Veranstaltungen, bei denen man dabei war, z.B. Rock am Ring',
    ruleFour: 'Keine reinen Verben, z.B. Moderation anstelle von moderieren',
    ruleFive:
      'Bei Software/Tools die Schreibweise verwenden, die der Hersteller selbst benutzt, z.B. Java anstelle von JAVA',
    ruleSix: 'Beschreibt der Begriff eine Fähigkeit, z.B. "Blindenhunde trainieren" anstelle von "Hund"',
  },

  nextButtonForNewSkill: 'Nein, nichts dabei',
  backButton: 'Zurück',
  addNewSkillButton: 'Weiteren Skill vorschlagen',
  suggestNewSkill: 'Neuen Skill vorschlagen',
  urlTitle: 'URL',
  urlHelperText:
    'Mache es den Skillmanager*innen leichter zu verstehen, was mit dem vorgeschlagenen Skill gemeint ist.',
  urlHelperTextTitle: '(Wikipedia Link o.ä. Beschreibungen im Netz)',
  keywordsTitle: 'Keywords hinzufügen',
  keywordsHelperText:
    'Nach welchen Begriffen würdest du suchen, wenn du diesen Skill auf Google finden wollen würdest?',
  SuggestionSuccessfulText:
    'Dein Vorschlag ist bei uns eingegangen und wir werden ihn nun prüfen. Du kannst den Tab nun schließen oder einen weiteren Skill vorschlagen.',

  skill: 'Skill',
  skillLevel: 'Skill-Level',
  visibility: 'Sichtbarkeit',

  visibilityPRIVATE: 'privat',
  visibilityPUBLIC: 'öffentlich',
  visibilityMENTOR: 'Mentor*in',

  tooltipPRIVATE: 'Ein privater Tag ist in deinem Profil und überall im LernWerk nur für dich sichtbar.',
  tooltipPUBLIC: 'Ein öffentlicher Tag ist überall für alle sichtbar.',
  tooltipMENTOR:
    'Mentor*innen-Tags sind für alle sichtbar und zeigen Deinen Kollegen, dass sie Dich zu dem Thema ansprechen können.',

  quoteLabel: 'Dein Zitat',
  quotePlaceholder: 'Trage hier ein Motto, ein Zitat oder einen Deiner Lieblingssätze ein.',

  socialMediaLabels: 'Deine Social-Media-Accounts',
  facebookPlaceholder: 'https://facebook.com/username',
  githubPlaceholder: 'https://github.com/username',
  instagramPlaceholder: 'https://www.instagram.com/username',
  linkedinPlaceholder: 'https://www.linkedin.com/in/username',
  xingPlaceholder: 'https://www.xing.com/profile/username',
  twitterPlaceholder: 'https://twitter.com/username',
  youtubePlaceholder: 'https://www.youtube.com/channel/name',
  invalidMediaError: 'Bitte eine gültige URL eingeben',

  teamsConnect: 'In Teams kontaktieren',
  subscribe: 'Abonnieren',
  unsubscribe: 'Abo beenden',
  bookmark: 'Merken',
  bookmarked: 'Gemerkt',

  removeFromBookmarked: 'Von Deiner Liste gemerkter Personen entfernen.',
  addToBookmarked: 'Zu Deiner Liste gemerkter Personen hinzufügen.',
  bookmarkedToastTitle: 'Person gemerkt',
  bookmarkedToastMessage:
    'Das Profil wurde der Liste Deiner gemerkten Personen hinzugefügt. Du findest sie jederzeit unter: Vernetzen\\Gemerkte Personen.',

  removeFromSubscribed: 'Von Liste Deiner abonnierten Personen entfernen.',
  addToSubscribed: 'Zur Liste Deiner abonnierten Personen hinzufügen.',
  subscribedToastTitle: 'Abonnement abgeschlossen',
  subscribedToastMessage:
    'Du hast nun neue LernWerk-Inhalte dieser Person abonniert. Die Liste Deiner abonnierten Personen findest Du jederzeit im Vernetzen Menü unter dem Tab Abonnierte Personen.',

  shared: 'Gemeinsamkeiten',
  sharedWith: 'Gemeinsamkeiten mit',
  completedLearningContent: ', die Ihr beide erledigt habt',
  bothFollowingKnowledgeHubs: ', denen Ihr beide folgt',
  otherFollowingKnowledgeHubs: ', denen {{firstname}} folgt',
  bothSubscribed: ', die Ihr beide abonniert',
  otherSubscribed: ', die {{firstname}} abonniert',
  sharedTags: 'Gemeinsame ',
  newestPosts: 'Neueste Posts',
  newestPostsFrom: 'Neueste Posts von',

  noSharedContent: 'Keine gemeinsamen {{type}} gefunden.',
  noContent: 'Keine {{type}} gefunden.',

  languageBeginner: 'Grundkenntnisse',
  languageIntermediate: 'Alltagssicher',
  languageFluent: 'Fließend',

  noNewsPostsTitle: 'Es wurden noch keine Beiträge veröffentlicht',
  noNewsPostsDescription:
    '{{name}} hat noch keine Posts veröffentlicht. Du kannst {{name}} abonnieren, um die Updates direkt auf Deinem Dashboard mitzubekommen!',

  skillAddDropDownPlaceholderText: 'Tippe zum Suchen...',

  previewMyProfileText: 'Schau Dir an, welche Inhalte andere LernWerk-Nutzer*innen von Deinem Profil sehen werden.',
  previewMyProfileLink: 'Profilvorschau',
  backToMyProfileText: 'Das hier ist die Vorschau Deines Profils ohne Deine privaten Inhalte.',
  backToMyProfileLink: 'Zurück zu Deinem Profil',

  proposeSkill: 'Neue Fähigkeit vorschlagen',
  proposeSkillSaveButton: 'Vorschlagen',
  proposeSkillDescription:
    'Denkst Du Deinem*r Kolleg*in fehlen wichtige Fähigkeiten auf dem Profil? Hier kannst Du ihm*ihr eine neue Fähigkeit vorschlagen. Wenn Du einen Fähigkeitsvorschlag abschickst, bekommt Dein*e Kolleg*in eine Benachrichtigung und kann entscheiden, ob er*sie diesen zum Profil hinzufügt.',
  proposeSelectHint: 'Fähigkeit suchen',
  proposeMessageHint: 'Warum würdest Du diese Fähigkeit und dieses Skill-Level vorschlagen?',
  proposeMessageHelper: '(Optional)',
  proposeSkillMissing: 'Bitte füge eine Fähigkeit für eine Benachrichtigung hinzu.',
  profileSuggestSkillToastTitle: 'Fähigkeitsvorschlag erfolgreich',
  profileSuggestSkillToastBody: 'Dein Fähigkeitsvorschlag wurde erfolgreich an Dein*e Kolleg*in gesendet.',
  proposeSkillAlreadyExists: 'Der Fähigkeit ist bereits im Profil des Benutzers vorhanden.',

  INTERESTS: {
    title: 'Weitere Lernziele und Interessen',
    yourTitle: 'Deine weiteren Lernziele und Interessen',
    addNew: 'Neue weitere Lernziele und Interessen hinzufügen',
    edit: 'Weitere Lernziele und Interessen bearbeiten',

    emptyHeader: 'Welche weiteren Lernziele und Interessen hast Du?',
    emptyContent: 'Trage Deine weiteren Lernziele und Interessen ein und zeige Deinen Kollegen, was Dich ausmacht.',
    emptyButton: 'Weitere Lernziele und Interessen hinzufügen',
  },

  LEARNING_GOALS: {
    title: 'Fokussiertes Lernziel',
    yourTitle: 'Deine fokussierten Lernziele',
    addNew: 'Neue fokussierte Lernziele hinzufügen',
    edit: 'Fokussierte Lernziele bearbeiten',
    emptyHeader: 'Welche fokussierten Lernziele verfolgst Du?',
    emptyContent: 'Lege Deine fokussierten Lernziele fest und bekomme so passende Inhalte vorgeschlagen.',
    emptyButton: 'Fokussierte Lernziele hinzufügen',
  },

  ROLES: {
    title: 'Rollen & Verantwortlichkeiten',
    yourTitle: 'Deine Rollen & Verantwortlichkeiten',
    addNew: 'Neue Rollen & Verantwortlichkeiten hinzufügen',
    edit: 'Rollen & Verantwortlichkeiten bearbeiten',
    emptyHeader: 'Was sind Deine Rollen und wofür bist Du verantwortlich?',
    emptyContent: 'Zeige Deinen Kollegen die Themen, die Du hauptsächlich betreust',
    emptyButton: 'Rollen hinzufügen',
    newRole: 'Neue Rolle...',
    rolesOrResponsibilities: 'Rollen oder Verantwortlichkeiten',
    rolesDescr:
      'Wo übernimmst Du Verantwortung neben Deiner offiziellen Job-Beschreibung? Beispielsweise kann ein*e Projektmanager*in gleichzeitig noch: Ersthelfer*in, Community-Manager*in, Agile Coach, KI-Multiplikator*in, ... sein.',
  },

  EXPERIENCES: {
    title: 'Fähigkeiten',
    yourTitle: 'Deine Fähigkeiten',
    addNew: 'Neue Fähigkeiten hinzufügen',
    edit: 'Fähigkeiten bearbeiten',
    emptyHeader: 'Was sind Deine Fähigkeiten?',
    emptyContent:
      'Durch die eingetragenen Infos können Dich andere Nutzer besser finden und auch Du siehst was Deine Kollegen alles können.',
    emptyButton: 'Fähigkeiten hinzufügen',
  },

  LANGUAGES: {
    title: 'Sprachen',
    yourTitle: 'Deine Sprachen',
    addNew: 'Neue Sprachen hinzufügen',
    edit: 'Sprachen bearbeiten',
    emptyHeader: 'Welche Sprachen sprichst Du?',
    emptyContent:
      'Durch die eingetragenen Infos können Dich andere Nutzer besser finden und auch Du siehst, was Deine Kollegen alles können.',
    emptyButton: 'Sprachen hinzufügen',
  },
}

export default profile

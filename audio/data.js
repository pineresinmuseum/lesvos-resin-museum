/* =====================================================================
   ΑΡΧΕΙΟ ΠΕΡΙΕΧΟΜΕΝΟΥ — εδώ αλλάζεις κείμενα, ηχητικά και εικόνες.
   Δεν χρειάζεται να πειράξεις κανένα άλλο αρχείο.

   • Κάθε στάση έχει έναν κωδικό ("01", "02"...). Ο κωδικός μπαίνει στο QR:
       player.html?id=01
   • audio:  το αρχείο ήχου μέσα στον φάκελο audio/
             Αν το "en" δεν έχει δικό του audio, παίζει το ελληνικό
             με αγγλικούς υπότιτλους (ιδανικό για τον παππού).
   • photo:  η φωτογραφία του ομιλητή μέσα στον φάκελο img/ (τετράγωνη, ~400x400)
   • didYouKnow: οι προτάσεις του «Ήξερες ότι…» (όσες θέλεις)
   • transcript: ["λεπτά:δευτερόλεπτα", "κείμενο"]
             Ο χρόνος είναι η στιγμή που ξεκινά η φράση στο ηχητικό.
             Έτσι οι υπότιτλοι εμφανίζονται την ώρα που μιλάει.
   Προσοχή: κάθε κείμενο μέσα σε "εισαγωγικά", κόμμα ανάμεσα στα στοιχεία.
   ===================================================================== */

const SETTINGS = {
  museumName: { el: "Μουσείο Ρητίνης Λέσβου", en: "Lesvos Resin Museum" },
  website: "https://lesvosresinmuseum.gr",
  autoplay: false,            // true = το ηχητικό ξεκινά μόλις επιλεγεί γλώσσα
  showAutoplaySwitch: true,   // true = ο επισκέπτης βλέπει διακόπτη «Αυτόματη έναρξη»
  rememberLanguage: true,     // θυμάται τη γλώσσα στο επόμενο QR που σκανάρει
  defaultPhoto: "img/speaker.svg",
  defaultSpeaker: { el: "Ο παππούς ρετσινάς", en: "Grandpa, the resin tapper" }
};

const STOPS = {

  "01": {
    photo: "img/speaker.svg",
    speaker: { el: "Ο παππούς ρετσινάς", en: "Grandpa, the resin tapper" },
    el: {
      title: "Το καρόκι και το σκεπάρνι",
      audio: "audio/01.m4a",
      didYouKnow: [
        "Η ρητίνη στη Λέσβο συλλεγόταν από την τραχεία πεύκη (Pinus brutia).",
        "Το δοχείο που μάζευε τη ρητίνη στον κορμό το έλεγαν «καρόκι».",
        "ΠΑΡΑΔΕΙΓΜΑ — άλλαξε αυτές τις προτάσεις με τις δικές σου."
      ],
      transcript: [
        ["0:00", "ΠΑΡΑΔΕΙΓΜΑ: Εδώ γράφεις την πρώτη φράση που λέει ο παππούς."],
        ["0:06", "Η δεύτερη φράση ξεκινά στο 6ο δευτερόλεπτο."],
        ["0:12", "Συνέχισε έτσι μέχρι το τέλος του ηχητικού."]
      ]
    },
    en: {
      title: "The karoki and the skeparni",
      audio: "",   // κενό = παίζει το ελληνικό ηχητικό με αγγλικούς υπότιτλους
      didYouKnow: [
        "On Lesvos, resin was collected from the Turkish pine (Pinus brutia).",
        "The cup that collected resin on the trunk was called a “karoki”.",
        "EXAMPLE — replace these sentences with your own."
      ],
      transcript: [
        ["0:00", "EXAMPLE: Write the English translation of the first sentence here."],
        ["0:06", "The second sentence starts at 6 seconds."],
        ["0:12", "Continue like this until the end of the recording."]
      ]
    }
  },

  "02": {   // διάρκεια ~72 δευτ.
    photo: "",      // κενό = defaultPhoto
    speaker: null,  // null = defaultSpeaker
    el: {
      title: "Ηχητικό 02 — γράψε τίτλο",
      audio: "audio/02.m4a",
      didYouKnow: ["Γράψε εδώ ένα «Ήξερες ότι…»."],
      transcript: [
        ["0:00", "Γράψε εδώ το κείμενο του ηχητικού."]
      ]
    },
    en: {
      title: "Recording 02 — write a title",
      audio: "",
      didYouKnow: ["Write a “Did you know…” fact here."],
      transcript: [
        ["0:00", "Write the English text of the recording here."]
      ]
    }
  },

  "03": {   // διάρκεια ~29 δευτ.
    photo: "",      // κενό = defaultPhoto
    speaker: null,  // null = defaultSpeaker
    el: {
      title: "Ηχητικό 03 — γράψε τίτλο",
      audio: "audio/03.m4a",
      didYouKnow: ["Γράψε εδώ ένα «Ήξερες ότι…»."],
      transcript: [
        ["0:00", "Γράψε εδώ το κείμενο του ηχητικού."]
      ]
    },
    en: {
      title: "Recording 03 — write a title",
      audio: "",
      didYouKnow: ["Write a “Did you know…” fact here."],
      transcript: [
        ["0:00", "Write the English text of the recording here."]
      ]
    }
  },

  "04": {   // διάρκεια ~15 δευτ.
    photo: "",      // κενό = defaultPhoto
    speaker: null,  // null = defaultSpeaker
    el: {
      title: "Ηχητικό 04 — γράψε τίτλο",
      audio: "audio/04.m4a",
      didYouKnow: ["Γράψε εδώ ένα «Ήξερες ότι…»."],
      transcript: [
        ["0:00", "Γράψε εδώ το κείμενο του ηχητικού."]
      ]
    },
    en: {
      title: "Recording 04 — write a title",
      audio: "",
      didYouKnow: ["Write a “Did you know…” fact here."],
      transcript: [
        ["0:00", "Write the English text of the recording here."]
      ]
    }
  },

  "05": {   // διάρκεια ~52 δευτ.
    photo: "",      // κενό = defaultPhoto
    speaker: null,  // null = defaultSpeaker
    el: {
      title: "Ηχητικό 05 — γράψε τίτλο",
      audio: "audio/05.m4a",
      didYouKnow: ["Γράψε εδώ ένα «Ήξερες ότι…»."],
      transcript: [
        ["0:00", "Γράψε εδώ το κείμενο του ηχητικού."]
      ]
    },
    en: {
      title: "Recording 05 — write a title",
      audio: "",
      didYouKnow: ["Write a “Did you know…” fact here."],
      transcript: [
        ["0:00", "Write the English text of the recording here."]
      ]
    }
  },

  "06": {   // διάρκεια ~44 δευτ.
    photo: "",      // κενό = defaultPhoto
    speaker: null,  // null = defaultSpeaker
    el: {
      title: "Ηχητικό 06 — γράψε τίτλο",
      audio: "audio/06.m4a",
      didYouKnow: ["Γράψε εδώ ένα «Ήξερες ότι…»."],
      transcript: [
        ["0:00", "Γράψε εδώ το κείμενο του ηχητικού."]
      ]
    },
    en: {
      title: "Recording 06 — write a title",
      audio: "",
      didYouKnow: ["Write a “Did you know…” fact here."],
      transcript: [
        ["0:00", "Write the English text of the recording here."]
      ]
    }
  },

  "07": {   // διάρκεια ~24 δευτ.
    photo: "",      // κενό = defaultPhoto
    speaker: null,  // null = defaultSpeaker
    el: {
      title: "Ηχητικό 07 — γράψε τίτλο",
      audio: "audio/07.m4a",
      didYouKnow: ["Γράψε εδώ ένα «Ήξερες ότι…»."],
      transcript: [
        ["0:00", "Γράψε εδώ το κείμενο του ηχητικού."]
      ]
    },
    en: {
      title: "Recording 07 — write a title",
      audio: "",
      didYouKnow: ["Write a “Did you know…” fact here."],
      transcript: [
        ["0:00", "Write the English text of the recording here."]
      ]
    }
  },

  "08": {   // διάρκεια ~28 δευτ.
    photo: "",      // κενό = defaultPhoto
    speaker: null,  // null = defaultSpeaker
    el: {
      title: "Ηχητικό 08 — γράψε τίτλο",
      audio: "audio/08.m4a",
      didYouKnow: ["Γράψε εδώ ένα «Ήξερες ότι…»."],
      transcript: [
        ["0:00", "Γράψε εδώ το κείμενο του ηχητικού."]
      ]
    },
    en: {
      title: "Recording 08 — write a title",
      audio: "",
      didYouKnow: ["Write a “Did you know…” fact here."],
      transcript: [
        ["0:00", "Write the English text of the recording here."]
      ]
    }
  },

  "09": {   // διάρκεια ~33 δευτ.
    photo: "",      // κενό = defaultPhoto
    speaker: null,  // null = defaultSpeaker
    el: {
      title: "Ηχητικό 09 — γράψε τίτλο",
      audio: "audio/09.m4a",
      didYouKnow: ["Γράψε εδώ ένα «Ήξερες ότι…»."],
      transcript: [
        ["0:00", "Γράψε εδώ το κείμενο του ηχητικού."]
      ]
    },
    en: {
      title: "Recording 09 — write a title",
      audio: "",
      didYouKnow: ["Write a “Did you know…” fact here."],
      transcript: [
        ["0:00", "Write the English text of the recording here."]
      ]
    }
  },

  "10": {   // διάρκεια ~31 δευτ.
    photo: "",      // κενό = defaultPhoto
    speaker: null,  // null = defaultSpeaker
    el: {
      title: "Ηχητικό 10 — γράψε τίτλο",
      audio: "audio/10.m4a",
      didYouKnow: ["Γράψε εδώ ένα «Ήξερες ότι…»."],
      transcript: [
        ["0:00", "Γράψε εδώ το κείμενο του ηχητικού."]
      ]
    },
    en: {
      title: "Recording 10 — write a title",
      audio: "",
      didYouKnow: ["Write a “Did you know…” fact here."],
      transcript: [
        ["0:00", "Write the English text of the recording here."]
      ]
    }
  },

  "11": {   // διάρκεια ~8 δευτ.
    photo: "",      // κενό = defaultPhoto
    speaker: null,  // null = defaultSpeaker
    el: {
      title: "Ηχητικό 11 — γράψε τίτλο",
      audio: "audio/11.m4a",
      didYouKnow: ["Γράψε εδώ ένα «Ήξερες ότι…»."],
      transcript: [
        ["0:00", "Γράψε εδώ το κείμενο του ηχητικού."]
      ]
    },
    en: {
      title: "Recording 11 — write a title",
      audio: "",
      didYouKnow: ["Write a “Did you know…” fact here."],
      transcript: [
        ["0:00", "Write the English text of the recording here."]
      ]
    }
  },

  "12": {   // διάρκεια ~19 δευτ.
    photo: "",      // κενό = defaultPhoto
    speaker: null,  // null = defaultSpeaker
    el: {
      title: "Ηχητικό 12 — γράψε τίτλο",
      audio: "audio/12.m4a",
      didYouKnow: ["Γράψε εδώ ένα «Ήξερες ότι…»."],
      transcript: [
        ["0:00", "Γράψε εδώ το κείμενο του ηχητικού."]
      ]
    },
    en: {
      title: "Recording 12 — write a title",
      audio: "",
      didYouKnow: ["Write a “Did you know…” fact here."],
      transcript: [
        ["0:00", "Write the English text of the recording here."]
      ]
    }
  },

  "13": {   // διάρκεια ~48 δευτ.
    photo: "",      // κενό = defaultPhoto
    speaker: null,  // null = defaultSpeaker
    el: {
      title: "Ηχητικό 13 — γράψε τίτλο",
      audio: "audio/13.m4a",
      didYouKnow: ["Γράψε εδώ ένα «Ήξερες ότι…»."],
      transcript: [
        ["0:00", "Γράψε εδώ το κείμενο του ηχητικού."]
      ]
    },
    en: {
      title: "Recording 13 — write a title",
      audio: "",
      didYouKnow: ["Write a “Did you know…” fact here."],
      transcript: [
        ["0:00", "Write the English text of the recording here."]
      ]
    }
  },

  "14": {   // διάρκεια ~30 δευτ.
    photo: "",      // κενό = defaultPhoto
    speaker: null,  // null = defaultSpeaker
    el: {
      title: "Ηχητικό 14 — γράψε τίτλο",
      audio: "audio/14.m4a",
      didYouKnow: ["Γράψε εδώ ένα «Ήξερες ότι…»."],
      transcript: [
        ["0:00", "Γράψε εδώ το κείμενο του ηχητικού."]
      ]
    },
    en: {
      title: "Recording 14 — write a title",
      audio: "",
      didYouKnow: ["Write a “Did you know…” fact here."],
      transcript: [
        ["0:00", "Write the English text of the recording here."]
      ]
    }
  },

};

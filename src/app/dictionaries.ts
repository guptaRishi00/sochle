import "server-only";

const dictionaries = {
  en: {
    blog: {
      tag: "Blogs",
      title: "Insights & Resources",
      description:
        "Expert advice, industry trends, and strategic guides for HR professionals and leaders.",
      searchPlaceholder: "Search Blogs",
      latestTitle: "Latest Blogs",
      latestSubtitle: "Fresh posts based on your topic and search filters.",
      filters: "Filters",
      readMore: "Read More",
    },
    contact: {
      heroTag: "Contact",
      heroTitle: "Get in Touch",
      heroDescription:
        "We'd love to hear from you. Let's discuss how we can help your business or career.",
      formTitle: "Send Us a Message",
      formSubtitle:
        "Fill out the form below and we'll get back to you within 24 hours.",
      labels: {
        name: "Name",
        phone: "Phone",
        email: "Email",
        type: "I am a",
        message: "Message",
        submit: "Send Message",
      },
      disclaimer:
        "By submitting this form, you agree to our privacy policy and consent to being contacted about your enquiry.",
      findUs: "Find Us",
      cta: {
        title: "Feel free to visit us",
        hoursTitle: "Business Hours",
        monFri: "Monday - Friday",
        sat: "Saturday",
        sun: "Sunday",
        closed: "Closed",
      },
    },
    // ADDED HOMEPAGE SECTION
    homepage: {
      expertAdvice: {
        part1: "HELPING",
        part2: "BUSINESSES",
        part3: "THRIVE IN A",
        part4: "DIGITAL-FIRST WORLD",
        readMore: "Read More",
      },
    },
  },
  fr: {
    blog: {
      tag: "Blog",
      title: "Idées et Ressources",
      description:
        "Conseils d'experts, tendances du secteur et guides stratégiques pour les professionnels RH.",
      searchPlaceholder: "Rechercher des articles",
      latestTitle: "Derniers Articles",
      latestSubtitle: "Articles récents basés sur vos sujets et filtres.",
      filters: "Filtres",
      readMore: "Lire la suite",
    },
    contact: {
      heroTag: "Contact",
      heroTitle: "Contactez-nous",
      heroDescription:
        "Nous serions ravis de vous entendre. Discutons de la manière dont nous pouvons aider votre entreprise.",
      formTitle: "Envoyez-nous un message",
      formSubtitle:
        "Remplissez le formulaire ci-dessous et nous vous répondrons sous 24 heures.",
      labels: {
        name: "Nom",
        phone: "Téléphone",
        email: "Email",
        type: "Je suis un(e)",
        message: "Message",
        submit: "Envoyer le message",
      },
      disclaimer:
        "En soumettant ce formulaire, vous acceptez notre politique de confidentialité.",
      findUs: "Retrouvez-nous",
      cta: {
        title: "N'hésitez pas à nous rendre visite",
        hoursTitle: "Heures d'ouverture",
        monFri: "Lundi - Vendredi",
        sat: "Samedi",
        sun: "Dimanche",
        closed: "Fermé",
      },
    },
    // ADDED HOMEPAGE SECTION (FRENCH)
    homepage: {
      expertAdvice: {
        part1: "AIDER LES",
        part2: "ENTREPRISES",
        part3: "À PROSPÉRER DANS UN",
        part4: "MONDE NUMÉRIQUE",
        readMore: "Lire la suite",
      },
    },
  },
};

export const getDictionary = async (locale: string) => {
  // Fallback to 'en' if locale is not found
  return dictionaries[locale as keyof typeof dictionaries] ?? dictionaries.en;
};

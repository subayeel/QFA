/* eslint-disable react/no-unescaped-entities */
import { BookOpen } from "lucide-react";

function SalahLesson7() {
  const lastTenSurahs = [
    {
      number: 105,
      name: "Al-Fil",
      arabic: "الْفِيل",
      translation: "The Elephant",
      verses: [
        {
          arabic: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ",
          transliteration: "Alam tara kayfa fa'ala rabbuka bi-asḥābi-l-fīl",
          translation: "Have you not seen how your Lord dealt with the companions of the elephant?",
        },
        {
          arabic: "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ",
          transliteration: "Alam yaj'al kaydahum fī taḍlīl",
          translation: "Did He not make their plan into misguidance?",
        },
        {
          arabic: "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ",
          transliteration: "Wa arsala 'alayhim ṭayran abābīl",
          translation: "And He sent against them birds in flocks,",
        },
        {
          arabic: "تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ",
          transliteration: "Tarmīhim bi-ḥijāratin min sijjīl",
          translation: "Striking them with stones of hard clay,",
        },
        {
          arabic: "فَجَعَلَهُمْ كَعَصْفٍ مَّأْكُولٍ",
          transliteration: "Fa-ja'alahum ka-'aṣfin ma'kūl",
          translation: "And He made them like eaten straw.",
        },
      ],
      tafsir: "This surah recounts the miraculous event when Allah protected the Ka'bah from destruction by Abraha's army with elephants. It demonstrates Allah's power and protection of His sacred house.",
    },
    {
      number: 106,
      name: "Quraysh",
      arabic: "قُرَيْش",
      translation: "Quraysh",
      verses: [
        {
          arabic: "لِإِيلَافِ قُرَيْشٍ",
          transliteration: "Li-īlāfi Quraysh",
          translation: "For the accustomed security of Quraysh -",
        },
        {
          arabic: "إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ",
          transliteration: "Īlāfihim riḥlata-sh-shitā'i wa-ṣ-ṣayf",
          translation: "Their accustomed security [in] the caravan of winter and summer -",
        },
        {
          arabic: "فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ",
          transliteration: "Falya'budū rabba hādhā-l-bayt",
          translation: "Let them worship the Lord of this House,",
        },
        {
          arabic: "الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ",
          transliteration: "Alladhī aṭ'amahum min jū'in wa āmanahum min khawf",
          translation: "Who has fed them, [saving them] from hunger and made them safe, [saving them] from fear.",
        },
      ],
      tafsir: "This surah reminds Quraysh of Allah's blessings - security in their trade journeys and protection from hunger and fear. It calls them to worship the Lord of the Ka'bah who granted them these favors.",
    },
    {
      number: 107,
      name: "Al-Ma'un",
      arabic: "الْمَاعُون",
      translation: "The Small Kindnesses",
      verses: [
        {
          arabic: "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ",
          transliteration: "Ara'ayta-lladhī yukadhdhibu bi-d-dīn",
          translation: "Have you seen the one who denies the Recompense?",
        },
        {
          arabic: "فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ",
          transliteration: "Fa-dhālik-alladhī yadu''u-l-yatīm",
          translation: "For that is the one who drives away the orphan",
        },
        {
          arabic: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ",
          transliteration: "Wa lā yaḥuḍḍu 'alā ṭa'āmi-l-miskīn",
          translation: "And does not encourage the feeding of the poor.",
        },
        {
          arabic: "فَوَيْلٌ لِّلْمُصَلِّينَ",
          transliteration: "Fa-waylun li-l-muṣallīn",
          translation: "So woe to those who pray",
        },
        {
          arabic: "الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ",
          transliteration: "Alladhīna hum 'an ṣalātihim sāhūn",
          translation: "[But] who are heedless of their prayer -",
        },
        {
          arabic: "الَّذِينَ هُمْ يُرَاءُونَ",
          transliteration: "Alladhīna hum yurā'ūn",
          translation: "Those who make show [of their deeds]",
        },
        {
          arabic: "وَيَمْنَعُونَ الْمَاعُونَ",
          transliteration: "Wa yamna'ūna-l-mā'ūn",
          translation: "And withhold [simple] assistance.",
        },
      ],
      tafsir: "This surah condemns those who perform prayers but neglect their true purpose, showing off while ignoring the needs of orphans and the poor. It emphasizes that true faith requires compassion and charity.",
    },
    {
      number: 108,
      name: "Al-Kawthar",
      arabic: "الْكَوْثَر",
      translation: "The Abundance",
      verses: [
        {
          arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
          transliteration: "Innā a'ṭaynāka-l-kawthar",
          translation: "Indeed, We have granted you, [O Muhammad], al-Kawthar.",
        },
        {
          arabic: "فَصَلِّ لِرَبِّكَ وَانْحَرْ",
          transliteration: "Fa-ṣalli li-rabbika wa-nḥar",
          translation: "So pray to your Lord and sacrifice [to Him alone].",
        },
        {
          arabic: "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
          transliteration: "Inna shāni'aka huwa-l-abtar",
          translation: "Indeed, your enemy is the one cut off.",
        },
      ],
      tafsir: "Allah granted Prophet Muhammad (PBUH) al-Kawthar (abundance), referring to abundant good including his followers, knowledge, and legacy. The surah reassures him that his enemies will be forgotten while his message endures.",
    },
    {
      number: 109,
      name: "Al-Kafirun",
      arabic: "الْكَافِرُونَ",
      translation: "The Disbelievers",
      verses: [
        {
          arabic: "قُلْ يَا أَيُّهَا الْكَافِرُونَ",
          transliteration: "Qul yā ayyuha-l-kāfirūn",
          translation: "Say, 'O disbelievers,",
        },
        {
          arabic: "لَا أَعْبُدُ مَا تَعْبُدُونَ",
          transliteration: "Lā a'budu mā ta'budūn",
          translation: "I do not worship what you worship.",
        },
        {
          arabic: "وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ",
          transliteration: "Wa lā antum 'ābidūna mā a'bud",
          translation: "Nor are you worshippers of what I worship.",
        },
        {
          arabic: "وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ",
          transliteration: "Wa lā ana 'ābidun mā 'abattum",
          translation: "Nor will I be a worshipper of what you worship.",
        },
        {
          arabic: "وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ",
          transliteration: "Wa lā antum 'ābidūna mā a'bud",
          translation: "Nor will you be worshippers of what I worship.",
        },
        {
          arabic: "لَكُمْ دِينُكُمْ وَلِيَ دِينِ",
          transliteration: "Lakum dīnukum wa liya dīn",
          translation: "For you is your religion, and for me is my religion.'",
        },
      ],
      tafsir: "This surah establishes clear boundaries between Islam and disbelief. It emphasizes that there can be no compromise in matters of faith - each person follows their own path, and Muslims must remain firm in their belief.",
    },
    {
      number: 110,
      name: "An-Nasr",
      arabic: "النَّصْر",
      translation: "The Divine Support",
      verses: [
        {
          arabic: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
          transliteration: "Idhā jā'a naṣru-llāhi wa-l-fatḥ",
          translation: "When the victory of Allah has come and the conquest,",
        },
        {
          arabic: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا",
          transliteration: "Wa ra'ayta-n-nāsa yadkhulūna fī dīni-llāhi afwājā",
          translation: "And you see the people entering into the religion of Allah in multitudes,",
        },
        {
          arabic: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا",
          transliteration: "Fa-sabbiḥ bi-ḥamdi rabbika wa-staghfirhu, innahu kāna tawwābā",
          translation: "Then exalt [Him] with praise of your Lord and ask forgiveness of Him. Indeed, He is ever Accepting of repentance.",
        },
      ],
      tafsir: "This surah was revealed near the end of the Prophet's life, foretelling the conquest of Makkah and the spread of Islam. It teaches humility - even in victory, one should praise Allah and seek forgiveness.",
    },
    {
      number: 111,
      name: "Al-Masad",
      arabic: "الْمَسَد",
      translation: "The Palm Fiber",
      verses: [
        {
          arabic: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ",
          transliteration: "Tabbat yadā abī Lahabin wa tabb",
          translation: "May the hands of Abu Lahab be ruined, and ruined is he.",
        },
        {
          arabic: "مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ",
          transliteration: "Mā aghnā 'anhu māluhu wa mā kasab",
          translation: "His wealth will not avail him or that which he gained.",
        },
        {
          arabic: "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ",
          transliteration: "Sa-yaṣlā nāran dhāta lahab",
          translation: "He will [enter to] burn in a Fire of [blazing] flame",
        },
        {
          arabic: "وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ",
          transliteration: "Wa-mra'atuhu ḥammālata-l-ḥaṭab",
          translation: "And his wife [as well] - the carrier of firewood.",
        },
        {
          arabic: "فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ",
          transliteration: "Fī jīdihā ḥablun min masad",
          translation: "Around her neck is a rope of [twisted] fiber.",
        },
      ],
      tafsir: "This surah condemns Abu Lahab and his wife, who were staunch enemies of Islam. It serves as a warning that worldly wealth and status cannot save one from Allah's punishment if they reject the truth.",
    },
    {
      number: 112,
      name: "Al-Ikhlas",
      arabic: "الْإِخْلَاص",
      translation: "The Sincerity",
      verses: [
        {
          arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
          transliteration: "Qul huwa-llāhu aḥad",
          translation: "Say, 'He is Allah, [who is] One,",
        },
        {
          arabic: "اللَّهُ الصَّمَدُ",
          transliteration: "Allāhu-ṣ-ṣamad",
          translation: "Allah, the Eternal Refuge.",
        },
        {
          arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
          transliteration: "Lam yalid wa lam yūlad",
          translation: "He neither begets nor is born,",
        },
        {
          arabic: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
          transliteration: "Wa lam yakun lahu kufuwan aḥad",
          translation: "Nor is there to Him any equivalent.'",
        },
      ],
      tafsir: "This surah is one of the most important in the Quran, describing Allah's absolute oneness and uniqueness. It negates any partners, children, or equals to Allah, establishing pure monotheism (Tawheed).",
    },
    {
      number: 113,
      name: "Al-Falaq",
      arabic: "الْفَلَق",
      translation: "The Daybreak",
      verses: [
        {
          arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
          transliteration: "Qul a'ūdhu bi-rabbi-l-falaq",
          translation: "Say, 'I seek refuge in the Lord of daybreak",
        },
        {
          arabic: "مِن شَرِّ مَا خَلَقَ",
          transliteration: "Min sharri mā khalaq",
          translation: "From the evil of that which He created",
        },
        {
          arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
          transliteration: "Wa min sharri ghāsiqin idhā waqab",
          translation: "And from the evil of darkness when it settles",
        },
        {
          arabic: "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
          transliteration: "Wa min sharri-n-naffāthāti fī-l-'uqad",
          translation: "And from the evil of the blowers in knots",
        },
        {
          arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
          transliteration: "Wa min sharri ḥāsidin idhā ḥasad",
          translation: "And from the evil of an envier when he envies.'",
        },
      ],
      tafsir: "This surah, along with An-Nas, is known as 'Al-Mu'awwidhatayn' (the two protectors). It seeks Allah's protection from various forms of evil - darkness, magic, and envy.",
    },
    {
      number: 114,
      name: "An-Nas",
      arabic: "النَّاس",
      translation: "Mankind",
      verses: [
        {
          arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
          transliteration: "Qul a'ūdhu bi-rabbi-n-nās",
          translation: "Say, 'I seek refuge in the Lord of mankind,",
        },
        {
          arabic: "مَلِكِ النَّاسِ",
          transliteration: "Maliki-n-nās",
          translation: "The Sovereign of mankind,",
        },
        {
          arabic: "إِلَٰهِ النَّاسِ",
          transliteration: "Ilāhi-n-nās",
          translation: "The God of mankind,",
        },
        {
          arabic: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
          transliteration: "Min sharri-l-waswāsi-l-khannās",
          translation: "From the evil of the retreating whisperer",
        },
        {
          arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
          transliteration: "Alladhī yuwaswisu fī ṣudūri-n-nās",
          translation: "Who whispers [evil] into the breasts of mankind",
        },
        {
          arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
          transliteration: "Mina-l-jinnati wa-n-nās",
          translation: "From among the jinn and mankind.'",
        },
      ],
      tafsir: "This final surah of the Quran seeks protection from Satan's whispers and evil suggestions that come from both jinn and humans. It emphasizes Allah's complete authority over all creation.",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <article className="prose prose-lg max-w-none">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
              <BookOpen className="text-gray-600 dark:text-gray-400" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Last 10 Surahs with Translation and Tafsir
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            These are the final ten surahs of the Quran, often memorized and recited in daily prayers. Understanding their meanings deepens our connection with Allah.
          </p>
        </header>

        {/* Content */}
        <div className="space-y-16">
          {lastTenSurahs.map((surah, index) => (
            <section key={surah.number} className="border-b border-gray-200 dark:border-gray-700 pb-12 last:border-0">
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {surah.number}. {surah.name} ({surah.arabic})
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 italic">
                  {surah.translation}
                </p>
              </div>

              <div className="space-y-6">
                {surah.verses.map((verse, verseIndex) => (
                  <div
                    key={verseIndex}
                    className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6"
                  >
                    <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                      {verse.arabic}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                      {verse.transliteration}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                      {verse.translation}
                    </p>
                  </div>
                ))}

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                    Tafsir (Explanation)
                  </h3>
                  <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                    {surah.tafsir}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Conclusion */}
        <section className="mt-16 bg-teal-50 dark:bg-teal-900/20 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Benefits of Reciting These Surahs
          </h2>
          <ul className="space-y-3 text-lg text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></span>
              <span>Protection from evil and harm (especially Al-Falaq and An-Nas)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></span>
              <span>Strengthening faith through understanding Allah's oneness (Al-Ikhlas)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></span>
              <span>Easy to memorize and recite in daily prayers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-2 h-2 bg-teal-500 rounded-full mt-3 flex-shrink-0"></span>
              <span>Reminder of Allah's power, mercy, and guidance</span>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}

export default SalahLesson7;

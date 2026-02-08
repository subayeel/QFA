/* eslint-disable react/no-unescaped-entities */
import { Heart } from "lucide-react";

function SalahLesson8() {
  const azkarAfterSalah = [
    {
      id: 1,
      arabic: "أَسْتَغْفِرُ اللَّهَ",
      transliteration: "Astaghfiru-llāh",
      translation: "I seek forgiveness from Allah",
      times: 3,
      reference: "Muslim: 591",
      meaning: "Seeking forgiveness purifies the heart and removes sins.",
    },
    {
      id: 2,
      arabic: "اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، تَبَارَكْتَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ",
      transliteration: "Allāhumma anta-s-salām, wa minka-s-salām, tabārakta yā dhā-l-jalāli wa-l-ikrām",
      translation: "O Allah, You are Peace and from You comes peace. Blessed are You, O Owner of Majesty and Honor.",
      times: 1,
      reference: "Muslim: 592",
      meaning: "Acknowledging Allah as the source of all peace and blessings.",
    },
    {
      id: 3,
      arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
      transliteration: "Lā ilāha illā-llāhu waḥdahu lā sharīka lahu, lahu-l-mulku wa lahu-l-ḥamdu wa huwa 'alā kulli shay'in qadīr",
      translation: "There is no deity except Allah, alone without partner. To Him belongs sovereignty and to Him belongs [all] praise, and He is over all things competent.",
      times: 1,
      reference: "Bukhari: 844, Muslim: 594",
      meaning: "Affirming Allah's absolute oneness and power.",
    },
    {
      id: 4,
      arabic: "اللَّهُمَّ لَا مَانِعَ لِمَا أَعْطَيْتَ وَلَا مُعْطِيَ لِمَا مَنَعْتَ وَلَا يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
      transliteration: "Allāhumma lā māni'a li-mā a'ṭayta wa lā mu'ṭiya li-mā mana'ta wa lā yanfa'u dhā-l-jaddi minka-l-jadd",
      translation: "O Allah, there is none who can withhold what You give, and none who can give what You withhold, and the fortune of a fortunate one cannot avail against You.",
      times: 1,
      reference: "Bukhari: 844, Muslim: 593",
      meaning: "Recognizing that all power and provision come from Allah alone.",
    },
    {
      id: 5,
      arabic: "سُبْحَانَ اللَّهِ",
      transliteration: "Subḥānallāh",
      translation: "Glory be to Allah",
      times: 33,
      reference: "Muslim: 596",
      meaning: "Praising Allah's perfection and declaring Him free from any imperfection.",
    },
    {
      id: 6,
      arabic: "الْحَمْدُ لِلَّهِ",
      transliteration: "Al-ḥamdu lillāh",
      translation: "Praise be to Allah",
      times: 33,
      reference: "Muslim: 596",
      meaning: "Expressing gratitude to Allah for all His blessings.",
    },
    {
      id: 7,
      arabic: "اللَّهُ أَكْبَرُ",
      transliteration: "Allāhu akbar",
      translation: "Allah is the Greatest",
      times: 34,
      reference: "Muslim: 596",
      meaning: "Acknowledging Allah's absolute greatness above all creation.",
    },
    {
      id: 8,
      arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ، لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَلَا نَعْبُدُ إِلَّا إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لَا إِلَٰهَ إِلَّا اللَّهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الْكَافِرُونَ",
      transliteration: "Lā ilāha illā-llāhu waḥdahu lā sharīka lahu, lahu-l-mulku wa lahu-l-ḥamdu wa huwa 'alā kulli shay'in qadīr, lā ḥawla wa lā quwwata illā bi-llāh, lā ilāha illā-llāhu wa lā na'budu illā iyyāhu, lahu-n-ni'matu wa lahu-l-faḍlu wa lahu-th-thanā'u-l-ḥasan, lā ilāha illā-llāhu mukhliṣīna lahu-d-dīna wa law kariha-l-kāfirūn",
      translation: "There is no deity except Allah, alone without partner. To Him belongs sovereignty and to Him belongs [all] praise, and He is over all things competent. There is no might nor power except with Allah. There is no deity except Allah, and we do not worship except Him. To Him belongs the favor and to Him belongs excellence and to Him belongs the best praise. There is no deity except Allah, sincere to Him in religion even if the disbelievers dislike it.",
      times: 1,
      reference: "Muslim: 594",
      meaning: "A comprehensive declaration of faith and devotion to Allah alone.",
    },
    {
      id: 9,
      arabic: "اللَّهُمَّ أَعِنِّي عَلَىٰ ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ",
      transliteration: "Allāhumma a'innī 'alā dhikrika wa shukrika wa ḥusni 'ibādatik",
      translation: "O Allah, help me to remember You, to thank You, and to worship You in the best way.",
      times: 1,
      reference: "Abu Dawud: 1522, Nasai: 1303",
      meaning: "Seeking Allah's help to maintain remembrance and gratitude.",
    },
    {
      id: 10,
      arabic: "سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَاللَّهُ أَكْبَرُ",
      transliteration: "Subḥānallāhi wa-l-ḥamdu lillāhi wa-llāhu akbar",
      translation: "Glory be to Allah, and praise be to Allah, and Allah is the Greatest.",
      times: 33,
      reference: "Muslim: 597",
      meaning: "Combining the three remembrances in one phrase.",
    },
    {
      id: 11,
      arabic: "لَا إِلَٰهَ إِلَّا اللَّهُ",
      transliteration: "Lā ilāha illā-llāh",
      translation: "There is no deity except Allah",
      times: 1,
      reference: "Muslim: 594",
      meaning: "The fundamental declaration of faith (Shahadah).",
    },
    {
      id: 12,
      arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلًا مُتَقَبَّلًا",
      transliteration: "Allāhumma innī as'aluka 'ilman nāfi'an wa rizqan ṭayyiban wa 'amalan mutaqabbalā",
      translation: "O Allah, I ask You for beneficial knowledge, good provision, and accepted deeds.",
      times: 1,
      reference: "Ibn Majah: 925",
      meaning: "Seeking Allah's blessings for knowledge, sustenance, and good deeds.",
    },
    {
      id: 13,
      arabic: "رَبِّ قِنِي عَذَابَكَ يَوْمَ تَبْعَثُ عِبَادَكَ",
      transliteration: "Rabbi qinī 'adhābaka yawma tab'athu 'ibādak",
      translation: "My Lord, protect me from Your punishment on the day You resurrect Your servants.",
      times: 1,
      reference: "Tirmidhi: 3424",
      meaning: "Seeking protection from the punishment of the Day of Judgment.",
    },
    {
      id: 14,
      arabic: "اللَّهُمَّ أَجِرْنِي مِنَ النَّارِ",
      transliteration: "Allāhumma ajirnī mina-n-nār",
      translation: "O Allah, protect me from the Fire.",
      times: 7,
      reference: "Abu Dawud: 5079",
      meaning: "Seeking protection from Hellfire, especially after Fajr and Maghrib.",
    },
    {
      id: 15,
      arabic: "اللَّهُمَّ بَارِكْ لِي فِي مَوْتِي وَحَيَاتِي",
      transliteration: "Allāhumma bārik lī fī mawtī wa ḥayātī",
      translation: "O Allah, bless me in my death and my life.",
      times: 1,
      reference: "Muslim: 2720",
      meaning: "Seeking Allah's blessings in all aspects of life and death.",
    },
    {
      id: 16,
      arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ وَمِنْ عَذَابِ الْقَبْرِ وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ",
      transliteration: "Allāhumma innī a'ūdhu bika min 'adhābi jahannama wa min 'adhābi-l-qabri wa min fitnati-l-maḥyā wa-l-mamāti wa min sharri fitnati-l-masīḥi-d-dajjāl",
      translation: "O Allah, I seek refuge with You from the punishment of Hell, from the punishment of the grave, from the trials of life and death, and from the evil of the trial of the False Messiah (Antichrist).",
      times: 1,
      reference: "Muslim: 588",
      meaning: "Comprehensive protection from various forms of punishment and trials.",
    },
    {
      id: 17,
      arabic: "سُبْحَانَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُونَ، وَسَلَامٌ عَلَى الْمُرْسَلِينَ، وَالْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      transliteration: "Subḥāna rabbika rabbi-l-'izzati 'ammā yaṣifūn, wa salāmun 'alā-l-mursalīn, wa-l-ḥamdu lillāhi rabbi-l-'ālamīn",
      translation: "Exalted is your Lord, the Lord of might, above what they describe. And peace upon the messengers. And praise to Allah, Lord of the worlds.",
      times: 1,
      reference: "Quran 37:180-182",
      meaning: "Praising Allah's majesty and sending peace upon the messengers.",
    },
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <article className="prose prose-lg max-w-none">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
              <Heart className="text-gray-600 dark:text-gray-400" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              17 Azkar After Salah
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            These remembrances (Azkar) are recommended to be recited after completing the obligatory prayers. They strengthen our connection with Allah and bring numerous spiritual benefits.
          </p>
        </header>

        {/* Content */}
        <div className="space-y-8">
          {azkarAfterSalah.map((dhikr) => (
            <section
              key={dhikr.id}
              className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 md:p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  Dhikr #{dhikr.id}
                </h2>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-1 rounded-full">
                  {dhikr.times} {dhikr.times === 1 ? "time" : "times"}
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
                  <p className="text-right text-2xl md:text-3xl text-gray-900 dark:text-gray-100 mb-4 font-arabic leading-relaxed">
                    {dhikr.arabic}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-3 italic text-lg">
                    {dhikr.transliteration}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {dhikr.translation}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Meaning & Significance
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {dhikr.meaning}
                    </p>
                  </div>
                  <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Reference
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {dhikr.reference}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* Benefits Section */}
        <section className="mt-16 bg-teal-50 dark:bg-teal-900/20 rounded-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Benefits of Reciting Azkar After Salah
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                Spiritual Benefits
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Increases remembrance of Allah throughout the day</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Purifies the heart and removes sins</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Strengthens faith and connection with Allah</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Brings peace and tranquility to the heart</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
                Practical Benefits
              </h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Protection from evil and harm</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Seeking forgiveness for mistakes in prayer</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Completing the prayer with proper etiquette</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Following the Sunnah of Prophet Muhammad (PBUH)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Note */}
        <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 border-l-4 border-amber-400">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong className="text-gray-900 dark:text-gray-100">Note:</strong> While all these Azkar are recommended, you don't need to recite all of them after every prayer. Start with the essential ones (like Tasbeeh-e-Fathimi - #5, #6, #7) and gradually incorporate others. Consistency is more important than quantity.
          </p>
        </div>
      </article>
    </main>
  );
}

export default SalahLesson8;

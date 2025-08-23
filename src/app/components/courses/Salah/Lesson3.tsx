import { Book } from "lucide-react";

function SalahLesson3() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <article className="prose prose-lg max-w-none">
        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
              <Book className="text-gray-600 dark:text-gray-400" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Prayer Steps - Part 2
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Continue with the remaining steps of the prayer from standing up
            from Ruku to concluding the prayer.
          </p>
        </header>

        {/* Content */}
        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              5. Standing from Ruku (I'tidal)
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                Rise from bowing while saying 'Sami' Allāhu liman ḥamidah'. Once
                fully upright, recite one of the following praises:
              </p>

              <div className="space-y-8">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Shafi'i School:
                  </h3>
                  <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                    رَبَّنَا وَلَكَ الْحَمْدُ، حَمْدًا كَثِيرًا طَيِّبًا
                    مُبَارَكًا فِيهِ
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                    Rabbanā wa laka-l-ḥamd, ḥamdan kathīran ṭayyiban mubārakan
                    fīh.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    "Our Lord, all praise is yours, (a praise that is) abundant,
                    good and blessed."
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    Reference: Bukhari: 791
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Hanafi School:
                  </h3>
                  <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                    رَبَّنَا وَلَكَ الْحَمْدُ
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                    Rabbanā wa laka-l-ḥamd.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    "Our Lord, and to You is praise."
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    Reference: Bukhari: 803
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              6. Sujud (Prostration)
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                Say 'Allāhu Akbar' and prostrate with your forehead, nose,
                palms, knees, and toes touching the ground. Recite:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 my-8">
                <p className="text-right text-3xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                  سُبْحَانَ رَبِّيَ الْأَعْلَى وَبِحَمْدِهِ
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                  Subḥāna rabbī l-aʿlā wa biḥamdihi
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  "Glory be to my Lord, the Most High, and all praise be to
                  Him."
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Abu Dawood: 870
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              7. Jalsa (Sitting Between Prostrations)
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                Sit up from prostration and make the following supplication:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 my-8">
                <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                  رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي
                  وَارْزُقْنِي وَاهْدِنِي وَعَافِنِي
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                  Rabbi-ghfir lī, wa-rḥamnī, wa-jburnī, wa-rfaʿnī, wa-rzuqnī,
                  wa-hdinī, wa-ʿāfinī.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  "O Lord, forgive me, and have mercy on me; and support me; and
                  elevate me; and provide for me; and guide me; and protect me."
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Ahmad: 3514, 1561
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              8. Tashahhud
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                After the second prostration of the second rak'ah (and the final
                rak'ah), sit for the Tashahhud and recite:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 my-8">
                <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                  التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ
                  لِلَّهِ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ
                  اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ
                  اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ
                  وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                  At-taḥiyyātu-l-mubārakātu-ṣ-ṣalawātu-ṭ-ṭayyibātu li-llāh.
                  As-salāmu ʿalayka ayyuhā-n-nabiyyu wa raḥmatu-llāhi wa
                  barakātuh. As-salāmu ʿalaynā wa ʿalā ʿibādi-llāhi ṣ-ṣāliḥīn.
                  Ashhadu an lā ilāha illā-llāh, wa ashhadu anna Muḥammadan
                  rasūlu-llāh.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  "All compliments, blessed words, prayers, and good things are
                  for Allah. Peace be upon you, O Prophet, and the mercy of
                  Allah and His blessings. Peace be upon us and upon the
                  righteous servants of Allah. I bear witness that there is no
                  god but Allah, and I bear witness that Muhammad is the
                  messenger of Allah."
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Muslim: 403
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              9. Salawat (Darood)
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                After the Tashahhud in the final sitting, send blessings upon
                the Prophet (ﷺ):
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 my-8">
                <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                  اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا
                  صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ،
                  وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا
                  بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، فِي
                  الْعَالَمِينَ، إِنَّكَ حَمِيدٌ مَجِيدٌ
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                  Allāhumma ṣalli ʿalā Muḥammadin wa ʿalā āli Muḥammad, kamā
                  ṣallayta ʿalā Ibrāhīma wa ʿalā āli Ibrāhīm. Wa bārik ʿalā
                  Muḥammadin wa ʿalā āli Muḥammad, kamā bārakta ʿalā Ibrāhīma wa
                  ʿalā āli Ibrāhīm, fī-l-ʿālamīn, innaka ḥamīdun majīd.
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  "O Allah, send prayers upon Muhammad and upon the family of
                  Muhammad, as You sent prayers upon Ibrahim and upon the family
                  of Ibrahim. And bless Muhammad and the family of Muhammad, as
                  You blessed Ibrahim and the family of Ibrahim, in the worlds.
                  Indeed, You are Praiseworthy and Glorious."
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Muslim: 406, At-Tirmidhi: 3220
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              10. Supplication Before Taslim
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                Before concluding the prayer, it is recommended to seek refuge
                and make personal supplications. Here are some of the most
                powerful duas:
              </p>
              <div className="space-y-6">
                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                    اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ،
                    وَمِنْ عَذَابِ جَهَنَّمَ، وَمِنْ فِتْنَةِ الْمَحْيَا
                    وَالْمَمَاتِ، وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                    Allāhumma innī aʿūdhu bika min ʿadhābi-l-qabr, wa min
                    ʿadhābi jahannam, wa min fitnati-l-maḥyā wa-l-mamāt, wa min
                    sharri fitnati-l-masīḥi-d-dajjāl.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    "O Allah, I seek refuge with You from the torment of the
                    grave, and from the torment of Hell-fire, and from the
                    trials of life and death, and from the evil of the trial of
                    the Antichrist."
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    Reference: Bukhari: 1377
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                  <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                    اللَّهُمَّ إِنِّي ظَلَمْتُ نَفْسِي ظُلْمًا كَثِيرًا، وَلَا
                    يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ، فَاغْفِرْ لِي مَغْفِرَةً
                    مِنْ عِنْدِكَ، وَارْحَمْنِي، إِنَّكَ أَنْتَ الْغَفُورُ
                    الرَّحِيمُ
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                    Allāhumma innī ẓalamtu nafsī ẓulman kathīran, wa lā
                    yaghfiru-dh-dhunūba illā ant, fa-ghfir lī maghfiratan min
                    ʿindik, wa-rḥamnī, innaka anta-l-ghafūru-r-raḥīm.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-lg">
                    "O Allah, I have done great injustice to myself and none
                    except You forgives sins, so bestow on me a forgiveness from
                    You, and have mercy on me. For verily, You are the Forgiving
                    One, the Most Merciful."
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    Reference: Bukhari: 834
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              11. Taslim (Concluding Prayer)
            </h2>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                End the prayer by turning your head first to the right, then to
                the left, saying each time:
              </p>
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6 my-8">
                <p className="text-right text-3xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                  السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                  As-salāmu 'alaykum wa raḥmatu llāh
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-lg">
                  "Peace be upon you and Allah's mercy"
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Sunan Abu Dawud 996
                </p>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}

export default SalahLesson3;

/* eslint-disable react/no-unescaped-entities */
import {Shield} from "lucide-react";

function TawheedLesson1() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <article className="prose prose-lg max-w-none">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
              <Shield className="text-gray-600 dark:text-gray-400" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Understanding Tawheed: The Oneness of Allah
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Tawheed is the foundation of Islam - the belief in the absolute oneness and uniqueness of Allah.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              What is Tawheed?
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              Tawheed comes from the Arabic root word "wahhada" meaning "to make one" or "to unify." In Islamic terminology, Tawheed means:
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 italic mb-4">
                "The belief in the oneness and uniqueness of Allah in His essence, attributes, actions, and right to be worshiped."
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                This is the most fundamental principle of Islam - everything else in the religion is built upon this foundation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              The Testimony of Faith (Shahadah)
            </h2>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 mb-6">
              <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-3 font-arabic leading-relaxed">
                لَا إِلَٰهَ إِلَّا اللَّهُ
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-2 italic text-lg">
                Lā ilāha illā-llāh
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                "There is no deity except Allah"
              </p>
            </div>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              This simple statement contains the essence of Tawheed. It negates all false gods and affirms that only Allah deserves worship.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Three Categories of Tawheed
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  1. Tawheed ar-Rububiyyah (Oneness of Lordship)
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                  Believing that Allah alone is the Creator, Sustainer, and Controller of all that exists. This includes:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>• Creation - Allah alone created everything</li>
                  <li>• Sustenance - Allah alone provides for all creation</li>
                  <li>• Control - Allah alone controls all affairs</li>
                  <li>• Life and Death - Only Allah gives life and takes it</li>
                </ul>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Quran 7:54, 10:31
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  2. Tawheed al-Asma' wa-s-Sifat (Oneness of Names and Attributes)
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                  Believing in Allah's unique names and attributes without:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>• <strong>Tamtheel:</strong> Comparing Allah to His creation</li>
                  <li>• <strong>Tashbeeh:</strong> Resembling Allah to anything</li>
                  <li>• <strong>Ta'teel:</strong> Denying or negating Allah's attributes</li>
                  <li>• <strong>Tahreef:</strong> Distorting the meaning of Allah's names</li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                  We affirm Allah's attributes as He described them, without asking "how" and without comparing them to creation.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Quran 42:11, 112:4
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  3. Tawheed al-Uluhiyyah (Oneness of Worship)
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                  Directing all acts of worship exclusively to Allah. This is the most important category and the main purpose of creation:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>• Prayer (Salah) - Only for Allah</li>
                  <li>• Supplication (Dua) - Only to Allah</li>
                  <li>• Sacrifice - Only for Allah</li>
                  <li>• Vows - Only to Allah</li>
                  <li>• Seeking help - Only from Allah</li>
                  <li>• Fear and hope - Only in Allah</li>
                </ul>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  Reference: Quran 1:5, 51:56
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Why Tawheed is Essential
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Foundation of Faith
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Without Tawheed, no act of worship is accepted. It is the prerequisite for all good deeds.
                </p>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Purpose of Creation
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  "And I did not create the jinn and mankind except to worship Me." (Quran 51:56)
                </p>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Message of All Prophets
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Every prophet called their people to Tawheed - worship Allah alone.
                </p>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Entry to Paradise
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Tawheed is the key to entering Paradise and avoiding Hellfire.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Common Violations of Tawheed
            </h2>
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-6">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Shirk (Associating partners with Allah):</strong> The greatest sin, which Allah will never forgive if one dies upon it</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Worshiping others:</strong> Praying to, sacrificing to, or seeking help from other than Allah</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Denying Allah's attributes:</strong> Rejecting or distorting what Allah has described about Himself</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Comparing Allah to creation:</strong> Saying Allah is like this or that from creation</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6 border-l-4 border-purple-400">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Conclusion
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Tawheed is not just a theological concept - it is the practical foundation of a Muslim's life. Understanding and implementing Tawheed correctly ensures that our worship is accepted, our faith is sound, and our relationship with Allah is proper. It is the essence of Islam and the message of all prophets.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

export default TawheedLesson1;

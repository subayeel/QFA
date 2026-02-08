/* eslint-disable react/no-unescaped-entities */
import {BookOpen} from "lucide-react";

function ArabicLesson1() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <article className="prose prose-lg max-w-none">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
              <BookOpen className="text-gray-600 dark:text-gray-400" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Introduction to Arabic Language
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Understanding Arabic is essential for reading and understanding the Quran in its original language.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Why Learn Arabic?
            </h2>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 mb-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                The Quran was revealed in Arabic, and while translations are valuable, understanding the original language provides deeper insight into its meanings.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 italic">
                "Indeed, We have sent it down as an Arabic Quran that you might understand." (Quran 12:2)
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              The Arabic Alphabet
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              Arabic has 28 letters, written from right to left. Each letter can have different forms depending on its position in a word.
            </p>
            <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                Basic Letters
              </h3>
              <p className="text-right text-3xl text-gray-900 dark:text-gray-100 mb-4 font-arabic">
                ا ب ت ث ج ح خ د ذ ر ز س ش ص ض ط ظ ع غ ف ق ك ل م ن ه و ي
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                These are the 28 letters of the Arabic alphabet. Each letter represents a sound, and learning these is the first step to reading Arabic.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Reading Arabic Script
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Direction
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Arabic is read from right to left, opposite of English. This takes practice but becomes natural with time.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Vowel Marks (Harakat)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  Arabic uses diacritical marks to indicate vowels:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>• <strong>Fatha (َ):</strong> Short "a" sound</li>
                  <li>• <strong>Kasra (ِ):</strong> Short "i" sound</li>
                  <li>• <strong>Damma (ُ):</strong> Short "u" sound</li>
                  <li>• <strong>Sukoon (ْ):</strong> No vowel (consonant)</li>
                  <li>• <strong>Shadda (ّ):</strong> Doubled consonant</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Letter Forms
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Most Arabic letters change form depending on whether they appear at the beginning, middle, or end of a word. This is important for reading and writing.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Basic Vocabulary
            </h2>
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                Start with common words used in the Quran:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-2 font-arabic">اللَّه</p>
                  <p className="text-gray-700 dark:text-gray-300">Allah (God)</p>
                </div>
                <div>
                  <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-2 font-arabic">رَبّ</p>
                  <p className="text-gray-700 dark:text-gray-300">Rabb (Lord)</p>
                </div>
                <div>
                  <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-2 font-arabic">رَحْمَة</p>
                  <p className="text-gray-700 dark:text-gray-300">Rahmah (Mercy)</p>
                </div>
                <div>
                  <p className="text-right text-2xl text-gray-900 dark:text-gray-100 mb-2 font-arabic">صَلَاة</p>
                  <p className="text-gray-700 dark:text-gray-300">Salah (Prayer)</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Learning Tips
            </h2>
            <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Practice daily, even if just for 15 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Start with the alphabet and basic letter recognition</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Learn common Quranic words and phrases</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Practice reading with vowel marks first</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Listen to Quranic recitation while following along with the text</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>Be patient - learning a new language takes time</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border-l-4 border-green-400">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Conclusion
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Learning Arabic opens doors to understanding the Quran more deeply. While translations are helpful, reading the Quran in its original language allows you to appreciate its linguistic beauty and understand nuances that may be lost in translation. Start with the basics and be consistent in your practice.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

export default ArabicLesson1;

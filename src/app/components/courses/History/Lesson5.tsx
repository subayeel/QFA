/* eslint-disable react/no-unescaped-entities */
import {Archive} from "lucide-react";

function HistoryLesson5() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <article className="prose prose-lg max-w-none">
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-800">
              <Archive className="text-gray-600 dark:text-gray-400" size={24} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              Compilation of Parchments by Khulafah
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            After the Prophet's (PBUH) death, the Quran was compiled into a single book during the caliphate of Abu Bakr and later standardized during Uthman's caliphate.
          </p>
        </header>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              The Situation After the Prophet's Death
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              During the Prophet's (PBUH) lifetime, the Quran existed in two forms:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Written Form
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Verses were written on various materials: parchment, bones, stones, palm leaves, and pieces of leather. These were kept with different companions.
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Memorized Form
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Hundreds of companions had memorized the entire Quran. The Prophet (PBUH) himself had it memorized perfectly.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              First Compilation: Abu Bakr's Caliphate (632-634 CE)
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  The Trigger: Battle of Yamama
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  During the Battle of Yamama (633 CE), many memorizers (huffaz) of the Quran were martyred. Umar ibn al-Khattab became concerned that if more memorizers died, parts of the Quran might be lost. He approached Caliph Abu Bakr with the idea of compiling the Quran into a single book.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Abu Bakr's Initial Hesitation
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Initially, Abu Bakr hesitated because the Prophet (PBUH) had not done this during his lifetime. However, after consideration, he agreed that it was necessary to preserve the Quran.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  The Compilation Process
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                  Zaid ibn Thabit was chosen for this task because:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>• He was one of the scribes who wrote revelations during the Prophet's lifetime</li>
                  <li>• He had memorized the entire Quran</li>
                  <li>• He was present during the final recitation (Ardah Akheerah) when the Prophet reviewed the entire Quran with Jibril</li>
                  <li>• He was known for his honesty, intelligence, and trustworthiness</li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                  Zaid collected all written fragments and cross-referenced them with memorizers. He only accepted verses that were:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4 mt-2">
                  <li>• Written in the presence of the Prophet (PBUH)</li>
                  <li>• Memorized by at least two reliable companions</li>
                  <li>• Verified through multiple sources</li>
                </ul>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  The Result
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  A complete manuscript (mushaf) was compiled and kept with Abu Bakr. After his death, it was passed to Umar, and then to Umar's daughter Hafsa (who was also a wife of the Prophet).
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Standardization: Uthman's Caliphate (644-656 CE)
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  The Need for Standardization
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                  As Islam spread to new regions, different dialects and ways of reciting emerged. Hudhaifa ibn al-Yaman reported to Caliph Uthman that he heard people reciting differently in different regions, which could lead to disputes.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Uthman recognized the need for a single, standardized version to prevent division.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  The Standardization Process
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                  Uthman formed a committee of four:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4 mb-4">
                  <li>• Zaid ibn Thabit (from Madinah)</li>
                  <li>• Abdullah ibn Zubair</li>
                  <li>• Sa'id ibn al-As</li>
                  <li>• Abdur-Rahman ibn Harith</li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  They used Hafsa's copy as the primary source and created multiple identical copies. The Quraishi dialect (the dialect of the Prophet) was chosen as the standard.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Distribution and Preservation
                </h3>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                  Uthman sent copies to major Islamic centers:
                </p>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                  <li>• Makkah</li>
                  <li>• Kufa</li>
                  <li>• Basra</li>
                  <li>• Damascus</li>
                  <li>• One copy remained in Madinah</li>
                </ul>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mt-4">
                  He ordered that all other copies be burned to prevent confusion, ensuring only the standardized version remained.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Verification and Accuracy
            </h2>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-4">
                The compilation process was meticulous and involved:
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Multiple Verification:</strong> Every verse was verified through written sources AND memorization</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Witness Requirement:</strong> At least two witnesses were required for each verse</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Direct Source:</strong> Only verses written in the Prophet's presence were accepted</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span><strong>Consensus:</strong> The companions who had memorized the Quran verified the compilation</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Historical Evidence
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
              The accuracy of this compilation is confirmed by:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Early Manuscripts
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Copies from the 7th and 8th centuries match modern Quranic text exactly, proving the accuracy of early compilation.
                </p>
              </div>
              <div className="bg-teal-50 dark:bg-teal-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                  Universal Agreement
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  All Muslims worldwide use the same text, regardless of sect or school of thought - a unique achievement among religious texts.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Significance
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              The compilation and standardization by the Rightly Guided Caliphs ensured the Quran's perfect preservation. Their careful, methodical approach, combined with the multiple layers of verification (written and memorized), guarantees that the Quran we have today is exactly as it was revealed to Prophet Muhammad (PBUH).
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}

export default HistoryLesson5;

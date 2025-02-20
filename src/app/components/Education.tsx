"use client"

import { GraduationCap, Calendar, Award } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"
import { motion } from "framer-motion"

export default function Education() {
  const education = [
    {
      degree: "Bacharelado em Sistemas e Mídias Digitais ",
      institution: "Universidade Federal do Ceará",
      period: "2023 – presente",
      achievements: [

      ],
    },
    {
      degree: "Ensino Médio",
      institution: "Farias Brito",
      period: "2018 – 2020",
      achievements: [
        "Medalha de Ouro na Olimpíada Brasileira de Informática - 2018",
        "Medalha de Bronze na Olimpíada Brasileira de Matemática - 2019",
        "Medalha de Bronze na Olimpíada Brasileira de Informática - 2020"
      ],
    },
  ]

  return (
    <section
      id="education"
      className="py-20 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-900  transition-colors duration-300 overflow-hidden relative"
    >

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Educação" />
        <div className="max-w-3xl mx-auto grid gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-teal-200 dark:bg-teal-700 rounded-br-full z-0 opacity-50"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  {edu.degree}
                </h3>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{edu.institution}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.period}
                </p>
                {edu.achievements.length > 0 ? (
                  <>
                    <h4 className="text-lg font-medium mb-2 dark:text-gray-200 flex items-center">
                      <Award className="w-5 h-5 mr-2" />
                      Premiações:
                    </h4>
                    <ul className="list-disc list-inside space-y-2">
                      {edu.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300 flex">
                          <Award className="w-4 h-4 mr-2" />{achievement}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : ""}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


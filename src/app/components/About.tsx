"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Zap } from "lucide-react"

export default function About() {
  const skills = [
    { icon: <Code className="w-8 h-8 text-blue-500" />, title: "Frontend", description: "React, Next.js, Shadcn/ui, tailwindCSS" },
    { icon: <Server className="w-8 h-8 text-green-500" />, title: "Backend", description: "Node.js, Express, Fastify" },
    { icon: <Database className="w-8 h-8 text-purple-500" />, title: "Banco de Dados", description: "MySql, Supabase" },
    { icon: <Zap className="w-8 h-8 text-yellow-500" />, title: "Performace", description: "Otimização, AWS" },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-cyan-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Sobre Mim
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0 px-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Minha jornada começou com competições de programação, onde desenvolvi habilidades essenciais, como o domínio de estruturas de dados avançadas e técnicas de otimização de algoritmos, cruciais para resolver problemas complexos de forma eficiente.
            </p>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            Depois, iniciei na programação web, explorando diversas tecnologias. Isso me obrigou a entender o funcionamento da web, passando por diferentes tipos de tecnologias.
            Atualmente, foco no desenvolvimento de soluções digitais com Next.js, utilizando Shadcn/ui para criar interfaces rápidas, eficientes e de alta qualidade, além de direcionar meus estudos acadêmicos para a computação em nuvem.
            </p>

          </motion.div>
          <motion.div
            className="md:w-1/2 grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {skills.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                {skill.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2 dark:text-white">{skill.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{skill.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}


'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Globe, Shield, AlertCircle, Leaf } from 'lucide-react'

export default function ActionsSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='space-y-8 px-4 md:px-6 lg:px-12'
    >
      <motion.div
        initial={{ x: -30 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
        className='flex items-center'
      >
        <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
          <Globe size={60} color='#009EDB' />
        </motion.div>
        <h2 className='text-5xl font-extrabold text-[#009EDB] ml-4'>
          Recommendations for Action
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='text-lg mb-6'
      >
        The agenda offers 12 actionable recommendations to operationalize peace,
        from eliminating nuclear weapons to reforming governance. It urges
        urgent steps like recommitting to a nuclear-free world, supported by the
        P5’s 2022 pledge (
        <a href='https://www.un.org/disarmament/wmd/nuclear/'>UN</a>), amidst a
        fraying non-proliferation regime.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='grid grid-cols-1 md:grid-cols-3 gap-6'
      >
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <AlertCircle size={50} color='#009EDB' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#009EDB] mt-4 mb-2'>
            Preventive Diplomacy
          </h3>
          <p className='text-lg'>
            Boosting diplomacy, as in the{' '}
            <a href='https://news.un.org/en/story/2022/07/1122782'>
              Black Sea Initiative
            </a>
            , prevents escalation. The UN mediated <b>50 initiatives in 2022</b>{' '}
            (<a href='https://www.un.org/sg/en/content/sg/annual-reports'>UN</a>
            ), leveraging its role as a diplomatic hub.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Leaf size={50} color='#009EDB' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#009EDB] mt-4 mb-2'>
            Climate and Security
          </h3>
          <p className='text-lg'>
            Linking climate and peace, the agenda proposes Peacebuilding Fund
            windows for climate finance in conflict zones, addressing risks like
            those in the Sahel (
            <a href='https://www.un.org/peacebuilding/fund'>UN</a>).
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Shield size={50} color='#009EDB' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#009EDB] mt-4 mb-2'>
            Reducing Weapon Costs
          </h3>
          <p className='text-lg'>
            Cutting military spending and banning inhumane weapons (
            <a href='https://www.un.org/disarmament/convarms/cluster-munitions/'>
              UN
            </a>
            ) protect civilians, redirecting funds to development and gender
            equality.
          </p>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-lg mb-6'
      >
        Other actions include accelerating the 2030 Agenda with social
        protections like universal basic incomes in post-conflict areas,
        transforming gender dynamics with <b>15% ODA for equality</b>, and
        strengthening peace operations with clear mandates and digital tools.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='grid grid-cols-1 md:grid-cols-3 gap-6'
      >
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <AlertCircle size={50} color='#009EDB' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#009EDB] mt-4 mb-2'>
            Peace Enforcement
          </h3>
          <p className='text-lg'>
            Authorizing multinational enforcement, as for African Union
            operations, ensures robust responses to transborder threats, backed
            by UN funding (
            <a href='https://www.un.org/peacebuilding/fund'>UN</a>).
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Leaf size={50} color='#009EDB' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#009EDB] mt-4 mb-2'>
            Emerging Domains
          </h3>
          <p className='text-lg'>
            Preventing tech weaponization—e.g., banning lethal autonomous
            weapons by 2026—safeguards humanity, with norms for cyberspace and
            outer space (
            <a href='https://www.un.org/disarmament/topics/outerspace/'>UN</a>).
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className='bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Shield size={50} color='#009EDB' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#009EDB] mt-4 mb-2'>
            Governance Reform
          </h3>
          <p className='text-lg'>
            Reforming the Security Council and revitalizing the General Assembly
            enhance representation and effectiveness (
            <a href='https://www.un.org/en/sc/repertoire'>UN</a>).
          </p>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-lg mb-6'
      >
        These actions demand political will and resources, integrating
        development, human rights, and security to address root causes and
        emerging threats like AI and biorisks, ensuring a holistic approach to
        peace.
      </motion.p>
    </motion.div>
  )
}

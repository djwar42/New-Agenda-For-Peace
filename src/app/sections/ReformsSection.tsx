'use client'
import React from 'react'
import { motion } from 'motion/react'
import { Network, Scale, Bird, ExternalLink } from 'lucide-react'

export default function ReformsSection() {
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
          <Network size={60} color='#009EDB' />
        </motion.div>
        <h2 className='text-5xl font-extrabold text-[#009EDB] ml-4'>
          Strengthening Governance
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='text-lg mb-6'
      >
        The agenda proposes reforms to modernize UN organs, notably the Security
        Council, for a more representative and effective collective security
        system (<a href='https://www.un.org/en/sc/repertoire'>UN</a>). It calls
        for urgent progress in intergovernmental negotiations to reflect today’s
        geopolitical realities.
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
            <Scale size={50} color='#009EDB' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#009EDB] mt-4 mb-2'>
            Security Council
          </h3>
          <p className='text-lg'>
            Democratizing procedures—e.g., burden-sharing, consulting host
            states—enhances consensus and legitimacy (
            <a href='https://www.un.org/en/sc/repertoire'>UN</a>).
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
            <Network size={50} color='#009EDB' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#009EDB] mt-4 mb-2'>
            Disarmament Updates
          </h3>
          <p className='text-lg'>
            Revitalizing the General Assembly and Conference on Disarmament
            addresses new threats like AI and outer space (
            <a href='https://www.un.org/disarmament/'>UN</a>).
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
            <Bird size={50} color='#009EDB' />
          </motion.div>
          <h3 className='text-2xl font-bold text-[#009EDB] mt-4 mb-2'>
            Peacebuilding
          </h3>
          <p className='text-lg'>
            The Peacebuilding Commission’s 2025 review will enhance its role in
            linking peace and development (
            <a href='https://www.un.org/peacebuilding/commission'>UN</a>).
          </p>
        </motion.div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-lg mb-6'
      >
        Sanctions must align with political processes, while the General
        Assembly’s universal membership tackles cross-cutting issues. The
        Peacebuilding Commission fosters South-South cooperation, aligning
        finance with national priorities.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='text-center mt-19'
      >
        <motion.div
          initial={{ x: -30 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.3 }}
          className='flex items-center justify-center'
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Bird size={60} color='#009EDB' />
          </motion.div>
          <h2 className='text-5xl font-extrabold text-[#009EDB] ml-4'>
            A Call to Action
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-xl max-w-4xl mx-auto mt-6 mb-8'
        >
          This agenda offers hope amid crisis. Despite 78 years of challenges,
          the UN endures as multilateralism’s core. Facing nuclear, climate, and
          tech threats, states must act now—trust, solidarity, and universality
          guiding us to a peaceful, just future. The Summit of the Future is our
          chance to reforge cooperative frameworks.
        </motion.p>
        <motion.a
          href='https://dppa.un.org/en/a-new-agenda-for-peace'
          target='_blank'
          rel='noopener noreferrer'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          className='inline-flex items-center bg-[#009EDB] text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-[#007BB5] transition-colors duration-300 mb-22'
        >
          <ExternalLink size={24} className='mr-2' />
          Read the Full UN Report
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

import React from 'react'
import { motion } from 'framer-motion'

import UserCard from './widgets/UserCard'
import AttendanceAndLeaveCard from './widgets/AttendanceAndLeaveCard'
import IDPProgressCard from './widgets/IDPProgressCard'
import TaskTabs from './widgets/TaskTabs'
import AppsGrid from './widgets/AppsGrid'
import OrganizationDocuments from './widgets/OrganizationDocuments'
import Favorites from './widgets/Favorites'
import Announcements from './widgets/Announcements'
import News from './widgets/News'
import AlbumsCarousel from './widgets/AlbumsCarousel'
import SocialMedia from './widgets/SocialMedia'

const fadeInUp: any = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
}

const Dashboard = () => {
  return (
    <main className="container mx-auto my-8 px-4 lg:px-8">
      <div className="space-y-6">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-0 lg:flex lg:justify-between lg:space-x-6 mb-4 lg:mb-6">
          <motion.div
            className="md:col-span-2 lg:w-[30%]"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <UserCard />
          </motion.div>

          <motion.div
            className="md:col-span-1 lg:w-[35%]"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={1}
          >
            <AttendanceAndLeaveCard />
          </motion.div>

          <motion.div
            className="md:col-span-1 lg:w-[35%]"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={2}
          >
            <IDPProgressCard />
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:flex lg:gap-6 lg:justify-between mb-4 lg:mb-6">
          <motion.div
            className="md:col-span-1 order-2 md:order-2 lg:order-none lg:w-[30%]"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <TaskTabs />
          </motion.div>

          <motion.div
            className="md:col-span-2 order-1 md:order-1 lg:order-none lg:w-[50%]"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={1}
          >
            <AppsGrid />
          </motion.div>

          <motion.div
            className="md:col-span-1 order-3 md:order-2 lg:order-none lg:w-[20%]"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={2}
          >
            <OrganizationDocuments />
          </motion.div>
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <Favorites />
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={1}>
            <Announcements />
          </motion.div>
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} custom={2}>
            <News />
          </motion.div>
        </div>

        {/* Fourth Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6">
          <motion.div
            className="max-lg:order-1"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <SocialMedia />
          </motion.div>
          <motion.div
            className="col-span-2"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={1}
          >
            <AlbumsCarousel />
          </motion.div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
